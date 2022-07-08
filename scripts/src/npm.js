import 'dotenv/config';
import search from 'libnpmsearch';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import filenamify from 'filenamify';
import pacote from 'pacote';

import {tryAndPush} from './utils.js';

async function run(){
	console.log('Fetching NPM Data...');
	const rawData = [
		...await search('@cloudflare', {
			limit: 1000,
		}),
		...await search('@miniflare', {
			limit: 1000,
		}),
		...await search('@cfpreview', {
			limit: 1000,
		}),
		...await search('maintainer:cf-ci-write', {
			limit: 1000,
		}),
		...await search('maintainer:cf-ci2', {
			limit: 1000,
		}),
		...await search('maintainer:wrangler-publisher', {
			limit: 1000,
		}),
	];

	const rawMaintainers = rawData.flatMap(pkg => pkg.maintainers);
	const uniqueMaintainers = [];
	for(const maintainer of rawMaintainers){
		if(!uniqueMaintainers.some(findMaintainer => findMaintainer.username === maintainer.username)){
			uniqueMaintainers.push({
				username: maintainer.username,
			});
		}
	}
	await fs.ensureDir(path.resolve('../data/packages'));
	await fs.emptyDir(path.resolve('../data/packages'));
	await fs.writeFile(path.resolve('../data/packages/maintainers.json'), JSON.stringify(uniqueMaintainers, null, '\t'));

	const getDataAndWriteFiles = [];
	for(const packageInfo of rawData){
		let name = filenamify(packageInfo.name, {replacement: '__'});
		if(packageInfo.scope){
			const nameWithoutScope = filenamify(packageInfo.name.replace(`@${packageInfo.scope}/`, ''));
			if(packageInfo.scope === 'unscoped'){
				name = `_unscoped/${nameWithoutScope}`;
			}else{
				name = `@${packageInfo.scope}/${nameWithoutScope}`;
			}
		}
		getDataAndWriteFiles.push(async () => {
			const dir = `../data/packages/${name}`;
			await fs.ensureDir(path.resolve(dir));
			fs.writeFile(
				path.resolve(`${dir}/info.json`),
				JSON.stringify({
					name: packageInfo.name,
					description: packageInfo.description,
					version: packageInfo.version,
					date: packageInfo.date,
					links: packageInfo.links,
				}, null, '\t'),
			);
			const packument = await pacote.packument(packageInfo.name);
			fs.writeFile(
				path.resolve(`${dir}/packument.json`),
				JSON.stringify(packument, null, '\t'),
			);
		});
	}
	await Promise.all(getDataAndWriteFiles.map(fn => fn()));

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/packages/*'],
		`${prefix} - NPM Package Data was updated!`,
		'CFData - NPM Package Data Update',
		'Pushed NPM Package Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();