import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import {parse} from 'acorn';
import {parse as parseLoose} from 'acorn-loose';
import {full, fullAncestor} from 'acorn-walk';
import isValidFilename from 'valid-filename';
import filenamify from 'filenamify';
import dataUriToBuffer from 'data-uri-to-buffer';
import isValidCSSUnit from 'is-valid-css-unit';
import hexColorRegex from 'hex-color-regex';
import cssProperties from 'known-css-properties';

import {tryAndPush, removeSlashes, beautify, getHttpsAgent} from './utils.js';

const allVersions = await fs.readJson(path.resolve('../data/dashboard/versions.json'));

const appScript = /(app\.[\da-z]+\.js)/;
const chunkIds = /(?:\w+\.\w+\((\d+)\)(?:, )?)/g;
const chunks = /{(?:"\d+":"[\da-f]+",)+"\d+":"[\da-f]+"}/;
const dashVersion = /dashVersion: ?"([\da-f]+)",/;
const likelyFiles = /\.(png|ico|svg)$/; // static assets that we want to extract properly
const translationsSnippet = 'dash/intl/intl-translations/src/locale/en-US/';
const navigationSnippet = 'components/SidebarNav/index.ts":';
const subRoutesSnippet = 'util-routes/src/index.ts';
const actionSnippet = 'app/redux/makeActionCreator.ts';
const staticDashURL = 'https://static.dash.cloudflare.com/';

const agent = getHttpsAgent();

// TODO: tidy up this file

async function writeJS(filename, data){
	const file = path.resolve(`../data/dashboard/${filename}`);
	await fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, beautify(data));
}

async function findWantedChunks(chunks){
	const results = {
		main: null,
		translations: [],
		chunks: [],
	};
	const getChunks = [];
	let fetched = 0;
	for(const chunk of chunks){
		getChunks.push(async function(){
			const res = await fetch(`${staticDashURL}${chunk}.js`, {agent});
			fetched++;
			// 404s are okay, but nothing else
			if(!res.ok && res.status !== 404){
				console.error('Received non-200 response:', res.status);
				throw new Error('Failed to fetch chunk ' + chunk);
			}
			const text = await res.text();

			// next do some very lazy parsing to match what we need
			// TODO: switch this to AST parsing?

			// get main chunk
			const match = dashVersion.exec(text);
			if(match !== null){
				results.dashboard = {hash: match[1], code: text, chunk};
			}

			// get translations
			if(text.includes(translationsSnippet)){
				results.translations.push({
					code: text,
					chunk,
				});
			}

			// find navigation
			if(text.includes(navigationSnippet)){
				results.navigation = {
					code: text,
					chunk,
				};
			}

			// other generic chunks
			if(text.startsWith('(self.webpackChunk=self.webpackChunk||[])')){
				results.chunks.push({
					code: text,
					chunk,
				});
			}
			//await writeJS(chunk + '.js', text);
		});
	}
	const logProgress = setInterval(() => {
		console.log(`Fetched ${fetched}/${chunks.length} chunks`);
	}, 1000);
	while(getChunks.length > 0){
		// 10 at a time
		await Promise.all(getChunks.splice(0, 10).map(func => func()));
	}
	clearInterval(logProgress);
	console.log(`Fetched ${fetched}/${chunks.length} chunks`);
	return results;
}

async function getChunks(){
	const response = await fetch(staticDashURL, {agent});
	const text = await response.text();

	// Find `app.js` bundle
	const match = appScript.exec(text);
	if(match === null || match.length < 2){
		return;
	}

	const appFile = match[1];

	const appRes = await fetch(`${staticDashURL}${appFile}`, {agent});
	const appJs = await appRes.text();

	// Trim this down to only the part we need right now
	const idSection = appJs.slice(0, Math.max(0, appJs.indexOf('../init.ts')));

	const scriptChunkIds = [];

	let scriptChunkMatch;
	while((scriptChunkMatch = chunkIds.exec(idSection)) !== null){
		if(scriptChunkMatch.length >= 2){
			scriptChunkIds.push(scriptChunkMatch[1]);
		}
	}

	// Find the chunks from the IDs
	const chunkMatch = chunks.exec(appJs);
	if(chunkMatch === null || chunkMatch.length === 0){
		return;
	}

	const chunksObj = JSON.parse(chunkMatch[0]);

	return Object.values(chunksObj);
}

