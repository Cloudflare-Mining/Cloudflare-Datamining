import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest, sortObjectByKeys} from '../utils.js';

const dir = path.resolve(`../data/products/alerting`);
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'available_alerts',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/alerting/v3/available_alerts`,
		method: 'GET',
		transform: (json) => {
			const results = json.result;
			for(const key in results){
				results[key] = results[key].sort((itemA, itemB) => itemA.display_name.localeCompare(itemB.display_name));
			}
			return sortObjectByKeys(results);
		},
	},
	{
		name: 'destinations_eligible',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/alerting/v3/destinations/eligible`,
		method: 'GET',
		transform: json => json.result,
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
		'data/products/alerting/*.json',
	],
	`${prefix} - Product: Alerting Data was updated!`,
	'CFData - Product: Alerting Data Update',
	'Pushed Product: Alerting Data: ' + prefix,
);
