import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';
import ipRegex from 'ip-regex';


import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve(`../data/domains`);
await fs.ensureDir(dir);

const payload = {
	"apiKey": process.env.WHOISXMLAPI_KEY,
	"sinceDate": "2009-01-01",
	"mode": "purchase",
	"punycode": true,
	"advancedSearchTerms": [{
		"field": "RegistrantContact.Organization",
		"term": "Cloudflare, Inc.",
		"exactMatch": false,
	}],
};
const domainsRes = await fetch(`https://registrant-alert.whoisxmlapi.com/api/v2`, {
	agent,
	method: 'POST',
	body: JSON.stringify(payload),
});


if(domainsRes.ok){
	const rawDomains = await domainsRes.json();

	const activeDomains = [];
	const droppedDomains = [];
	for(const domain of (rawDomains?.domainsList || [])){
		if(!ipRegex().test(domain.domainName)){
			if(domain.action === 'added'){
				activeDomains.push(domain.domainName);
			}else if(domain.action === 'dropped'){
				droppedDomains.push(domain.domainName);
			}
		}
	}

	if(activeDomains.length > 0){
		await fs.writeFile(path.resolve(dir, 'domains-active.json'), JSON.stringify([...activeDomains].sort(), null, '\t'));
	}
	if(droppedDomains.length > 0){
		await fs.writeFile(path.resolve(dir, 'domains-dropped.json'), JSON.stringify([...droppedDomains].sort(), null, '\t'));
	}
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/domains/*',
		'data/domains/*.json',
	],
	`${prefix} - Domains Data was updated!`,
	'CFData - Domains Data Update',
	'Pushed Domains Data: ' + prefix,
);
