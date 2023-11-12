import path from 'node:path';

import * as cheerio from 'cheerio';
import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import { SourceMapConsumer } from 'source-map';

import { getHttpsAgent, tryAndPush } from './utils.js';


const rootURL = 'https://pages.cloudflare.com';

const agent = getHttpsAgent();

async function writeJS(filename, data) {
	const file = path.resolve(`../data/marketing-pages/${filename}`);
	await fs.ensureDir(path.dirname(file));
	await fs.writeFile(file, data);
	return file;
}

async function getChunks() {
	const response = await fetch(rootURL, { agent });
	const text = await response.text();

	// create list of chunks
	const chunks = [];
	const dom = cheerio.load(text);
	dom('script').each((i, el) => {
		const src = dom(el).attr('src');
		if (src && !src.startsWith('http')) {
			if (src.startsWith('./')) {
				chunks.push(src.slice(1));
			} else {
				chunks.push(src);
			}
		}
	});

	const gatsbyChunkMap = dom('script#gatsby-chunk-mapping').html();
	const extractedMap = /window\.___chunkMapping=({.*})/.exec(gatsbyChunkMap);
	if (extractedMap && extractedMap[1]) {
		const map = JSON.parse(extractedMap[1]);
		for (const entrypoint in map) {
			const entrypointChunks = map[entrypoint];
			for (const chunk of entrypointChunks) {
				if (!chunks.includes(chunk)) {
					chunks.push(chunk);
				}
			}
		}
	}

	const sourcemaps = [];
	for (const chunk of chunks) {
		const sourcemap = await fetch(`${rootURL}${chunk}.map`, { agent });
		if (sourcemap.ok) {
			const file = path.resolve(`../data/marketing-pages/_maps/${chunk}.map`);
			await fs.ensureDir(path.dirname(file));
			await fs.writeFile(file, await sourcemap.text());
		}
	}


	return {
		chunks,
		sourcemaps,
	};
}

const webpackString = 'webpack://';
async function run() {
	await fs.emptyDir(path.resolve('../data/marketing-pages'));
	console.log('Fetching chunks...');
	await getChunks();

	const maps = await fs.readdir(path.resolve('../data/marketing-pages/_maps'));
	for (const map of maps) {
		if (!map.endsWith('.map')) {
			continue;
		}
		const mapFile = await fs.readJson(path.resolve(`../data/marketing-pages/_maps/${map}`));

		await SourceMapConsumer.with(mapFile, null, async (consumer) => {
			const sources = consumer.sources;
			for (const source of sources) {
				const content = consumer.sourceContentFor(source);
				if (content) {
					let filename = null;
					if (source.startsWith(webpackString)) {
						filename = source.slice(webpackString.length);
					} else {
						console.warn('No matching filename', source);
						return;
					}
					if (filename.startsWith('/src')) {
						await writeJS(`${filename}`, content);
					}
				}
			}
		});
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/marketing-pages/*',
		],
		`${prefix} - Pages Marketing was updated!`,
		'CFData - Pages Marketing Source Update',
		'Pushed Pages Marketing Source: ' + prefix,
		'DISCORD_WEBHOOK_PRODUCT_PAGES',
	);
}

run();
