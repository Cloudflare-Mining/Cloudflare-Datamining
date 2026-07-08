import 'dotenv/config';
import path from 'node:path';

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

const shuffle = function(array) {
	let currentIndex = array.length;
	let randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex],
		];
	}
	return array;
};

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

const get = function(url, bmCookie) {
	return fetch(url, {
		agent,
		headers: {
			'user-agent': userAgent,
			'cookie': cookieHeader(bmCookie),
		},
	});
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

const processPage = async function(urlPath, bmCookie) {
	const url = mdUrlFor(urlPath);
	const filePath = path.resolve(pagesDir, `${urlPath}.md`);
	const res = await get(url, bmCookie);
	if (!res.ok) {
		console.log('Failed', url, res.status);
		// A 404 means the page was removed; drop the stale copy.
		if (res.status === 404) {
			await fs.remove(filePath).catch(() => {});
		}
		return;
	}
	const text = await res.text();
	try {
		await fs.outputFile(filePath, stabiliseText(text));
	} catch (err) {
		console.warn('Ignoring', url, err.message);
	}
};

const processCatalog = async function(entry, bmCookie) {
	const res = await get(entry.url, bmCookie);
	if (!res.ok) {
		console.log('Failed', entry.url, res.status);
		return;
	}
	const filePath = path.resolve(dir, entry.file);
	const text = await res.text();
	if (entry.json) {
		// Pretty-print so slug/product enum changes surface as readable diffs.
		try {
			await fs.outputFile(filePath, JSON.stringify(JSON.parse(text), null, '\t'));
			return;
		} catch {
			console.warn('Could not parse JSON, saving raw', entry.url);
		}
	}
	try {
		await fs.outputFile(filePath, stabiliseText(text));
	} catch (err) {
		console.warn('Ignoring', entry.url, err.message);
	}
};

// The header/footer content that used to live in Gatsby's `pageContext` now
// rides along as serialised props on the homepage's Astro islands.
const extractNavigation = async function(bmCookie) {
	try {
		const res = await get(origin, bmCookie);
		if (!res.ok) {
			return;
		}
		const dom = cheerio.load(await res.text());
		const props = dom('astro-island[component-export="NavigationContainer"]').first().attr('props');
		if (!props) {
			console.warn('No NavigationContainer island found');
			return;
		}
		const parsed = JSON.parse(props);
		await fs.outputFile(path.resolve(dir, 'navigation.json'), JSON.stringify(parsed, null, '\t'));
	} catch (err) {
		console.warn('Failed to extract navigation', err.message);
	}
};

// The marketing site localises content by country; pin diffs to the US view.
async function run() {
	const cfRes = await fetch('https://jross.me/cf.json');
	const cf = await cfRes.json();
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

	const paths = new Set(['index']);
	const sitemap = await get(`${origin}/sitemap.xml`, bmCookie).then(res => res.text());
	const sitemapXml = parser.parse(sitemap);
	for (const url of sitemapXml?.urlset?.url ?? []) {
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
	await pool(shuffle([...paths]), 8, urlPath => processPage(urlPath, bmCookie));

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
run();
