import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import jsBeautify from 'js-beautify';
import * as cheerio from 'cheerio';

import {tryAndPush, propertiesToArray, cfRequest} from '../utils.js';

const dir = path.resolve('../data/products/turnstile');
await fs.ensureDir(dir);

const reqs = [
	{
		name: 'widgets-list',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/challenges/widgets`,
		method: 'GET',
	},
	{
		name: 'widgets-get',
		url: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/challenges/widgets/{widget_id}`,
		method: 'GET',
	},
	{
		name: 'v0-api-prod-version',
		url: 'https://challenges.cloudflare.com/turnstile/v0/_version',
		method: 'GET',
		json: false,
	},
	{
		name: 'v0-api-staging-version',
		url: 'https://challenges-staging.cloudflare.com/turnstile/v0/_version',
		json: false,
	},
];
const results = {};
console.log('Making requests...');
for(const req of reqs) {
	let file = path.resolve(dir, `${req.name}.json`);
	if(req.json === false) {
		file = path.resolve(dir, `${req.name}.txt`);
	}
	let url = req.url;
	if(url.includes('{widget_id}') && results['widgets-list']?.result?.[0]?.sitekey) {
		url = url.replace('{widget_id}', results['widgets-list'].result[0].sitekey);
	}

	console.log(`Fetch for ${req.name}...`);
	const res = await cfRequest(url, {
		method: req.method,
	});
	if(!res.ok) {
		console.log(`${req.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	if(req.json === false) {
		results[req.name] = await res.text();
		await fs.writeFile(file, results[req.name]);
		continue;
	}
	const json = await res.json();
	results[req.name] = json;
	if(req.write !== false) {
		if(req.transform) {
			await fs.writeJson(file, req.transform(json), {spaces: '\t'});
		}else{
			await fs.writeJson(file, propertiesToArray(json).sort(), {spaces: '\t'});
		}
	}
}

// get JS
const javascripts = [
	{
		name: 'v0-api-prod',
		url: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
	},
	{
		name: 'v0-api-staging',
		url: 'https://challenges-staging.cloudflare.com/turnstile/v0/api.js',
	},
];

// track versions seen
for(const js of javascripts) {
	const file = path.resolve(dir, `${js.name}.js`);
	console.log(`Fetch for JS ${js.name}...`);
	const res = await fetch(js.url);
	if(!res.ok) {
		console.log(`${js.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const text = await res.text();
	const pretty = jsBeautify.js(text,
		{
			indent_size: 4,
			indent_char: '\t',
			indent_with_tabs: true,
		},
	);
	await fs.writeFile(file, pretty);
}

// get HTML/CSS
const htmlCssUrls = [
	{
		name: 'normal',
		url: `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/00000/${results['widgets-list'].result[0].sitekey}/auto/normal`,
	},
	{
		name: 'compact',
		url: `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/00000/${results['widgets-list'].result[0].sitekey}/auto/compact`,
	},
];
for(const htmlCss of htmlCssUrls) {
	const htmlFile = path.resolve(dir, `widget-${htmlCss.name}.html`);
	const cssFile = path.resolve(dir, `widget-${htmlCss.name}.css`);
	console.log(`Fetch for HTML/CSS ${htmlCss.name}...`);
	const res = await fetch(htmlCss.url);
	if(!res.ok) {
		console.log(`${htmlCss.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const text = await res.text();
	const doc = cheerio.load(text);
	const cssText = doc('style').html();
	const htmlText = doc('body').html();
	await fs.writeFile(cssFile, jsBeautify.css(cssText, {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));
	await fs.writeFile(htmlFile, jsBeautify.html(htmlText, {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/turnstile/*.json',
		'data/products/turnstile/*.js',
		'data/products/turnstile/*.txt',
		'data/products/turnstile/*.html',
		'data/products/turnstile/*.css',
	],
	`${prefix} - Product: Turnstile Data was updated!`,
	'CFData - Product: Turnstile Data Update',
	'Pushed Product: Turnstile Data: ' + prefix + ' (<@922118393178517545>)',
	'DISCORD_WEBHOOK_PRODUCT_TURNSTILE',
);