const dashStructure = ['src', 'apps', 'dash'];
async function prepareWriteDir(files, directory = 'dashboard-extracted', write){
	let maxDepth = 0;
	for(const file in files){
		const depth = /^(\.\.\/)+/.exec(file)?.[0].split('../').length - 1;
		if(depth > maxDepth){
			maxDepth = depth;
		}
	}
	let rootDir = path.resolve(`../data/${directory}/`);
	if(write){
		await fs.ensureDir(rootDir);
		await fs.emptyDir(rootDir);
	}
	for(let i = 1; i <= maxDepth; i++){
		if(directory === 'dashboard-extracted' && dashStructure[i - 1]){
			rootDir += `/${dashStructure[i - 1]}`;
		}else{
			rootDir += `/${i}`;
		}
	}
	rootDir = path.normalize(rootDir);
	if(write){
		await fs.ensureDir(rootDir);
	}
	return rootDir;
}

async function writeFile(file, data, rootDir){
	let filePath = path.resolve(rootDir, file);
	let fileName = path.basename(filePath);
	if(!isValidFilename(fileName)){
		console.log(`Invalid filename: ${fileName}`);
		fileName = filenamify(fileName);
		console.log(`Using filename: ${fileName}`);
		filePath = path.resolve(rootDir, fileName);
	}
	await fs.ensureDir(path.dirname(filePath));
	if(Buffer.isBuffer(data) || ArrayBuffer.isView(data)){
		await fs.writeFile(filePath, data);
	}else if(Array.isArray(data)){
		await fs.writeFile(filePath, data.map(code => beautify(code)).join('\n\n'));
	}else{
		await fs.writeFile(filePath, data);
	}
}

async function writeFiles(files, write){
	const rootDir = await prepareWriteDir(files, 'dashboard-extracted', write);
	const tree = [];
	for(const file in files){
		if(write){
			try{
				await writeFile(file, files[file], rootDir);
			}catch(err){
				console.error('Error writing file', file, err);
			}
		}
		tree.push(file);
	}
	return tree.sort();
}

async function writeAssets(files, write){
	// like above, but let's check this one in
	const rootDir = await prepareWriteDir(files, 'dashboard-assets', write);
	for(const file in files){
		if(!likelyFiles.test(file)){
			continue;
		}
		if(write){
			try{
				await writeFile(file, files[file], rootDir);
			}catch(err){
				console.error('Error writing file', file, err);
			}
		}
	}
}

