import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';

import { cfRequest, tryAndPush } from '../utils.js';

const dir = path.resolve('../data/products/logpush');
await fs.ensureDir(dir);

const account_datasets = [
	'dns_firewall_logs',
	'network_analytics_logs',
	'audit_logs',
	'workers_trace_events',
	'access_requests',
	'gateway_dns',
	'gateway_http',
	'gateway_network',
	'magic_ids_detections',
	'sinkhole_http_logs',
	'zero_trust_network_sessions',
	'casb_findings',
	'device_posture_results',
];

const zone_datasets = [
	'http_requests',
	'spectrum_events',
	'firewall_events',
	'nel_reports',
	'dns_logs',
	'page_shield_events',
];

console.log('Making requests...');

for (const dataset of account_datasets) {
	const file = path.resolve(dir, `account_${dataset}_fields.json`);
	const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/logpush/datasets/${dataset}/fields`;

	console.log(`Fetch for ${dataset}...`);
	const res = await cfRequest(url);
	if (!res.ok) {
		console.log(`${dataset} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const json = await res.json();
	await fs.writeJson(file, json.result, { spaces: '\t' });
}

for (const dataset of zone_datasets) {
	const file = path.resolve(dir, `zone_${dataset}_fields.json`);
	const url = `https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE_ID}/logpush/datasets/${dataset}/fields`;

	console.log(`Fetch for ${dataset}...`);
	const res = await cfRequest(url);
	if (!res.ok) {
		console.log(`${dataset} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const json = await res.json();
	await fs.writeJson(file, json.result, { spaces: '\t' });
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/logpush/*.json',
	],
	`${prefix} - Product: Logpush Data was updated!`,
	'CFData - Product: Logpush Data Update',
	'Pushed Product: Logpush Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_LOGPUSH',
);
