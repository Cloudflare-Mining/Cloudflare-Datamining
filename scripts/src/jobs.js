import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import { decodeHTML } from 'entities';
import filenamify from 'filenamify';
import fs from 'fs-extra';
import jsBeautify from 'js-beautify';
import fetch from 'node-fetch';


import { getHttpsAgent, tryAndPush } from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve('../data/jobs');
await fs.ensureDir(dir);
await fs.emptyDir(dir);

function sortJobInfo(jobInfo) {
	if (jobInfo.metadata) {
		jobInfo.metadata = jobInfo.metadata.sort((metaA, metaB) => metaA.id - metaB.id);
	}
	if (jobInfo.departments) {
		jobInfo.departments = jobInfo.departments.sort((depA, depB) => depA.id - depB.id);
	}
	if (jobInfo.offices) {
		jobInfo.offices = jobInfo.offices.sort((officeA, officeB) => officeA.id - officeB.id);
	}
	return jobInfo;
}

function sortDepartmentInfo(departmentInfo) {
	departmentInfo.children = departmentInfo.children.sort((childA, childB) => childA.id - childB.id);
	for (const child of departmentInfo.children) {
		child.jobs = child.jobs.map(job => sortJobInfo(job));
		child.jobs = child.jobs.sort((jobA, jobB) => jobA.updated_at.localeCompare(jobB.updated_at) || jobA.id - jobB.id);
	}
	return departmentInfo;
}

console.log('Fetch information for offices...');
const officesRes = await fetch('https://boards-api.greenhouse.io/v1/boards/cloudflare/offices/', { agent });
if (officesRes.ok) {
	const offices = await officesRes.json();
	const mapped = (offices?.offices ?? []).map((office) => {
		const { departments, ...officeInfo } = office;
		return officeInfo;
	});

	await fs.writeFile(path.resolve(dir, 'offices.json'), JSON.stringify(mapped, null, '\t'));
}

console.log('Fetch information for departments...');
const departmentsRes = await fetch('https://boards-api.greenhouse.io/v1/boards/cloudflare/departments/?render_as=tree', { agent });
if (departmentsRes.ok) {
	const departments = await departmentsRes.json();
	for (const department of departments?.departments ?? []) {
		const departmentDirName = filenamify(`${department.name}-${department.id}`).trim();
		const departmentDir = path.resolve(dir, departmentDirName);
		await fs.ensureDir(departmentDir);
		const { jobs, ...departmentInfo } = sortDepartmentInfo(department);

		for (const job of jobs) {
			const jobDirName = filenamify(job.title + '-' + job.id).trim();
			console.log(`Fetch information for job ${jobDirName}...`);
			const jobsDir = path.resolve(departmentDir, jobDirName);
			await fs.ensureDir(jobsDir);

			const jobInfo = await fetch(`https://boards-api.greenhouse.io/v1/boards/cloudflare/jobs/${job.id}`, { agent });
			if (jobInfo.ok) {
				const jobInfoData = await jobInfo.json();
				const { content, ...jobInfoDataWithoutContent } = jobInfoData;
				if (content) {
					const decoded = decodeHTML(content);
					const beautified = jsBeautify.html_beautify(decoded, {
						'indent_size': 4,
						'indent_char': '\t',
					});
					await fs.writeFile(path.resolve(jobsDir, 'README.md'), beautified);
				}
				const sortedJob = sortJobInfo(jobInfoDataWithoutContent);
				await fs.writeFile(path.resolve(jobsDir, 'info.json'), JSON.stringify(sortedJob, null, '\t'));
			}
		}

		await fs.writeFile(path.resolve(departmentDir, '_index.json'), JSON.stringify(departmentInfo, null, '\t'));
	}
}


const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/jobs/*',
		'data/jobs/*.json',
		'data/jobs/*.md',
		'data/jobs/**/*',
		'data/jobs/**/*.json',
		'data/jobs/**/*.md',
	],
	`${prefix} - Jobs Data was updated! [skip ci]`,
	'CFData - Jobs Data Update',
	'Pushed Jobs Data: ' + prefix,
	'DISCORD_WEBHOOK_JOBS',
);
