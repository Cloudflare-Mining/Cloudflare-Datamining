import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import ipRegex from 'ip-regex';
import jsBeautify from 'js-beautify';
import * as cheerio from 'cheerio';

const ip = ipRegex();
const isoDate = /(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
const niceDate = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+A-Za-z-]+/g;

import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

function propertiesToArray(obj){
	const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

	const addDelimiter = (delA, delB) => (delA ? `${delA}.${delB}` : delB);

	const paths = (obj = {}, head = '') => Object.entries(obj)
		.reduce((product, [key, value]) => {
			const fullPath = addDelimiter(head, key);
			if(isObject(value)){
				return [...product, ...paths(value, fullPath)];
			}
			return [...product, fullPath];
		}, []);

	return paths(obj);
}
const dir = path.resolve(`../data/cdn-cgi`);
try{
	await fs.rm(path.resolve(dir, './error'), {
		recursive: true,
	});
}catch{} // we tried
await fs.ensureDir(dir);

// get keys for request.cf
const cfJsonRes = await fetch(`https://jross.me/cf.json`);
const cfJson = await cfJsonRes.json();

const cfKeys = new Set(propertiesToArray(cfJson));
// add keys that are optional, and assume they're set. This creates more stable diffs
cfKeys.add('clientTcpRtt');
cfKeys.add('isEUCountry');
cfKeys.add('country');
cfKeys.add('city');
cfKeys.add('continent');
cfKeys.add('latitude');
cfKeys.add('longitude');
cfKeys.add('postalCode');
cfKeys.add('metroCode');
cfKeys.add('region');
cfKeys.add('regionCode');
cfKeys.add('timezone');
if(cfKeys.size >= 0){
	await fs.writeFile(path.resolve(dir, 'cf.json'), JSON.stringify([...cfKeys].sort(), null, '\t'));
}

// get keys for trace
const traceRes = await fetch(`https://jross.me/cdn-cgi/trace`);
const trace = await traceRes.text();
const data = trace.split('\n').map(line => line.split('='));
const traceKeys = data.map(arr => arr[0]).filter(key => key !== '').sort();
if(traceKeys.length >= 0){
	await fs.writeFile(path.resolve(dir, 'trace.json'), JSON.stringify([...traceKeys].sort(), null, '\t'));
}

const colos = {
	'mcp': 'lhr01',
	'mcp-canary-candidate-01': 'gru05',
	'mcp-canary-candidate-02': 'dac07',
	'mcp-canary-candidate-03': 'kwi03',
	'mcp-canary-candidate-04': 'han02',
	'mcp-canary-candidate-05': 'poa01',
	'canary': 'kul01',
	'main': 'dfw01',
};
const buildVersions = {};

for(const [name, colo] of Object.entries(colos)){
	buildVersions[`build-info/fl-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://build-info.jross.workers.dev/?type=fl`;
	buildVersions[`build-info/cache-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://build-info.jross.workers.dev/?type=cache`;
	buildVersions[`build-info/origin-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://build-info.jross.workers.dev/?type=origin`;
}

for(const [file, url] of Object.entries(buildVersions)){
	const filePath = path.resolve(dir, file);
	console.log('Fetching', file);
	const dataReq = await fetch(url, {agent});
	if(dataReq.ok){
		const data = await dataReq.text();
		await fs.ensureFile(filePath);
		await fs.writeFile(filePath, data);
	}
}

// iterate for error pages between 100 and 1500 - wide range
const errors = {};
for(let i = 100; i <= 1500; i++){
	const controller = new AbortController();
	const timeout = setTimeout(() => {
		controller.abort();
	}, 200);
	let dataReq = null;
	try{
		dataReq = await fetch(`https://cloudflare.com/cdn-cgi/error/${i}`, {
			agent,
			signal: controller.signal,
		});
	}catch(err){
		console.log(`Error fetching error page ${i}: ${err?.code ?? err}`);
		continue;
	}finally{
		clearTimeout(timeout);
	}
	const data = await dataReq.text();
	if(!dataReq.headers.get('content-type')?.includes?.('text/html') || data === ''){
		console.log('Not an HTML error page, or empty contents', i);
		continue;
	}
	// if the page is a 500 and we're not asking for a 500, it's probably not a real error page
	if(dataReq.status === 500 && i !== 500 && data.includes(': Internal server error')){
		console.log(`Error page ${i} not found (500 error)`);
		continue;
	}
	if(dataReq.status === i && data.includes(': Internal server error')){
		console.log(`Error page ${i} not found (matching status, but internal server error)`);
		continue;
	}
	const rayID = dataReq.headers.get('cf-ray');
	if(!rayID){
		console.log(`Error page ${i} has no Ray ID`);
		continue;
	}
	console.log(`Found error page ${i}, processing...`);
	// replace IP address in error page
	const fixedData = data
		.replace(ip, '[ip]')
		.replaceAll(rayID, '[ray id]')
		.replaceAll(rayID.slice(0, -4), '[ray id]')
		.replaceAll(isoDate, '[date]')
		.replaceAll(niceDate, '[date]')
		.replaceAll(/your IP address is in \((\d+)\)/g, '[asn]')
		.replaceAll(/your IP address is in \((\w+)\)/g, '[country]');

	const dom = cheerio.load(fixedData);
	const cfCloudflareStatus = dom('#cf-cloudflare-status');
	if(cfCloudflareStatus){
		cfCloudflareStatus.find('span.w-full.truncate').text('[location]');
	}

	const filePath = path.resolve(dir, `error/${i}.html`);
	await fs.ensureFile(filePath);
	await fs.writeFile(filePath, jsBeautify.html(dom.html(), {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));

	// get meta info for error page
	const metaPath = path.resolve(dir, `error/${i}.json`);
	await fs.ensureFile(metaPath);
	const title = data.match(/<title>([^<]+)<\/title>/)?.[1];
	const errorString = title?.match?.(/^cloudflare\.com \| (.*)/)?.[1];
	const meta = {
		status: dataReq.status,
		error: errorString ?? title,
	};
	errors[i] = meta.error;
	await fs.writeFile(metaPath, JSON.stringify(meta, null, '\t'));
}

const styles = [
	'errors.css',
	'cf.errors.css',
];
// get errors styles
for(const styleName of styles){
	const styleRes = await fetch(`https://cloudflare.com/cdn-cgi/styles/${styleName}`, {agent});
	if(styleRes.ok){
		const style = await styleRes.text();
		const stylePath = path.resolve(dir, `styles/${styleName}`);
		await fs.ensureFile(stylePath);
		await fs.writeFile(stylePath, jsBeautify.css(style, {
			indent_size: 4,
			indent_char: '\t',
			indent_with_tabs: true,
		}));
	}
}

// write global list
await fs.writeFile(path.resolve(dir, 'error/_errors.json'), JSON.stringify(errors, null, '\t'));

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/cdn-cgi/*',
		'data/cdn-cgi/**/*',
		'data/cdn-cgi/**/*.json',
		'data/cdn-cgi/**/*.css',
	],
	`${prefix} - CDN CGI Data was updated!`,
	'CFData - CDN CGI Update',
	'Pushed CDN CGI: ' + prefix,
);
