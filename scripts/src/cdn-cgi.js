import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import ipRegex from 'ip-regex';

const ip = ipRegex();

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
	await fs.rm(dir, {
		recursive: true,
	});
}catch{} // we tried
await fs.ensureDir(dir);

// TODO: dog, lab, mcp canary?
const MCP_COLO = 'lhr01';
const CANARY_COLO = 'kul01';
const MAIN_COLO = 'dfw01';

// get keys for request.cf
const cfJsonRes = await fetch(`https://jross.me/cf.json`);
const cfJson = await cfJsonRes.json();

const cfKeys = propertiesToArray(cfJson);
console.log('write', cfKeys);
if(cfKeys.length >= 0){
	await fs.writeFile(path.resolve(dir, 'cf.json'), JSON.stringify(cfKeys, null, '\t'));
}


const buildVersions = {
	// ssl
	'build-info/ssl-main': `${process.env.FETCH_FROM_COLO_URL}colo=${MAIN_COLO}&url=https://build-info.jross.workers.dev/?type=ssl`,

	// fl
	'build-info/fl-main': `${process.env.FETCH_FROM_COLO_URL}colo=${MAIN_COLO}&url=https://build-info.jross.workers.dev/?type=fl`,
	'build-info/fl-mcp': `${process.env.FETCH_FROM_COLO_URL}colo=${MCP_COLO}&url=https://build-info.jross.workers.dev/?type=fl`,
	'build-info/fl-canary': `${process.env.FETCH_FROM_COLO_URL}colo=${CANARY_COLO}&url=https://build-info.jross.workers.dev/?type=fl`,

	// cache
	'build-info/cache-main': `${process.env.FETCH_FROM_COLO_URL}colo=${MAIN_COLO}&url=https://build-info.jross.workers.dev/?type=cache`,
	'build-info/cache-mcp': `${process.env.FETCH_FROM_COLO_URL}colo=${MCP_COLO}&url=https://build-info.jross.workers.dev/?type=cache`,
	'build-info/cache-canary': `${process.env.FETCH_FROM_COLO_URL}colo=${CANARY_COLO}&url=https://build-info.jross.workers.dev/?type=cache`,

	// origin
	'build-info/origin-main': `${process.env.FETCH_FROM_COLO_URL}colo=${MAIN_COLO}&url=https://build-info.jross.workers.dev/?type=origin`,
	'build-info/origin-mcp': `${process.env.FETCH_FROM_COLO_URL}colo=${MCP_COLO}&url=https://build-info.jross.workers.dev/?type=origin`,
	'build-info/origin-canary': `${process.env.FETCH_FROM_COLO_URL}colo=${CANARY_COLO}&url=https://build-info.jross.workers.dev/?type=origin`,
};


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
	//const filePath = path.resolve(dir, `error/${i}.html`);
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
	let fixedData = data.replace(ip, '[ip]');
	fixedData = fixedData.replaceAll(rayID, '[ray id]');
	fixedData = fixedData.replaceAll(rayID.slice(0, -4), '[ray id]');
	// TODO: remove other parts of the HTML that'll make an unstable diff, like the timestamp
	//await fs.ensureFile(filePath);
	//await fs.writeFile(filePath, fixedData);

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

// write global list
await fs.writeFile(path.resolve(dir, 'error/_errors.json'), JSON.stringify(errors, null, '\t'));

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/cdn-cgi/*',
		'data/cdn-cgi/**/*',
		'data/cdn-cgi/**/*.json',
	],
	`${prefix} - CDN CGI Data was updated!`,
	'CFData - CDN CGI Update',
	'Pushed CDN CGI: ' + prefix,
);
