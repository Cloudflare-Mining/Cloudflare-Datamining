import 'dotenv/config';
import path from 'node:path';

import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import OpenAPIParser from '@readme/openapi-parser';
import stringify from 'json-stringify-safe';

import {tryAndPush, sortObjectByKeys} from './utils.js';

async function run() {
	console.log('Fetching API Schemas...');

	await fs.ensureDir(path.resolve('../data/api-schemas/schemas'));
	await fs.emptyDir(path.resolve('../data/api-schemas/schemas'));

	// query schemas from git
	const schemasRes = await fetch('https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json');
	if(!schemasRes.ok) {
		throw new Error('Failed to fetch schemas');
	}
	const schemasJson = sortObjectByKeys(await schemasRes.json());

	const dereferenced = await OpenAPIParser.dereference(schemasJson, {
		circular: 'ignore',
	});
	const toWrite = {
		info: dereferenced.info,
		openapi: dereferenced.openapi,
		paths: sortObjectByKeys(dereferenced.paths),
		servers: dereferenced.servers,
	};
	await fs.writeFile(path.resolve('../data/api-schemas/openapi.json'), stringify(toWrite, null, '\t'));

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/api-schemas/*.json',
			'data/api-schemas/schemas/*.json',
		],
		`${prefix} - API Schemas were updated! [skip ci]`,
		'CFData - API Schema Data Update',
		'Pushed API Schema Data: ' + prefix,
		'DISCORD_WEBHOOK_API',
	);

	console.log('Done! :)');
}
run();
