import 'dotenv/config';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import stringify from 'json-stringify-safe';
import fetch from 'node-fetch';
import pLimit from 'p-limit';
import * as tar from 'tar';

import { getHttpsAgent, sortObjectByKeys, tryAndPush } from './utils.js';

const agent = getHttpsAgent();
const baseUrl = 'https://middlecache.ced.cloudflare.com/';
const dataDir = path.resolve('../data/middlecache');

// Endpoints discovered in cloudflare/cloudflare-docs:
//   src/util/custom-loaders.ts, src/content.config.ts, bin/fetch-skills.ts,
//   bin/fetch-models.ts, worker/index.ts, src/content/collections/*.ts.
// Intentionally skipped:
//   - llms-full.txt (root + per-product) — regenerates too often to diff usefully
//   - v1/cloudflare-api-schemas/openapi.json — already mined by api-schemas.js
// Each entry's `path` is appended to baseUrl and also used as the on-disk
// path under data/middlecache, so the layout mirrors the URL structure.
const endpoints = [
	{ path: 'v1/cloudflare-skills/skills-manifest.json', kind: 'json' },
	{ path: 'v1/cloudflare-skills/skills.tar.gz', kind: 'tarball', extractTo: 'v1/cloudflare-skills/skills' },
	{ path: 'v1/cloudflare-mcps/mcps-manifest.json', kind: 'json' },
	{ path: 'v1/cloudflare-mcps/server-card.json', kind: 'json' },
	{ path: 'v1/products/reconciled-availability-certification.json', kind: 'json' },
	{ path: 'v1/application-controls/applications-with-controls.json', kind: 'json' },
	{ path: 'v1/workers-ai-model-catalog/ai-catalog.json', kind: 'json' },
	{ path: 'v1/workers-ai-model-catalog/workers-ai-catalog.json', kind: 'json' },
	{ path: 'v1/workers-ai-model-catalog/all-models-detail.json', kind: 'json' },
	{ path: 'v1/workers-ai-model-catalog/models.tar.gz', kind: 'tarball', extractTo: 'v1/workers-ai-model-catalog/models' },
];

async function fetchUrl(url) {
	const res = await fetch(url, { agent });
	if (!res.ok) {
		throw new Error(`Failed ${res.status} for ${url}`);
	}
	return res;
}

async function writeJson(relPath, body) {
	const parsed = JSON.parse(body);
	const sorted = parsed && typeof parsed === 'object' && !Array.isArray(parsed)
		? sortObjectByKeys(parsed)
		: parsed;
	const file = path.resolve(dataDir, relPath);
	await fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, stringify(sorted, null, '\t'));
}

async function writeText(relPath, body) {
	const file = path.resolve(dataDir, relPath);
	await fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, body);
}

async function fetchAndStore(endpoint) {
	const url = baseUrl + endpoint.path;
	console.log('Fetching', url);
	const res = await fetchUrl(url);

	if (endpoint.kind === 'tarball') {
		const extractDir = path.resolve(dataDir, endpoint.extractTo);
		await fs.ensureDir(extractDir);
		await fs.emptyDir(extractDir);
		// Both known tarballs (skills.tar.gz, models.tar.gz) wrap their content
		// in a single top-level directory; strip it so entries land directly
		// under extractDir.
		await pipeline(res.body, tar.x({ cwd: extractDir, strip: 1 }));
		console.log('Extracted', endpoint.path, '→', endpoint.extractTo);
		return;
	}

	const body = await res.text();
	if (endpoint.kind === 'json') {
		await writeJson(endpoint.path, body);
	} else {
		await writeText(endpoint.path, body);
	}
}

async function run() {
	console.log('Mining middlecache...');
	await fs.ensureDir(dataDir);

	const limit = pLimit(8);

	const failures = [];
	await Promise.all(endpoints.map(endpoint => limit(async () => {
		try {
			await fetchAndStore(endpoint);
		} catch (err) {
			console.error('Endpoint failed:', endpoint.path, err.message);
			failures.push({ path: endpoint.path, error: err.message });
		}
	})));

	if (failures.length > 0) {
		console.warn(`${failures.length} endpoint(s) failed:`, failures);
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/middlecache/**/*',
		],
		`${prefix} - Middlecache Data was updated! [skip ci]`,
		'CFData - Middlecache Data Update',
		'Pushed Middlecache Data: ' + prefix,
		'DISCORD_WEBHOOK_PRODUCT_AI',
	);

	console.log('Done!');
}

run();
