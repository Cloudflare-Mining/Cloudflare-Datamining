import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import pLimit from 'p-limit';
import fetch from 'node-fetch';

import {tryAndPush, getHttpsAgent} from './utils.js';

const limit = pLimit(50);

const dir = path.resolve(`../data/billing-rate-plans`);
await fs.ensureDir(dir);

const knownSuffixes = new Set([
	'_account',
	'_advanced',
	'_advanced_no_cost',
	'_advanced_nocost',
	'_basic',
	'_basic_no_cost',
	'_basic_nocost',
	'_beta',
	'_emp',
	'_ent',
	'_ent_contract',
	'_ent_paygo',
	'_ent_ss',
	'_fairshot',
	'_free',
	'_galileo',
	'_no_cost',
	'_nocost',
	'_nocost',
	'_paid',
	'_premium',
	'_pro',
	'_ss',
	'_test',
]);

// some known (or anticipated) rate plans that aren't listed in the types
// suffixes will always be added from above list, so are ommited here
const knownRatePlans = new Set([
	'access',
	'advanced_cert_manager',
	'advanced_ddos_protection',
	'api_gateway',
	'api_gateway_zone',
	'api_shield',
	'api_shield_zone',
	'biz',
	'bot_management',
	'bot_zone',
	'byoip',
	'cache_reserve',
	'casb',
	'cf_ent_app_sec_adv',
	'd1',
	'dns',
	'ddos_protection_magic_transit',
	'ddos_protection_spectrum',
	'ent',
	'free',
	'gateway',
	'image_resizing',
	'image_resizing_legacy_100',
	'image_resizing_legacy_300',
	'image_resizing_legacy_600',
	'images',
	'images_stream',
	'images_stream_bundle',
	'load_balancing',
	'magic_firewall',
	'magic_transit',
	'magic_wan',
	'pages',
	'pro',
	'r2',
	'rate_limiting',
	'soc',
	'spectrum',
	'ssl_for_saas',
	'stream',
	'teams',
	'teams_gateway',
	'teams_access',
	'waiting_rooms',
	'workers',
]);

const ratePlans = new Set([]);
const addRatePlan = function(ratePlan){
	ratePlans.add(ratePlan);
	// partner rate plans are usually just prefixed with partners_
	ratePlans.add(`partners_${ratePlan}`);
	// add some other common suffixes
	const endsWithSuffix = [...knownSuffixes].find(suffix => ratePlan.endsWith(suffix));
	let usePlan = ratePlan;
	if(endsWithSuffix){
		usePlan = ratePlan.slice(0, Math.max(0, ratePlan.length - endsWithSuffix.length));
	}
	for(const suffix of knownSuffixes){
		console.log('add', `${usePlan}${suffix}`);
		ratePlans.add(`${usePlan}${suffix}`);
	}
};
for(const ratePlan of knownRatePlans){
	addRatePlan(ratePlan);
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
		addRatePlan(planName);
	}

}catch(err){
	console.log(err);
}

await fs.writeFile(path.resolve('../data/billing-rate-plans/_list.json'), JSON.stringify([...ratePlans].sort(), null, '\t'));

const promises = [];
const agent = getHttpsAgent();
for(const ratePlan of [...ratePlans].sort()){
	promises.push(limit(async () => {
		const file = path.resolve(`${dir}/${ratePlan}.json`);
		console.log('Fetching for', ratePlan);
		const res = await fetch(`https://api.cloudflare.com/client/v4/billing/rate_plans/${ratePlan}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			agent,
		});
		if(!res.ok){
			if(res.status === 404){
				console.warn(`${ratePlan} not found`);
				try{
					await fs.remove(file);
				}catch{}
			}else{
				console.warn(`${ratePlan} failed to be fetched`, res.status);
			}
			return;
		}
		const json = await res.json();
		if(!json.result || !json.success){
			console.warn(`${ratePlan} failed to be fetched`, json);
			return;
		}
		await fs.writeFile(file, JSON.stringify(json.result, null, '\t'));
	}));
}
await Promise.all(promises);

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/billing-rate-plans/*.json',
	],
	`${prefix} - Billing Plans Data was updated!`,
	'CFData - Billing Plans Data Update',
	'Pushed Billing Plans Data: ' + prefix,
);
