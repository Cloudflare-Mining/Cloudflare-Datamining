import 'dotenv/config';
import path from 'node:path';
import {randomUUID} from 'node:crypto';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import {markdownTable} from 'markdown-table';
import pLimit from 'p-limit';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const tlds = require('tlds');
const lookupList = new Set(tlds);
// DISABLE PSL FOR NOW
// TOO SLOW, SO JUST ADD A COUPLE WE KNOW FOR SURE
//const psl = require('psl/data/rules.json');
// for(const tld of psl){
// 	let pushTld = tld;
// 	if(tld.startsWith('*.')){
// 		pushTld = tld.slice(2);
// 	}
// 	lookupList.add(pushTld);
// }

lookupList.add('co.uk');
lookupList.add('me.uk');
lookupList.add('net.uk');
lookupList.add('org.uk');
const randomDomain = randomUUID();

import {tryAndPush, cfRequest, sortObjectByKeys} from './utils.js';

const dir = path.resolve('../data/registrar');
await fs.ensureDir(dir);

const results = {};
const fullList = [...lookupList].sort();

const limit = pLimit(4);
const promises = [];

console.log(`Fetching domains. Total: ${fullList.length}`);
for(const tld of fullList) {
	promises.push(limit(async () => {
		const lookupDomain = `${randomDomain}.${tld}`;
		if(results[tld]) {
			console.log(`Skipping ${tld} as it's already been fetched`);
			return;
		}
		console.log(`Fetching for ${lookupDomain}`);
		const res = await cfRequest(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/registrar/domains/search`, {
			method: 'POST',
			body: JSON.stringify({
				query: lookupDomain,
			}),
		});
		if(!res.ok) {
			console.warn(`Failed to fetch domains for ${lookupDomain}. Response code: ${res.status}`);
			return;
		}
		const json = await res.json();
		if(!json.result || !json.success) {
			return;
		}
		if(json.result?.check_result?.supported_tld === false) {
			return;
		}
		for(const domain of json.result?.domains ?? []) {
			const otherTld = domain.name.slice(Math.max(0, domain.name.indexOf('.') + 1));
			if(results[otherTld]) {
				continue;
			}
			console.log(`Found supported TLD: ${otherTld}`);
			results[otherTld] = {
				price: domain.price,
				renewal: domain.renewal,
				icann_fee: domain.icann_fee,
			};
			const file = path.resolve(`${dir}/${otherTld}.json`);
			await fs.writeFile(file, JSON.stringify(results[otherTld], null, '\t'));
		}
	}));
}

await Promise.all(promises);

// generate markdown table
const files = await fs.readdir(dir);
const rows = [
	['TLD', 'ICANN fee', 'Price', 'Renewal'],
];
for(const file of files) {
	if(!file.endsWith('.json') || file === '_list.json') {
		continue;
	}
	const data = await fs.readJson(path.resolve(`${dir}/${file}`));
	rows.push([
		file.replace('.json', ''),
		data.icann_fee,
		data.price,
		data.renewal,
	]);
}
const table = markdownTable(rows);
await fs.writeFile(path.resolve(`${dir}/README.md`), table);

const sorted = sortObjectByKeys(results);
await fs.writeFile(path.resolve(`${dir}/_list.json`), JSON.stringify(sorted, null, '\t'));

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
