import 'dotenv/config';
import path from 'node:path';

import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import filenamify from 'filenamify';
import {rimraf} from 'rimraf';

import {tryAndPush, sortObjectByKeys} from './utils.js';

function findAndReplaceSchema(schema, schemas) {
	// loop through object/array recursively and replace $ref with actual schema
	if(Array.isArray(schema)) {
		for(const arrayKey in schema) {
			const schemaItem = schema[arrayKey];
			schema[arrayKey] = findAndReplaceSchema(schemaItem, schemas);
		}
	}else if(typeof schema === 'object' && schema !== null) {
		for(const key in schema) {
			if(key === '$ref') {
				const ref = schema[key];
				if(ref.startsWith('#/components/schemas/')) {
					const schemaName = ref.replace('#/components/schemas/', '');
					const fixedSchema = schemas[schemaName];
					if(fixedSchema) {
						schema = fixedSchema;
					}
				}
			}else{
				schema[key] = findAndReplaceSchema(schema[key], schemas);
			}
		}
	}
	return schema;
}

async function run() {
	return; // disabled for now
	/* eslint-disable no-unreachable */
	console.log('Fetching API Schemas...');

	// cleanup previous files
	rimraf('../data/api-schemas/*.json', {
		glob: true,
	});
	await fs.ensureDir(path.resolve('../data/api-schemas/schemas'));
	await fs.emptyDir(path.resolve('../data/api-schemas/schemas'));

	// query schemas from git
	const schemasRes = await fetch('https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json');
	if(!schemasRes.ok) {
		throw new Error('Failed to fetch schemas');
	}
	const schemasJson = sortObjectByKeys(await schemasRes.json());

	const pruned = structuredClone(schemasJson);
	delete pruned.components;
	delete pruned.paths;
	await fs.writeFile(path.resolve('../data/api-schemas/_info.json'), JSON.stringify(pruned, null, '\t'));

	let byTag = {};
	// loop over paths and assign to byTag
	for(const [path, pathData] of Object.entries(schemasJson.paths)) {
		for(const [method, methodData] of Object.entries(pathData)) {
			if(methodData.tags) {
				for(const tag of methodData.tags) {
					byTag[tag] ??= {};
					byTag[tag][`${method.toUpperCase()} ${path}`] = methodData;
				}
			}else{
				byTag.Untagged ??= {};
				byTag.Untagged[`${method.toUpperCase()} ${path}`] = methodData;
			}
		}
	}

	const schemas = findAndReplaceSchema(structuredClone(schemasJson.components.schemas), schemasJson.components.schemas);
	for(const [schemaName, schema] of Object.entries(schemas)) {
		const schemaFilename = filenamify(schemaName, {replacement: '-'});
		const file = path.resolve(`../data/api-schemas/schemas/${schemaFilename}.json`);
		await fs.writeFile(file, JSON.stringify(sortObjectByKeys(findAndReplaceSchema(structuredClone(schema), schemas)), null, '\t'));
	}

	byTag = findAndReplaceSchema(byTag, schemas);

	// write to folderes by tag
	for(const [tag, tagData] of Object.entries(byTag)) {
		const tagName = filenamify(tag, {replacement: '-'});
		const file = path.resolve(`../data/api-schemas/${tagName}.json`);
		await fs.writeFile(file, JSON.stringify(sortObjectByKeys(tagData), null, '\t'));
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
}
run();
