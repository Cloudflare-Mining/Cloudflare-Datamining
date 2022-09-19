import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest} from '../utils.js';

const dir = path.resolve(`../data/products/gateway`);
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'app_types',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/gateway/app_types`,
		method: 'GET',
		transform: json => json.result?.sort?.((typeA, typeB) => typeA.id - typeB.id),
	},
	{
		name: 'categories',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/gateway/categories`,
		method: 'GET',
		transform: json => json.result?.sort?.((typeA, typeB) => typeA.id - typeB.id),
	},
];

console.log('Making requests...');
for(const req of reqs){
	const file = path.resolve(dir, `${req.name}.json`);
	const url = req.url;

	console.log(`Fetch for ${req.name}...`);
	const res = await cfRequest(url, {
		method: req.method,
	});
	if(!res.ok){
		console.log(`${req.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const json = await res.json();
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
		'data/products/gateway/*.json',
	],
	`${prefix} - Product: Gateway Data was updated!`,
	'CFData - Product: Gateway Data Update',
	'Pushed Product: Gateway Data: ' + prefix,
);
