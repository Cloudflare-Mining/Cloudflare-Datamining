import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';

const dir = path.resolve(`../data/entitlements`);
await fs.ensureDir(dir);

const known = {
	zone: await fs.readJson(path.resolve(dir, 'zone.json'), 'utf8'),
	account: await fs.readJson(path.resolve(dir, 'account.json'), 'utf8'),
};
let added = 0;
function addEntitlement(entitlement, type){
	const exists = known[type].some(element => element.id === entitlement.id);
	if(!exists){
		known[type].push({
			id: entitlement.id,
			feature: entitlement.feature,
			allocation: {
				type: entitlement.allocation.type,
			},
		});
		added++;
	}
}

const list = await fs.readdir(path.resolve(dir, 'responses'));
for(const file of list){
	const data = await fs.readJson(path.resolve(dir, 'responses', file));
	for(const entitlement of data.result || []){
		if(file.startsWith('zone')){
			addEntitlement(entitlement, 'zone');
		}else if(file.startsWith('account')){
			addEntitlement(entitlement, 'account');
		}
	}
}

console.log('Added', added, 'entitlements');

if(known.account.length > 0){
	const sorted = known.account.sort((entA, entB) => entA.id.localeCompare(entB.id));
	await fs.writeFile(path.resolve(dir, 'account.json'), JSON.stringify([...sorted].sort(), null, '\t'));
}
if(known.zone.length > 0){
	const sorted = known.zone.sort((entA, entB) => entA.id.localeCompare(entB.id));
	await fs.writeFile(path.resolve(dir, 'zone.json'), JSON.stringify([...sorted].sort(), null, '\t'));
}