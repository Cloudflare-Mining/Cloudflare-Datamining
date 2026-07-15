import 'dotenv/config';
import path from 'node:path';

import * as cheerio from 'cheerio';
import dateFormat from 'dateformat';
import { XMLParser } from 'fast-xml-parser';
import fs from 'fs-extra';
import jsBeautify from 'js-beautify';
import fetch from 'node-fetch';
import pLimit from 'p-limit';
import puppeteer from 'puppeteer';

import { sortObjectByKeys, tryAndPush, userAgent } from './utils.js';

const cfRes = await fetch('https://jross.me/cf.json');
const cf = await cfRes.json();
if (cf?.country !== 'US' && process.env.CI) {
	console.log('Action isn\'t running in the US. Skipping marketing site processing.', cf);

	process.exit(0);
}

const parser = new XMLParser({
	processEntities: {
		maxTotalExpansions: 1_000_000,
	},
});

const dir = path.resolve('../data/blog');
await fs.ensureDir(dir);
// await fs.emptyDir(dir);

const blogURLs = new Set([]);

// slugs that we ignore content changes for. Unstable image changes, etc
const ignoreContent = [
	'tales-from-the-crypt-o-team',
	'-zh-tw', // too unstable diffs
];

// load from coveo
try {
	const coveoBlog = await fs.readJson(path.resolve('../data/coveo/blog.json'));
	for (const rawUrl of coveoBlog) {
		let url = rawUrl;
		if (!url.endsWith('/')) {
			url = url + '/';
		}
		blogURLs.add(url.replace('http://', 'https://'));
	}
} catch {}

// load from rss feed
const rss = await fetch('https://blog.cloudflare.com/rss/');
if (rss.ok) {
	const xml = await rss.text();
	const json = parser.parse(xml);
	for (const item of json?.rss?.channel?.item ?? []) {
		let url = item.link;
		if (!url.endsWith('/')) {
			url = url + '/';
		}
		blogURLs.add(url.replace('http://', 'https://'));
	}
}

const limit = pLimit(20);
// setup helpers for puppeteer
const browser = await puppeteer.launch({
	defaultViewport: {
		width: 1920,
		height: 1080,
	},
	headless: 'new',
	args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const fetchURL = async function(url, waitFor, slug) {
	const page = await browser.newPage();
	await page.setRequestInterception(true);
	page.on('request', (request) => {
		if (!slug) { return request.continue(); } // only disable this when hitting posts
		if (request.url().includes('email-decode')) {
			return request.continue();
		}
		// effectively disable JS/CSS for faster loads
		const resourceType = request.resourceType();
		if (resourceType !== 'document') {
			request.abort();
		} else {
			request.continue();
		}
	});
	// look normal
	await page.setUserAgent(userAgent);
	let results;
	try {
		results = await page.goto(url, {
			waitUntil: 'networkidle2',
		});
	} catch (err) {
		console.warn('Failed to navigate', url, err);
		return;
	}

	if (results.status() !== 200) {
		console.warn('Bad status', results.status());
		try {
			await fs.remove(slug);
		} catch {}
		await page.close();
		return;
	}
	const bodyHTML = await page.evaluate(() => document.documentElement.outerHTML);
	if (waitFor) {
		try {
			const textContent = await page.evaluate(waitFor => document.querySelector(waitFor).innerHTML, waitFor);
			await page.close();
			return {
				selected: textContent,
				body: bodyHTML,
			};
		} catch (err) {
			console.warn('Failed to find selector', url, waitFor, err);
			try {
				await page.close();
			} catch {}
			return;
		}
	}

	await page.close();
	return {
		body: bodyHTML,
		selected: null,
	};
};

// try fetching normally
try {
	const sitemap = await fetch('https://blog.cloudflare.com/sitemap-posts.xml');
	if (!sitemap || !sitemap.ok) {
		throw new Error('Failed to fetch sitemap');
	}
	const xml = await sitemap.text();
	const sitemapXml = parser.parse(xml);
	for (const url of sitemapXml.urlset.url) {
		let loc = url.loc;
		if (loc.startsWith('http://')) {
			loc = loc.replace('http://', 'https://');
		}
		if (!loc.endsWith('/')) {
			loc = loc + '/';
		}
		blogURLs.add(loc);
	}
} catch {
	console.warn('Failed to fetch sitemap normally');
}

// fetch with puppeteer
const sitemap = await fetchURL('https://blog.cloudflare.com/sitemap-posts.xml');
if (!sitemap || !sitemap.body) {
	throw new Error('Failed to fetch sitemap');
}
const sitemapXml = parser.parse(sitemap.body);
for (const element of sitemapXml?.html?.head?.body?.div?.table?.tbody?.tr ?? []) {
	if (element?.td?.[0]?.a) {
		let url = element.td[0].a;
		if (url.startsWith('http://')) {
			url = url.replace('http://', 'https://');
		}
		if (!url.endsWith('/')) {
			url = url + '/';
		}
		blogURLs.add(url);
	}
}
await fs.writeFile(path.resolve(dir, 'sitemap.json'), JSON.stringify([...blogURLs].sort(), null, '\t'));

console.log('Processing blog posts...', blogURLs.size);

/* eslint-disable no-use-before-define */
const propTypes = {
	0: value => reviveObject(value),
	1: value => reviveArray(value),
	2: value => new RegExp(value),
	3: value => new Date(value),
	4: value => new Map(reviveArray(value)),
	5: value => new Set(reviveArray(value)),
	6: BigInt,
	7: value => new URL(value),
	8: value => new Uint8Array(value),
	9: value => new Uint16Array(value),
	10: value => new Uint32Array(value),
};
/* eslint-enable no-use-before-define */

function reviveTuple(raw) {
	const [type, value] = raw;
	return type in propTypes ? propTypes[type](value) : undefined;
}

function reviveArray(raw) {
	return (raw).map(reviveTuple);
}

function reviveObject(raw) {
	if (typeof raw !== 'object' || raw === null) { return raw; }
	return Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, reviveTuple(value)]));
}

