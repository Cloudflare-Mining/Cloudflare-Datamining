import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import jsBeautify from 'js-beautify';

import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve(`../data/investors`);
await fs.ensureDir(dir);
await fs.emptyDir(dir);
const apiKey = `BF185719B0464B3CB809D23926182246`;

// finanical reports
const finanicalReportDir = path.resolve(dir, 'financial-reports');
await fs.ensureDir(finanicalReportDir);

const nameMap = {
	'First Quarter': 'Q1',
	'Second Quarter': 'Q2',
	'Third Quarter': 'Q3',
	'Fourth Quarter': 'Q4',
};

console.log('Getting finanical reports...');
const finanicalReportsRes = await fetch(`https://cloudflare.net/feed/FinancialReport.svc/GetFinancialReportList?apiKey=${apiKey}&IncludeTags=true&year=-1&reportSubTypeList%5B%5D=First%20Quarter&reportSubTypeList%5B%5D=Second%20Quarter&reportSubTypeList%5B%5D=Third%20Quarter&reportSubTypeList%5B%5D=Fourth%20Quarter`, {agent});
if(!finanicalReportsRes.ok){
	throw new Error('Failed to get finanical reports');
}
const finanicalReportsResults = await finanicalReportsRes.json();
for(const quarter of finanicalReportsResults?.GetFinancialReportListResult ?? []){
	const slug = `${quarter.ReportYear}-${nameMap[quarter.ReportSubType] ?? quarter.ReportSubType}`;
	console.log('Processing', slug);
	const quarterDirName = path.resolve(finanicalReportDir, slug);
	await fs.ensureDir(quarterDirName);
	await fs.writeFile(path.resolve(`${quarterDirName}.json`), JSON.stringify(quarter, null, '\t'));
}

// sec filings
const secFilingsDir = path.resolve(dir, 'sec-filings');
await fs.ensureDir(secFilingsDir);

console.log('Getting SEC filings...');
const secFilingsRes = await fetch(`https://cloudflare.net/feed/SECFiling.svc/GetEdgarFilingList?apiKey=${apiKey}&LanguageId=1&exchange=CIK&symbol=0001477333&formGroupIdList=&excludeNoDocuments=false&includeHtmlDocument=false&pageSize=-1&pageNumber=0&tagList=&includeTags=true&year=-1&excludeSelection=1`, {agent});
if(!finanicalReportsRes.ok){
	throw new Error('Failed to get SEC filings');
}
const secFilingsResults = await secFilingsRes.json();
await fs.writeFile(path.resolve(secFilingsDir, `_index.json`), JSON.stringify(secFilingsResults, null, '\t'));

// press releases
const pressReleasesDir = path.resolve(dir, 'press-releases');
await fs.ensureDir(pressReleasesDir);

console.log('Getting press releases...');
const pressReleasesRes = await fetch(`https://cloudflare.net/feed/PressRelease.svc/GetPressReleaseList?apiKey=${apiKey}&LanguageId=1&bodyType=2&pressReleaseDateFilter=3&categoryId=1cb807d2-208f-4bc3-9133-6a9ad45ac3b0&pageSize=-1&pageNumber=0&tagList=&includeTags=true&year=-1&excludeSelection=1`);
if(!pressReleasesRes.ok){
	throw new Error('Failed to get press releases');
}
const pressReleasesResults = await pressReleasesRes.json();
for(const release of pressReleasesResults?.GetPressReleaseListResult ?? []){
	const name = release.SeoName ?? release.Headline;
	const releaseDir = path.resolve(pressReleasesDir, name);
	await fs.ensureDir(releaseDir);
	const {Body, ...restRelease} = release;
	await fs.writeFile(path.resolve(releaseDir, `_index.json`), JSON.stringify(restRelease, null, '\t'));
	if(Body){
		const beautified = jsBeautify.html_beautify(Body, {
			'indent_size': 4,
			'indent_char': '\t',
		});
		await fs.writeFile(path.resolve(releaseDir, `README.html`), beautified);
	}
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/investors/*',
	],
	`${prefix} - Investors Data was updated!`,
	'CFData - Investors Data Update',
	'Pushed Investors Data: ' + prefix,
);
