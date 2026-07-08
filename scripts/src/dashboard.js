import 'dotenv/config';
import path from 'node:path';

import { parse } from 'acorn';
import { full } from 'acorn-walk';
import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import { getHttpsAgent, tryAndPush } from './utils.js';

// The dashboard moved from webpack/rspack to Vite/Rolldown. Chunks are now ESM
// (import/export) with no `self.webpackChunk` array and no numeric module-ID
// map, so the old structural parsing no longer applies. We instead crawl the
// ESM chunk graph and pull out what survives minification: the baked-in
// `globalThis.build` info, the per-namespace translation objects, and the
// generic string/property/identifier/regex/API/colo metadata.
const staticDashURL = process.env.STATIC_DASH_URL;
const agent = getHttpsAgent();
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36';
const CONCURRENCY = 12;

async function fetchText(url, tries = 3) {
	let lastErr;
	for (let attempt = 0; attempt < tries; attempt++) {
		try {
			const res = await fetch(url, { agent, headers: { 'User-Agent': userAgent } });
			if (res.status === 404) {
				return { status: 404, text: '' };
			}
			const text = await res.text();
			if (res.ok) {
				return { status: res.status, text, contentType: res.headers.get('content-type') || '' };
			}
			lastErr = new Error(`HTTP ${res.status} for ${url}`);
		} catch (err) {
			lastErr = err;
		}
		await new Promise((resolve) => {
			setTimeout(resolve, 300 * (attempt + 1));
		});
	}
	throw lastErr;
}

const isFallbackHtml = text => /^\s*<!doctype/i.test(text) || /^\s*<html[\s>]/i.test(text);

// Crawl the ESM chunk graph from the index's entry scripts, following both
// static (`from"./x.js"`) and dynamic (`import("./x.js")`) references. Returns
// a Map of chunk filename -> code.
async function crawlChunks() {
	const { text: indexHtml } = await fetchText(staticDashURL);
	const seeds = [...new Set([...indexHtml.matchAll(/\/assets\/([\w.-]+\.js)\b/g)].map(match => match[1]))];
	if (seeds.length === 0) {
		throw new Error('No /assets/*.js entry scripts found in index');
	}
	console.log(`Found ${seeds.length} entry scripts`);

	const refRegex = /(?:\.\/|assets\/)([\w.-]+\.js)/g;
	const chunks = new Map();
	const seen = new Set(seeds);
	const queue = [...seeds];
	let fetched = 0;

	const worker = async (name) => {
		const { status, text } = await fetchText(`${staticDashURL}assets/${name}`);
		fetched++;
		if (status !== 200 || isFallbackHtml(text)) {
			return;
		}
		chunks.set(name, text);
		for (const match of text.matchAll(refRegex)) {
			if (!seen.has(match[1])) {
				seen.add(match[1]);
				queue.push(match[1]);
			}
		}
	};

	const logProgress = setInterval(() => {
		console.log(`Fetched ${fetched} chunks (${queue.length} queued)`);
	}, 2000);
	while (queue.length > 0) {
		await Promise.all(queue.splice(0, CONCURRENCY).map(name => worker(name)));
	}
	clearInterval(logProgress);
	console.log(`Fetched ${chunks.size} chunks`);
	return chunks;
}

// --- static literal evaluation (strings/templates/numbers/null/objects) ------
function staticEval(node) {
	if (!node) {
		return;
	}
	switch (node.type) {
		case 'Literal': {
			return node.value;
		}
		case 'TemplateLiteral': {
			return node.expressions.length === 0
				? node.quasis.map(quasi => quasi.value.cooked).join('')
				: undefined;
		}
		case 'UnaryExpression': {
			const arg = staticEval(node.argument);
			return node.operator === '-' && typeof arg === 'number' ? -arg : undefined;
		}
		case 'ObjectExpression': {
			const out = {};
			for (const prop of node.properties) {
				if (prop.type !== 'Property' || prop.computed) {
					continue;
				}
				const key = prop.key.type === 'Identifier'
					? prop.key.name
					: (prop.key.type === 'Literal' ? String(prop.key.value) : null);
				if (key === null) {
					continue;
				}
				const value = staticEval(prop.value);
				if (value !== undefined) {
					out[key] = value;
				}
			}
			return out;
		}
		default:
	}
}