// emdash no longer ships the props blob the old blog did, so rebuild a slimmer version from
// ld+json and the rendered DOM. tag Ghost IDs and internal tags aren't exposed here anymore.
function buildEmdashProps(rawDom, url, ldJsonData) {
	const slug = new URL(url).pathname.replaceAll(/^\/|\/$/g, '');

	// tag chips live in the post header; skip the sitewide tag dropdown that also renders `/tag/` links
	const postTags = [];
	const seenTags = new Set();
	rawDom('.post-content a[href^="/tag/"]').each((i, el) => {
		if (rawDom(el).closest('[data-tags-dropdown]').length > 0) { return; }
		const tagSlug = rawDom(el).attr('href').replaceAll(/^\/tag\/|\/$/g, '');
		if (!tagSlug || seenTags.has(tagSlug)) { return; }
		seenTags.add(tagSlug);
		postTags.push({ name: rawDom(el).text().trim(), slug: tagSlug });
	});

	const authors = [];
	const seenAuthors = new Set();
	rawDom('.post-content a[href^="/author/"]').each((i, el) => {
		const authorSlug = rawDom(el).attr('href').replaceAll(/^\/author\/|\/$/g, '');
		const name = rawDom(el).text().trim();
		if (!authorSlug || !name || seenAuthors.has(authorSlug)) { return; }
		seenAuthors.add(authorSlug);
		authors.push({ name, slug: authorSlug });
	});

	const readingTime = rawDom('main').text().match(/(\d+)\s*min(?:ute)?s?\s*read/i)?.[1] ?? null;

	return {
		initialReadingTime: readingTime,
		locale: rawDom('meta[name="locale"]').attr('content') ?? null,
		post: {
			authors,
			excerpt: ldJsonData?.description ?? null,
			feature_image: ldJsonData?.image?.url ?? ldJsonData?.image ?? null,
			published_at: ldJsonData?.datePublished ?? null,
			slug,
			tags: postTags,
			title: ldJsonData?.headline ?? null,
			updated_at: ldJsonData?.dateModified ?? null,
			url: ldJsonData?.url ?? url,
		},
	};
}

