import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import { propertiesToArray, tryAndPush } from './utils.js';

async function run() {
	const dir = path.resolve('../data/doh');
	await fs.ensureDir(dir);

	const tests = [
		{
			name: 'schema',
			url: 'https://cloudflare-dns.com/dns-query?name=cloudflare.com&do=true&type=A',
		},
		// {
		// 	name: 'nxdomain',
		// 	url: 'https://cloudflare-dns.com/dns-query?name=fakedomain&do=true',
		// },
		{
			name: 'dnssec-failed',
			url: 'https://cloudflare-dns.com/dns-query?name=dnssec-failed.org&do=true',
		},
	];

	for (const test of tests) {
		const dohResponse = await fetch(test.url, {
			headers: {
				'accept': 'application/dns-json',
			},
		});
		if (!dohResponse.ok) {
			console.log('Failed to get DNS response', dohResponse.status, await dohResponse.text());
			return;
		}
		const headers = Object.fromEntries(dohResponse.headers.entries());
		const json = await dohResponse.json();
		console.log(headers, json);

		// trim to a single item in arrays for nice diffs
		const trimmed = json;
		for (const key in trimmed) {
			if (Array.isArray(trimmed[key])) {
				trimmed[key] = trimmed[key].slice(0, 1);
			}
		}

		await fs.writeFile(path.resolve(dir, `${test.name}.json`), JSON.stringify(propertiesToArray(trimmed), null, '\t'));
	}

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
