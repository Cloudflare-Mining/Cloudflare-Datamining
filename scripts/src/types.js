import 'dotenv/config';
import pacote from 'pacote';
import path from 'node:path';
import dateFormat from 'dateformat';
import {deleteAsync} from 'del';

import {tryAndPush} from './utils.js';

async function run(){
	console.log('Fetching Cloudflare types...');

	await pacote.extract('@cloudflare/types', path.resolve('../data/types'));
	// This definitely isn't battle-hardended, but good enough for this
	const delPaths = ['../data/types/dist', '../data/types/es', '../data/types/lib'].map(delPath => path.resolve(delPath));
	await deleteAsync(delPaths, {
		force: true,
	});

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/types/*'],
		`${prefix} - @cloudflare/types Data was updated!`,
		'CFData - @cloudflare/types Data Update',
		'Pushed @cloudflare/types Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();