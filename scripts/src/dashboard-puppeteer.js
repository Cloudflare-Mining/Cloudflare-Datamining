/*

NOT CURRENTLY USED
It turns out it's easier to just get every chunk and parse it that way - see dashboard.js

*/

import 'dotenv/config';
import path from 'path';

import fs from 'fs-extra';
import dateFormat from 'dateformat';
import puppeteer from 'puppeteer';
import {parse} from 'acorn';
import {fullAncestor} from 'acorn-walk';
import filenamify from 'filenamify';

import {tryAndPush} from './utils.js';

const TRANSLATIONS_SNIPPET = 'dash/intl/intl-translations/src/locale/en-US/';
const ROOT_URL = 'https://dash.cloudflare.com/';
const STATIC_DASH_ASSETS_URL = 'https://static.dash.cloudflare.com/';

async function writeTranslation(filename, data){
	const file = path.resolve(`../data/dashboard-translations/${filenamify(filename)}.json`);
	fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, data);
}

const scripts = {};
async function run(){
	console.log('Fetching Dashboard...');

	const browser = await puppeteer.launch({
		defaultViewport: {
			width: 1920,
			height: 1080,
		},
	});
	const page = await browser.newPage();
	page.on('response', async (response) => {
		const url = response.url();
		if(url.includes(STATIC_DASH_ASSETS_URL) && response.headers()['content-type']?.includes('application/javascript')){
			scripts[response.url()] = await response.text();
		}
	});
	await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36');
	// load cloudflare dash
	console.log(`Opening ${ROOT_URL}...`);
	await page.goto(ROOT_URL, {
		waitUntil: 'networkidle0',
	});
	await page.waitForSelector('form[action="/login"]');
	// login to get more translations for products
	console.log('Logging in...');
	await page.type('input[id=email]', process.env.CLOUDFLARE_EMAIL);
	await page.type('input[id=password]', process.env.CLOUDFLARE_PASSWORD);
	await page.evaluate(() => {
		document.querySelector('button[type=submit]').click();
	});
	// wait for Pages nav to load - good indication nav is ready
	await page.waitForSelector('a[href*="/pages"]', {
		visible: true,
	});

	console.log('Navigating around the dashboard...');
	// get all links in nav and browse to them, so more translations are loaded
	async function hitAllLinks(index = 1){
		const rawLinks = await page.$$('nav a');
		if(rawLinks[index]){
			const link = rawLinks[index];
			const href = await (await link.getProperty('href')).jsonValue(); // eslint-disable-line unicorn/no-await-expression-member
			const target = await (await link.getProperty('target')).jsonValue(); // eslint-disable-line unicorn/no-await-expression-member
			if(target !== '_blank'){
				console.log('Browsing to', href);
				await link.click();
				try{
					await page.waitForNavigation({
						timeout: 5000,
					});
				}catch{}
			}
			await hitAllLinks(index + 1);
		}
	}
	await hitAllLinks();
	await browser.close();

	console.log('Coalescing translations...');
	const translations = {};
	for(const [scriptName, script] of Object.entries(scripts)){
		if(script.includes(TRANSLATIONS_SNIPPET)){
			const translationNameParse = /dash\/intl\/intl-translations\/src\/locale\/en-US\/(?<name>\w+)\.json"/.exec(script);
			console.log(scriptName, translationNameParse.groups);
			if(!translationNameParse?.groups?.name){
				continue;
			}
			const translationName = translationNameParse.groups.name;
			const parsedScript = parse(script, {
				sourceType: 'script',
				ecmaVersion: 2020,
			});
			fullAncestor(parsedScript, (node, ancestors) => {
				if(node.type === 'TemplateLiteral'){
					// probably our translation
					const maybeParsed = ancestors.at(-2);
					if(maybeParsed?.callee?.object?.name === 'JSON' && maybeParsed?.callee?.property?.name === 'parse'){
						const json = node.quasis[0].value.cooked;
						try{
							translations[translationName] = JSON.parse(json);
						}catch{
							console.error('Error parsing', translationName, node.quasis);
						}
					}
				}
			});
		}
	}
	for(const [translationName, translation] of Object.entries(translations)){
		await writeTranslation(translationName, JSON.stringify(translation, null, '\t'));
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/dashboard/*'],
		`${prefix} - Dashboard Data was updated!`,
		'CFData - Dashboard Data Update',
		'Pushed Dashboard Data: ' + prefix,
	);

	console.log('Done! :)');
}

run();