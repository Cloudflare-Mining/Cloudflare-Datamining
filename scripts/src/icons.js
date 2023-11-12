import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import { deleteAsync } from 'del';
import pacote from 'pacote';

import { tryAndPush } from './utils.js';

async function run() {
	console.log('Fetching Cloudflare icons...');

	await pacote.extract('@cloudflare/component-icon', path.resolve('../data/icons'));
	// This definitely isn't battle-hardended, but good enough for this
	const delPaths = ['../data/icons/lib'].map(delPath => path.resolve(delPath));
	await deleteAsync(delPaths, {
		force: true,
	});

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/icons/*'],
		`${prefix} - @cloudflare/icons Data was updated!`,
		'CFData - @cloudflare/icons Data Update',
		'Pushed @cloudflare/icons Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();
