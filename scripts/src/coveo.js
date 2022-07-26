import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve(`../data/coveo`);
await fs.ensureDir(dir);

async function getCoveoResults(source, filterNoLanguage){
	console.log('Initializing Coveo search for source', source);
	const body = new URLSearchParams({
		actionsHistory: JSON.stringify([]),
		analytics: JSON.stringify({}),
		isGuestUser: false,
		aq: `(@customer_facing_source=="${source}") @language==English`,
		cq: `$qre(expression:'@customer_facing_source=="Blog"', modifier:'200')$qre(expression:'@language=="English"', modifier:'200')`,
		locale: 'en',
		pipeline: 'Blog - Production',
		firstResult: 0,
		numberOfResults: 100,
		sortCriteria: `date descending`,
		timezone: 'Europe/London',
	});
	if(filterNoLanguage){
		body.set('aq', `(@customer_facing_source=="${source}")`);
	}

	const query = new URLSearchParams({
		organizationId: process.env.COVEO_ORGID,
	});
	const response = await fetch(`https://cloudplatform.coveo.com/rest/search/v2?${query.toString()}`, {
		"headers": {
			authorization: `Bearer ${process.env.COVEO_KEY}`,
		},
		body: body,
		method: "POST",
		agent,
	});
	if(!response.ok){
		throw new Error(`Failed to get initial results: ${response.status}`);
	}
	const results = await response.json();

	const URLs = new Set([]);
	let queried = 0;
	for(const result of results.results){
		queried++;
		if(filterNoLanguage && result?.raw?.language?.length > 0){
			continue;
		}
		URLs.add(result.clickUri);
	}
	while(results.totalCount > queried){
		console.log('Fetching more results for source', source, queried);
		const nextBody = new URLSearchParams(body.toString());
		nextBody.set('firstResult', queried);
		const nextResponse = await fetch(`https://cloudplatform.coveo.com/rest/search/v2?${query.toString()}`, {
			"headers": {
				authorization: `Bearer ${process.env.COVEO_KEY}`,
			},
			body: nextBody,
			method: "POST",
			agent,
		});
		if(!nextResponse.ok){
			throw new Error(`Failed to get more results after ${queried}: ${nextResponse.status}`);
		}
		const nextResults = await nextResponse.json();
		if(nextResults.results.length === 0){
			throw new Error(`No more results after ${URLs.size}: ${nextResponse.status}`);
		}
		for(const result of nextResults.results){
			queried++;
			if(filterNoLanguage && result?.raw?.language?.length > 0){
				continue;
			}
			URLs.add(result.clickUri);
		}
	}
	return [...URLs].sort();
}

const data = [
	{
		source: 'Learning Center',
		filename: 'learning-center.json',
		filterNoLanguage: true, // english articles aren't tagged as English, they're just unset
	},
	// TODO: query this. Coveo stops returning results aftre the first 5000 unfortunately
	// {
	// 	source: 'Cloudflare.com',
	// 	filename: 'cloudflare-com.json',
	// 	filterNoLanguage: true, // english articles aren't tagged as English, they're just unset
	// },
	{
		source: 'Blog',
		filename: 'blog.json',
	},
	// TODO: make this more stable - does it just change too frequently?
	// {
	// 	source: 'Product documentation',
	// 	filename: 'product-documentation.json',
	// },
	{
		source: 'Support Knowledgebase',
		filename: 'support-knowledgebase.json',
	},
];
for(const {source, filename, filterNoLanguage} of data){
	const results = await getCoveoResults(source, filterNoLanguage);
	await fs.writeFile(path.resolve(dir, filename), JSON.stringify(results, null, '\t'));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/coveo/*',
		'data/coveo/*.json',
	],
	`${prefix} - Coveo data was updated!`,
	'CFData - Coveo Update',
	'Pushed Coveo: ' + prefix,
);