import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';

import { getHttpsAgent, tryAndPush } from './utils.js';

const agent = getHttpsAgent();

const getGates = [
	{
		key: process.env.GATES_API_KEY,
		name: 'dashboard',
	},
	{
		key: process.env.GATES_API_KEY,
		zone: true,
		config: false,
		name: 'dashboard-zone',
	},
	{
		key: process.env.GATES_ZT_API_KEY,
		name: 'zt-dashboard',
	},
];

const fetchCount = 1000;
async function getAssignments(gate, includeZone = false) {
	// get assignment percentage (rough)
	const assignments = {};
	for (let i = 0; i < fetchCount; i++) {
		console.log('Check assignments', gate.name, i, includeZone ? 'with zone' : 'without zone');
		const body = {
			userId: String(i),
			accountId: String(i),
			is_ent: false,
		};
		if (includeZone) {
			body.zone_id = String(i);
		}
		const assignment = await fetch('https://gates.cloudflare.com/api/v1/runtime/assignments', {
			agent,
			headers: {
				Authorization: `Bearer ${gate.key}`,
				Referer: 'https://dash.cloudflare.com/',
			},
			method: 'POST',
			body: JSON.stringify(body),
		});
		if (assignment.status === 200) {
			const json = await assignment.json();
			if (json.success) {
				const assignment = json.result;
				for (const gate in assignment) {
					assignments[gate] ??= {};
					assignments[gate][assignment[gate]] ??= 0;
					assignments[gate][assignment[gate]]++;
				}
			}
		}
	}
	// try and normalize the percentages
	for (const gate in assignments) {
		// normalise 30%, 50%, etc.
		const values = Object.values(assignments[gate]);
		const min = Math.min(...values);
		const max = Math.max(...values);
		if (Object.keys(assignments[gate]).length === 2 && min >= 480 && max <= 520) {
			assignments[gate] = {
				[Object.keys(assignments[gate])[0]]: Math.round(fetchCount / 2),
				[Object.keys(assignments[gate])[1]]: Math.round(fetchCount / 2),
			};
		} else if (Object.keys(assignments[gate]).length === 3 && min >= 310 && max <= 350) {
			assignments[gate] = {
				[Object.keys(assignments[gate])[0]]: Math.round(fetchCount / 3),
				[Object.keys(assignments[gate])[1]]: Math.round(fetchCount / 3),
				[Object.keys(assignments[gate])[2]]: Math.round(fetchCount / 3),
			};
		}
		// normalise to 100%
		const total = Object.values(assignments[gate]).reduce((itemA, itemB) => itemA + itemB, 0);
		for (const key in assignments[gate]) {
			assignments[gate][key] = Math.round((assignments[gate][key] / total) * 100);
		}
	}
	return assignments;
}
async function run() {
	await fs.ensureDir(path.resolve('../data/gates'));
	for (const gate of getGates) {
		if (gate.config === false) {
			continue;
		}
		const file = path.resolve(`../data/gates/${gate.name}.json`);

		const config = await fetch('https://gates.cloudflare.com/api/v1/runtime/configuration', {
			agent,
			headers: {
				Authorization: `Bearer ${gate.key}`,
				Referer: 'https://dash.cloudflare.com/',
			},
		});
		if (config.status === 200) {
			const json = await config.json();
			if (json.success) {
				console.log('Writing gates config', gate.name);
				await fs.writeFile(file, JSON.stringify(json.result, null, '\t'));
			}
		} else {
			console.log('Error fetching gates config', gate.name);
		}

		// get assignment percentage (rough)
		const assignments = await getAssignments(gate, gate.zone ?? false);
		const assignmentsFile = path.resolve(`../data/gates/${gate.name}-assignments.json`);
		await fs.writeFile(assignmentsFile, JSON.stringify(assignments, null, '\t'));

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
