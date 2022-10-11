import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';

import {tryAndPush} from './utils.js';

const getGates = [
	{
		key: process.env.GATES_API_KEY,
		name: 'dashboard',
	},
	{
		key: process.env.GATES_ZT_API_KEY,
		name: 'zt-dashboard',
	},
];
async function run(){
	await fs.ensureDir(path.resolve(`../data/gates`));
	for(const gate of getGates){
		const file = path.resolve(`../data/gates/${gate.name}.json`);

		const config = await fetch("https://gates.cloudflare.com/api/v1/runtime/configuration", {
			"headers": {
				"authorization": `Bearer ${gate.key}`,
				"Referer": "https://dash.cloudflare.com/",
			},
		});
		if(config.status === 200){
			const json = await config.json();
			if(json.success){
				console.log('Writing gates config', gate.name);
				await fs.writeFile(file, JSON.stringify(json.result, null, '\t'));
			}
		}
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/gates/*',
			'data/gates/*.json',
		],
		`${prefix} - Gates Data was updated!`,
		'CFData - Gates Update',
		'Pushed Gates Update: ' + prefix,
		'DISCORD_WEBHOOK_GATES',
	);
}

run();