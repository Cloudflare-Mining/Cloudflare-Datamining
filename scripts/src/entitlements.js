import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';

const dir = path.resolve(`../data/entitlements`);
await fs.ensureDir(dir);

const known = {
	zone: await fs.readJson(path.resolve(dir, 'zone.json'), 'utf8'),
	account: await fs.readJson(path.resolve(dir, 'account.json'), 'utf8'),
};
const added = [];
function addEntitlement(entitlement, type){
	let foundEntitlement = known[type].find(element => element.id === entitlement.id);
	if(!foundEntitlement){
		foundEntitlement = {
			id: entitlement.id,
			feature: entitlement.feature,
			allocation: {
				type: entitlement.allocation?.type ?? 'unknown',
				values: [],
			},
		};
		known[type].push(foundEntitlement);
		added.push(foundEntitlement.id);
	}
	foundEntitlement.allocation.values ??= [];
	if(entitlement.allocation?.value && !foundEntitlement.allocation.values.includes(entitlement.allocation.value)){
		foundEntitlement.allocation.values.push(entitlement.allocation.value);
	}
}

const list = await fs.readdir(path.resolve(dir, 'responses'));
for(const file of list){
	const data = await fs.readJson(path.resolve(dir, 'responses', file));
	let look = [];
	if(data.result){
		look = data.result;
	}else if(Array.isArray(data)){
		look = data;
	}
	for(const entitlement of look){
		if(file.startsWith('zone')){
			addEntitlement(entitlement, 'zone');
		}else if(file.startsWith('account')){
			addEntitlement(entitlement, 'account');
		}
	}
}

console.log('Added', added.length, 'entitlements:', added.join(', '));

function sortAndFilter(array, filter = true){
	const sorted = array.sort((entA, entB) => entA.id.localeCompare(entB.id));
	if(filter){
		return sorted.map((entitlement) => {
			return {
				id: entitlement.id,
				feature: entitlement.feature,
				allocation: {
					type: entitlement.allocation.type,
				},
			};
		});
	}
	return sorted;
}
if(known.account.length > 0){
	await fs.writeFile(path.resolve(dir, 'account.json'), JSON.stringify([...sortAndFilter(known.account)].sort(), null, '\t'));
	await fs.writeFile(path.resolve(dir, 'account-values.json'), JSON.stringify([...sortAndFilter(known.account, false)].sort(), null, '\t'));
}
if(known.zone.length > 0){
	await fs.writeFile(path.resolve(dir, 'zone.json'), JSON.stringify([...sortAndFilter(known.zone)].sort(), null, '\t'));
	await fs.writeFile(path.resolve(dir, 'zone-values.json'), JSON.stringify([...sortAndFilter(known.zone, false)].sort(), null, '\t'));
}