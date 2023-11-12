import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';

import { tryAndPush } from './utils.js';

async function run() {
	console.log('Parsing workerd capnp-parse output');
	const dir = path.resolve('../data/workerd');
	await fs.ensureDir(dir);

	const output = await fs.readJson(path.resolve('../temp/workerd-output.json'));

	await fs.writeJson(path.resolve(dir, 'parsed.json'), output, {
		spaces: '\t',
	});

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
