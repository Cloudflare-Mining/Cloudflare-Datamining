import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import process from 'node:process';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import {tryAndPush} from './utils.js';

const BASE = 'https://api.cloudflare.com/client/v4';

async function callApi(path){
	const res = await fetch(`${BASE}${path}`, {
		headers: {
			'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
			'X-Auth-Key': process.env.CLOUDFLARE_GLOBAL_KEY,
		},
	});

	if(res.status === 200){
		const json = await res.json();
		if(json.success){
			return json.result;
		}
	}
	return null;
}

async function fetchAndWrite(apiPath, filePath, sortFunc = null){
	const json = await callApi(apiPath);

	if(json !== null){
		await fs.ensureDir(path.dirname(filePath));
		let data = json;
		if(sortFunc !== null){
			data = json.sort(sortFunc);
		}
		await fs.writeFile(path.resolve(filePath), JSON.stringify(data, null, '\t'));
	}
}

async function gitPush(){
	const date = new Date();
	const commitMessage = dateFormat(date, 'd mmmm yyyy') + ` - Updated account (flags, entitlements, etc.)`;

	await tryAndPush(
		['data/account/*.json'],
		commitMessage,
		'CFData - Account (Flags, Entitlements, etc.) Update',
		'Pushed account (Flags, Entitlements, etc.) update: ' + commitMessage,
	);
}

async function run(){
	console.log('Fetching...');
	// Flags
	await fetchAndWrite(`/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/flags`, '../data/account/account_flags.json');
	await fetchAndWrite(`/zones/${process.env.CLOUDFLARE_ZONE_ID}/flags`, '../data/account/zone_flags.json');

	// Entitlements
	await fetchAndWrite(`/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/entitlements`, '../data/account/account_entitlements.json');
	await fetchAndWrite(`/zones/${process.env.CLOUDFLARE_ZONE_ID}/entitlements`, '../data/account/zone_entitlements.json');

	// Roles
	await fetchAndWrite(`/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/roles?per_page=100`, '../data/account/account_roles.json');

	// API tokens permission groups
	await fetchAndWrite(`/user/tokens/permission_groups`, '../data/account/token_permission_groups.json', (itemA, itemB) => (itemA.name + itemA.id).localeCompare(itemB.name + itemB.id));

	console.log('Pushing!');
	await gitPush();

	console.log('Done! :)');
}



run();