const staticString = (node) => {
	if (node?.type === 'Literal' && typeof node.value === 'string') {
		return node.value;
	}
	if (node?.type === 'TemplateLiteral') {
		return node.quasis.map(quasi => quasi.value.cooked ?? '').join('');
	}
	// tagged template (e.g. rich-text helper: r`...<0>here</0>`)
	if (node?.type === 'TaggedTemplateExpression') {
		return node.quasi.quasis.map(quasi => quasi.value.cooked ?? '').join('');
	}
	return null;
};

// --- inline (source-locale) translations -------------------------------------
// Newer namespaces ship no en-US catalog chunk; their English source lives in a
// cf-<namespace>.translations.<hash>.js chunk as register(`ns`, { key: `text`,
// group: { key: `text` } }). Flatten that nested object to dotted keys.
function flattenTranslations(node, prefix, out) {
	if (node?.type !== 'ObjectExpression') {
		return 0;
	}
	let leaves = 0;
	for (const prop of node.properties) {
		if (prop.type !== 'Property' || prop.computed) {
			continue;
		}
		const key = prop.key.type === 'Identifier'
			? prop.key.name
			: (prop.key.type === 'Literal' ? String(prop.key.value) : null);
		if (key === null) {
			continue;
		}
		const path = prefix ? `${prefix}.${key}` : key;
		if (prop.value.type === 'ObjectExpression') {
			leaves += flattenTranslations(prop.value, path, out);
		} else {
			const value = staticString(prop.value);
			if (value !== null) {
				out[path] = value;
				leaves++;
			}
		}
	}
	return leaves;
}

const inlineNs = /^cf-(.+)\.translations\.[\w-]{6,12}\.js$/;

// Extract the flattened, namespace-prefixed English map from a .translations
// chunk, or null if none found.
function extractInlineTranslations(code, namespace) {
	let ast;
	try {
		ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
	} catch {
		return null;
	}
	let best = null;
	full(ast, (node) => {
		if (node.type !== 'ObjectExpression') {
			return;
		}
		const out = {};
		const leaves = flattenTranslations(node, '', out);
		if (leaves >= 5 && (!best || leaves > best.leaves)) {
			best = { leaves, out };
		}
	});
	if (!best) {
		return null;
	}
	const prefixed = {};
	for (const [key, value] of Object.entries(best.out)) {
		prefixed[`${namespace}.${key}`] = value;
	}
	return prefixed;
}

// --- globalThis.build ---------------------------------------------------------
function extractBuildInfo(code) {
	if (!code.includes('dashVersion') || !code.includes('builtAt') || !code.includes('bundler')) {
		return null;
	}
	let ast;
	try {
		ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
	} catch {
		return null;
	}
	let build = null;
	full(ast, (node) => {
		if (build || node.type !== 'AssignmentExpression') {
			return;
		}
		const left = node.left;
		if (
			left.type === 'MemberExpression' && !left.computed &&
			left.object.type === 'Identifier' &&
			(left.object.name === 'globalThis' || left.object.name === 'window') &&
			left.property.type === 'Identifier' && left.property.name === 'build' &&
			node.right.type === 'ObjectExpression'
		) {
			build = staticEval(node.right);
		}
	});
	return build;
}

// --- translations -------------------------------------------------------------
// Translation chunks are named cf-<namespace>.<hash>.js and assign an object of
// dotted string keys to template-literal values. The chunk carries no locale
// label, so among a namespace's locale variants we pick en-US by scoring how
// English the values read.
const dottedKey = /"[\w-]+(?:\.[\w-]+)+":/g;
const englishWord = /\b(?:the|and|your|you|for|with|this|that|are|from|have|will|would|please|when|which|about)\b/gi;

function namespaceFromChunk(name) {
	const match = /^cf-(.+)\.[\w-]{6,12}\.js$/.exec(name);
	return match ? match[1] : null;
}

