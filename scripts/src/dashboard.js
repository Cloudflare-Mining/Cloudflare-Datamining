import path from 'path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import jsBeautify from 'js-beautify';
import {parse} from 'acorn';
import {full} from 'acorn-walk';
import isValidFilename from 'valid-filename';
import filenamify from 'filenamify';
import dataUriToBuffer from 'data-uri-to-buffer';

import {tryAndPush, removeSlashes} from './utils.js';

const appScript = /(app\.[\da-z]+\.js)/;
const chunkIds = /(?:\w+\.\w+\((\d+)\)(?:, )?)/g;
const chunks = /{(?:"\d+":"[\da-f]+",)+"\d+":"[\da-f]+"}/;
const dashVersion = /dashVersion: ?"([\da-f]+)",/;
const likelyFiles = /\.(png|ico|svg)$/; // static assets that we want to extract properly
const translationsSnippet = 'dash/intl/intl-translations/src/locale/en-US/';
const navigationSnippet = 'components/SidebarNav/index.ts":';
const staticDashURL = 'https://static.dash.cloudflare.com/';

function beautify(data){
	return jsBeautify.js(data,
		{
			indent_size: 4,
			indent_char: '\t',
			indent_with_tabs: true,
		},
	);
}
async function writeJS(filename, data){
	const file = path.resolve(`../data/dashboard/${filename}`);
	fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, beautify(data));
}

async function findWantedChunks(chunks){
	const results = {
		main: null,
		translations: [],
		chunks: [],
	};
	const getChunks = [];
	for(const chunk of chunks){
		getChunks.push(async function(){
			const res = await fetch(`${staticDashURL}${chunk}.js`);
			const text = await res.text();

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
	await Promise.all(getChunks.map(func => func()));
	return results;
}

async function getChunks(){
	const response = await fetch(staticDashURL);
	const text = await response.text();

	// Find `app.js` bundle
	const match = appScript.exec(text);
	if(match === null || match.length < 2){
		return;
	}

	const appFile = match[1];

	const appRes = await fetch(`${staticDashURL}${appFile}`);
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
	for(let i = 1; i < maxDepth; i++){
		rootDir += `/${i}`;
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

async function generateDashboardStructure(wantedChunks, write = false){
	// parse each chunk to generate filesystem
	// this is definitely not perfect and very loose, but it works for now

	const files = {};
	const getRemoteFiles = [];
	for(const chunk of wantedChunks.chunks){
		const ast = parse(chunk.code, {
			sourceType: 'script',
			ecmaVersion: 2020,
		});
		// find webpack chunks
		full(ast, (node) => {
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
						// get static files like imags
						if(likelyFiles.test(file) && buildFile.value?.body?.body?.[1]?.expression?.right){
							const fileData = buildFile.value?.body?.body?.[1]?.expression?.right;
							if(fileData.type === 'BinaryExpression'){
								// something like this: `i.p + "e42997c2963d927d6ba5.png"`
								// remote file, go get it
								const remoteFile = buildFile.value?.body?.body?.[1]?.expression?.right?.right?.value;
								getRemoteFiles.push(async function(){
									const fileRes = await fetch(`${staticDashURL}${remoteFile}`);
									if(!fileRes.ok){
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
					}
				}
			}
		});
	}
	await Promise.all(getRemoteFiles.map(func => func()));
	await writeAssets(files, write);
	const tree = await writeFiles(files, write);
	return tree;
}

async function run(){
	console.log('Fetching chunks...');
	const chunks = await getChunks();

	console.log('Finding wanted chunk...');
	const wantedChunks = await findWantedChunks(chunks);

	if(!wantedChunks || wantedChunks.dashboard === null){
		console.error('Failed to find main chunk!');
		return;
	}

	await writeJS('dashboard.js', wantedChunks.dashboard.code);

	// generate app structure
	const tree = await generateDashboardStructure(wantedChunks, true);
	const treeFile = path.resolve(`../data/dashboard/files.json`);
	await fs.writeFile(treeFile, JSON.stringify(tree, null, 4));

	// parse tranlsations
	const translations = {};
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
		}
	}
	console.log('Writing translations...');
	for(const [translationName, translation] of Object.entries(translations)){
		const file = path.resolve(`../data/dashboard-translations/${translationName}.json`);
		fs.ensureDir(path.dirname(file));
		await fs.writeFile(file, JSON.stringify(translation, null, 4));
	}

	// parse navigation
	let navigation = null;
	if(wantedChunks.navigation){
		const ast = parse(wantedChunks.navigation.code, {
			sourceType: 'script',
			ecmaVersion: 2020,
		});
		full(ast, (node) => {
			if(node.type === 'ObjectExpression'){
				const hasRoot = node.properties?.some?.(prop => prop.key.name === 'root');
				// this is probably our navigation
				if(hasRoot){
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
			const hasRoot = node.properties?.some?.(prop => prop.key.name === 'dashVersion');
			// this is probably the dash info payload
			if(hasRoot){
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
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/dashboard-translations/*.json',
			'data/dashboard/*.json',
			'data/dashboard/*.js',
		],
		`${prefix} - Dashboard Data was updated!`,
		'CFData - Dashboard Update',
		'PushedDashboard  ' + prefix,
	);
}

run();