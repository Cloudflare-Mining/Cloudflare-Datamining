import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve(`../data/coveo`);
await fs.ensureDir(dir);

async function getCoveoResults(source){
	console.log('Initializing Coveo search for source', source);
	const body = new URLSearchParams({
		actionsHistory: JSON.stringify([]),
		referrer: 'https://blog.cloudflare.com/using-apache-kafka-to-process-1-trillion-messages/',
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
	for(const result of results.results){
		if(URLs.has(result.clickUri)){
			console.log('URL already in list', result);
		}
		URLs.add(result.clickUri);
	}
	while(results.totalCount > URLs.size){
		console.log('Fetching more results for source', source, URLs.size);
		const nextBody = new URLSearchParams(body.toString());
		nextBody.set('firstResult', URLs.size);
		const nextResponse = await fetch(`https://cloudplatform.coveo.com/rest/search/v2?${nextBody.toString()}`, {
			"headers": {
				authorization: `Bearer ${process.env.COVEO_KEY}`,
			},
			body: nextBody,
			method: "POST",
			agent,
		});
		if(!nextResponse.ok){
			throw new Error(`Failed to get more results after ${URLs.size}: ${nextResponse.status}`);
		}
		const nextResults = await nextResponse.json();
		if(nextResults.results.length === 0){
			throw new Error(`No more results after ${URLs.length}: ${nextResponse.status}`);
		}
		for(const result of nextResults.results){
			if(URLs.has(result.clickUri)){
				console.log('URL already in list', result);
			}
			URLs.add(result.clickUri);
		}
	}
	return [...URLs].sort();
}

const data = [
	{
		source: 'Blog',
		filename: 'blog.json',
	},
	{
		source: 'Product documentation',
		filename: 'product-documentation.json',
	},
	{
		source: 'Support Knowledgebase',
		filename: 'support-knowledgebase.json',
	},
];
for(const {source, filename} of data){
	const results = await getCoveoResults(source);
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