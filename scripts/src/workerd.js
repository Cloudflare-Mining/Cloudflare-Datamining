import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';

import { parseWorkerdCapnp } from './parse-capnp.js';
import { tryAndPush } from './utils.js';

async function run() {
	// load pyodide lock
	const dir = path.resolve('../data/workerd');
	try {
		const lockRes = await fetch('https://github.com/cloudflare/pyodide-build-scripts/releases/latest/download/pyodide-lock.json');
		const lock = await lockRes.json();
		await fs.writeJson(path.resolve(dir, 'pyodide-lock.json'), lock, {
			spaces: '\t',
		});
	} catch {
		console.log('Failed to fetch pyodide lock');
	}

	// parse workerd capnp schemas
	try {
		console.log('Parsing workerd capnp schemas');
		await fs.ensureDir(dir);

		const workerdDir = path.resolve('../temp/workerd');
		const output = parseWorkerdCapnp(workerdDir);

		await fs.writeJson(path.resolve(dir, 'parsed.json'), output, {
			spaces: '\t',
		});
	} catch (error) {
		console.log('Failed to parse workerd capnp schemas:', error.message);
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/workerd/*.json'],
		`${prefix} - workerd Data was updated!`,
		'CFData - workerd Data Update',
		'Pushed workerd Data: ' + prefix,
		'DISCORD_WEBHOOK_WORKERD',
	);

	console.log('Done! :)');
}

run();
