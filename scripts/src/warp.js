import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import filenamify from 'filenamify';


import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve('../data/warp');
await fs.ensureDir(dir);

async function getWarpVersions(platform, type, baseURL) {
	console.log('Fetching WARP Versions', platform, type);
	const getVersionsURL = `${baseURL}/public_releases?scope=tester&top=10000`;
	const getVersionsRes = await fetch(getVersionsURL, {agent});
	if(!getVersionsRes.ok) {
		console.error('Failed to get versions', getVersionsRes.status, await getVersionsRes.text());
		return;
	}
	const getVersions = await getVersionsRes.json();
	const platformDir = path.resolve(dir, platform, type);
	await fs.ensureDir(platformDir);
	await fs.writeFile(path.resolve(platformDir, 'versions.json'), JSON.stringify(getVersions, null, '\t'));

	console.log('Querying for specific version info', platform, type);
	for(const version of getVersions) {
		const versionString = filenamify(version.version);
		const versionDir = path.resolve(platformDir, versionString);
		await fs.ensureDir(versionDir);
		const versionInfoUrl = `${baseURL}/releases/${version.id}`;
		const versionInfo = await fetch(versionInfoUrl, {agent});
		if(!versionInfo.ok) {
			console.error('Failed to get version info', versionInfo.status, await versionInfo.text());
			continue;
		}
		const versionInfoJson = await versionInfo.json();
		// some fields include signatures which change every time
		delete versionInfoJson.install_url;
		delete versionInfoJson.download_url;
		delete versionInfoJson.app_icon_url;
		await fs.writeFile(path.resolve(versionDir, 'info.json'), JSON.stringify(versionInfoJson, null, '\t'));
	}

}

await getWarpVersions('macos', 'release', 'https://install.appcenter.ms/api/v0.1/apps/cloudflare/1.1.1.1-macos-1/distribution_groups/release');
await getWarpVersions('macos', 'beta', 'https://install.appcenter.ms/api/v0.1/apps/cloudflare/1.1.1.1-macos/distribution_groups/beta');
await getWarpVersions('windows', 'beta', 'https://install.appcenter.ms/api/v0.1/apps/cloudflare/1.1.1.1-windows/distribution_groups/beta');
await getWarpVersions('windows', 'release', 'https://install.appcenter.ms/api/v0.1/apps/cloudflare/1.1.1.1-windows-1/distribution_groups/release');

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/warp/*',
		'data/warp/*.json',
		'data/warp/**/*.json',
	],
	`${prefix} - WARP Data was updated!`,
	'CFData - WARP Data Update',
	'Pushed WARP Data: ' + prefix,
);
