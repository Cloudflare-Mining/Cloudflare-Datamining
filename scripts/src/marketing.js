import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import {XMLParser} from 'fast-xml-parser';

import {tryAndPush, getHttpsAgent} from './utils.js';
const agent = getHttpsAgent();

const dir = path.resolve(`../data/marketing`);
await fs.ensureDir(dir);

const pagesDir = path.resolve(dir, 'pages');
await fs.ensureDir(pagesDir);

const parser = new XMLParser();
const paths = new Set([
	'index',
]);
const morePaths = new Set([]);

const shuffle = function(array){
	let currentIndex = array.length;
	let	randomIndex;

	// While there remain elements to shuffle.
	while(currentIndex !== 0){
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex],
		];
	}

	return array;
};
const removeTrailing = function(string){
	return string.replace(/\/$/, '');
};

const addPath = function(url){
	const fixed = removeTrailing(url);
	paths.add(fixed);
};
const addMore = function(url){
	if(url.includes('#')){
		return;
	}
	const fixed = removeTrailing(url);
	if(!paths.has(fixed) && !morePaths.has(fixed)){
		console.log('Found new path!', fixed);
		morePaths.add(fixed);
	}
};

const keysWithUrls = new Set(['url', 'learnMoreUrl']);
const findMoreUrls = function(object){
	for(const key in object){
		if(typeof object[key] === 'string' && keysWithUrls.has(key)){
			const val = object[key];
			if(val.startsWith('/')){
				addMore(val.slice(1));
			}else if(val.startsWith('https://www.cloudflare.com')){
				const url = new URL(val);
				addMore(url.pathname.slice(1));
			}
		}
		if(typeof object[key] === 'object'){
			findMoreUrls(object[key]);
		}
		if(Array.isArray(object[key])){
			for(const item of object[key]){
				if(typeof item === 'object'){
					findMoreUrls(item);
				}
			}
		}
	}
};

const stabiliseString = function(string){
	if(string.includes('�')){
		throw new Error('Bad encoding');
	}
	return string.replaceAll('’', '\'')
		.replaceAll('‘', '\'')
		.replaceAll('”', '"')
		.replaceAll('“', '"');
};
const stabiliseData = function(object){
	if(typeof object === 'string'){
		return object;
	}
	for(const key in object){
		if(typeof object[key] === 'string'){
			object[key] = stabiliseString(object[key]);
			if(key === 'publicURL'){
				object[key] = object[key].replace(/^\/static\/\w+\/(.*)/, '[path]/$1');
			}
		}
		if(typeof object[key] === 'object'){
			stabiliseData(object[key]);
		}
		if(Array.isArray(object[key])){
			for(let item of object[key]){
				if(typeof item === 'object'){
					stabiliseData(item);
				}else if(typeof item === 'string'){
					item = stabiliseString(item);
				}
			}
			object[key] = object[key].sort((itemA, itemB) => {
				if(itemA.orderDate){
					return itemB.orderDate.localeCompare(itemA.orderDate) || itemA.id.localeCompare(itemB.id);
				}
				if(typeof(itemA) === 'string'){
					return 0;
				}
				return 0;
			});
		}
	}
};

const processPage = async function(urlPath){
	const url = `https://marketing-data.james.pub/?path=${urlPath}`;
	console.log('Fetching', url);
	const res = await fetch(url, {
		agent,
		headers: {
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
		},
	});
	const filePath = path.resolve(pagesDir, `${urlPath}.json`);
	if(!res.ok){
		console.log('Failed', url, res.status);
		try{
			if(res.status === 404){
				// page removed
				await fs.remove(filePath);
			}
		}catch{}
		return;
	}
	const json = await res.json();
	await fs.ensureFile(filePath);

	findMoreUrls(json.result);
	try{
		stabiliseData(json.result);
	}catch(err){
		console.warn('Ignoring', url, err);
		return;
	}

	// extract global info
	if(urlPath === 'index'){
		if(json?.result?.pageContext?.globalVariables){
			const globalVariables = json.result.pageContext.globalVariables;
			const globalVariablesPath = path.resolve(dir, 'global-variables.json');
			await fs.writeFile(globalVariablesPath, JSON.stringify(globalVariables, null, '\t'));
		}
		if(json?.result?.pageContext?.staticStrings){
			const staticStrings = json.result.pageContext.staticStrings;
			const staticStringsPath = path.resolve(dir, 'static-strings.json');
			await fs.writeFile(staticStringsPath, JSON.stringify(staticStrings, null, '\t'));
		}
		if(json?.result?.pageContext?.salesPhoneNumbers){
			const salesPhoneNumbers = json.result.pageContext.salesPhoneNumbers;
			const salesPhoneNumbersPath = path.resolve(dir, 'sales-phone-numbers.json');
			await fs.writeFile(salesPhoneNumbersPath, JSON.stringify(salesPhoneNumbers, null, '\t'));
		}
		if(json?.result?.data?.headerData){
			const headerData = json.result.data.headerData;
			const headerDataPath = path.resolve(dir, 'header-data.json');
			await fs.writeFile(headerDataPath, JSON.stringify(headerData, null, '\t'));
		}
		if(json?.result?.data?.footerData){
			const footerData = json.result.data.footerData;
			const footerDataPath = path.resolve(dir, 'footer-data.json');
			await fs.writeFile(footerDataPath, JSON.stringify(footerData, null, '\t'));
		}
	}else{
		// delete duplicate info
		if(json?.result?.pageContext?.globalVariables){
			delete json.result.pageContext.globalVariables;
		}
		if(json?.result?.pageContext?.staticStrings){
			delete json.result.pageContext.staticStrings;
		}
		if(json?.result?.pageContext?.salesPhoneNumbers){
			delete json.result.pageContext.salesPhoneNumbers;
		}
		if(json?.result?.data?.headerData){
			delete json.result.data.headerData;
		}
		if(json?.result?.data?.footerData){
			delete json.result.data.footerData;
		}
		if(json?.staticQueryHashes){
			delete json.staticQueryHashes;
		}
	}
	await fs.writeFile(filePath, JSON.stringify(json, null, '\t'));
};

// first determine that we're requesting from the US
// Cloudflare's marketing site seems to change content based on the country
// So let's get the most possible stable diffs by ensuring this is coming from the US
async function run(){
	const cfRes = await fetch('https://jross.me/cf.json');
	const cf = await cfRes.json();
	if(cf?.country !== 'US'){
		console.log('Action isn\'t running in the US. Skipping marketing site processing.', cf);
		return;
	}

	// then fetch everything from the sitemap
	const sitemap = await fetch('https://www.cloudflare.com/sitemap.xml').then(res => res.text());
	const sitemapXml = parser.parse(sitemap);
	for(const url of sitemapXml.urlset.url){
		if(url.loc){
			const rawPath = url.loc.replace('https://www.cloudflare.com/', '');
			addPath(rawPath);
		}
	}
	for(const urlPath of shuffle([...paths])){
		await processPage(urlPath);
	}

	for(const urlPath of shuffle([...morePaths])){
		console.log('Processing more', urlPath);
		await processPage(urlPath);
	}

	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/marketing/*',
			'data/marketing/*.json',
			'data/marketing/**/*.json',
		],
		`${prefix} - Marketing Site Data was updated!`,
		'CFData -Marketing Site Data Update',
		'Pushed Marketing Site Data: ' + prefix,
		'marketing',
	);
}
run();