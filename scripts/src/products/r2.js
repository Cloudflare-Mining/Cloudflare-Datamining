import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import jsBeautify from 'js-beautify';
import fetch from 'node-fetch';


import { cfRequest, propertiesToArray, tryAndPush } from '../utils.js';

const dir = path.resolve('../data/products/r2');
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'buckets',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets`,
		method: 'GET',
	},
	{
		name: 'bucket-policy-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets/public/policy`,
		method: 'GET',
	},
	{
		name: 'bucket-custom-domains',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets/public/custom_domains`,
		method: 'GET',
	},
	{
		name: 'bucket-policy',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets/public/policy`,
		method: 'GET',
	},
	{
		name: 'bucket-usage',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets/public/usage`,
		method: 'GET',
	},
	{
		name: 'bucket-objects',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/r2/buckets/public/objects`,
		method: 'GET',
	},
];

console.log('Making requests...');
const results = {};
for (const req of reqs) {
	const file = path.resolve(dir, `${req.name}.json`);
	const url = req.url;

	console.log(`Fetch for ${req.name}...`);
	const res = await cfRequest(url, {
		method: req.method,
	});
	if (!res.ok) {
		console.log(`${req.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const json = await res.json();
	results[req.name] = json;
	if (req.write !== false) {
		if (req.transform) {
			await fs.writeJson(file, req.transform(json), { spaces: '\t' });
		} else {
			await fs.writeJson(file, propertiesToArray(json).sort(), { spaces: '\t' });
		}
	}
}

// fetch errors
const getErrors = {
	401: 'https://pub-0b5d8b325239489780c7d4b12305e0d1.r2.dev/',
	404: 'https://pub-f33b00112eba41fd898b492c7f364960.r2.dev/',
	500: 'https://pub-f33b00112eba41fd898b492c7f364960.r2.dev/%',
};

for (const [code, url] of Object.entries(getErrors)) {
	console.log(`Fetch error for ${code}...`);
	const res = await fetch(url);
	const text = await res.text();
	const filePath = path.resolve(dir, `errors/${code}.html`);
	await fs.ensureFile(filePath);
	await fs.writeFile(filePath, jsBeautify.html(text, {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/r2/*.json',
		'data/products/r2/errors/*.html',
	],
	`${prefix} - Product: R2 Data was updated!`,
	'CFData - Product: R2 Data Update',
	'Pushed Product: R2 Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_R2',
);
