import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import {parse} from 'acorn';
import {full} from 'acorn-walk';

import {tryAndPush, beautify, getHttpsAgent} from './utils.js';

const mainScript = /(main\.bundle\.[\da-z]+\.js)/;
const staticDashURL = 'https://dash.teams.cloudflare.com/';

const agent = getHttpsAgent();

async function writeJS(filename, data){
	const file = path.resolve(`../data/zt-dashboard/${filename}`);
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
			const res = await fetch(`${staticDashURL}${chunk}`, {agent});
			fetched++;
			if(!res.ok){
				throw new Error('Failed to fetch chunk ' + chunk);
			}
			const text = await res.text();

			if(text.startsWith('(self.webpackChunk=self.webpackChunk||[])') || text.startsWith('(window.webpackJsonp=window.webpackJsonp||[])')){
				results.chunks.push({
					code: text,
					chunk,
				});
			}
			//await writeJS(chunk, text);
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

	// Find `main.js` bundle
	const match = mainScript.exec(text);
	if(match === null || match.length < 2){
		return;
	}

	const appFile = match[1];

	const appRes = await fetch(`${staticDashURL}${appFile}`, {agent});
	const appJs = await appRes.text();

	// get chunks from AST
	const chunks = [];
	const translations = {};
	const ast = parse(appJs, {ecmaVersion: 2020});
	full(ast, (node) => {
		if(
			node.type === 'AssignmentExpression' &&
			node.left?.type === 'MemberExpression' &&
			node.left?.property?.name === 'src' &&
			node.right?.type === 'CallExpression' &&
			node.right?.callee?.type === 'FunctionExpression' &&
			node.right?.callee?.body?.body?.[0]?.type === 'ReturnStatement' &&
			node.right?.callee?.body?.body?.[0]?.argument?.left?.right?.type === 'MemberExpression' &&
			node.right?.callee?.body?.body?.[0]?.argument?.left?.right?.object?.type === 'ObjectExpression'
		){
			// first find all chunks
			for(const property of node.right.callee.body.body[0].argument.left.right.object.properties){
				chunks.push(`${property.key.value}.${property.value.value}.js`);
			}
		}else if(
			node.type === 'CallExpression' &&
			node.callee?.type === 'CallExpression' &&
			node.callee?.callee?.type === 'Identifier' &&
			node.callee?.callee?.name === 'Object' &&
			node.callee?.arguments?.length === 1 &&
			node?.arguments?.length === 2 &&
			node.arguments[0].type === 'Literal' &&
			node.arguments[1].type === 'ObjectExpression'

		){
			// then get some translations
			if(!node.arguments[0].value || node?.arguments?.[0]?.value?.startsWith?.('/')){
				return;
			}
			translations[node.arguments[0].value] ??= {};
			console.log('Found translation', node.arguments[0].value);
			for(const property of node.arguments[1].properties){
				if(property.key.type === 'Identifier'){
					translations[node.arguments[0].value][property.key.name] = property.value.value;
				}else if(property.key.type === 'Literal'){
					translations[node.arguments[0].value][property.key.value] = property.value.value;
				}
			}
		}else if(
			node.type === 'ObjectExpression' &&
			node.properties?.length === 1 &&
			node.properties[0]?.key?.type === 'Identifier' &&
			node.properties[0]?.key?.name === 'translations' &&
			node.properties[0]?.value?.type === 'ObjectExpression' &&
			node.properties[0]?.value?.properties?.length > 0
		){
			// and some more translations
			for(const property of node.properties[0].value.properties){
				if(!property.key?.value || property?.key?.value?.startsWith?.('/')){
					continue;
				}
				console.log('Found translation', property.key.value);
				const split = property.key.value.split('.');
				const namespace = split[0];
				if(!namespace){
					console.warn('No namespace found for', property.key.value);
					continue;
				}
				const key = split.slice(1).join('.');
				translations[namespace] ??= {};
				translations[namespace][key] = property.value.value;
			}
		}
	});

	return {
		chunks,
		app: {
			name: appFile,
			code: appJs,
			translations,
		},
	};
}

async function generateDashboardStructure(wantedChunks){
	const links = new Set();
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
	}

	const linksFile = path.resolve(`../data/zt-dashboard/links.json`);
	await fs.writeFile(linksFile, JSON.stringify([...links].sort(), null, '\t'));
}

async function run(){
	console.log('Fetching main chunk...');
	const chunks = await getChunks();

	console.log('Fetching and analysing additional chunks...');
	const wantedChunks = await findWantedChunks(chunks.chunks);

	if(!wantedChunks || wantedChunks.dashboard === null){
		console.error('Failed to find main chunk!');
		return;
	}

	await generateDashboardStructure([
		...wantedChunks.chunks,
		chunks.app,
	]);

	console.log('Writing translations...');
	const translationsDir = path.resolve('../data/zt-dashboard-translations/');
	await fs.emptyDir(translationsDir);
	for(const [translationName, translation] of Object.entries(chunks.app.translations)){
		const file = path.resolve(`${translationsDir}/${translationName}.json`);
		await fs.ensureDir(path.dirname(file));
		const sorted = Object.keys(translation).sort().reduce(
			(obj, key) => {
				obj[key] = translation[key];
				return obj;
			},
			{},
		);
		await fs.writeFile(file, JSON.stringify(sorted, null, '\t'));
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
			const file = path.resolve(`../data/zt-dashboard/navigation.json`);
			fs.ensureDir(path.dirname(file));
			await fs.writeFile(file, JSON.stringify(realNavigation, null, '\t'));
		}
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/zt-dashboard-translations/*',
			'data/zt-dashboard/*.json',
		],
		`${prefix} - Zero Trust Dashboard Data was updated!`,
		'CFData - ZT Dashboard Update',
		'Pushed ZT Dashboard: ' + prefix,
	);
}

run();