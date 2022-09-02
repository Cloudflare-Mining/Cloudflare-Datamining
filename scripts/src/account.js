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

async function fetchAndWrite(apiPath, filePath){
	const json = await callApi(apiPath);

	if(json !== null){
		await fs.ensureDir(path.dirname(filePath));
		await fs.writeFile(path.resolve(filePath), JSON.stringify(json, null, '\t'));
	}
}

async function gitPush(){
	const date = new Date();
	const commitMessage = dateFormat(date, 'd mmmm yyyy') + ` - Updated flags`;

	await tryAndPush(
		['data/account/*.json'],
		commitMessage,
		'CFData - Flags Update',
		'Pushed flags update: ' + commitMessage,
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

	console.log('Pushing!');
	await gitPush();

	console.log('Done! :)');
}



run();