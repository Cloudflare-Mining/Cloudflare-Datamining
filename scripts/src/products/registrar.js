import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import jsBeautify from 'js-beautify';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';


import {tryAndPush} from '../utils.js';

const dir = path.resolve('../data/products/registrar');
await fs.ensureDir(dir);

// get HTML
const html = [
	{
		name: 'default-page',
		url: 'https://default-page.cloudflareregistrar.com/',
	},
	{
		name: 'foa',
		url: 'https://foa.cloudflareregistrar.com/ui/foa.html',
	},
];

const css = [
	{
		name: 'default-page',
		url: 'https://default-page.cloudflareregistrar.com/style.css',
	},
	{
		name: 'foa',
		url: 'https://foa.cloudflareregistrar.com/ui/style.css',
	},
];
for(const item of html) {
	const filename = path.resolve(dir, `${item.name}.html`);
	console.log(`Fetch for HTML ${item.name}...`);
	const res = await fetch(item.url);
	if(!res.ok) {
		console.log(`${item.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const text = await res.text();
	const doc = cheerio.load(text);
	const htmlText = doc('html').html();
	await fs.writeFile(filename, jsBeautify.html(htmlText, {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));
}

for(const item of css) {
	const filename = path.resolve(dir, `${item.name}.css`);
	console.log(`Fetch for CSS ${item.name}...`);
	const res = await fetch(item.url);
	if(!res.ok) {
		console.log(`${item.name} failed: ${res.status} ${res.statusText}`);
		continue;
	}
	const text = await res.text();
	await fs.writeFile(filename, jsBeautify.css(text, {
		indent_size: 4,
		indent_char: '\t',
		indent_with_tabs: true,
	}));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/registrar/*.html',
		'data/products/registrar/*.css',
	],
	`${prefix} - Product: Registrar Data was updated!`,
	'CFData - Product: Registrar Data Update',
	'Pushed Product: Registrar Data: ' + prefix,
	'DISCORD_WEBHOOK_PRODUCT_REGISTRAR',
);
