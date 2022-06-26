import path from 'path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import jsBeautify from 'js-beautify';
import {parse} from 'acorn';
import {full} from 'acorn-walk';
import {generate} from 'astring';
import filenamify from 'filenamify';

import {tryAndPush, removeSlashes} from './utils.js';

const appScript = /(app\.[\da-z]+\.js)/;
const chunkIds = /(?:\w+\.\w+\((\d+)\)(?:, )?)/g;
const chunks = /{(?:"\d+":"[\da-f]+",)+"\d+":"[\da-f]+"}/;
const dashVersion = /dashVersion: ?"([\da-f]+)",/;
const translationsSnippet = 'dash/intl/intl-translations/src/locale/en-US/';
const navigationSnippet = 'components/SidebarNav/index.ts":';

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
			const res = await fetch(`https://static.dash.cloudflare.com/${chunk}.js`);
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
	const response = await fetch('https://static.dash.cloudflare.com/');
	const text = await response.text();

	// Find `app.js` bundle
	const match = appScript.exec(text);
	if(match === null || match.length < 2){
		return;
	}

	const appFile = match[1];

	const appRes = await fetch(`https://static.dash.cloudflare.com/${appFile}`);
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

async function generateDashboardStructure(wantedChunks, write = false){
	// parse each chunk to generate filesystem
	// this is definitely not perfect and very loose, but it works for now
	const files = {};
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
						if(files[file]){
							files[file].push(generate(buildFile.value));
						}else{
							files[file] = [generate(buildFile.value)];
						}
					}
				}
			}
		});
	}
	// figure out max up dir count
	let maxDepth = 0;
	for(const file in files){
		const depth = /^(\.\.\/)+/.exec(file)?.[0].split('../').length ?? 0;
		console.log('depth', depth, file);
		if(depth > maxDepth){
			maxDepth = depth;
		}
	}
	// create folder structure up to maxDepth
	let rootDir = path.resolve(`../data/dashboard-extracted/`);
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
	const tree = [];
	// and then finally handle writing
	for(const file in files){
		const filePath = path.resolve(rootDir, file);
		if(write){
			try{
				await fs.ensureDir(path.dirname(filePath));
				await fs.writeFile(filePath, files[file].map(code => beautify(code)).join('\n\n'));
			}catch(err){
				console.error('Error writing file', filePath, err);
			}
		}
		tree.push(file);
	}
	return tree.sort();
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
			const rawNavigation = generate(navigation);
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
		const rawDashInfo = generate(dashInfo);
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
		['data/dashboard-translations/*.json', 'data/dashboard/*.json', 'data/dashboard/*.js'],
		`${prefix} - Dashboard Data was updated!`,
		'CFData - Dashboard Update',
		'PushedDashboard  ' + prefix,
	);
}

run();