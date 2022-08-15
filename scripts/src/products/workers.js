import 'dotenv/config';
import path from 'node:path';
import crypto from 'node:crypto';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest} from '../utils.js';

const dir = path.resolve(`../data/products/workers`);
await fs.ensureDir(dir);

const id = crypto.randomUUID();
const reqs = [
	{
		name: 'settings-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/settings`,
		method: 'GET',
		transform: json => json.result,
	},
	{
		name: 'account-settings-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/account-settings`,
		method: 'GET',
		transform: json => json.result,
	},
	{
		name: 'services-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/services?expand=routes&page=1&perPage=100`,
		method: 'GET',
	},
	{
		name: 'services-create',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/services/${id}/environments/production?include_subdomain_availability=true`,
		method: 'PUT',
		body: `addEventListener("fetch", event => {
			event.respondWith(handleRequest(event.request))
		  })

		  async function handleRequest(request) {
			return new Response("Hello world")
		  }`,
		headers: {
			'Content-Type': 'application/javascript',
		},
	},
	{
		name: 'services-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/services/${id}`,
		method: 'GET',
	},
	{
		name: 'services-delete',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/workers/services/${id}?force=true`,
		method: 'DELETE',
		write: false,
	},
];
const results = {};
console.log('Making requests...');
for(const req of reqs){
	const file = path.resolve(dir, `${req.name}.json`);
	const url = req.url;
	console.log(`Fetch for ${req.name}...`);
	const res = await cfRequest(url, {
		method: req.method,
		body: req.body,
		headers: req.headers,
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
		'data/products/workers/*.json',
	],
	`${prefix} - Product: Workers Data was updated!`,
	'CFData - Product: Workers Data Update',
	'Pushed Product: Workers Data: ' + prefix,
);