// Returns the translations object (key -> string) if this chunk looks like a
// translation module, else null.
function extractTranslations(code) {
	if ((code.match(dottedKey)?.length ?? 0) < 5) {
		return null;
	}
	let ast;
	try {
		ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
	} catch {
		return null;
	}
	let best = null;
	full(ast, (node) => {
		if (node.type !== 'ObjectExpression' || node.properties.length < 5) {
			return;
		}
		let dotted = 0;
		const obj = {};
		for (const prop of node.properties) {
			if (prop.type !== 'Property' || prop.computed) {
				continue;
			}
			const key = prop.key.type === 'Literal' ? prop.key.value : null;
			const value = staticString(prop.value);
			if (typeof key !== 'string' || value === null) {
				continue;
			}
			if (key.includes('.')) {
				dotted++;
			}
			obj[key] = value;
		}
		// require most keys to be dotted namespace keys to avoid config objects
		if (dotted >= 5 && dotted / node.properties.length >= 0.8 && (!best || dotted > best.dotted)) {
			best = { dotted, obj };
		}
	});
	if (!best) {
		return null;
	}
	// A real translation module is almost entirely the translations object; a
	// code chunk that merely contains a dotted-key object (e.g. an events map)
	// has a tiny object relative to its code, so reject those.
	if (JSON.stringify(best.obj).length < code.length * 0.35) {
		return null;
	}
	return best.obj;
}

// Score how likely a locale variant is en-US. en-US is essentially pure ASCII
// and full of English function words; other locales carry accented/non-Latin
// characters and fewer of those words. Higher score = more likely en-US.
function localeScore(obj) {
	const values = Object.values(obj);
	if (values.length === 0) {
		return -Infinity;
	}
	const text = values.join(' ');
	const total = text.length || 1;
	const nonAscii = (text.match(/[\u0080-\uFFFF]/g) ?? []).length;
	const english = (text.match(englishWord) ?? []).length;
	return (english / values.length) - ((nonAscii / total) * 10);
}

