import 'dotenv/config';
import path from 'node:path';

import { parse } from 'acorn';
import { full } from 'acorn-walk';
import dateFormat from 'dateformat';
import fs from 'fs-extra';
import jsBeautify from 'js-beautify';
import fetch from 'node-fetch';

import { tryAndPush } from '../utils.js';

async function run() {
	const dir = path.resolve('../data/products/analytics');
	await fs.ensureDir(dir);

	const res = await fetch('https://static.cloudflareinsights.com/beacon.min.js');
	if (!res.ok) {
		console.log(`beacon.min.js failed: ${res.status} ${res.statusText}`);
		return;
	}

	const js = await res.text();
	const beautified = jsBeautify(js, {
		indent_size: 4,
		indent_char: '\t',
	});

	await fs.writeFile(path.resolve(dir, 'beacon.js'), beautified);

	// ast parser
	const ast = parse(js, {
		ecmaVersion: 2020,
		sourceType: 'module',
	});
	await fs.writeFile(path.resolve(dir, 'beacon.ast.json'), JSON.stringify(ast, null, 4));

	// walk ast
	const versions = {};
	full(ast, (node) => {
		if (
			node.type === 'ObjectExpression' &&
			node.properties?.find(prop => prop.key?.name === 'versions')
		) {
			const version = node.properties?.find(prop => prop.key?.name === 'versions');
			for (const prop of version?.value?.properties || []) {
				if (prop?.value?.type === 'Literal') {
					versions[prop.key.name] = prop.value.value;
				}
			}

		}
	});
	await fs.writeFile(path.resolve(dir, 'beacon.json'), JSON.stringify(versions, null, '\t'));

	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/products/analytics/*.js',
			'data/products/analytics/*.json',
		],
		`${prefix} - Product: Analytics Data was updated!`,
		'CFData - Product: Analytics Data Update',
		'Pushed Product: Analytics Data: ' + prefix,
		'DISCORD_WEBHOOK_PRODUCT_ANALYTICS',
	);

}
run();
