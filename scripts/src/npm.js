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

	const rawMaintainers = rawData.flatMap(pkg => pkg.maintainers);
	const uniqueMaintainers = [];
	for(const maintainer of rawMaintainers){
		if(!uniqueMaintainers.some(findMaintainer => findMaintainer.username === maintainer.username)){
			uniqueMaintainers.push(maintainer);
		}
	}
	await fs.writeFile(path.resolve('../data/npm-maintainers.json'), JSON.stringify(uniqueMaintainers, null, 4));

	const packages = rawData.map((pkg) => {
		return {
			name: pkg.name,
			description: pkg.description,
			version: pkg.version,
			date: pkg.date,
			links: pkg.links,
		};
	}).sort((pkgA, pkgB) => (pkgA.date < pkgB.date ? 1 : -1));
	await fs.writeFile(path.resolve('../data/npm.json'), JSON.stringify(packages, null, 4));

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/npm.json', 'data/npm-maintainers.json'],
		`${prefix} - NPM Package Data was updated!`,
		'CFData - NPM Package Data Update',
		'Pushed NPM Package Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();