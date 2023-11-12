import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import { propertiesToArray, tryAndPush } from './utils.js';

const dir = path.resolve('../data/cdn-cgi');
await fs.ensureDir(dir);

// get keys for trace
const traceRes = await fetch('https://colo.quest/cdn-cgi/trace');
const trace = await traceRes.text();
const data = trace.split('\n').map(line => line.split('='));
const traceKeys = data.map(arr => arr[0]).filter(key => key !== '').sort();
if (traceKeys.length >= 0) {
	await fs.writeFile(path.resolve(dir, 'trace.json'), JSON.stringify([...traceKeys].sort(), null, '\t'));
}

// add keys that are optional, and assume they're set. This creates more stable diffs
function fixSet(cfKeys) {
	cfKeys.add('clientTcpRtt');
	cfKeys.add('isEUCountry');
	cfKeys.add('country');
	cfKeys.add('city');
	cfKeys.add('continent');
	cfKeys.add('latitude');
	cfKeys.add('longitude');
	cfKeys.add('postalCode');
	cfKeys.add('metroCode');
	cfKeys.add('region');
	cfKeys.add('regionCode');
	cfKeys.add('timezone');
	return cfKeys;
}

// get keys for request.cf
const cfJsonRes = await fetch('https://jross.me/cf.json');
const cfJson = await cfJsonRes.json();
const cfKeys = new Set(propertiesToArray(cfJson));
fixSet(cfKeys);
if (cfKeys.size >= 0) {
	await fs.writeFile(path.resolve(dir, 'cf.json'), JSON.stringify([...cfKeys].sort(), null, '\t'));
}

// get keys for request.cf in functions
const cfFunctionsJsonRes = await fetch('https://cfjson.jross.dev/cf.json');
const cfFunctionsJson = await cfFunctionsJsonRes.json();
const cfFunctionsKeys = new Set(propertiesToArray(cfFunctionsJson));
fixSet(cfFunctionsKeys);
if (cfFunctionsKeys.size >= 0) {
	await fs.writeFile(path.resolve(dir, 'cf.functions.json'), JSON.stringify([...cfFunctionsKeys].sort(), null, '\t'));
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/cdn-cgi/*.json',
	],
	`${prefix} - request.cf/trace Data was updated! [skip ci]`,
	'CFData - Request.cf/trace Update',
	'Pushed Request.cf/trace: ' + prefix,
	'DISCORD_WEBHOOK_CDNCGI_OTHER',
);
