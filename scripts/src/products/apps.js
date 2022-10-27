import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import filenamify from 'filenamify';

import {tryAndPush} from '../utils.js';

const dir = path.resolve(`../data/products/apps`);
await fs.ensureDir(dir);
await fs.emptyDir(dir);

const apps = await fetch('https://api.cloudflareapps.com/apps/');
const appsJson = await apps.json();

for(const app of appsJson){
	const filename = filenamify(`${app.title} - ${app.id}`);
	const appDir = path.resolve(dir, filename);
	await fs.ensureDir(appDir);

	console.log('Get app info', app.id, app.title);
	const appInfo = await fetch(`https://api.cloudflareapps.com/apps/${app.id}`);
	const appsJson = await appInfo.json();
	const file = path.resolve(appDir, 'info.json');
	// delete some fields we don't care for
	const json = appsJson;
	delete json.ratingSummary;
	await fs.writeJson(file, json, {spaces: '\t'});
}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/products/apps/*',
	],
	`${prefix} - Product: Apps was updated!`,
	'CFData - Product: Apps Update',
	'Pushed Product: Apps Data: ' + prefix,
);
