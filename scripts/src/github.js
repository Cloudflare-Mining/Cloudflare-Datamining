import 'dotenv/config';
import path from 'node:path';

import { Octokit } from '@octokit/rest';
import dateFormat from 'dateformat';
import filenamify from 'filenamify';
import fs from 'fs-extra';
import pick from 'object.pick';
import pLimit from 'p-limit';

import { tryAndPush } from './utils.js';

const wantedKeys = [
	'id',
	'name',
	'full_name',
	'html_url',
	'description',
	'fork',
	'url',
	'created_at',
	// "updated_at", // This gets updated a lot, when _anything_ in the repo changes, so doesn't yield very useful information
	// "pushed_at", // Also not that useful and creates a lot of noise
	'homepage',
	'archived',
	'disabled',
	'license',
	'allow_forking',
	'is_template',
	'default_branch',
];

async function run() {
	const octokit = new Octokit({
		auth: process.env.GH_API_TOKEN,
	});
	console.log('Fetching GitHub Data...');

	try {
		const repos = await octokit.paginate(octokit.rest.repos.listForOrg, {
			org: 'cloudflare',
		});
		const getDataAndWriteFiles = [];
		const limit = pLimit(1);
		for (const repo of repos) {
			const filename = filenamify(repo.name, { replacement: '__' });
			getDataAndWriteFiles.push(limit(async () => {
				console.log('Fetching data for ' + repo.name);
				await fs.ensureDir(path.resolve('../data/github-repos/' + filename));

				// get branches
				const branches = [];
				try {
					const rawBranches = await octokit.paginate(octokit.rest.repos.listBranches, {
						owner: 'cloudflare',
						repo: repo.name,
					});
					for (const branch of rawBranches) {
						if (!branch || !branch.name || branch.name.startsWith('dependabot/')) {
							continue;
						}
						branches.push(branch.name);
					}

				} catch (err) {
					console.error('Failed to get branches for ' + repo.name);
					console.error(err);
				}
				const info = {
					...pick(repo, wantedKeys),
					branches,
				};
				fs.writeFile(
					path.resolve(`../data/github-repos/${filename}/info.json`),
					JSON.stringify(info, null, '\t'),
				);

			}));
		}
		await Promise.all(getDataAndWriteFiles);

		console.log('Pushing!');
		const prefix = dateFormat(new Date(), 'd mmmm yyyy');
		await tryAndPush(
			[
				'data/github-repos/*',
				'data/github-repos/**/*.json',
			],
			`${prefix} - GitHub Data was updated!`,
			'CFData - GitHub Data Update',
			'Pushed GitHub Data: ' + prefix,
			'DISCORD_WEBHOOK_GITHUB',
		);

		console.log('Done! :)');
	} catch (err) {
		console.error('Failed to fetch GitHub data');
		console.error(err);
	}
}

run();
