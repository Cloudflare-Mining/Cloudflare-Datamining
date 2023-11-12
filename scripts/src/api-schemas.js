import 'dotenv/config';
import path from 'node:path';

import $RefParser from '@stoplight/json-schema-ref-parser';
import dateFormat from 'dateformat';
import filenamify from 'filenamify';
import fs from 'fs-extra';
import stringify from 'json-stringify-safe';
import fetch from 'node-fetch';
import { rimraf } from 'rimraf';
//import OpenAPIParser from '@readme/openapi-parser';

import { sortObjectByKeys, tryAndPush } from './utils.js';

async function run() {
	console.log('Fetching API Schemas...');

	// cleanup previous files
	rimraf('../data/api-schemas/*.json', {
		glob: true,
	});

	await fs.ensureDir(path.resolve('../data/api-schemas/schemas'));
	await fs.emptyDir(path.resolve('../data/api-schemas/schemas'));

	// query schemas from git
	const schemasRes = await fetch('https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json');
	if (!schemasRes.ok) {
		throw new Error('Failed to fetch schemas');
	}
	try {
		const schemasJson = sortObjectByKeys(await schemasRes.json());

		const dereferenced = await $RefParser.dereference(schemasJson);
		const toWrite = {
			info: dereferenced.info,
			openapi: dereferenced.openapi,
			paths: sortObjectByKeys(dereferenced.paths),
			servers: dereferenced.servers,
		};
		await fs.writeFile(path.resolve('../data/api-schemas/openapi.json'), stringify(toWrite, null, '\t'));


		const byTag = {};
		// loop over paths and assign to byTag
		for (const [path, pathData] of Object.entries(toWrite.paths)) {
			for (const [method, methodData] of Object.entries(pathData)) {
				if (methodData.tags) {
					for (const tag of methodData.tags) {
						byTag[tag] ??= {};
						byTag[tag][`${method.toUpperCase()} ${path}`] = methodData;
					}
				} else {
					byTag.Untagged ??= {};
					byTag.Untagged[`${method.toUpperCase()} ${path}`] = methodData;
				}
			}
		}

		// write to folders by tag
		for (const [tag, tagData] of Object.entries(byTag)) {
			const tagName = filenamify(tag, { replacement: '-' });
			const file = path.resolve(`../data/api-schemas/schemas/${tagName}.json`);
			await fs.writeFile(file, stringify(sortObjectByKeys(tagData), null, '\t'));
		}

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
	} catch (err) {
		console.log('Failed to parse schemas');
		console.error(err);
	}
}
run();
