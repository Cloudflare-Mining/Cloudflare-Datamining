import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import { getHttpsAgent, tryAndPush } from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve('../data/cdn-cgi');
await fs.ensureDir(dir);

// colos with mostly stable versions across metals
const colos = {
	canary: {
		urls: [
			process.env.FETCH_CANARY_URL,
		],
	},
	mcp: {
		urls: [
			process.env.FETCH_FR_SG_URL,
			process.env.FETCH_UK_URL,
		],
		colos: ['LHR', 'EWR'],
	},
	main: {
		urls: [
			process.env.FETCH_TX_URL,
			process.env.FETCH_SG_URL,
		],
		colos: ['DFW', 'SIN'],
	},
	// 'mcp-canary-candidate-01': 'gru05',
	// 'mcp-canary-candidate-02': 'dac07',
	// 'mcp-canary-candidate-03': 'kwi03',
	// 'mcp-canary-candidate-04': 'han02',
	// 'mcp-canary-candidate-05': 'poa01',
	//main: 'dfw01',
};

const buildVersions = [];
for (const [name, colo] of Object.entries(colos)) {
	for (const url of colo.urls) {
		buildVersions.push({
			file: `build-info/fl-${name}`,
			url: `${url}&url=https://trace.colo.quest/info?type=fl`,
			info: colo,
		});
		buildVersions.push({
			file: `build-info/fl2-${name}`,
			url: `${url}&url=https://trace.colo.quest/info?type=fl2`,
			info: colo,
		});
		buildVersions.push({
			file: `build-info/cache-${name}`,
			url: `${url}&url=https://trace.colo.quest/info?type=cache`,
			info: colo,
		});
		// buildVersions.push({
		// 	file: `build-info/challenge-platform-${name}`,
		// 	url: `${url}colo=${colo}&url=https://trace.colo.quest`,
		// 	info: colo,
		// });
	}
}

for (const { file, url, info } of buildVersions) {
	let filePath = path.resolve(dir, file);
	console.log('Fetching', file);
	try {
		const controller = new AbortController();
		const timeout = setTimeout(() => {
			controller.abort();
		}, 30000);
		const dataReq = await fetch(url, { agent, signal: controller.signal });
		if (dataReq.ok) {
			const headers = dataReq.headers;
			// if sliver, append that to the file name
			if (headers?.get('x-cdn-cgi-sliver')) {
				filePath = path.resolve(dir, `${file}_sliver-${headers.get('x-cdn-cgi-sliver')}`);
			}
			const coloFromRay = headers?.get('cf-ray')?.split('-')[1];
			if (info.colors && !info.colos.includes(coloFromRay)) {
				console.log(`Skipping ${file} because it's not from the expected colo: ${coloFromRay}`);
				continue;
			}
			const data = await dataReq.text();
			await fs.ensureFile(filePath);
			await fs.writeFile(filePath, data);
		}
		clearTimeout(timeout);
	} catch (err) {
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
