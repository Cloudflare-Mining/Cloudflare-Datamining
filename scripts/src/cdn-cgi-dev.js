import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import { getHttpsAgent, tryAndPush } from './utils.js';

const agent = getHttpsAgent();
const dir = path.resolve('../data/cdn-cgi');

// colos with mostly stable versions across metals
const colos = {
	'pig': 'pig',
};
// colos with very unstable versions across metals, so get an aggregate of all versions
const aggregateColos = {
	'dog': 'sfo06',
	'lab': 'sfo07',
};

const buildVersions = {};
for (const [name, colo] of Object.entries(colos)) {
	buildVersions[`build-info/fl-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://trace.colo.quest/info?type=fl`;
	buildVersions[`build-info/cache-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://trace.colo.quest/info?type=cache`;
	buildVersions[`build-info/challenge-platform-${name}`] = `${process.env.FETCH_FROM_COLO_URL}colo=${colo}&url=https://trace.colo.quest/info?type=challenge-platform`;
}
for (const [name, colo] of Object.entries(aggregateColos)) {
	buildVersions[`build-info/fl-${name}`] = `${process.env.FETCH_FROM_COLO_MULTI_URL}colo=${colo}&url=https://trace.colo.quest/info?type=fl`;
	buildVersions[`build-info/cache-${name}`] = `${process.env.FETCH_FROM_COLO_MULTI_URL}colo=${colo}&url=https://trace.colo.quest/info?type=cache`;
	buildVersions[`build-info/challenge-platform-${name}`] = `${process.env.FETCH_FROM_COLO_MULTI_URL}colo=${colo}&url=https://trace.colo.quest/info?type=challenge-platform`;
}

for (const [file, url] of Object.entries(buildVersions)) {
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
	],
	`${prefix} - Dev CDN CGI Data was updated! [skip ci]`,
	'CFData - Dev CDN CGI Update',
	'Pushed Dev CDN CGI: ' + prefix,
	'DISCORD_WEBHOOK_CDNCGI_DEV',
);