async function writeMeta(files, translations){
	const strings = new Set();
	const properties = new Set();
	const identifiers = new Set();
	const fileList = Object.keys(files);
	const addString = (str, type = 'string') => {
		// handle all strings
		// ignore a bunch of things we don't care about or want to dupe
		if(fileList.includes(str)){
			return;
		}
		if(translations.includes(str)){
			return;
		}
		if(typeof(str) !== 'string'){
			return;
		}
		if(str.trim() === ''){
			return;
		}
		if(str.startsWith('<html>')){
			return;
		}
		if(str.startsWith('[{')){
			return;
		}
		// likely SVG string
		if(/^m\s?\d+/i.test(str)){
			return;
		}
		// images and stuff
		if(str.startsWith('data:')){
			return;
		}
		if(str.startsWith('url(')){
			return;
		}
		if(str.startsWith('http')){
			return;
		}
		// likely CSS string
		if(str.includes('!important')){
			return;
		}
		if(str.startsWith(';\n')){
			return;
		}
		if(str.startsWith('calc(')){
			return;
		}
		// css units
		if(isValidCSSUnit.default(str)){
			return;
		}
		if(hexColorRegex({strict: true}).test(str)){
			return;
		}
		if(cssProperties.all.includes(str)){
			return;
		}
		// number px/fr
		if(/^\d+\s?(px|fr|rem)/i.test(str)){
			return;
		}
		// likely more css/svg stuff
		if(str.startsWith('0 ')){
			return;
		}
		if(type === 'string'){
			strings.add(str?.trim?.());
		}else if(type === 'property'){
			properties.add(str?.trim?.());
		}else if(type === 'identifier'){
			identifiers.add(str?.trim?.());
		}
	};
	const regexes = new Set();
	const callees = new Set();
	for(const file in files){
		if(likelyFiles.test(file)){
			continue;
		}
		if(file.includes('translations')){
			continue;
		}
		if(file.includes('node_modules') && !file.includes('@cloudflare')){
			continue;
		}
		if(file.includes('moment')){
			continue;
		}

		try{
			const ast = parseLoose(files[file], {
				sourceType: 'script',
				ecmaVersion: 2020,
			});
			full(ast, (node) => {
				if(node.type === 'StringLiteral' || node.type === 'Literal'){
					if(node.regex && node.raw){
						regexes.add(node.raw?.trim?.());
					}else if(node.value){
						addString(node.value);
					}
				}
				if(node.type === 'TemplateLiteral'){
					addString(node.quasis[0].value.raw?.trim?.());
				}
				if(node.type === 'Identifier' && node.name?.length > 2){
					addString(node.name, 'identifier');
				}
				if(node.type === 'CallExpression' && node.callee?.name && node.callee?.name.length > 2){
					callees.add(node.callee.name);
				}
				if(node.type === 'Property' && node.key?.name && node.key.name.length > 2){
					addString(node.key.name, 'property');
				}
				if(node.type === 'MemberExpression' && node.property?.name && node.property.name.length > 2){
					addString(node.property.name, 'property');
				}
				if(node.type === 'SwitchStatement'){
					for(const switchCase of node.cases){
						if(switchCase.test){
							if(switchCase.test.type === 'Literal'){
								addString(switchCase.test.value);
							}else if(switchCase.test.type === 'MemberExpression'){
								addString(switchCase.test.property.name);
							}
						}
					}
				}
			});
		}catch(err){
			console.error('Error parsing file for strings', file, err);
		}
	}
	const stringsArray = [...strings].sort();
	const stingsFile = path.resolve(`../data/dashboard/strings.json`);
	await fs.writeFile(stingsFile, JSON.stringify(stringsArray, null, '\t'));

	const filteredProperties = [...properties].filter(str => !stringsArray.includes(str)).sort();
	const propertiesFile = path.resolve(`../data/dashboard/properties.json`);
	await fs.writeFile(propertiesFile, JSON.stringify(filteredProperties.sort(), null, '\t'));

	const identifiersFile = path.resolve(`../data/dashboard/identifiers.json`);
	await fs.writeFile(identifiersFile, JSON.stringify([...identifiers].sort(), null, '\t'));

	const regexesFile = path.resolve(`../data/dashboard/regexes.json`);
	await fs.writeFile(regexesFile, JSON.stringify([...regexes].sort(), null, '\t'));

	const calleesFile = path.resolve(`../data/dashboard/callees.json`);
	await fs.writeFile(calleesFile, JSON.stringify([...callees].sort(), null, '\t'));

}

async function writeSubRoutes(files, write){
	const rootDir = await prepareWriteDir(files, 'dashboard-subroutes', write);
	for(const file in files){
		if(write){
			try{
				await writeFile(file + '.json', JSON.stringify([...files[file]].sort(), null, '\t'), rootDir);
			}catch(err){
				console.error('Error writing file', file, err);
			}
		}
	}
}

