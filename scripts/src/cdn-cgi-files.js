import 'dotenv/config';
import path from 'node:path';

import * as cheerio from 'cheerio';
import dateFormat from 'dateformat';
import fs from 'fs-extra';
import ipRegex from 'ip-regex';
import jsBeautify from 'js-beautify';
import fetch from 'node-fetch';

const ip = ipRegex();
const isoDate = /(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
const niceDate = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+A-Za-z-]+/g;

import { getHttpsAgent, tryAndPush } from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve('../data/cdn-cgi');
try {
	await fs.rm(path.resolve(dir, './error'), {
		recursive: true,
	});
} catch {} // we tried
await fs.ensureDir(dir);

// iterate for error pages between 100 and 1500 - wide range
const errors = {};
for (let i = 100; i <= 1500; i++) {
	const controller = new AbortController();
	const timeout = setTimeout(() => {
		controller.abort();
	}, 1000);
	let dataReq = null;
	try {
		dataReq = await fetch(`https://cloudflare.com/cdn-cgi/error/${i}`, {
			agent,
			signal: controller.signal,
		});
	} catch (err) {
		console.log(`Error fetching error page ${i}: ${err?.code ?? err}`);
		continue;
	} finally {
		clearTimeout(timeout);
	}
	const data = await dataReq.text();
	if (!dataReq.headers.get('content-type')?.includes?.('text/html') || data === '') {
		console.log('Not an HTML error page, or empty contents', i);
		continue;
	}
	// if the page is a 500 and we're not asking for a 500, it's probably not a real error page
	if (dataReq.status === 500 && i !== 500 && data.includes(': Internal server error')) {
		console.log(`Error page ${i} not found (500 error)`);
		continue;
	}
	if (dataReq.status === i && data.includes(': Internal server error')) {
		console.log(`Error page ${i} not found (matching status, but internal server error)`);
		continue;
	}
	const rayID = dataReq.headers.get('cf-ray');
	if (!rayID) {
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
		.replaceAll(/your IP address is in \((\w+)\)/g, '[country]')
		.replaceAll(/Country: [A-Z]+/g, 'Country: [country]')
		.replaceAll(/Data center: \w+\d/g, 'Data center: [colo]');

	const dom = cheerio.load(fixedData);
	const cfCloudflareStatus = dom('#cf-cloudflare-status');
	if (cfCloudflareStatus) {
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
	'cf.errors.ie.css',
	'challenges.css',
	'main.css',
];
// get errors styles
for (const styleName of styles) {
	const styleRes = await fetch(`https://cloudflare.com/cdn-cgi/styles/${styleName}`, { agent });
	if (styleRes.ok) {
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
	`${prefix} - CDN CGI Files was updated! [skip ci]`,
	'CFData - CDN CGI Files Update',
	'Pushed CDN CGI Files: ' + prefix,
	'DISCORD_WEBHOOK_CDNCGI',
);
