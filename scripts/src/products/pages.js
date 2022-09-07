import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray, cfRequest, sleep} from '../utils.js';

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

// get and parse logs for deploy, after deployed
const maxAttempts = 30;
let waiting = true;
let attempts = 0;

while(waiting){
	if(attempts > maxAttempts){
		throw new Error('Max attempts reached, exiting.');
	}
	attempts++;
	const deploymentRes = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/${projectName}/deployments/${results['deployments-create'].result.id}`);
	if(!deploymentRes.ok){
		console.log(`deployment-get failed: ${deploymentRes.status} ${deploymentRes.statusText}`);
		continue;
	}
	const deploymentJson = await deploymentRes.json();
	if(deploymentJson?.result?.latest_stage?.name === 'deploy'){
		if(deploymentJson?.result?.latest_stage?.status === 'success'){
			waiting = false;
		}else if(deploymentJson?.result?.latest_stage?.status === 'failure'){
			throw new Error('Deployment failed, exiting.');
		}
	}
	console.log('Still deploying...', deploymentJson?.result?.latest_stage?.name, deploymentJson?.result?.latest_stage?.status);
	await sleep(5000);
}

const truncateEnvVars = new Set([
	'CF_PAGES_BRANCH',
	'CF_PAGES_COMMIT_SHA',
	'CF_PAGES_URL',
]);
const deployiD = results['deployments-create']?.result?.id;
const logsReq = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/${projectName}/deployments/${deployiD}/history/logs`);
const logsRes = await logsReq.json();
const logs = logsRes.result.data ?? [];
const startIndex = logs.findIndex(log => log.line === '---start-env---');
const endIndex = logs.findIndex(log => log.line === '---end-env---');
if(startIndex && endIndex){
	const envLogs = logs.slice(startIndex + 1, endIndex);
	const env = {};
	for(const log of envLogs){
		const split = log.line.split('=');
		if(truncateEnvVars.has(split[0])){
			env[split[0]] = '-snip-';
		}else if(split[0] === 'PATH'){
			const path = split.slice(1).join('=').split(':');
			const newVal = [];
			for(const part of path){
				if(part.includes('cache')){
					newVal.push('-cache-dir-snip-');
				}else{
					newVal.push(part);
				}
			}
			env[split[0]] = newVal;
		}else{
			env[split[0]] = split.slice(1).join('=');
		}
	}
	const sorted = Object.keys(env).sort().reduce(
		(obj, key) => {
			obj[key] = env[key];
			return obj;
		},
		{},
	);
	// check a common env var like `PATH` to make sure we have a valid object
	if(sorted.PATH){
		await fs.writeJson(path.resolve(dir, 'deployments-logs-env.json'), sorted, {spaces: '\t'});
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
