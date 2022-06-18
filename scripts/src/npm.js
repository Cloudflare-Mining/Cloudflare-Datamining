import 'dotenv/config';
import search from 'libnpmsearch';
import path from 'path';
import fs from 'fs/promises';
import dateFormat from 'dateformat';

import {tryAndPush} from './utils.js';

async function run(){
	console.log('Fetching NPM Data...');
	const rawData = await search('@cloudflare', {
		limit: 1000,
	});

	const data = rawData.map((pkg) => {
		return {
			name: pkg.name,
			description: pkg.description,
			version: pkg.version,
			date: pkg.date,
			links: pkg.links,
		};
	}).sort((pkgA, pkgB) => (pkgA.date < pkgB.date ? 1 : -1));
	await fs.writeFile(path.resolve('../data/npm.json'), JSON.stringify(data, null, 4));

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/npm.json'],
		`${prefix} - NPM Package Data was updated!`,
		'CFData - NPM Package Data Update',
		'Pushed NPM Package Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();