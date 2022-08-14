import 'dotenv/config';
import path from 'node:path';
import {randomUUID} from 'node:crypto';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import {markdownTable} from 'markdown-table';
import {createRequire} from "node:module";
const require = createRequire(import.meta.url);
const tlds = require('tlds');
const psl = require('psl/data/rules.json');
const lookupList = new Set(tlds);
for(const tld of psl){
	let pushTld = tld;
	if(tld.startsWith('*.')){
		pushTld = tld.slice(2);
	}
	lookupList.add(pushTld);
}
const randomDomain = randomUUID();

import {tryAndPush, cfRequest} from './utils.js';

const dir = path.resolve(`../data/registrar`);
await fs.ensureDir(dir);

const results = {};
const batchSize = 30;
const splicedArrays = [];
const fullList = [...lookupList].sort();
for(let i = 0; i < fullList.length; i += batchSize){
	splicedArrays.push(fullList.slice(i, i + batchSize));
}

console.log(`Fetching in batches of ${batchSize}. Total batches: ${splicedArrays.length}`);
for(const [index, batch] of splicedArrays.entries()){
	console.log(`Fetching for batch ${index + 1} of ${splicedArrays.length}...`);
	const res = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/registrar/domains`, {
		method: 'POST',
		body: JSON.stringify({
			id: batch.map(tld => `${randomDomain}.${tld}`),
		}),
	});
	const json = await res.json();
	if(!json.result || !json.success){
		continue;
	}
	for(const domain of json.result ?? []){
		const otherTld = domain.name.slice(Math.max(0, domain.name.indexOf('.') + 1));
		if(results[otherTld]){
			continue;
		}
		if(!domain.fees.renewal_fee || domain.fees.renewal_fee?.toLowerCase?.() === 'unsupported'){
			continue;
		}
		console.log(`Found supported TLD: ${otherTld}`);
		results[otherTld] = domain.fees;
		const file = path.resolve(`${dir}/${otherTld}.json`);
		await fs.writeFile(file, JSON.stringify(domain.fees, null, '\t'));
	}
}

// generate markdown table
const files = await fs.readdir(dir);
const rows = [
	['TLD', 'ICANN fee', 'Redemption fee', 'Registrar fee', 'Renewal fee', 'Transfer fee'],
];
for(const file of files){
	if(!file.endsWith('.json')){
		continue;
	}
	const data = await fs.readJson(path.resolve(`${dir}/${file}`));
	rows.push([
		file.replace('.json', ''),
		data.icann_fee,
		data.redemption_fee,
		data.registration_fee,
		data.renewal_fee,
		data.transfer_fee,
	]);
}
const table = markdownTable(rows);
await fs.writeFile(path.resolve(`${dir}/README.md`), table);

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/registrar/*.json',
		'data/registrar/README.md',
	],
	`${prefix} - Registrar Data was updated!`,
	'CFData - Registrar Data Update',
	'Pushed Registrar Data: ' + prefix,
);
