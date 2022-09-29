import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest} from '../utils.js';

const dir = path.resolve(`../data/products/turnstile`);
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'widgets-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/challenges/widgets`,
		method: 'GET',
	},
	{
		name: 'widgets-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/challenges/widgets/{widget_id}`,
		method: 'GET',
	},
];
const results = {};
console.log('Making requests...');
for(const req of reqs){
	const file = path.resolve(dir, `${req.name}.json`);
	let url = req.url;
	if(url.includes('{widget_id}') && results['widgets-list']?.result?.[0]?.sitekey){
		url = url.replace('{widget_id}', results['widgets-list'].result[0].sitekey);
	}

	console.log(`Fetch for ${req.name}...`, url);
	const res = await cfRequest(url, {
		method: req.method,
	});
	if(!res.ok){
		console.log(`${req.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const json = await res.json();
	results[req.name] = json;
	if(req.write !== false){
		if(req.transform){
			await fs.writeJson(file, req.transform(json), {spaces: '\t'});
		}else{
			await fs.writeJson(file, propertiesToArray(json).sort(), {spaces: '\t'});
		}
	}
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/turnstile/*.json',
	],
	`${prefix} - Product: Turnstile Data was updated!`,
	'CFData - Product: Turnstile Data Update',
	'Pushed Product: Turnstile Data: ' + prefix,
);
