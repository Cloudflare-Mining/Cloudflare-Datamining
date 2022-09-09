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
	'_api',
	'_athenian',
	'_basic',
	'_basic_no_cost',
	'_basic_nocost',
	'_beta',
	'_biz',
	'_biz_free',
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
	'_premium_no_cost',
	'_premium_nocost',
	'_pro',
	'_pro_free',
	'_ss',
	'_standard_no_cost',
	'_standard_nocost',
	'_staging',
	'_test',
	'_trial',
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
	'analytics_engine',
	'biz',
	'bot_management',
	'bot_zone',
	'byoip',
	'cache_reserve',
	'calls',
	'casb',
	'cf_ent_app_sec_adv',
	'cf_ent_app_sec_core',
	'd1',
	'dns',
	'ddos_protection_magic_transit',
	'ddos_protection_spectrum',
	'edge_containers',
	'ent',
	'enterprise_customer_portal',
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
	"secure_web_gateway",
	'soc',
	'spectrum',
	'ssl_for_saas',
	'stream',
	'teams',
	'teams_gateway',
	'teams_access',
	'waiting_rooms',
	'workers',
	'workers_for_platforms',
	'zaraz',
	'zero_trust',
	'zero_trust_access',
	'zero_trust_gateway',
	'zone_argo',
]);

const ratePlans = new Set([]);
const addRatePlan = function(ratePlan){
	// partner rate plans are usually just prefixed with partners_
	// add some other common suffixes
	ratePlans.add(ratePlan);
	const endsWithSuffix = [...knownSuffixes].find(suffix => ratePlan.endsWith(suffix));
	let usePlan = ratePlan;
	if(endsWithSuffix){
		usePlan = ratePlan.slice(0, Math.max(0, ratePlan.length - endsWithSuffix.length));
	}
	ratePlans.add(usePlan);
	ratePlans.add(`beta_${usePlan}`);
	// partner/smp rate plans are usually just prefixed with partners_/msp_
	ratePlans.add(`partners_${usePlan}`);
	//ratePlans.add(`msp_${usePlan}`);
	for(const suffix of knownSuffixes){
		const toAdd = `${usePlan}${suffix}`;
		ratePlans.add(toAdd);
		ratePlans.add(`partners_${toAdd}`);
		ratePlans.add(`beta_${toAdd}`);
		//ratePlans.add(`msp_${toAdd}`);
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
		if(!planName || planName === '_list'){
			continue;
		}
		addRatePlan(planName);
	}

}catch(err){
	console.log(err);
}

try{
	const dir = await fs.readdir(path.resolve('../data/billing-rate-plans'));
	for(const file of dir){
		const ratePlan = file.replace('.json', '');
		if(ratePlan === '_list'){
			continue;
		}
		addRatePlan(ratePlan);
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
