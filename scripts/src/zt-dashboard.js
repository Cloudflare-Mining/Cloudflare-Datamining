import path from 'node:path';

import { parse } from 'acorn';
import { parse as parseLoose } from 'acorn-loose';
import { full } from 'acorn-walk';
import dateFormat from 'dateformat';
import fs from 'fs-extra';
import hexColorRegex from 'hex-color-regex';
import isValidCSSUnit from 'is-valid-css-unit';
import cssProperties from 'known-css-properties';
import fetch from 'node-fetch';

import {
	beautify,
	getHttpsAgent,
	sortObjectByKeys,
	tryAndPush,
} from './utils.js';

const mainScript = /(main\.bundle\.[\da-z]+\.js)/;
const staticDashURL = 'https://one.dash.cloudflare.com/';

const agent = getHttpsAgent();

async function writeJS(filename, data) {
	const file = path.resolve(`../data/zt-dashboard/js/${filename}`);
	await fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, beautify(data));
}

async function findWantedChunks(chunks) {
	const results = {
		main: null,
		translations: [],
		chunks: [],
	};
	const getChunks = [];
	let fetched = 0;
	for (const chunk of chunks) {
		getChunks.push(async function() {
			const res = await fetch(`${staticDashURL}${chunk}`, { agent });
			fetched++;
			if (!res.ok) {
				throw new Error('Failed to fetch chunk ' + chunk);
			}
			const text = await res.text();

			results.chunks.push({
				code: text,
				chunk,
			});
			//await writeJS(chunk, text);
		});
	}
	const logProgress = setInterval(() => {
		console.log(`Fetched ${fetched}/${chunks.length} chunks`);
	}, 1000);
	while (getChunks.length > 0) {
		// 10 at a time
		await Promise.all(getChunks.splice(0, 10).map(func => func()));
	}
	clearInterval(logProgress);
	console.log(`Fetched ${fetched}/${chunks.length} chunks`);
	return results;
}

async function getChunks() {
	const response = await fetch(staticDashURL, { agent });
	const text = await response.text();

	// Find `main.js` bundle
	const match = mainScript.exec(text);
	if (match === null || match.length < 2) {
		return;
	}

	const appFile = match[1];

	const appRes = await fetch(`${staticDashURL}${appFile}`, { agent });
	const appJs = await appRes.text();
	//await writeJS(appFile, appJs);

	// get chunks from AST
	const chunks = [];
	const translations = {};
	const rawTranslations = new Set();
	let version = null;
	const ast = parse(appJs, { ecmaVersion: 2022 });
	full(ast, (node) => {
		if (
			node.type === 'AssignmentExpression' &&
			node.left?.type === 'MemberExpression' &&
			node.right?.type === 'FunctionExpression' &&
			node.right?.body?.type === 'BlockStatement' &&
			node.right?.body?.body?.length === 1 &&
			node.right?.body?.body[0]?.type === 'ReturnStatement' &&
			node.right?.body?.body[0]?.argument?.type === 'BinaryExpression' &&
			node.right?.body?.body[0]?.argument?.left?.type === 'BinaryExpression' &&
			node.right?.body?.body[0]?.argument?.left?.left?.type === 'BinaryExpression' &&
			node.right?.body?.body[0]?.argument?.left?.left?.right?.type === 'Literal' &&
			node.right?.body?.body[0]?.argument?.left?.left?.right?.value === '.' &&
			node.right?.body?.body[0]?.argument?.left?.right?.type === 'MemberExpression' &&
			node.right?.body?.body[0]?.argument?.left?.right?.object?.type === 'ObjectExpression'
		) {
			// first find all chunks
			const properties = node.right?.body?.body[0]?.argument?.left?.right?.object.properties;
			for (const property of properties) {
				chunks.push(`${property.key.value}.${property.value.value}.js`);
			}
		} else if (
			node.type === 'CallExpression' &&
			node.callee?.type === 'SequenceExpression' &&
			node.callee?.expressions?.length === 2 &&
			node?.arguments?.length === 2 &&
			node.arguments[0].type === 'Literal' &&
			node.arguments[1].type === 'ObjectExpression'

		) {
			// then get some translations
			if (!node.arguments[0].value || node?.arguments?.[0]?.value?.startsWith?.('/')) {
				return;
			}
			translations[node.arguments[0].value] ??= {};
			console.log('Found translation', node.arguments[0].value);
			for (const property of node.arguments[1].properties) {
				if (property.key.type === 'Identifier') {
					translations[node.arguments[0].value][property.key.name] = property.value.value;
					rawTranslations.add(property.key.name);
				} else if (property.key.type === 'Literal') {
					translations[node.arguments[0].value][property.key.value] = property.value.value;
					rawTranslations.add(property.key.value);
				}
				rawTranslations.add(property.value.value);
			}
		} else if (
			node.type === 'ObjectExpression' &&
			node.properties?.length === 1 &&
			node.properties[0]?.key?.type === 'Identifier' &&
			node.properties[0]?.key?.name === 'translations' &&
			node.properties[0]?.value?.type === 'ObjectExpression' &&
			node.properties[0]?.value?.properties?.length > 0
		) {
			// and some more translations
			for (const property of node.properties[0].value.properties) {
				if (!property.key?.value || property?.key?.value?.startsWith?.('/')) {
					continue;
				}
				console.log('Found translation', property.key.value);
				rawTranslations.add(property.key.value);
				rawTranslations.add(property.value.value);
				const split = property.key.value.split('.');
				const namespace = split[0];
				if (!namespace) {
					console.warn('No namespace found for', property.key.value);
					continue;
				}
				const key = split.slice(1).join('.');
				translations[namespace] ??= {};
				translations[namespace][key] = property.value.value;
			}
		} else if (
			node.type === 'ObjectExpression' &&
			node.properties.some(property => property.key?.type === 'Identifier' && (property.key?.name === 'release' || property.key?.name === 'dsn'))
		) {
			const findVersion = node.properties.find(property => property.key?.type === 'Identifier' && property.key?.name === 'release')?.value?.value;
			if (findVersion) {
				version = findVersion;
			}
		}
	});

	return {
		chunks,
		app: {
			name: appFile,
			code: appJs,
			translations,
			rawTranslations,
			version,
		},
	};
}

