import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';

import { cfRequest, tryAndPush } from '../utils.js';

const dir = path.resolve('../data/products/ai');
await fs.ensureDir(dir);

const file = path.resolve(dir, 'models.json');

const modelsURL = new URL(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/models/search?per_page=100`);
let hasMore = true;

let models = [];
while (hasMore) {
	console.log(`Fetch for ${modelsURL}...`);
	const res = await cfRequest(modelsURL, {
		method: 'GET',
	});
	if (!res.ok) {
		console.log(`models failed: ${res.status} ${res.statusText}`);
		break;
	}
	const json = await res.json();
	console.log(json);
	if (!json.result) {
		console.log(`models failed: ${json.errors[0].message}`);
		break;
	}
	models = [...models, ...json.result];
	if (json.result_info.page * json.result_info.per_page >= json.result_info.total_count) {
		hasMore = false;
		break;
	}
	modelsURL.searchParams.set('page', json.result_info.page + 1);
	hasMore = true;
}

// sort by ID and write to file
models = models.sort((modelA, modelB) => modelA.id - modelB.id);
await fs.writeJson(file, models, { spaces: '\t' });

const schemaFile = path.resolve(dir, 'models-schema.json');
const schemaRes = await fetch('https://ai.cloudflare.com/api/models');
if (!schemaRes.ok) {
	console.log(`models-schema failed: ${schemaRes.status} ${schemaRes.statusText}`);
} else {
	const schemaJson = await schemaRes.json();
	if (schemaJson.models) {
		schemaJson.models = schemaJson.models.sort((modelA, modelB) => modelA.id - modelB.id);
	}
	await fs.writeJson(schemaFile, schemaJson, { spaces: '\t' });
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/ai/*.json',
	],
	`${prefix} - Product: AI Data was updated!`,
	'CFData - Product: AI Data Update',
	'Pushed Product: AI Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_AI',
);
