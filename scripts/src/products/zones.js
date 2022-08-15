import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest} from '../utils.js';

const dir = path.resolve(`../data/products/pages`);
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'zones-list',
		url: `https://api.cloudflare.com/client/v4/zones?per_page=1`,
		method: 'GET',
	},
	{
		name: 'zones-get',
		url: `https://api.cloudflare.com/client/v4/zones/{zone_id}`,
		method: 'GET',
	},
	{
		name: 'zones-permissions',
		url: `https://api.cloudflare.com/client/v4/zones/{zone_id}`,
		method: 'GET',
		transform: json => json.result.permissions,
	},
	{
		name: 'zones-settings',
		url: `https://api.cloudflare.com/client/v4/zones/{zone_id}/settings`,
		method: 'GET',
		transform: json => json.result,
	},
	{
		name: 'zones-available-plans',
		url: `https://api.cloudflare.com/client/v4/zones/{zone_id}/available_plans`,
		method: 'GET',
		transform: json => json.result,
	},
];
const results = {};
console.log('Making requests...');
for(const req of reqs){
	const file = path.resolve(dir, `${req.name}.json`);
	let url = req.url;
	if(url.includes('{zone_id}') && results['zones-list']?.result?.[0]?.id){
		url = url.replace('{zone_id}', results['zones-list'].result[0].id);
	}

	console.log(`Fetch for ${req.name}...`);
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
		'data/products/zones/*.json',
	],
	`${prefix} - Product: Zones Data was updated!`,
	'CFData - Product: Zones Data Update',
	'Pushed Product: Zones Data: ' + prefix,
);