async function generateDashboardStructure(wantedChunks, translations) {
	const strings = new Set();
	const properties = new Set();
	const identifiers = new Set();
	const regexes = new Set();
	const callees = new Set();
	const links = new Set();
	const addString = (str, type = 'string') => {
		// handle all strings
		// ignore a bunch of things we don't care about or want to dupe
		if (typeof(str) !== 'string') {
			return;
		}
		if (translations.has(str)) {
			return;
		}
		if (str.trim() === '') {
			return;
		}
		if (str.startsWith('<html>')) {
			return;
		}
		if (str.startsWith('[{')) {
			return;
		}
		// likely SVG string
		if (/^m\s?\d+/i.test(str)) {
			return;
		}
		// images and stuff
		if (str.startsWith('data:')) {
			return;
		}
		if (str.startsWith('url(')) {
			return;
		}
		if (str.startsWith('http')) {
			return;
		}
		// likely CSS string
		if (str.includes('!important')) {
			return;
		}
		if (str.startsWith(';\n')) {
			return;
		}
		if (str.startsWith('calc(')) {
			return;
		}
		// css units
		if (isValidCSSUnit.default(str)) {
			return;
		}
		if (hexColorRegex({ strict: true }).test(str)) {
			return;
		}
		if (cssProperties.all.includes(str)) {
			return;
		}
		// number px/fr
		if (/^\d+\s?(px|fr|rem)/i.test(str)) {
			return;
		}
		// likely more css/svg stuff
		if (str.startsWith('0 ')) {
			return;
		}
		if (type === 'string') {
			strings.add(str?.trim?.());
		} else if (type === 'property') {
			properties.add(str?.trim?.());
		} else if (type === 'identifier') {
			identifiers.add(str?.trim?.());
		}
	};
	for (const chunk of wantedChunks) {
		for (const match of chunk.code.matchAll(/["'](https?:\/\/[^"']*)["']/g)) {
			if (match && match[1] && !match[1].includes('`')) {
				try {
					const url = new URL(match[1]);
					url.pathname = url.pathname.replaceAll(/\/\/+/g, '/');
					links.add(url.toString());
				} catch {
					//console.warn('Found a bad link', match[1]);
				}
			}
		}

		// get callees, strings, etc.
		try {
			const ast = parseLoose(chunk.code, {
				sourceType: 'script',
				ecmaVersion: 2025,
			});
			full(ast, (node) => {
				if (node.type === 'StringLiteral' || node.type === 'Literal') {
					if (node.regex && node.raw) {
						regexes.add(node.raw?.trim?.());
					} else if (node.value) {
						addString(node.value);
					}
				}
				if (node.type === 'TemplateLiteral') {
					addString(node.quasis[0].value.raw?.trim?.());
				}
				if (node.type === 'Identifier' && node.name?.length > 3) {
					addString(node.name, 'identifier');
				}
				if (node.type === 'CallExpression' && node.callee?.name && node.callee?.name.length > 3) {
					callees.add(node.callee.name);
				}
				if (node.type === 'Property' && node.key?.name && node.key.name.length > 3) {
					addString(node.key.name, 'property');
				}
				if (node.type === 'MemberExpression' && node.property?.name && node.property.name.length > 3) {
					addString(node.property.name, 'property');
				}
				if (node.type === 'SwitchStatement') {
					for (const switchCase of node.cases) {
						if (switchCase.test) {
							if (switchCase.test.type === 'Literal') {
								addString(switchCase.test.value);
							} else if (switchCase.test.type === 'MemberExpression') {
								addString(switchCase.test.property.name);
							}
						}
					}
				}
			});
		} catch {}
	}

	const linksFile = path.resolve('../data/zt-dashboard/links.json');
	await fs.writeFile(linksFile, JSON.stringify([...links].sort(), null, '\t'));

	const stringsArray = [...strings].sort();
	const stingsFile = path.resolve('../data/zt-dashboard/strings.json');
	await fs.writeFile(stingsFile, JSON.stringify(stringsArray, null, '\t'));

	const filteredProperties = [...properties].filter(str => !stringsArray.includes(str)).sort();
	const propertiesFile = path.resolve('../data/zt-dashboard/properties.json');
	await fs.writeFile(propertiesFile, JSON.stringify(filteredProperties.sort(), null, '\t'));

	const identifiersFile = path.resolve('../data/zt-dashboard/identifiers.json');
	await fs.writeFile(identifiersFile, JSON.stringify([...identifiers].sort(), null, '\t'));

	const regexesFile = path.resolve('../data/zt-dashboard/regexes.json');
	await fs.writeFile(regexesFile, JSON.stringify([...regexes].sort(), null, '\t'));

	const calleesFile = path.resolve('../data/zt-dashboard/callees.json');
	await fs.writeFile(calleesFile, JSON.stringify([...callees].sort(), null, '\t'));
}

