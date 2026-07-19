import 'dotenv/config';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import * as cheerio from 'cheerio';
import dateFormat from 'dateformat';
import { XMLParser } from 'fast-xml-parser';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import {
	getBMCookie,
	getHttpsAgent,
	tryAndPush,
	userAgent,
} from './utils.js';

const agent = getHttpsAgent();
const parser = new XMLParser();

const origin = 'https://www.cloudflare.com';
const REQUEST_ATTEMPTS = 3;
const REQUEST_TIMEOUT_MS = 5000;
const MIN_SITEMAP_URLS = 100;
const MAX_PAGE_COUNT_DROP = 0.05;
const MAX_PAGE_BYTES_DROP = 0.2;

const dir = path.resolve('../data/marketing');
const pagesDir = path.resolve(dir, 'pages');
await fs.ensureDir(pagesDir);

// The Astro rebuild ships an agent/LLM-friendly surface: a flat sitemap, a
// markdown twin for every page (append `.md`), and a set of catalog files
// linked from the homepage response headers. These replace the old Gatsby
// `/page-data/{path}/page-data.json` blobs the previous miner scraped.
const catalog = [
	{ url: `${origin}/llms.txt`, file: 'llms.txt', json: false },
	{ url: `${origin}/llms-full.txt`, file: 'llms-full.txt', json: false },
	{ url: `${origin}/.well-known/agents.json`, file: 'agents.json', json: true },
	{ url: `${origin}/.well-known/webmcp.json`, file: 'webmcp.json', json: true },
	{ url: `${origin}/openapi.json`, file: 'openapi.json', json: true },
];

// Straight-quote punctuation so localisation-driven typographic swaps don't
// churn the diff; the replacement char signals a broken fetch, so bail.
const stabiliseText = function(string) {
	if (string.includes('�')) {
		throw new Error('Bad encoding');
	}
	return string.replaceAll('’', '\'')
		.replaceAll('‘', '\'')
		.replaceAll('”', '"')
		.replaceAll('“', '"');
};

const cookieHeader = function(bmCookie) {
	return bmCookie ? `${bmCookie.name}=${bmCookie.value}` : undefined;
};

const get = function(url, bmCookie, accept) {
	const cookie = cookieHeader(bmCookie);
	return fetch(url, {
		agent,
		headers: {
			'user-agent': userAgent,
			...(cookie ? { cookie } : {}),
			...(accept ? { accept } : {}),
		},
		signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
	});
};

const wait = ms => new Promise((resolve) => {
	setTimeout(resolve, ms);
});

const fetchValidated = async function(url, bmCookie, options) {
	const { accept, transform } = options;
	let notFoundCount = 0;
	let lastError;
	for (let attempt = 0; attempt < REQUEST_ATTEMPTS; attempt++) {
		try {
			const res = await get(url, bmCookie, accept);
			if (res.status === 404) {
				notFoundCount++;
				lastError = new Error(`HTTP 404 for ${url}`);
			} else if (!res.ok) {
				lastError = new Error(`HTTP ${res.status} for ${url}`);
			} else {
				const text = await res.text();
				return {
					kind: 'success',
					value: await transform(text, res),
				};
			}
		} catch (err) {
			lastError = err;
		}
		console.warn(`Attempt ${attempt + 1}/${REQUEST_ATTEMPTS} failed for ${url}:`, lastError.message);
		if (attempt + 1 < REQUEST_ATTEMPTS) {
			await wait(400 * (2 ** attempt));
		}
	}
	return {
		kind: notFoundCount === REQUEST_ATTEMPTS ? 'not-found' : 'failed',
		error: lastError,
	};
};

const validateMarkdown = function(text, res) {
	const contentType = res.headers.get('content-type') ?? '';
	if (!contentType.includes('text/markdown')) {
		throw new Error(`Expected markdown, received ${contentType || 'no content type'}`);
	}
	const stable = stabiliseText(text);
	if (!/^---\r?\n[\s\S]+?\r?\n---(?:\r?\n|$)/u.test(stable)) {
		throw new Error('Markdown is empty or missing front matter');
	}
	return stable;
};

const validateNonEmptyText = function(text) {
	const stable = stabiliseText(text);
	if (stable.trim().length === 0) {
		throw new Error('Response body is empty');
	}
	return stable;
};

const formatJson = function(text) {
	const parsed = JSON.parse(text);
	if (parsed === null || typeof parsed !== 'object') {
		throw new Error('Expected a JSON object or array');
	}
	return JSON.stringify(parsed, null, '\t');
};

