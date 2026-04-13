import 'dotenv/config';
import { Buffer } from 'node:buffer';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import pacote from 'pacote';
import { SourceMapConsumer } from 'source-map';

import { tryAndPush } from './utils.js';

const dataDir = path.resolve('../data/cf-cli');
const extractDir = path.resolve('../data/cf-cli/_extracted');
const mappedDir = path.resolve('../data/cf-cli/mapped');
const mapsDir = path.resolve('../data/cf-cli/_maps');

const sourceMappingURLRegex = /\/\/[#@]\s*sourceMappingURL\s*=\s*(.+)\s*$/m;
const dataURIRegex = /^data:application\/json;(?:charset=utf-8;)?base64,(.+)$/;

async function *walkFiles(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walkFiles(fullPath);
		} else {
			yield fullPath;
		}
	}
}

async function extractSourceMap(mapData) {
	let extracted = 0;
	await SourceMapConsumer.with(mapData, null, async (consumer) => {
		for (const source of consumer.sources) {
			const content = consumer.sourceContentFor(source);
			if (!content) {
				continue;
			}

			let filename = source;
			// Strip common webpack/bundler prefixes
			if (filename.startsWith('webpack://')) {
				// webpack:// or webpack:///
				filename = filename.replace(/^webpack:\/{2,4}/, '');
			} else if (filename.startsWith('file://')) {
				filename = filename.replace(/^file:\/\//, '');
			}

			// Remove leading path traversals
			filename = filename.replaceAll('../', '');

			// Skip empty filenames
			if (!filename || filename === '/') {
				continue;
			}

			const outFile = path.resolve(mappedDir, filename);
			await fs.ensureDir(path.dirname(outFile));
			await fs.writeFile(outFile, content);
			extracted++;
		}
	});
	return extracted;
}

async function run() {
	console.log('Fetching cf package metadata...');

	const packument = await pacote.packument('cf', { fullMetadata: true });
	const latestVersion = packument['dist-tags']?.latest;
	console.log(`Latest version: ${latestVersion}`);

	// Save package metadata
	await fs.ensureDir(dataDir);
	await fs.writeFile(
		path.resolve(dataDir, 'info.json'),
		JSON.stringify({
			'name': packument.name,
			'description': packument.description,
			'dist-tags': packument['dist-tags'],
			'latest': latestVersion,
			'modified': packument.time?.modified || packument.time?.[latestVersion],
		}, null, '\t'),
	);

	// Save version history
	const versions = {};
	for (const [version, meta] of Object.entries(packument.versions)) {
		versions[version] = {
			name: meta.name,
			version: meta.version,
			dependencies: meta.dependencies,
			bin: meta.bin,
			dist: meta.dist,
			date: packument.time?.[version],
		};
	}
	await fs.writeFile(
		path.resolve(dataDir, 'versions.json'),
		JSON.stringify(versions, null, '\t'),
	);

	// Extract the package
	console.log('Extracting cf package...');
	await fs.ensureDir(extractDir);
	await fs.emptyDir(extractDir);
	await pacote.extract('cf', extractDir);

	// Clear previous mapped output
	await fs.ensureDir(mappedDir);
	await fs.emptyDir(mappedDir);
	await fs.ensureDir(mapsDir);
	await fs.emptyDir(mapsDir);

	let totalMapped = 0;

	// Find and process all .map files in the extracted package
	console.log('Scanning for sourcemap files...');
	for await (const filePath of walkFiles(extractDir)) {
		if (filePath.endsWith('.map')) {
			const relativePath = path.relative(extractDir, filePath);
			console.log(`Found sourcemap: ${relativePath}`);
			try {
				const mapData = await fs.readJson(filePath);
				// Save a copy of the raw sourcemap
				const mapDest = path.resolve(mapsDir, relativePath);
				await fs.ensureDir(path.dirname(mapDest));
				await fs.writeFile(mapDest, JSON.stringify(mapData, null, '\t'));

				const count = await extractSourceMap(mapData);
				totalMapped += count;
				console.log(`  Extracted ${count} source files from ${relativePath}`);
			} catch (err) {
				console.warn(`  Failed to parse sourcemap ${relativePath}:`, err.message);
			}
		}
	}

	// Scan .js files for inline sourcemaps or external sourcemap references
	console.log('Scanning JS files for inline sourcemaps...');
	for await (const filePath of walkFiles(extractDir)) {
		if (!filePath.endsWith('.js') && !filePath.endsWith('.cjs') && !filePath.endsWith('.mjs')) {
			continue;
		}

		let content;
		try {
			content = await fs.readFile(filePath, 'utf8');
		} catch {
			continue;
		}

		const match = sourceMappingURLRegex.exec(content);
		if (!match) {
			continue;
		}

		const sourceMappingURL = match[1].trim();
		const relativePath = path.relative(extractDir, filePath);

		// Check for inline base64 sourcemap
		const dataMatch = dataURIRegex.exec(sourceMappingURL);
		if (dataMatch) {
			console.log(`Found inline sourcemap in: ${relativePath}`);
			try {
				const decoded = Buffer.from(dataMatch[1], 'base64').toString('utf8');
				const mapData = JSON.parse(decoded);

				// Save the decoded sourcemap
				const mapDest = path.resolve(mapsDir, `${relativePath}.map`);
				await fs.ensureDir(path.dirname(mapDest));
				await fs.writeFile(mapDest, JSON.stringify(mapData, null, '\t'));

				const count = await extractSourceMap(mapData);
				totalMapped += count;
				console.log(`  Extracted ${count} source files from inline map in ${relativePath}`);
			} catch (err) {
				console.warn(`  Failed to parse inline sourcemap in ${relativePath}:`, err.message);
			}
		} else if (!sourceMappingURL.startsWith('http')) {
			// External file reference - resolve relative to the JS file
			const mapPath = path.resolve(path.dirname(filePath), sourceMappingURL);
			if (await fs.pathExists(mapPath)) {
				// Already handled in the .map file scan above, skip
			} else {
				console.log(`  Referenced sourcemap not found: ${sourceMappingURL} (from ${relativePath})`);
			}
		}
	}

	console.log(`\nTotal source files extracted: ${totalMapped}`);

	// Clean up intermediate files to save space in git
	await fs.remove(extractDir);
	await fs.remove(mapsDir);

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/cf-cli/*',
			'data/cf-cli/**/*',
		],
		`${prefix} - CF CLI (cf) Package was updated!`,
		'CFData - CF CLI Update',
		'Pushed CF CLI Data: ' + prefix,
	);

	console.log('Done!');
}

run();
