import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import pacote from 'pacote';

import { tryAndPush } from './utils.js';

async function run() {
	console.log('Fetching Cloudflare Workers Types...');

	await pacote.extract('@cloudflare/workers-types', path.resolve('../data/workers-types'));

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/workers-types/*'],
		`${prefix} - @cloudflare/workers-types Data was updated!`,
		'CFData - @cloudflare/workers-types Data Update',
		'Pushed @cloudflare/workers-types Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();
