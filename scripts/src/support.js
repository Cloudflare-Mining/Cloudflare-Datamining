import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import filenamify from 'filenamify';
import fs from 'fs-extra';
import jsBeautify from 'js-beautify';
import fetch from 'node-fetch';

import { tryAndPush } from './utils.js';

async function run() {
	console.log('Fetching Support Articles...');

	const dir = path.resolve('../data/support');
	await fs.emptyDir(dir);

	// get categories
	const categoriesReq = await fetch('https://cloudflare.zendesk.com/api/v2/help_center/en-us/categories.json');
	const rawCategories = await categoriesReq.json();
	const categories = [];
	for (const category of rawCategories?.categories ?? []) {
		const { updated_at, ...rest } = category;
		categories.push(rest);
	}

	await fs.writeJson(path.resolve(dir, 'categories.json'), categories, { spaces: '\t' });

	// get articles
	const articles = [];
	let next_url = 'https://cloudflare.zendesk.com/api/v2/help_center/en-us/articles.json?per_page=100';
	while (next_url) {
		console.log('Fetch', next_url);
		const response = await fetch(next_url);
		const json = await response.json();
		articles.push(...json.articles);
		next_url = json.next_page;
	}

	for (const article of articles) {
		const folderName = filenamify(`${article.name}-${article.id}`, { replacement: '_' });
		const articleDir = path.resolve(dir, folderName);
		await fs.ensureDir(articleDir);
		const {
			body,
			// remove some fields that create unstable diffs
			vote_sum,
			vote_count,
			updated_at, // edited_at seems more stable. This changes whenever votees and things change, which is very frequent
			...info
		} = article;
		await fs.writeJson(path.resolve(articleDir, 'article.json'), info, { spaces: '\t' });
		await fs.writeFile(path.resolve(articleDir, 'article.html'), jsBeautify.html_beautify(body, {
			'indent_size': 4,
			'indent_char': '\t',
		}));
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/support/*'],
		`${prefix} - Support Articles Data was updated! [skip ci]`,
		'CFData - Support Articles Data Update',
		'Pushed Support Articles Data: ' + prefix,
		'DISCORD_WEBHOOK_SUPPORT',
	);

	console.log('Done! :)');
}

run();