async function generateDashboardStructure(wantedChunks, write = false, translations){
	// parse each chunk to generate filesystem
	// this is definitely not perfect and very loose, but it works for now

	const files = {};
	const getRemoteFiles = [];
	const subRoutes = {};
	const links = new Set();
	const apiReqs = [];
	const colos = new Set();
	for(const chunk of wantedChunks){
		for(const match of chunk.code.matchAll(/["'](https?:\/\/[^"']*)["']/g)){
			if(match && match[1] && !match[1].includes('`')){
				try{
					const url = new URL(match[1]);
					url.pathname = url.pathname.replace(/\/\/+/g, '/');
					links.add(url.toString());
				}catch{
					//console.warn('Found a bad link', match[1]);
				}
			}
		}
		const ast = parse(chunk.code, {
			sourceType: 'script',
			ecmaVersion: 2020,
		});
		const recursiveImports = []; // sometimes things are imported recursively
		// find webpack chunks
		fullAncestor(ast, (node, ancestors) => {
			// first find the webpack chunk assignment
			if(
				node.type === 'CallExpression' &&
				node?.callee?.type === 'MemberExpression' &&
				node?.callee?.object?.type === 'AssignmentExpression' &&
				node?.callee?.object?.left?.type === 'MemberExpression' &&
				node?.callee?.object?.left?.object?.type === 'Identifier' &&
				node?.callee?.object?.left?.object?.name === 'self' &&
				node?.callee?.object?.left?.property?.type === 'Identifier' &&
				node?.callee?.object?.left?.property?.name === 'webpackChunk'
			){
				// then get the files and their contents from the webpack chunk
				const buildFiles = node?.arguments?.[0]?.elements?.[1]?.properties ?? [];
				for(const buildFile of buildFiles){
					if(
						(buildFile.type === 'ObjectProperty' || buildFile.type === 'Property') &&
						(buildFile.key.type === 'StringLiteral' || buildFile.key.type === 'Literal') &&
						buildFile.value.type === 'FunctionExpression' && buildFile.value.params?.length > 0
					){
						const file = buildFile.key.value;
						const code = chunk.code.slice(buildFile.value.start, buildFile.value.end);
						if(file?.includes('recursive ')){
							recursiveImports.push({
								code,
								file,
							});
							continue;
						}
						// get static files like imags
						if(likelyFiles.test(file) && buildFile.value?.body?.body?.[1]?.expression?.right){
							const fileData = buildFile.value?.body?.body?.[1]?.expression?.right;
							if(fileData.type === 'BinaryExpression'){
								// something like this: `i.p + "e42997c2963d927d6ba5.png"`
								// remote file, go get it
								const remoteFile = buildFile.value?.body?.body?.[1]?.expression?.right?.right?.value;
								files[file] = ''; // add to list of files so it's still included in our manifest
								getRemoteFiles.push(async function(){
									let fileRes = null;
									try{
										fileRes = await fetch(`${staticDashURL}${remoteFile}`, {agent});
									}catch{}
									if(!fileRes?.ok){
										console.error('Failure fetching remote file', remoteFile);
										return;
									}
									console.log('Fetched remote file', file, remoteFile);
									const fileBuffer = await fileRes.arrayBuffer();
									files[file] = Buffer.from(fileBuffer);
								});
							}else if(
								(fileData.type === 'Literal' || fileData.type === 'StringLiteral') &&
								fileData.value.startsWith('data:')
							){
								// base64 encoded file, decode it
								const fileBuffer = dataUriToBuffer(fileData.value);
								if(fileBuffer){
									files[file] = fileBuffer;
								}
							}else{
								// no match?
								console.log('Unhandled file data', fileData);
							}
						// else handle code
						}else if(files[file]){
							files[file].push(code);
						}else{
							files[file] = [code];
						}

						// handle subroutes
						if(
							buildFile.value.body?.type === 'BlockStatement' &&
							buildFile.value.body?.body?.length > 0
						){
							// only care if this file includes the util-routes helper
							let includesRoutesHelper = false;
							for(const bodyItem of buildFile.value.body.body){
								if(
									bodyItem.type === 'VariableDeclaration' &&
									bodyItem.declarations?.length > 0
								){
									for(const decl of bodyItem.declarations){
										if(decl?.init?.arguments?.[0]?.value?.includes?.(subRoutesSnippet) || decl?.init?.arguments?.[0]?.value?.includes?.(actionSnippet)){
											includesRoutesHelper = true;
											break;
										}
									}
									if(includesRoutesHelper){
										break;
									}
								}
							}
							if(!includesRoutesHelper){
								continue;
							}
							for(const bodyItem of buildFile.value.body.body){
								if(
									bodyItem.type === 'FunctionDeclaration' &&
									bodyItem.body?.body?.length === 2 &&
									bodyItem.body.body[0]?.type === 'VariableDeclaration' &&
									bodyItem.body.body[1]?.type === 'ReturnStatement' &&
									bodyItem.body.body[1]?.argument?.type === 'SequenceExpression' &&
									bodyItem.body.body[1]?.argument?.expressions?.length === 2 &&
									bodyItem.body.body[0].declarations[0]?.type === 'VariableDeclarator' &&
									bodyItem.body.body[0].declarations[0]?.init?.arguments?.length === 1 &&
									bodyItem.body.body[0].declarations[0]?.init?.arguments?.[0]?.type === 'ArrayExpression' &&
									bodyItem.body.body[0].declarations[0]?.init.arguments[0].elements?.every(ele => ele.type === 'Literal')
								){
									const routeParts = bodyItem.body.body[0].declarations[0].init.arguments[0].elements.map(ele => ele.value);
									const realPage = /react\/pages\/(.*)/.exec(file);
									const commonAction = /react\/common\/actions\/(.*)/.exec(file);
									let page = null;
									if(realPage){
										page = realPage[1];
									}else if(commonAction){
										page = '_common/' + commonAction[1];
									}else if(file.includes('microfrontends/index.ts')){
										page = '_common/_index';
									}else if(file.includes('../init.ts')){
										page = '_common/_init';
									}
									if(!page){
										console.error('Could not determine page for subroutes', file);
										continue;
									}

									// making some wild assumptions here, but good enough
									subRoutes[page] ??= new Set();
									let route = '';
									for(const [index, routePart] of routeParts.entries()){
										if(routePart.endsWith('/')){
											route += `${routePart}[id]`;
										}else if(routePart === '' && index !== 0){
											route += '/*';
										}else{
											route += routePart;
										}
									}
									subRoutes[page].add(route);
								}
							}
						}

					}
				}
			}
			// handle other generic API requests
			if(
				node.type === 'ObjectExpression' &&
				node.properties?.length >= 3 &&
				(node.properties?.some(prop => prop?.key?.name === 'uri') || node.properties?.some(prop => prop?.key?.name === 'url')) &&
				node.properties?.some(prop => prop?.key?.name === 'method')
			){
				const apiReq = {
					uri: null,
					method: null,
				};
				for(const property of node.properties){
					switch(property?.key?.name){
						case 'url': {
							let url = property.value.value?.trim();
							// fix old style urls
							if(url?.includes?.('(zoneId)')){
								url = url.replace('(zoneId)', ':zone_identifier');
							}
							apiReq.uri = url;
							break;
						}
						case 'uri':{
							apiReq.uri = property.value.value?.trim();
							break;
						}
						case 'method':{
							apiReq.method = property.value.value?.toUpperCase?.();
							break;
						}
						case 'name':{
							apiReq.name = property.value.value?.trim();
							break;
						}
						case 'id':{
							apiReq.id = property.value.value?.trim();
							break;
						}
						case 'transKey':{
							apiReq.id = property.value.value?.trim();
							break;
						}
					}
				}
				// try to find in ancestor
				if(!apiReq.id && ancestors.at(-2)?.key?.value){
					apiReq.id = ancestors.at(-2)?.key?.value;
				}

				if(apiReq.uri && apiReq.method && (apiReq.id || apiReq.name)){
					apiReqs.push(apiReq);
				}
			}

			// find colos
			if(
				node.type === 'ArrayExpression' &&
				node.elements?.length >= 300 &&
				node.elements?.every(ele => ele.type === 'ObjectExpression') &&
				node.elements?.every(ele => ele.properties?.some(prop => prop?.key?.name === 'value')) &&
				node.elements?.every(ele => ele.properties?.some(prop => prop?.key?.name === 'label')) &&
				node.elements?.some(ele => ele.properties?.some(prop => prop?.value?.value === 'lhr01'))
			){
				for(const ele of node.elements){
					for(const prop of ele.properties){
						if(prop?.key?.name === 'value'){
							colos.add(prop.value.value);
						}
					}
				}
			}

		});
		// TODO: maybe do something with `recursiveImports`?
		// We already have the files these reference, so they're probably not useful
	}
	if(write){
		while(getRemoteFiles.length > 0){
			// 10 at a time
			await Promise.all(getRemoteFiles.splice(0, 10).map(func => func()));
		}
	}
	await writeAssets(files, write);
	await writeMeta(files, translations);
	await writeSubRoutes(subRoutes, write);
	const linksFile = path.resolve(`../data/dashboard/links.json`);
	await fs.writeFile(linksFile, JSON.stringify([...links].sort(), null, '\t'));

	apiReqs.sort((reqA, reqB) => reqA.uri.localeCompare(reqB.uri));
	const apiReqsFile = path.resolve(`../data/dashboard/api-requests.json`);
	await fs.writeFile(apiReqsFile, JSON.stringify([...apiReqs].sort(), null, '\t'));

	const colosFile = path.resolve(`../data/dashboard/colos.json`);
	await fs.writeFile(colosFile, JSON.stringify([...colos].sort(), null, '\t'));

	const tree = await writeFiles(files, write);
	return tree;
}