async function run() {
	console.log('Fetching main chunk...');
	const chunks = await getChunks();

	console.log('Fetching and analysing additional chunks...');
	const wantedChunks = await findWantedChunks(chunks.chunks);

	if (!wantedChunks || wantedChunks.dashboard === null) {
		console.error('Failed to find main chunk!');
		return;
	}

	await generateDashboardStructure([
		...wantedChunks.chunks,
		chunks.app,
	], chunks.app.rawTranslations);

	console.log('Writing translations...');
	const translationsDir = path.resolve('../data/zt-dashboard-translations/');
	await fs.emptyDir(translationsDir);
	for (const [translationName, translation] of Object.entries(chunks.app.translations)) {
		const file = path.resolve(`${translationsDir}/${translationName}.json`);
		await fs.ensureDir(path.dirname(file));
		const sorted = sortObjectByKeys(translation);
		await fs.writeFile(file, JSON.stringify(sorted, null, '\t'));
	}

	// // app version
	// if(chunks.app.version){
	// 	const versionFile = path.resolve(`../data/zt-dashboard/version.json`);
	// 	await fs.writeFile(versionFile, JSON.stringify(chunks.app.version, null, '\t'));
	// }

	// parse navigation
	let navigation = null;
	if (wantedChunks.navigation) {
		const ast = parse(wantedChunks.navigation.code, {
			sourceType: 'script',
			ecmaVersion: 2025,
		});
		full(ast, (node) => {
			if (node.type === 'ObjectExpression') {
				const hasRoot = node.properties?.find?.(prop => prop.key.name === 'root');
				// this is probably our navigation
				if (hasRoot && hasRoot.value.type === 'ArrayExpression') {
					navigation = node;
				}
			}
		});
		if (navigation) {
			console.log('Found navigation');
			const rawNavigation = wantedChunks.navigation.code.slice(navigation.start, navigation.end);
			// eslint-disable-next-line no-eval
			const realNavigation = eval('(function run(){return ' + rawNavigation + '})()');
			// write raw JS version
			await writeJS('navigation.js', 'const navigation = ' + rawNavigation);

			// write serialised version
			const file = path.resolve('../data/zt-dashboard/navigation.json');
			fs.ensureDir(path.dirname(file));
			await fs.writeFile(file, JSON.stringify(realNavigation, null, '\t'));
		}
	}

	const version = await fetch(`${staticDashURL}version.json`, { agent });
	if (version.ok) {
		const json = await version.json();
		const file = path.resolve('../data/zt-dashboard/version.json');
		await fs.ensureDir(path.dirname(file));
		await fs.writeFile(file, JSON.stringify(json, null, '\t'));

		const allVersions = await fs.readJson(path.resolve('../data/zt-dashboard/versions.json'));
		if (!allVersions.some(existingVersion => existingVersion.revision === json.revision && existingVersion.build_id === json.build_id)) {
			allVersions.unshift(json);
		}
		await fs.writeFile(path.resolve('../data/zt-dashboard/versions.json'), JSON.stringify(allVersions, null, '\t'));
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
		'DISCORD_WEBHOOK_ZEROTRUST',
	);
}

run();
