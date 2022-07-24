import 'dotenv/config';
import path from 'node:path';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import dateFormat from 'dateformat';

import {tryAndPush, getHttpsAgent} from './utils.js';

const agent = getHttpsAgent();

const dir = path.resolve(`../data/other`);
await fs.ensureDir(dir);


// get keys for request.cf
const cfIpsv4Res = await fetch(`https://www.cloudflare.com/ips-v4`, {agent});
const cfIpsv6Res = await fetch(`https://www.cloudflare.com/ips-v6`, {agent});
if(cfIpsv4Res.ok && cfIpsv6Res.ok){
	const cfIpsv4 = await cfIpsv4Res.text();
	const cfIpsv6 = await cfIpsv6Res.text();

	await fs.writeFile(path.resolve(dir, 'ips-v4.json'), JSON.stringify([...cfIpsv4.split('\n')].sort(), null, '\t'));
	await fs.writeFile(path.resolve(dir, 'ips-v6.json'), JSON.stringify([...cfIpsv6.split('\n')].sort(), null, '\t'));

}

const prefix = dateFormat(new Date(), 'd mmmm yyyy');
await tryAndPush(
	[
		'data/other/*',
		'data/other/*.json',
		'data/other/**/*',
		'data/other/**/*.json',
	],
	`${prefix} - IPs Data was updated!`,
	'CFData - IPs Data Update',
	'Pushed IPs Data: ' + prefix,
);
