import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';

import {tryAndPush, cfRequest} from './utils.js';

const dir = path.resolve(`../data/billing-rate-plans`);
await fs.ensureDir(dir);

// some known rate plans that aren't listed in the types
const knownRatePlans = new Set([
	'bot_zone_ent_contract',
	'bot_zone_ent_paygo',
	'free',
	'pro',
	'biz',
	'ent',
	'load_balancing',
	'load_balancing_ent',
	'load_balancing_ent_contract',
	'load_balancing_ent_paygo',
	'spectrum',
	'workers_ss',
	'stream_ent_contract',
	'stream_ent_paygo',
]);

const ratePlans = new Set([]);
for(const ratePlan of knownRatePlans){
	ratePlans.add(ratePlan);
	// partner rate plans are usually just prefixed with partners_
	ratePlans.add(`partners_${ratePlan}`);
}


let ratePlanRaw = null;
try{
	ratePlanRaw = await fs.readFile(path.resolve('../data/types/src/api/ratePlan.ts'), 'utf8');
	const plans = ratePlanRaw.matchAll(/\('(.*)?'\)/g);
	for(const plan of plans){
		const planName = plan?.[1]?.trim?.()?.toLowerCase?.();
		if(!planName){
			continue;
		}
		ratePlans.add(planName);
		// partner rate plans are usually just prefixed with partners_
		ratePlans.add(`partners_${planName}`);
	}

}catch(err){
	console.log(err);
}

for(const ratePlan of [...ratePlans].sort()){
	const file = path.resolve(`${dir}/${ratePlan}.json`);
	console.log('Fetching for', ratePlan);
	const res = await cfRequest(`https://api.cloudflare.com/client/v4/billing/rate_plans/${ratePlan}`);
	if(!res.ok){
		console.warn(`${ratePlan} failed to be fetched`);
		if(res.status === 404){
			console.warn(`${ratePlan} not found`);
			try{
				await fs.remove(file);
			}catch{}
		}
		continue;
	}
	const json = await res.json();
	if(!json.result || !json.success){
		console.warn(`${ratePlan} failed to be fetched`, json);
		continue;
	}
	await fs.writeFile(file, JSON.stringify(json.result, null, '\t'));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/billing-rate-plans/*.json',
	],
	`${prefix} - Billing Plans Data was updated!`,
	'CFData - Billing Plans Data Update',
	'Pushed Billing Plans Data: ' + prefix,
);