async function run() {
	if (!staticDashURL) {
		throw new Error('STATIC_DASH_URL is not set');
	}
	const dashboardDir = path.resolve('../data/dashboard');
	const translationsDir = path.resolve('../data/dashboard-translations');
	await fs.ensureDir(dashboardDir);
	await fs.ensureDir(translationsDir);

	const chunks = await crawlChunks();

	// accumulators
	const regexes = new Set();
	const links = new Set();
	const colos = new Set();
	const apiReqs = [];
	const translationsByNs = new Map(); // namespace -> { score, obj }
	let buildInfo = null;

	console.log('Analysing chunks...');
	let processed = 0;
	for (const [name, code] of chunks) {
		if (++processed % 500 === 0) {
			console.log(`Analysed ${processed}/${chunks.size}`);
		}

		// Syntax-highlighter TextMate grammars (cf-<lang> chunks) are ~2/3 of all
		// chunks and pure vendor noise — skip them entirely.
		if (code.includes('"scopeName"')) {
			continue;
		}

		// links survive as string/template literals; match ' " and `
		for (const match of code.matchAll(/["'`](https?:\/\/[^"'`]*)["'`]/g)) {
			const raw = match[1];
			// drop template fragments / placeholders (`${x}`, `$1`, `*`, `<`)
			if (/[$*<>`{}]/.test(raw)) {
				continue;
			}
			try {
				const url = new URL(raw);
				url.pathname = url.pathname.replaceAll(/\/{2,}/g, '/');
				links.add(url.toString());
			} catch {
				// ignore malformed URLs
			}
		}

		// inline source-locale (English) translations chunk (cf-<ns>.translations.*)
		const inlineMatch = inlineNs.exec(name);
		if (inlineMatch) {
			const obj = extractInlineTranslations(code, inlineMatch[1]);
			if (obj) {
				// authoritative English source — always win over locale-scored variants
				translationsByNs.set(inlineMatch[1], { score: Infinity, obj });
			}
			continue;
		}

		// locale-catalog chunk (cf-<ns>.<hash>.js): pick the en-US variant by score
		const namespace = namespaceFromChunk(name);
		if (namespace) {
			const translations = extractTranslations(code);
			if (translations) {
				const score = localeScore(translations);
				const existing = translationsByNs.get(namespace);
				// never override an authoritative inline (Infinity) source
				if (!existing || (existing.score !== Infinity && score > existing.score)) {
					translationsByNs.set(namespace, { score, obj: translations });
				}
				continue;
			}
		}

		if (!buildInfo) {
			buildInfo = extractBuildInfo(code);
		}

		let ast;
		try {
			ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
		} catch {
			continue;
		}
		full(ast, (node) => {
			if (node.type === 'Literal' && node.regex && node.raw) {
				regexes.add(node.raw.trim());
			}

			// API requests: object literals with a uri/url + method
			if (
				node.type === 'ObjectExpression' &&
				node.properties?.length >= 3 &&
				node.properties.some(prop => prop?.key?.name === 'uri' || prop?.key?.name === 'url') &&
				node.properties.some(prop => prop?.key?.name === 'method')
			) {
				const apiReq = { uri: null, method: null };
				for (const property of node.properties) {
					const value = staticString(property.value) ?? property.value?.value;
					switch (property?.key?.name) {
						case 'url': case 'uri': {
							apiReq.uri = typeof value === 'string' ? value.trim() : value;
							break;
						}
						case 'method': {
							apiReq.method = typeof value === 'string' ? value.toUpperCase() : value;
							break;
						}
						case 'name': {
							apiReq.name = typeof value === 'string' ? value.trim() : value;
							break;
						}
						case 'id': case 'transKey': {
							apiReq.id = typeof value === 'string' ? value.trim() : value;
							break;
						}
					}
				}
				if (apiReq.uri && apiReq.method && (apiReq.id || apiReq.name)) {
					apiReqs.push(apiReq);
				}
			}

			// colos: a large array of { value, label } where values are colo
			// codes (e.g. `lhr01`). Values are template literals in Vite output.
			if (node.type === 'ArrayExpression' && (node.elements?.length ?? 0) >= 100) {
				const coloCode = /^[a-z]{3}\d{2}$/i;
				const found = [];
				for (const ele of node.elements) {
					if (ele?.type !== 'ObjectExpression') {
						continue;
					}
					let value = null;
					let hasLabel = false;
					for (const prop of ele.properties || []) {
						if (prop?.key?.name === 'value') {
							value = staticString(prop.value);
						} else if (prop?.key?.name === 'label') {
							hasLabel = true;
						}
					}
					if (hasLabel && value && coloCode.test(value)) {
						found.push(value);
					}
				}
				if (found.length >= 50) {
					for (const value of found) {
						colos.add(value);
					}
				}
			}
		});
	}

	// --- write translations (non-destructive: overwrite/add per namespace) ----
	// Only emit namespaces where a genuinely English (en-US) variant was found.
	// Some namespaces ship no en-US chunk (the source strings are inlined into
	// component code) — for those every variant scores <= 0, so we skip them
	// rather than write a wrong-language fallback.
	const englishNamespaces = [...translationsByNs].filter(([, value]) => value.score > 0);
	if (englishNamespaces.length < 10) {
		console.warn(`Only found ${englishNamespaces.length} en-US translation namespaces; skipping translation write`);
	} else {
		console.log(`Writing ${englishNamespaces.length} en-US translation namespaces (skipped ${translationsByNs.size - englishNamespaces.length} non-en-US-only)`);
		for (const [namespace, { obj }] of englishNamespaces) {
			await fs.writeFile(path.join(translationsDir, `${namespace}.json`), JSON.stringify(obj, null, '\t'));
		}
	}

	// --- write metadata -------------------------------------------------------
	const writeJson = (file, data) => fs.writeFile(path.join(dashboardDir, file), JSON.stringify(data, null, '\t'));
	await writeJson('regexes.json', [...regexes].sort());
	await writeJson('links.json', [...links].sort());
	apiReqs.sort((reqA, reqB) => String(reqA.uri).localeCompare(String(reqB.uri)));
	await writeJson('api-requests.json', apiReqs);
	await writeJson('colos.json', [...colos].sort());

	// --- write build info + versions history ----------------------------------
	if (buildInfo?.dashVersion) {
		await writeJson('info.json', buildInfo);
		const versionsFile = path.join(dashboardDir, 'versions.json');
		const allVersions = await fs.readJson(versionsFile).catch(() => []);
		if (!allVersions.some(version => version.dashVersion === buildInfo.dashVersion)) {
			allVersions.unshift({
				dashVersion: buildInfo.dashVersion,
				branch: buildInfo.branch,
				env: buildInfo.env,
				date: new Date(buildInfo.builtAt).toISOString(),
			});
			await fs.writeFile(versionsFile, JSON.stringify(allVersions, null, '\t'));
		}
		console.log(`Build: dashVersion=${buildInfo.dashVersion} node=${buildInfo.versions?.node} bundler=${buildInfo.bundler}`);
	} else {
		console.warn('globalThis.build not found in any chunk');
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/dashboard-translations/*.json',
			'data/dashboard/*.json',
		],
		`${prefix} - Dashboard Data was updated!`,
		'CFData - Dashboard Update',
		'Pushed Dashboard: ' + prefix,
		'DISCORD_WEBHOOK_DASHBOARD',
	);
}

run();