const writeAtomic = async function(filePath, text) {
	const tempPath = `${filePath}.${process.pid}.tmp`;
	try {
		await fs.outputFile(tempPath, text);
		await fs.move(tempPath, filePath, { overwrite: true });
	} finally {
		await fs.remove(tempPath).catch(() => {});
	}
};

// Run tasks in small batches to stay polite while covering ~360 pages.
const pool = async function(items, size, worker) {
	const queue = [...items];
	while (queue.length > 0) {
		await Promise.all(queue.splice(0, size).map(item => worker(item)));
	}
};

const locToPath = function(loc) {
	const { pathname } = new URL(loc);
	const trimmed = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
	return trimmed === '' ? 'index' : trimmed;
};

const mdUrlFor = function(urlPath) {
	return urlPath === 'index' ? `${origin}/index.md` : `${origin}/${urlPath}.md`;
};

const pageUrlFor = function(urlPath) {
	return urlPath === 'index' ? `${origin}/` : `${origin}/${urlPath}`;
};

const writePage = async function(url, filePath, text) {
	try {
		await writeAtomic(filePath, text);
		return true;
	} catch (err) {
		console.warn('Ignoring', url, err.message);
		return false;
	}
};

// Not every page ships a static `.md` twin, but the HTML route content-
// negotiates one; keep it only if the server actually served markdown rather
// than falling back to HTML.
const tryMarkdownNegotiation = async function(urlPath, filePath, bmCookie) {
	const url = pageUrlFor(urlPath);
	const result = await fetchValidated(url, bmCookie, {
		accept: 'text/markdown',
		transform: validateMarkdown,
	});
	if (result.kind === 'success') {
		await writePage(url, filePath, result.value);
	}
	return result.kind;
};

const processPage = async function(urlPath, bmCookie, allowDeletion = false) {
	const url = mdUrlFor(urlPath);
	const filePath = path.resolve(pagesDir, `${urlPath}.md`);
	const result = await fetchValidated(url, bmCookie, { transform: validateMarkdown });
	if (result.kind === 'success') {
		await writePage(url, filePath, result.value);
		return;
	}

	// The static twin can be temporarily empty or unavailable while the HTML
	// route is healthy. Preserve the old snapshot unless both routes return a
	// confirmed 404 on every attempt.
	const negotiated = await tryMarkdownNegotiation(urlPath, filePath, bmCookie);
	if (allowDeletion && result.kind === 'not-found' && negotiated === 'not-found') {
		await fs.remove(filePath).catch(() => {});
		console.log('Removed page after confirmed 404s', urlPath);
	} else if (negotiated !== 'success') {
		console.warn('Preserving previous snapshot for', urlPath);
	}
};

const processCatalog = async function(entry, bmCookie) {
	const result = await fetchValidated(entry.url, bmCookie, {
		transform: entry.json ? formatJson : validateNonEmptyText,
	});
	if (result.kind !== 'success') {
		console.warn('Preserving previous catalog snapshot for', entry.url);
		return;
	}
	const filePath = path.resolve(dir, entry.file);
	try {
		await writeAtomic(filePath, result.value);
	} catch (err) {
		console.warn('Ignoring', entry.url, err.message);
	}
};

// The header/footer content that used to live in Gatsby's `pageContext` now
// rides along as serialised props on the homepage's Astro islands.
const extractNavigation = async function(bmCookie) {
	try {
		const result = await fetchValidated(origin, bmCookie, {
			transform: (text) => {
				if (text.trim().length === 0) {
					throw new Error('Homepage response is empty');
				}
				return text;
			},
		});
		if (result.kind !== 'success') {
			return;
		}
		const dom = cheerio.load(result.value);
		const props = dom('astro-island[component-export="NavigationContainer"]').first().attr('props');
		if (!props) {
			console.warn('No NavigationContainer island found');
			return;
		}
		const parsed = JSON.parse(props);
		await writeAtomic(path.resolve(dir, 'navigation.json'), JSON.stringify(parsed, null, '\t'));
	} catch (err) {
		console.warn('Failed to extract navigation', err.message);
	}
};

const getPageFiles = async function() {
	const entries = await fs.readdir(pagesDir, { recursive: true });
	return entries.filter(entry => entry.endsWith('.md'));
};

