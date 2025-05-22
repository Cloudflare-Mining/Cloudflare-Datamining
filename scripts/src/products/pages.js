import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import ipRegex from 'ip-regex';
import jsBeautify from 'js-beautify';

import {
	cfRequest,
	propertiesToArray,
	sleep,
	sortObjectByKeys,
	tryAndPush,
} from '../utils.js';

const dir = path.resolve('../data/products/pages');
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
		name: 'overview',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/overview`,
		method: 'GET',
		transform: (json) => {
			json.result = json.result.filter(project => project.name === 'blank-index');
			return propertiesToArray(json).sort();
		},
	},
	{
		name: 'projects-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects`,
		method: 'GET',
		required: true,
		transform: (json) => {
			json.result = json.result.filter(project => project.name === 'blank-index');
			return propertiesToArray(json).sort();
		},
	},
	{
		name: 'projects-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index`,
		method: 'GET',
	},
	{
		name: 'deployments-create',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index/deployments`,
		method: 'POST',
	},
	{
		name: 'deployments-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index/deployments/{deployment_id}`,
		method: 'GET',
	},
	{
		name: 'deployments-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index/deployments`,
		method: 'GET',
		write: false,
	},
];
const results = {};
console.log('Making requests...');
for (const req of reqs) {
	const file = path.resolve(dir, `${req.name}.json`);
	let url = req.url;
	if (url.includes('{deployment_id}') && results['deployments-create']?.result?.id) {
		url = url.replace('{deployment_id}', results['deployments-create'].result.id);
	}

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

if (!results['deployments-create']?.result?.id) {
	// no deployment created. What did Walshy break now?
	console.log('Missing deployment. Can\'t get any more Pages details');
	// eslint-disable-next-line no-process-exit
	process.exit(0);
}

// get and parse logs for deploy, after deployed
const maxAttempts = 60;
let waiting = true;
let attempts = 0;

while (waiting) {
	if (attempts > maxAttempts) {
		throw new Error('Max attempts reached, exiting.');
	}
	attempts++;
	const deploymentRes = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index/deployments/${results['deployments-create'].result.id}`);
	if (!deploymentRes.ok) {
		console.log(`deployment-get failed: ${deploymentRes.status} ${deploymentRes.statusText}`);
		continue;
	}
	const deploymentJson = await deploymentRes.json();
	if (deploymentJson?.result?.latest_stage?.status === 'failure') {
		throw new Error('Deployment failed, exiting.');
	} else if (deploymentJson?.result?.latest_stage?.name === 'deploy' && deploymentJson?.result?.latest_stage?.status === 'success') {
		waiting = false;
	}

	console.log('Still deploying...', deploymentJson?.result?.latest_stage?.name, deploymentJson?.result?.latest_stage?.status);
	await sleep(5000);
}

const truncateEnvVars = new Set([
	'CF_PAGES_BRANCH',
	'CF_PAGES_COMMIT_SHA',
	'CF_PAGES_URL',
]);
const deployID = results['deployments-create']?.result?.id;
const logsReq = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index/deployments/${deployID}/history/logs?size=10000000`);
const logsRes = await logsReq.json();
const logs = logsRes.result.data ?? [];

// get env
const startEnvIndex = logs.findIndex(log => log.line === '---start-env---');
const endEnvIndex = logs.findIndex(log => log.line === '---end-env---');
if (startEnvIndex && endEnvIndex) {
	const envLogs = logs.slice(startEnvIndex + 1, endEnvIndex);
	const env = {};
	for (const log of envLogs) {
		const split = log.line.split('=');
		if (truncateEnvVars.has(split[0])) {
			env[split[0]] = '-snip-';
		} else if (split[0] === 'PATH') {
			const path = split.slice(1).join('=').split(':');
			const newVal = [];
			for (const part of path) {
				if (part.includes('cache')) {
					newVal.push('-cache-dir-snip-');
				} else {
					newVal.push(part);
				}
			}
			env[split[0]] = newVal;
		} else {
			env[split[0]] = split.slice(1).join('=');
		}
	}
	const sorted = sortObjectByKeys(env);
	// check a common env var like `PATH` to make sure we have a valid object
	if (sorted.PATH) {
		await fs.writeJson(path.resolve(dir, 'deployments-logs-env.json'), sorted, { spaces: '\t' });
	}
}

// get lscpu
const startLscpuIndex = logs.findIndex(log => log.line === '---start-lscpu---');
const endLscpuIndex = logs.findIndex(log => log.line === '---end-lscpu---');
if (startLscpuIndex && endLscpuIndex) {
	const lscpuLogs = logs.slice(startLscpuIndex + 1, endLscpuIndex);
	const cpuinfo = {};
	for (const log of lscpuLogs) {
		const regex = /^(?<key>[\w()-\s]+):\s+(?<val>.*)$/;
		const match = log.line.match(regex);
		if (!match?.groups?.key || !match?.groups?.val) {
			continue;
		}
		// round a few things to prevent unstable diffs
		if (match.groups.key === 'CPU MHz' || match.groups.key === 'BogoMIPS') {
			cpuinfo[match.groups.key] = String(Math.round(Number.parseFloat(match.groups.val)));
		} else {
			cpuinfo[match.groups.key] = match.groups.val;
		}
	}
	await fs.writeJSON(path.resolve(dir, 'deployments-logs-lscpu.json'), cpuinfo, { spaces: '\t' });
}

// get memory
const startMemtotalIndex = logs.findIndex(log => log.line === '---start-memory---');
const endMemtotalIndex = logs.findIndex(log => log.line === '---end-memory---');
if (startMemtotalIndex && endMemtotalIndex) {
	const memLogs = logs.slice(startMemtotalIndex + 1, endMemtotalIndex);
	const memInfo = {};
	for (const log of memLogs) {
		const line = log.line.split(':');
		if (line.length !== 2) {
			continue;
		}
		memInfo[line[0]] = line[1].trim();
	}
	const wantedKeys = new Set(['MemTotal', 'SwapTotal']);
	const filteredMemInfo = Object.keys(memInfo).filter(key => wantedKeys.has(key)).reduce((obj, key) => {
		obj[key] = memInfo[key];
		return obj;
	}, {});

	if (!filteredMemInfo.MemTotal) {
		console.warn('MemTotal is missing, something is broken');
		process.exit(0);
	}
	await fs.writeJson(path.resolve(dir, 'deployments-logs-memory.json'), filteredMemInfo, { spaces: '\t' });
}

// get os-release
const startOsReleaseIndex = logs.findIndex(log => log.line === '---start-os-release---');
const endOsReleaseIndex = logs.findIndex(log => log.line === '---end-os-release---');
if (startOsReleaseIndex && endOsReleaseIndex) {
	const osReleaseLogs = logs.slice(startOsReleaseIndex + 1, endOsReleaseIndex);
	const osRelease = {};
	for (const log of osReleaseLogs) {
		const line = log.line.split('=');
		if (line.length !== 2) {
			continue;
		}
		osRelease[line[0]] = line.slice(1).join('=');
	}
	if (!osRelease.ID) {
		// os-release is missing ID, something is broken
		console.warn('os-release is missing ID, something is broken');
		process.exit(0);
	}
	await fs.writeJson(path.resolve(dir, 'deployments-logs-os-release.json'), osRelease, { spaces: '\t' });
}

// get dpkg
const startDpkgIndex = logs.findIndex(log => log.line === '---start-dpkg---');
const endDpkgIndex = logs.findIndex(log => log.line === '---end-dpkg---');
if (startDpkgIndex && endDpkgIndex) {
	const dpkgLogs = logs.slice(startDpkgIndex + 1, endDpkgIndex);
	const dpkg = {};
	for (const log of dpkgLogs) {
		const line = log.line.split('#;SPLIT;#');
		if (line.length < 3) {
			continue;
		}
		dpkg[line[0]] = {
			version: line[1],
			short_description: line[2],
			author: line[3],
		};
	}
	const sorted = sortObjectByKeys(dpkg);
	await fs.writeJson(path.resolve(dir, 'deployments-logs-dpkg.json'), sorted, { spaces: '\t' });
}

const startAsdfIndex = logs.findIndex(log => log.line === '---start-asdf---');
const endAsdfIndex = logs.findIndex(log => log.line === '---end-asdf---');
if (startAsdfIndex && endAsdfIndex) {
	const asdfLogs = logs.slice(startAsdfIndex + 1, endAsdfIndex);
	const asdf = {};
	for (const log of asdfLogs) {
		const parts = log.line.trim().split(/\s+/);
		// expect at least [ plugin, version, path ]
		if (parts.length < 3) {
			console.warn('asdf plugin version line is malformed', log);
			continue;
		}

		const plugin = parts[0];
		let path = parts[parts.length - 1];
		const versionParts = parts.slice(1, -1);
		let version = versionParts.join(' ').trim();
		if (version.includes('No version is set')) {
			version = 'unset';
			path = 'unset';
		}
		asdf[plugin] = {
			version,
			path,
		};
	}
	const sorted = sortObjectByKeys(asdf);
	await fs.writeJson(path.resolve(dir, 'deployments-logs-asdf.json'), sorted, { spaces: '\t' });
}

// delete all previous deployments
console.log('Cleaning up old deployments...');
for (const deployment of results['deployments-list'].result) {
	if (deployment.id === results['deployments-create']?.result?.id) {
		continue;
	}
	const res = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/blank-index/deployments/${deployment.id}`, {
		method: 'DELETE',
	});
	if (!res.ok) {
		console.log(`Failed to delete deployment: ${res.status} ${res.statusText}`);
	}
}

const ip = ipRegex();
const isoDate = /(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2](?:\d:[0-5]){2}\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
const niceDate = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+A-Za-z-]+/g;

// fetch errors
const getErrors = {
	'internal-error': `${process.env.PAGES_DISPATCH_WORKER}/errors/internal-error`,
	'not-found': `${process.env.PAGES_DISPATCH_WORKER}/errors/not-found`,
};

for (const [code, url] of Object.entries(getErrors)) {
	console.log(`Fetch error for ${code}...`);
	const res = await fetch(url);
	const rayID = res.headers.get('cf-ray');
	if (!rayID) {
		console.log(`Error page ${code} has no Ray ID`);
		continue;
	}
	const text = await res.text();
	const fixedData = text
		.replace(ip, '[ip]')
		.replaceAll(rayID, '[ray id]')
		.replaceAll(rayID.slice(0, -4), '[ray id]')
		.replaceAll(isoDate, '[date]')
		.replaceAll(niceDate, '[date]');

	const filePath = path.resolve(dir, `errors/${code}.html`);
	await fs.ensureFile(filePath);
	await fs.writeFile(filePath, jsBeautify.html(fixedData, {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/pages/*.json',
		'data/products/pages/errors/*.html',
	],
	`${prefix} - Product: Pages Data was updated!`,
	'CFData - Product: Pages Data Update',
	'Pushed Product: Pages Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_PAGES',
);
