import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';

import { cfRequest, sortObjectByKeys, tryAndPush } from '../utils.js';

const dir = path.resolve('../data/products/integrations');
await fs.ensureDir(dir);

const integrations = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/integrations?per_page=1000`);
const integrationsJson = await integrations.json();

for (const integration of integrationsJson?.result ?? []) {
	const integrationDir = path.resolve(dir, integration.alias ?? integration.id);
	await fs.ensureDir(integrationDir);
	const filename = path.resolve(integrationDir, 'info.json');
	await fs.writeJson(filename, integration, { spaces: '\t' });

	console.log('Get integration manifest', integration.id, integration.name, integration.alias);
	const manifestInfo = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/integrations/${integration.id}/manifests/${integration.latest_version}`);
	if (!manifestInfo.ok) {
		console.log('Failed to get manifest', integration.id, integration.name, integration.alias, manifestInfo.status, manifestInfo.statusText);
		continue;
	}
	const manifestJson = await manifestInfo.json();
	const versionsDir = path.resolve(integrationDir, 'versions');
	await fs.ensureDir(versionsDir);
	const file = path.resolve(versionsDir, `${integration.latest_version}.json`);
	if (manifestJson?.result) {
		manifestJson.result.assets ??= [];
		await fs.writeJson(file, sortObjectByKeys(manifestJson.result), { spaces: '\t' });
	}

	// write latest manifest to manifest.json
	const latestManifestFile = path.resolve(integrationDir, 'latest_manifest.json');
	if (latestManifestFile?.result) {
		manifestJson.result.assets ??= [];
		await fs.writeJson(latestManifestFile, sortObjectByKeys(manifestJson.result), { spaces: '\t' });
	}

	// TODO: maybe get previous versions?
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/integrations/*',
	],
	`${prefix} - Product: Integrations was updated!`,
	'CFData - Product: Integrations Update',
	'Pushed Product: Integrations Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_INTEGRATIONS',
);
