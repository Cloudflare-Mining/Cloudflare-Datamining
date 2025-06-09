import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';

import {
	cfRequest,
	propertiesToArray,
	sleep,
	sortObjectByKeys,
	tryAndPush,
} from '../utils.js';

const dir = path.resolve('../data/products/workers-builds');
await fs.ensureDir(dir);

const buildsList = await cfRequest(
	`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/builds/workers/7b98bdaa10df4fcab9b0682cd570a2da/builds?page=1&per_page=10`,
	{
		method: 'GET',
	},
);
if (!buildsList.ok) {
	throw new Error('Failed to fetch builds-list');
}
const buildsListJson = await buildsList.json();

const mostRecentBuild = buildsListJson.result[0];
if (!mostRecentBuild || !mostRecentBuild?.trigger?.trigger_uuid) {
	throw new Error('No builds found');
}

const file = path.resolve(dir, 'builds-get-single.json');
await fs.writeJson(file, propertiesToArray(mostRecentBuild).sort(), { spaces: '\t' });

const buildsRetry = await cfRequest(
	`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/builds/triggers/${mostRecentBuild.trigger.trigger_uuid}/builds`,
	{
		method: 'POST',
		body: JSON.stringify({
			commit_hash: mostRecentBuild?.build_trigger_metadata?.commit_hash,
			branch: '',
		}),
	},
);

if (!buildsRetry.ok) {
	throw new Error('Failed to fetch builds-retry');
}
const buildsRetryJson = await buildsRetry.json();

if (!buildsRetryJson.result || !buildsRetryJson.result.build_uuid) {
	throw new Error('No builds found');
}
const buildId = buildsRetryJson.result.build_uuid;

// get and parse logs for deploy, after deployed
const maxAttempts = 60;
let waiting = true;
let attempts = 0;

while (waiting) {
	if (attempts > maxAttempts) {
		throw new Error('Max attempts reached, exiting.');
	}
	attempts++;
	const deploymentRes = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/builds/workers/7b98bdaa10df4fcab9b0682cd570a2da/builds?page=1&per_page=10`);
	if (!deploymentRes.ok) {
		continue;
	}
	const deploymentJson = await deploymentRes.json();
	const build = deploymentJson.result?.find?.(build => build.build_uuid === buildId);
	if (build?.status === 'stopped' && build?.build_outcome === 'success') {
		waiting = false;
	}

	console.log('Still deploying...', build?.status, build?.build_outcome);
	await sleep(5000);
}

// get logs for the build
const logsRes = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/builds/builds/${buildId}/logs`, {
	method: 'GET',
});
if (!logsRes.ok) {
	throw new Error('Failed to fetch builds-logs');
}
const logsJson = await logsRes.json();

const logs = logsJson.result.lines.map((line) => {
	return {
		line: line[1],
		timestamp: line[0],
	};
});

// get env
const truncateEnvVars = new Set([
	'CLOUDFLARE_API_TOKEN',
	'WRANGLER_CI_MATCH_TAG',
	'CLOUDFLARE_ACCOUNT_ID',
	'WORKERS_CI_BUILD_UUID',
	'WORKERS_CI_COMMIT_SHA',
	'WORKERS_CI_BRANCH',
]);
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
	// TODO: re-enable when CPU info is more stable between builds
	//await fs.writeJSON(path.resolve(dir, 'deployments-logs-lscpu.json'), cpuinfo, { spaces: '\t' });
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


const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/workers-builds/*.json',
	],
	`${prefix} - Product: Workers Builds was updated!`,
	'CFData - Product: Workers Builds Data Update',
	'Pushed Product: Workers Builds Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_WORKERS',
);
