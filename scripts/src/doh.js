import 'dotenv/config';
import path from 'node:path';

import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import {tryAndPush, propertiesToArray} from './utils.js';

async function run(){
	const dir = path.resolve(`../data/doh`);
	await fs.ensureDir(dir);
	const dohResponse = await fetch(`https://cloudflare-dns.com/dns-query?name=cloudflare.com&do=true&type=A`, {
		headers: {
			'accept': 'application/dns-json',
		},
	});
	if(!dohResponse.ok){
		console.log(`Failed to get DNS response`, dohResponse.status, await dohResponse.text());
		return;
	}
	const json = await dohResponse.json();
	console.log(json);

	// trim to a single answer for nice diffs
	const trimmed = json;
	trimmed.Answer = trimmed.Answer.slice(0, 1);

	await fs.writeFile(path.resolve(dir, 'schema.json'), JSON.stringify(propertiesToArray(trimmed), null, '\t'));

	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/doh/*.json',
		],
		`${prefix} - DOH data was updated!`,
		'CFData - DOH data Update',
		'Pushed DOH data: ' + prefix,
	);
}
run();