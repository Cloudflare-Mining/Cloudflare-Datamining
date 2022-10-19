import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import {tryAndPush, getHttpsAgent, propertiesToArray} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve(`../data/cdn-cgi`);
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
const traceRes = await fetch(`https://colo.quest/cdn-cgi/trace`);
const trace = await traceRes.text();
const data = trace.split('\n').map(line => line.split('='));
const traceKeys = data.map(arr => arr[0]).filter(key => key !== '').sort();
if(traceKeys.length >= 0){
	await fs.writeFile(path.resolve(dir, 'trace.json'), JSON.stringify([...traceKeys].sort(), null, '\t'));
}

// colos with mostly stable versions across metals
const colos = {
	'canary': 'lis01',
	'mcp': 'lhr01',
	// 'mcp-canary-candidate-01': 'gru05',
	// 'mcp-canary-candidate-02': 'dac07',
	// 'mcp-canary-candidate-03': 'kwi03',
	// 'mcp-canary-candidate-04': 'han02',
	// 'mcp-canary-candidate-05': 'poa01',
	'main': 'dfw01',
};

const buildVersions = {};
for(const [name, colo] of Object.entries(colos)){
	buildVersions[`build-info/fl-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://trace.colo.quest/info?type=fl`;
	buildVersions[`build-info/cache-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://trace.colo.quest/info?type=cache`;
	buildVersions[`build-info/challenge-platform-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://trace.colo.quest/info?type=challenge-platform`;
}

for(const [file, url] of Object.entries(buildVersions)){
	const filePath = path.resolve(dir, file);
	console.log('Fetching', file);
	try{
		const controller = new AbortController();
		const timeout = setTimeout(() => {
			controller.abort();
		}, 30000);
		const dataReq = await fetch(url, {agent, signal: controller.signal});
		if(dataReq.ok){
			const data = await dataReq.text();
			await fs.ensureFile(filePath);
			await fs.writeFile(filePath, data);
		}
		clearTimeout(timeout);
	}catch(err){
		console.error(err);
	}
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/cdn-cgi/*',
		'data/cdn-cgi/**/*',
		'data/cdn-cgi/**/*.json',
		'data/cdn-cgi/**/*.css',
	],
	`${prefix} - CDN CGI Data was updated! [skip ci]`,
	'CFData - CDN CGI Update',
	'Pushed CDN CGI: ' + prefix,
	'DISCORD_WEBHOOK_CDNCGI',
);
