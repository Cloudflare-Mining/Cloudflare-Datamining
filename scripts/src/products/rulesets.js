import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import slug from 'slug';
import dateFormat from 'dateformat';

import {tryAndPush, cfRequest} from '../utils.js';

const dir = path.resolve(`../data/products/rulesets`);
await fs.ensureDir(dir);

async function run(){
	const rulesets = await cfRequest(`https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE_ID}/rulesets`);
	const rulesetsJson = await rulesets.json();
	if(!rulesets.ok){
		console.error(`rulesets failed: ${rulesets.status} ${rulesets.statusText}`);
		return;
	}
	await fs.writeJson(path.resolve(dir, 'rulesets.json'), rulesetsJson.result, {spaces: '\t'});

	// get more info about each ruleset
	for(const ruleset of rulesetsJson.result){
		const rulesetDetails = await cfRequest(`https://api.cloudflare.com/client/v4/zones/${process.env.CLOUDFLARE_ZONE_ID}/rulesets/${ruleset.id}`);
		const rulesetDetailsJson = await rulesetDetails.json();
		if(!rulesetDetails.ok){
			console.error(`ruleset ${ruleset.id} failed: ${rulesetDetails.status} ${rulesetDetails.statusText}`);
			continue;
		}
		await fs.writeJson(path.resolve(dir, `rulesets-${slug(ruleset.name)}-${ruleset.id}.json`), rulesetDetailsJson.result, {spaces: '\t'});
	}

	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/products/rulesets/*.json',
		],
		`${prefix} - Product: Rulesets Data was updated!`,
		'CFData - Product: Rulesets Data Update',
		'Pushed Product: Rulesets Data: ' + prefix,
	);
}

run();
