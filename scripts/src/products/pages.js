import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest} from '../utils.js';

const dir = path.resolve(`../data/products/pages`);
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'build-image-versions-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/build_image_versions?per_page=100`,
		method: 'GET',
		transform: json => json.result,
	},
	{
		name: 'metrics-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/metrics`,
		method: 'GET',
		transform: json => json.result,
	},
	{
		name: 'projects-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects`,
		method: 'GET',
	},
	{
		name: 'projects-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/{project_name}`,
		method: 'GET',
	},
	{
		name: 'deployments-create',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/{project_name}/deployments`,
		method: 'POST',
	},
	{
		name: 'deployments-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/{project_name}/deployments/{deployment_id}`,
		method: 'GET',
	},
	{
		name: 'deployments-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/{project_name}/deployments`,
		method: 'GET',
		write: false,
	},
];
const results = {};
let projectName = null;
console.log('Making requests...');
for(const req of reqs){
	const file = path.resolve(dir, `${req.name}.json`);
	let url = req.url;
	if(url.includes('{project_name}') && results['projects-list']?.result?.[0]?.name){
		url = url.replace('{project_name}', results['projects-list'].result[0].name);
		projectName = results['projects-list'].result[0].name;
	}
	if(url.includes('{deployment_id}') && results['deployments-create']?.result?.id){
		url = url.replace('{deployment_id}', results['deployments-create'].result.id);
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

// delete all previous deployments
console.log('Cleaning up old deployments...');
for(const deployment of results['deployments-list'].result){
	if(deployment.id === results['deployments-create']?.result?.id){
		continue;
	}
	const res = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/${projectName}/deployments/${deployment.id}`, {
		method: 'DELETE',
	});
	if(!res.ok){
		console.log(`Failed to delete deployment: ${res.status} ${res.statusText}`);
	}
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/pages/*.json',
	],
	`${prefix} - Product: Pages Data was updated!`,
	'CFData - Product: Pages Data Update',
	'Pushed Product: Pages Data: ' + prefix,
);
