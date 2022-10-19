import 'dotenv/config';
import path from 'node:path';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import filenamify from 'filenamify';
import fs from 'fs-extra';

import {tryAndPush} from './utils.js';
import jsBeautify from 'js-beautify';

async function run(){
	console.log('Fetching Support Articles...');

	const dir = path.resolve(`../data/support`);
	await fs.emptyDir(dir);

	// get categories
	const categoriesReq = await fetch('https://cloudflare.zendesk.com/api/v2/help_center/en-us/categories.json');
	const categories = await categoriesReq.json();
	await fs.writeJson(path.resolve(dir, 'categories.json'), categories?.categories, {spaces: '\t'});

	// get articles
	const articles = [];
	let next_url = 'https://cloudflare.zendesk.com/api/v2/help_center/en-us/articles.json?per_page=100';
	while(next_url){
		console.log('Fetch', next_url);
		const response = await fetch(next_url);
		const json = await response.json();
		articles.push(...json.articles);
		next_url = json.next_page;
	}

	for(const article of articles){
		const folderName = filenamify(`${article.name}-${article.id}`, {replacement: '_'});
		const articleDir = path.resolve(dir, folderName);
		await fs.ensureDir(articleDir);
		const {
			body,
			vote_sum,
			vote_count,
			...info
		} = article;
		await fs.writeJson(path.resolve(articleDir, 'article.json'), info, {spaces: '\t'});
		await fs.writeFile(path.resolve(articleDir, 'article.html'), jsBeautify.html_beautify(body, {
			'indent_size': 4,
			'indent_char': '\t',
		}));
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/support/*'],
		`${prefix} - Support Articles Data was updated!`,
		'CFData - Support Articles Data Update',
		'Pushed Support Articles Data: ' + prefix,
		'DISCORD_WEBHOOK_SUPPORT',
	);

	console.log('Done! :)');
}

run();