const promises = [];
const tags = [];
const oldTags = fs.readFileSync(path.resolve(dir, '_tags.json'));
if (oldTags) {
	tags.push(...JSON.parse(oldTags));
}
let publisher = null;
for (const url of [...blogURLs].sort()) {
	promises.push(limit(async () => {
		console.log('Fetching', url);
		const parsedURL = new URL(url);
		const slug = path.resolve(dir, parsedURL.pathname.replace(/\/$/, '').slice(1));
		if (ignoreContent.some(checkSlug => slug.includes(checkSlug))) {
			console.log('Ignoring content changes', slug);
			return;
		}
		await fs.ensureDir(path.dirname(slug));

		// old blog wraps content in `section.post-full-content`; the emdash rewrite uses `div.article-content`
		const data = await fetchURL(url, 'section.post-full-content, .article-content', slug);
		if (!data?.body) {
			console.warn('Failed to fetch', url);
			return;
		}
		const rawDom = cheerio.load(data.body);
		const isEmdash = rawDom('section.post-full-content').length === 0;
		const contentHTML = isEmdash ? rawDom('.article-content').html() : rawDom('section.post-full-content').html();
		if (!contentHTML) {
			console.warn('Failed to find post content', url);
			return;
		}
		const dom = cheerio.load(contentHTML, null, false);

		// handle email protection
		const emailProtectionLinks = dom('a[href^="/cdn-cgi/l/email-protection"]');
		if (emailProtectionLinks) {
			emailProtectionLinks.each(function(i, rawEl) {
				const el = dom(rawEl);
				el.replaceWith('[email protected]');
			});
		}
		const cfEmail = dom('[data-cfemail]');
		if (cfEmail) {
			cfEmail.each((i, spanEl) => {
				const el = dom(spanEl);
				const parents = el.parents('a');
				if (parents.length > 0) {
					parents.each((i, parentEl) => {
						const parent = dom(parentEl);
						parent.replaceWith('[email protected]');
					});
				} else {
					dom(spanEl).attr('data-cfemail', 'email protected');
				}
			});
		}

		// handle weird email protection edge-cases
		const paragraphs = dom('p, code, pre');
		paragraphs.each((i, node) => {
			const el = dom(node);
			const html = el.html();
			if (/\[email protected]\.?\w+/.test(html)) {
				console.log('Found weird email protection', html);
				el.html(html.replaceAll(/\[email protected]\.?\w+/g, '[email protected]'));
			}
		});

		// handle cfbeacon stuff
		const cfBeacon = dom('script[src*="beacon.min.js"]');
		if (cfBeacon) {
			cfBeacon.each((i, beacon) => {
				dom(beacon).remove();
			});
		}

		// remove cloudflare TV embed
		const cloudflareTV = dom('iframe[src*="cloudflare.tv"]');
		if (cloudflareTV) {
			cloudflareTV.each((i, tv) => {
				dom(tv).remove();
			});
		}

		// remove style elements with cloudflare TV
		const styleElements = dom('style');
		if (styleElements) {
			styleElements.each((i, style) => {
				const el = dom(style);
				if (el.html().includes('cloudflare.tv')) {
					el.remove();
				}
			});
		}

		// normalise links and remove `ref` query param
		const links = dom('a[href]');
		if (links) {
			links.each((i, link) => {
				const el = dom(link);
				const href = el.attr('href');
				try {
					// if relative, contruct with base
					let url;
					if (!href.startsWith('http')) {
						url = new URL(href, 'https://blog.cloudflare.com');
					} else {
						url = new URL(href);
					}
					url.searchParams.delete('ref');
					let fixedUrl = url.toString();
					// remove trailing slash to normalise
					if (fixedUrl.endsWith('/')) {
						fixedUrl = fixedUrl.slice(0, -1);
					}
					el.attr('href', fixedUrl);
				} catch (err) {
					console.error('Failed to parse URL', href, err);
				}
			});
		}

		// normalise image alts
		const images = dom('img');
		if (images) {
			images.each((i, image) => {
				const el = dom(image);
				const alt = el.attr('alt') ?? '';
				el.attr('alt', alt);
			});
		}

		// delete anything inside noscript tags. Some blog posts have malformed stuff in here
		const noscripts = dom('noscript');
		if (noscripts) {
			noscripts.each((i, noscript) => {
				dom(noscript).remove();
			});
		}

		// get application/ld+json
		const ldJson = rawDom('script[type="application/ld+json"]');
		let ldJsonData;
		if (ldJson) {
			ldJson.each((i, json) => {
				const el = rawDom(json);
				const jsonText = el.text();
				try {
					const parsed = JSON.parse(jsonText);
					if (['Article', 'BlogPosting'].includes(parsed['@type'])) {
						ldJsonData = parsed;
					}
				} catch {}
			});
			if (ldJsonData) {
				const trimmed = {
					author: {
						name: ldJsonData.author?.name,
						url: ldJsonData.author?.url,
						sameAs: ldJsonData.author?.sameAs,
					},
					headline: ldJsonData.headline,
					url: ldJsonData.url,
					datePublished: ldJsonData.datePublished,
					dateModified: ldJsonData.dateModified,
					image: ldJsonData.image?.url ?? ldJsonData.image ?? null,
					keywords: ldJsonData.keywords,
					description: ldJsonData.description,
				};
				await fs.writeFile(slug + '.json', JSON.stringify(trimmed, null, '\t'));
				if (!publisher && ldJsonData.publisher) {
					publisher = ldJsonData.publisher;
				}
			}
		}

		// old blog embeds rich props in an astro-island; emdash drops it, so reconstruct from ld+json + DOM
		const astroIslandPost = rawDom('astro-island').filter((i, el) => rawDom(el).attr('component-export') === 'Post');
		let postTags = null;
		if (astroIslandPost.length > 0) {
			const props = JSON.parse(astroIslandPost.attr('props'));
			const revived = reviveObject(props);

			// remove relatedPosts
			delete revived.relatedPosts;

			const ordered = sortObjectByKeys(revived);
			ordered.post = sortObjectByKeys(ordered.post);
			await fs.writeFile(slug + '.props.json', JSON.stringify(ordered, null, '\t'));
			postTags = revived.post.tags;
		} else {
			const emdashProps = buildEmdashProps(rawDom, url, ldJsonData);
			if (emdashProps) {
				const ordered = sortObjectByKeys(emdashProps);
				ordered.post = sortObjectByKeys(ordered.post);
				await fs.writeFile(slug + '.props.json', JSON.stringify(ordered, null, '\t'));
				postTags = emdashProps.post.tags;
			}
		}

		// add tags if not already in list; old tags key on their Ghost ID, emdash tags only expose a slug
		if (postTags) {
			for (const tag of postTags) {
				const exists = tags.some(existingTag => (tag.id ? existingTag.id === tag.id : existingTag.slug === tag.slug));
				if (!exists) {
					tags.push(tag);
				}
			}
		}
		console.log('write', slug);
		const beautified = jsBeautify.html_beautify(dom.html(), {
			indent_size: 4,
			indent_char: '\t',
		});
		await fs.writeFile(slug + '.html', beautified);
	}));
}
await Promise.all(promises);
if (publisher) {
	await fs.writeFile(path.resolve(dir, '_publisher.json'), JSON.stringify(publisher, null, '\t'));
}
const orderedTags = tags.sort((tagA, tagB) => (tagA.id ?? tagA.slug).localeCompare(tagB.id ?? tagB.slug));
await fs.writeFile(path.resolve(dir, '_tags.json'), JSON.stringify(orderedTags, null, '\t'));

// dump internal tags to a file
const internalTags = orderedTags.filter(tag => tag.visibility === 'internal');
await fs.writeFile(path.resolve(dir, '_internal-tags.json'), JSON.stringify(internalTags, null, '\t'));

await browser.close();

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/blog/*',
		'data/blog/*.html',
		'data/blog/**/*',
		'data/blog/**/*.html',
	],
	`${prefix} - Blog Content was updated! [skip ci]`,
	'CFData - Blog Content Update',
	'Pushed Blog Content: ' + prefix,
	'DISCORD_WEBHOOK_BLOG',
);
