import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import jsBeautify from 'js-beautify';
import {XMLParser} from 'fast-xml-parser';
import puppeteer from 'puppeteer';
import pLimit from 'p-limit';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

import {tryAndPush, userAgent} from './utils.js';

const parser = new XMLParser();

const dir = path.resolve(`../data/blog`);
await fs.ensureDir(dir);
// await fs.emptyDir(dir);

const blogURLs = new Set([]);

// load from coveo
try{
	const coveoBlog = await fs.readJson(path.resolve(`../data/coveo/blog.json`));
	for(const url of coveoBlog){
		blogURLs.add(url.replace('http://', 'https://'));
	}
}catch{}

// load from rss feed
const rss = await fetch('https://blog.cloudflare.com/rss/');
if(rss.ok){
	const xml = await rss.text();
	const json = parser.parse(xml);
	for(const item of json?.rss?.channel?.item ?? []){
		blogURLs.add(item.link);
	}
}

const limit = pLimit(20);
// setup helpers for puppeteer
const browser = await puppeteer.launch({
	defaultViewport: {
		width: 1920,
		height: 1080,
	},
});
const fetchURL = async function(url, waitFor, slug){
	const page = await browser.newPage();
	await page.setRequestInterception(true);
	page.on('request', (request) => {
		if(!slug){ return request.continue(); } // only disable this when hitting posts
		// effectively disable JS/CSS for faster loads
		const resourceType = request.resourceType();
		if(resourceType !== 'document'){
			request.abort();
		}else{
			request.continue();
		}
	});
	// look normal
	await page.setUserAgent(userAgent);
	let results;
	try{
		results = await page.goto(url, {
			waitUntil: 'networkidle2',
		});
	}catch(err){
		console.warn('Failed to navigate', url, err);
		return;
	}

	if(results.status() !== 200){
		console.warn('Bad status', page.status());
		try{
			await fs.remove(slug);
		}catch{}
		await page.close();
		return;
	}
	if(waitFor){
		const textContent = await page.evaluate(waitFor => document.querySelector(waitFor).innerHTML, waitFor);
		await page.close();
		return textContent;
	}

	const bodyHTML = await page.evaluate(() => document.documentElement.outerHTML);
	await page.close();
	return bodyHTML;
};

const sitemap = await fetchURL(`https://blog.cloudflare.com/sitemap-posts.xml`);
const sitemapXml = parser.parse(sitemap);
for(const element of sitemapXml?.html?.head?.body?.div?.table?.tbody?.tr ?? []){
	if(element?.td?.[0]?.a){
		let url = element.td[0].a;
		if(url.startsWith('http://')){
			url = url.replace('http://', 'https://');
		}
		blogURLs.add(url);
	}
}
await fs.writeFile(path.resolve(dir, 'sitemap.json'), JSON.stringify([...blogURLs].sort(), null, '\t'));

console.log('Processing blog posts...', blogURLs.size);

const promises = [];
for(const url of [...blogURLs].sort()){
	promises.push(limit(async () => {
		console.log('Fetching', url);
		const parsedURL = new URL(url);
		const slug = path.resolve(dir, parsedURL.pathname.replace(/\/$/, '').slice(1));
		await fs.ensureDir(path.dirname(slug));

		const data = await fetchURL(url, 'section.post-full-content', slug);
		const dom = cheerio.load(data, null, false);
		const emailProtectionLinks = dom('a[href^="/cdn-cgi/l/email-protection"]');
		if(emailProtectionLinks){
			emailProtectionLinks.each(function(i, rawEl){
				const el = dom(rawEl);
				el.attr('href', '#email-protected');
			});
		}
		const cfEmail = dom('[data-cfemail]');
		if(cfEmail){
			cfEmail.each((i, spanEl) => {
				dom(spanEl).attr('data-cfemail', 'email protected');
			});
		}
		console.log('write', slug);
		const beautified = jsBeautify.html_beautify(dom.html(), {
			'indent_size': 4,
			'indent_char': '\t',
		});
		await fs.writeFile(slug + '.html', beautified);
	}));
}
await Promise.all(promises);

await browser.close();

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/blog/*',
		'data/blog/*.html',
		'data/blog/**/*',
		'data/blog/**/*.html',
	],
	`${prefix} - Blog Content was updated!`,
	'CFData - Blog Content Update',
	'Pushed Blog Content: ' + prefix,
);
