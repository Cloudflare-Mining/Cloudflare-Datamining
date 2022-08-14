import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import {markdownTable} from 'markdown-table';
import {createRequire} from "node:module";
const require = createRequire(import.meta.url);
const tlds = require('tlds');

import {tryAndPush, cfRequest} from './utils.js';

const dir = path.resolve(`../data/billing-rate-plans/registrar`);
await fs.ensureDir(dir);

const ratePlans = new Set([]);
// add tlds
for(const tld of tlds){
	ratePlans.add(`registrar_tld_${tld}`);
}

for(const ratePlan of [...ratePlans].sort()){
	const file = path.resolve(`${dir}/${ratePlan.replace('registrar_tld_', '')}.json`);
	console.log('Fetching for', ratePlan);
	const res = await cfRequest(`https://api.cloudflare.com/client/v4/billing/rate_plans/${ratePlan}`);
	if(!res.ok){
		console.warn(`${ratePlan} failed to be fetched`);
		if(res.status === 404){
			console.warn(`${ratePlan} not found`);
			try{
				await fs.remove(file);
			}catch{}
		}
		continue;
	}
	const json = await res.json();
	if(!json.result || !json.success){
		console.warn(`${ratePlan} failed to be fetched`, json);
		continue;
	}
	await fs.writeFile(file, JSON.stringify(json.result, null, '\t'));
}

// generate markdown table
const files = await fs.readdir(dir);
const rows = [
	['TLD', 'ICANN fee', 'Redemption fee', 'Registrar fee', 'Renewal fee'],
];
for(const file of files){
	const data = await fs.readJson(path.resolve(`${dir}/${file}`));
	const keys = {};
	for(const component of data.components){
		keys[component.name] = component?.tiers?.[0]?.price;
	}
	rows.push([
		file.replace('.json', ''),
		keys.icann_fee,
		keys.redemption_fee,
		keys.registration_fee,
		keys.renewal_fee,
	]);
}
const table = markdownTable(rows);
await fs.writeFile(path.resolve(`${dir}/README.md`), table);

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/billing-rate-plans/registrar/*.json',
		'data/billing-rate-plans/registrar/README.md',
	],
	`${prefix} - Registrar Rate Plan Data was updated!`,
	'CFData - Registrar Rate Plans Data Update',
	'Pushed Registrar Rate Plans Data: ' + prefix,
);
