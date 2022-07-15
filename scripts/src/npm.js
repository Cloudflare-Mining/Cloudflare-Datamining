import 'dotenv/config';
import search from 'libnpmsearch';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import filenamify from 'filenamify';
import pacote from 'pacote';
import getUrls from 'get-urls';

import {tryAndPush} from './utils.js';

const wantedPackumentFields = [
	'name',
	'dist-tags',
	'versions',
	'modified',
];
const wantedVersionFields = [
	'name',
	'version',
	'dependencies',
	'devDependencies',
	'peerDependencies',
	'bin',
	'dist',
	'engines',
	'stratus',
	'metadata',
];

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
		...await search('wrangler maintainer:threepointone ', {
			limit: 1,
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
			console.log('Processing', name);
			const extractDir = path.resolve(`../data/packages-extracted/${name}`);
			await fs.ensureDir(extractDir);
			await pacote.extract(packageInfo.name, extractDir);
			const dir = `../data/packages/${name}`;
			await fs.ensureDir(path.resolve(dir));
			const packument = await pacote.packument(packageInfo.name, {
				fullMetadata: true,
			});

			const rawTags = Object.keys(packument['dist-tags']);
			const tags = {};
			for(const tag of rawTags){
				tags[tag] = {
					version: packument['dist-tags'][tag],
					date: packument.time?.[packument['dist-tags'][tag]],
				};
			}
			fs.writeFile(
				path.resolve(`${dir}/info.json`),
				JSON.stringify({
					name: packageInfo.name,
					description: packageInfo.description,
					version: packageInfo.version,
					date: packageInfo.date,
					links: packageInfo.links,
					tags,
				}, null, '\t'),
			);

			const trimmedPackument = {};
			for(const field of wantedPackumentFields){
				trimmedPackument[field] = packument[field];
			}
			for(const version of Object.keys(trimmedPackument.versions)){
				const trimmedVersion = {};
				for(const field of wantedVersionFields){
					trimmedVersion[field] = packument.versions[version][field];
				}
				trimmedPackument.versions[version] = trimmedVersion;
			}
			fs.writeFile(
				path.resolve(`${dir}/packument.json`),
				JSON.stringify(trimmedPackument, null, '\t'),
			);
		});
	}
	await Promise.all(getDataAndWriteFiles.map(fn => fn()));

	// scan all packages for links
	async function* getFiles(dir){
		const dirents = await fs.readdir(dir, {withFileTypes: true});
		for(const dirent of dirents){
			const res = path.resolve(dir, dirent.name);
			if(dirent.isDirectory()){
				yield* getFiles(res);
			}else{
				yield res;
			}
		}
	}
	const stratus = {
		categories: new Set(),
		packages: [],
	};
	const knownCFPackages = new Set();
	const ignoreURLs = [
		'registry.npmjs.org',
		'registry.yarnpkg.com',
		'stash.cfops.it:7999/fe/stratus/compare',
		'/commits/',
		'/commit/',
		'/compare/@cloudflare/',
		'/compare/cf-',
	];
	const links = new Set();
	for await(const file of getFiles('../data/packages-extracted')){
		const newLinks = [];
		let data;
		try{
			data = await fs.readFile(file, 'utf8');
		}catch{
			continue;
		}
		const urls = getUrls(data, {
			requireSchemeOrWww: true,
		});
		if(urls){
			newLinks.push(...urls);
		}
		for(const match of data.matchAll(/["'](https?:\/\/[^"']*)["']/g)){
			if(match && match[1] && !match[1].includes('`')){
				newLinks.push(match[1]);
			}
		}
		for(const link of newLinks){
			try{
				const url = new URL(link);
				url.pathname = url.pathname.replace(/\/\/+/g, '/');
				if(!ignoreURLs.some(str => url.href.includes(str))){
					links.add(url.href);
				}
			}catch{
				//console.warn('Found a bad link', match[1]);
			}
		}
		if(file.endsWith('package.json')){
			try{
				const packageData = JSON.parse(data);
				if(packageData?.stratus){
					stratus.packages.push(packageData.name);
					if(packageData.stratus.category){
						stratus.categories.add(packageData.stratus.category);
					}
				}
				if(packageData?.name?.startsWith?.('@cloudflare/')){
					knownCFPackages.add(packageData.name);
				}
				const deps = [];
				if(packageData.dependencies){
					deps.push(...Object.keys(packageData.dependencies));
				}
				if(packageData.devDependencies){
					deps.push(...Object.keys(packageData.devDependencies));
				}
				for(const dep of deps){
					if(dep.startsWith('@cloudflare/')){
						knownCFPackages.add(dep);
					}
				}
			}catch(err){
				console.warn('Found a bad package.json', err);
			}
		}
	}
	const linksFile = path.resolve(`../data/packages/links.json`);
	await fs.writeFile(linksFile, JSON.stringify([...links].sort(), null, '\t'));

	const stratusFile = path.resolve(`../data/packages/stratus.json`);
	await fs.writeFile(stratusFile, JSON.stringify({
		categories: [...stratus.categories].sort(),
		packages: stratus.packages.sort(),
	}, null, '\t'));

	const privatePackages = [];
	for(const npmPackage of knownCFPackages){
		try{
			await pacote.packument(npmPackage);
		}catch(error){
			if(error.statusCode === 404){
				// safe to assume this is private
				privatePackages.push(npmPackage);
			}
		}
	}
	const priatePackagesFile = path.resolve(`../data/packages/cf-packages-private.json`);
	await fs.writeFile(priatePackagesFile, JSON.stringify([...privatePackages].sort(), null, '\t'));

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/packages/*',
			'data/packages/**/*.json',
		],
		`${prefix} - NPM Package Data was updated!`,
		'CFData - NPM Package Data Update',
		'Pushed NPM Package Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();