async function run(){
	console.log('Fetching main chunk...');
	const chunks = await getChunks();

	console.log('Fetching and analysing additional chunks...');
	const wantedChunks = await findWantedChunks(chunks);

	if(!wantedChunks || wantedChunks.dashboard === null){
		console.error('Failed to find main chunk!');
		return;
	}

	await writeJS('dashboard.js', wantedChunks.dashboard.code);

	// generate app structure
	let writeAssets = true;
	if(process.argv.includes('--no-write')){
		console.log('Not writing assets');
		writeAssets = false;
	}

	// parse tranlsations
	const translations = {};
	const allTranslationKeys = [];
	for(const translation of wantedChunks.translations){
		const json = /JSON\.parse\(['`](.*)['`]\)/.exec(translation.code);
		if(json !== null){
			const parsed = JSON.parse(removeSlashes(json[1]));
			const translationNameParse = /dash\/intl\/intl-translations\/src\/locale\/en-US\/(?<name>[\w-_]+)\.json"/.exec(translation.code);
			if(!translationNameParse?.groups?.name){
				continue;
			}
			console.log('Found translation', translationNameParse.groups.name);
			translations[translationNameParse.groups.name] = parsed;
			allTranslationKeys.push(...Object.keys(parsed));
		}
	}
	console.log('Writing translations...');
	for(const [translationName, translation] of Object.entries(translations)){
		const file = path.resolve(`../data/dashboard-translations/${translationName}.json`);
		await fs.ensureDir(path.dirname(file));
		await fs.writeFile(file, JSON.stringify(translation, null, '\t'));
	}

	// genrate app structure
	const tree = await generateDashboardStructure([
		...wantedChunks.chunks,
		wantedChunks.dashboard,
	], writeAssets, allTranslationKeys);
	const treeFile = path.resolve(`../data/dashboard/files.json`);
	await fs.writeFile(treeFile, JSON.stringify(tree, null, '\t'));

	// parse navigation
	let navigation = null;
	if(wantedChunks.navigation){
		const ast = parse(wantedChunks.navigation.code, {
			sourceType: 'script',
			ecmaVersion: 2020,
		});
		full(ast, (node) => {
			if(node.type === 'ObjectExpression'){
				const hasRoot = node.properties?.find?.(prop => prop.key.name === 'root');
				// this is probably our navigation
				if(hasRoot && hasRoot.value.type === 'ArrayExpression'){
					navigation = node;
				}
			}
		});
		if(navigation){
			console.log('Found navigation');
			const rawNavigation = wantedChunks.navigation.code.slice(navigation.start, navigation.end);
			// eslint-disable-next-line no-eval
			const realNavigation = eval('(function run(){return ' + rawNavigation + '})()');
			// write raw JS version
			await writeJS('navigation.js', 'const navigation = ' + rawNavigation);

			// write serialised version
			const file = path.resolve(`../data/dashboard/navigation.json`);
			fs.ensureDir(path.dirname(file));
			await fs.writeFile(file, JSON.stringify(realNavigation, null, '\t'));
		}
	}

	// parse main dash version, etc.
	let dashInfo = null;
	const ast = parse(wantedChunks.dashboard.code, {
		sourceType: 'script',
		ecmaVersion: 2020,
	});
	full(ast, (node) => {
		if(node.type === 'ObjectExpression'){
			const hasDashVersion = node.properties?.find?.(prop => prop.key.name === 'dashVersion');
			// this is probably the dash info payload
			if(hasDashVersion && (hasDashVersion.value.type === 'Literal' || hasDashVersion.value.type === 'StringLiteral')){
				dashInfo = node;
			}
		}
	});
	if(dashInfo){
		console.log('Found dashboard info');
		const rawDashInfo = wantedChunks.dashboard.code.slice(dashInfo.start, dashInfo.end);
		// eslint-disable-next-line no-eval
		const realDashInfo = eval('(function run(){return ' + rawDashInfo + '})()');
		// write serialised version
		const file = path.resolve(`../data/dashboard/info.json`);
		fs.ensureDir(path.dirname(file));
		await fs.writeFile(file, JSON.stringify(realDashInfo, null, '\t'));

		// prepend to list of all dash versions
		if(!allVersions.some(existingVersion => existingVersion.dashVersion === realDashInfo.dashVersion)){
			allVersions.unshift({
				dashVersion: realDashInfo.dashVersion,
				branch: realDashInfo.branch,
				env: realDashInfo.env,
				date: new Date(realDashInfo.builtAt).toISOString(),
			});
		}
		await fs.writeFile(path.resolve('../data/dashboard/versions.json'), JSON.stringify(allVersions, null, '\t'));
	}

	// get bootstrap
	// const bootstrap = await fetch("https://dash.cloudflare.com/api/v4/system/bootstrap", {
	// 	headers: {
	// 		"x-cross-site-security": "dash",
	// 		"Referer": "https://dash.cloudflare.com/",
	// 	},
	// 	body: null,
	// 	method: "GET",
	// });
	// if(bootstrap.status === 200){
	// 	const json = await bootstrap.json();
	// 	if(json.success && json?.result?.data?.sdh){
	// 		console.log('Writing sso domains');
	// 		const ssoDomains = json.result.data.sdh.map(hash => hash.slice(-20)).sort();
	// 		await fs.writeFile(path.resolve('../data/dashboard/sso-domains.json'), JSON.stringify(ssoDomains, null, '\t'));
	// 	}
	// }

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/dashboard-translations/*',
			'data/dashboard-subroutes/*',
			'data/dashboard-subroutes/*.json',
			'data/dashboard-subroutes/*/*.json',
			'data/dashboard-subroutes/**/*',
			'data/dashboard-subroutes/**/*.json',
			'data/dashboard-subroutes/**/*.ts.json',
			'data/dashboard/*.json',
			'data/dashboard/*.js',
		],
		`${prefix} - Dashboard Data was updated!`,
		'CFData - Dashboard Update',
		'Pushed Dashboard: ' + prefix,
	);
}

run();