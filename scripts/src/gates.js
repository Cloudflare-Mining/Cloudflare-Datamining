import 'dotenv/config';
import path from 'node:path';
import crypto from 'node:crypto';
import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';

import {tryAndPush} from './utils.js';


async function run(){
	await fs.ensureDir(path.resolve(`../data/gates`));
	// get gates
	const config = await fetch("https://gates.cloudflare.com/api/v1/runtime/configuration", {
		"headers": {
			"authorization": `Bearer ${process.env.GATES_API_KEY}`,
			"Referer": "https://dash.cloudflare.com/",
		},
	});
	if(config.status === 200){
		const json = await config.json();
		if(json.success){
			console.log('Writing gates config');
			await fs.writeFile(path.resolve('../data/gates/config.json'), JSON.stringify(json.result, null, '\t'));
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
	);
}

run();