const getPageStats = async function() {
	const pageFiles = await getPageFiles();
	const sizes = await Promise.all(pageFiles.map(async (entry) => {
		const stat = await fs.stat(path.resolve(pagesDir, entry));
		return { entry, size: stat.size };
	}));
	return {
		bytes: sizes.reduce((total, item) => total + item.size, 0),
		count: sizes.length,
		empty: sizes.filter(item => item.size === 0).map(item => item.entry),
	};
};

const assertPageStatsHealthy = function(before, after) {
	if (after.empty.length > 0) {
		throw new Error(`Refusing to commit empty marketing pages: ${after.empty.join(', ')}`);
	}
	if (before.count > 0 && after.count < before.count * (1 - MAX_PAGE_COUNT_DROP)) {
		throw new Error(`Refusing suspicious page count drop from ${before.count} to ${after.count}`);
	}
	if (before.bytes > 0 && after.bytes < before.bytes * (1 - MAX_PAGE_BYTES_DROP)) {
		throw new Error(`Refusing suspicious page data drop from ${before.bytes} to ${after.bytes} bytes`);
	}
};

// The marketing site localises content by country; pin diffs to the US view.
async function run() {
	const baselinePageStats = await getPageStats();
	const cfResult = await fetchValidated('https://jross.me/cf.json', undefined, {
		transform: text => JSON.parse(text),
	});
	if (cfResult.kind !== 'success') {
		throw new Error('Could not verify the marketing miner country');
	}
	const cf = cfResult.value;
	if (cf?.country !== 'US' && process.env.CI) {
		console.log('Action isn\'t running in the US. Skipping marketing site processing.', cf);
		return;
	}

	const bmCookie = await getBMCookie().catch((err) => {
		console.warn('Could not get bot management cookie, continuing without', err.message);
	});

	console.log('Fetching catalog files...');
	await pool(catalog, 5, entry => processCatalog(entry, bmCookie));
	await extractNavigation(bmCookie);

	const sitemapResult = await fetchValidated(`${origin}/sitemap.xml`, bmCookie, {
		transform: (text) => {
			const sitemapXml = parser.parse(text);
			const urls = sitemapXml?.urlset?.url ?? [];
			const urlList = Array.isArray(urls) ? urls : [urls];
			if (urlList.length < MIN_SITEMAP_URLS) {
				throw new Error(`Sitemap only contained ${urlList.length} URLs`);
			}
			return urlList;
		},
	});
	if (sitemapResult.kind !== 'success') {
		throw new Error('Could not fetch a valid marketing sitemap');
	}

	const paths = new Set(['index']);
	for (const url of sitemapResult.value) {
		if (url.loc && url.loc.startsWith(origin)) {
			paths.add(locToPath(url.loc));
		}
	}

	// Supplement the sitemap with any markdown pages referenced from llms-full.txt.
	try {
		const llmsFull = await fs.readFile(path.resolve(dir, 'llms-full.txt'), 'utf8');
		const linkRegex = new RegExp(`${origin}/([^)\\s]+?)\\.md`, 'g');
		let match;
		while ((match = linkRegex.exec(llmsFull)) !== null) {
			paths.add(match[1] === 'index' ? 'index' : match[1]);
		}
	} catch {}

	console.log(`Fetching ${paths.size} markdown pages...`);
	await pool([...paths].sort(), 8, urlPath => processPage(urlPath, bmCookie));

	// Only consider deleting stored pages after they disappear from both the
	// sitemap and llms-full discovery. The serving routes must then also return
	// confirmed 404s across every retry.
	const pageFiles = await getPageFiles();
	const undiscoveredPaths = pageFiles
		.map(entry => entry.replaceAll('\\', '/').slice(0, -3))
		.filter(urlPath => !paths.has(urlPath));
	if (undiscoveredPaths.length > 0) {
		console.log(`Checking ${undiscoveredPaths.length} undiscovered pages for removal...`);
		await pool(undiscoveredPaths.sort(), 8, urlPath => processPage(urlPath, bmCookie, true));
	}

	assertPageStatsHealthy(baselinePageStats, await getPageStats());

	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/marketing/*',
			'data/marketing/*.json',
			'data/marketing/**/*.md',
		],
		`${prefix} - Marketing Site Data was updated! [skip ci]`,
		'CFData -Marketing Site Data Update',
		'Pushed Marketing Site Data: ' + prefix,
		'DISCORD_WEBHOOK_MARKETING',
	);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	await run();
}

export {
	assertPageStatsHealthy,
	formatJson,
	validateMarkdown,
	validateNonEmptyText,
};
