/*
This script is used to hit dash APIs, which require a cookie
*/

import 'dotenv/config';
import path from 'node:path';

import dateFormat from 'dateformat';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import { executablePath } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import { tryAndPush, userAgent } from './utils.js';

const ROOT_URL = 'https://dash.cloudflare.com/';
async function run() {
	console.log('Fetching Dashboard...');
	const dir = path.resolve('../data');
	await fs.ensureDir(dir);

	try {
		puppeteer.use(StealthPlugin());
		const browser = await puppeteer.launch({
			defaultViewport: {
				width: 1920,
				height: 1080,
			},
			executablePath: executablePath(),
			headless: true,
		});
		const page = await browser.newPage();
		await page.setUserAgent(userAgent);
		// load cloudflare dash
		console.log(`Opening ${ROOT_URL}...`);
		await page.goto(ROOT_URL, {
			waitUntil: 'networkidle0',
		});
		await page.waitForSelector('form[action="/login"]');
		// login to get more translations for products
		console.log('Logging in...');
		await page.type('input[id=email]', process.env.CLOUDFLARE_RBAC_EMAIL);
		await page.type('input[id=password]', process.env.CLOUDFLARE_RBAC_PASSWORD);
		await page.evaluate(() => {
			document.querySelector('button[type=submit]').click();
		});
		// wait for Pages nav to load - good indication nav is ready
		await page.waitForSelector('a[href*="/workers-and-pages"]', {
			visible: true,
		});

		console.log('Extracting cookies...');
		// extract cookie from page
		const cookies = await page.cookies();
		await browser.close();

		const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');

		// dash APIs we want to hit

		const apis = [
			{
				url: `https://api.cloudflare.com/api/v4/accounts/${process.env.CLOUDFLARE_RBAC_ACCOUNT_ID}/iam/permission_groups?depth=2`,
				file: 'account/permission_groups.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=account-banner&locale=en-US&accountType=PAYGO',
				file: 'account/notifications-account-banner-paygo.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=account-banner&locale=en-US&accountType=Enterprise',
				file: 'account/notifications-account-banner-enterprise.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=PAYGO&zonePlanType=Free',
				file: 'account/notifications-zone-banner-paygo-free.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=PAYGO&zonePlanType=Pro',
				file: 'account/notifications-zone-banner-paygo-pro.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=PAYGO&zonePlanType=Business',
				file: 'account/notifications-zone-banner-paygo-biz.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=PAYGO&zonePlanType=Enterprise',
				file: 'account/notifications-zone-banner-paygo-ent.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=Enterprise&zonePlanType=Free',
				file: 'account/notifications-zone-banner-ent-free.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=Enterprise&zonePlanType=Pro',
				file: 'account/notifications-zone-banner-ent-pro.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=Enterprise&zonePlanType=Business',
				file: 'account/notifications-zone-banner-ent-biz.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/notifications?scope=zone-banner&locale=en-US&accountType=Enterprise&zonePlanType=Enterprise',
				file: 'account/notifications-zone-banner-ent-ent.json',
			},
			{
				url: 'https://api.cloudflare.com/api/v4/user/tokens/permission_groups',
				file: 'account/token_permission_groups_dash.json',
			},
		];

		console.log('Querying APIs...');
		// hit CF API with cookie for each req
		for (const api of apis) {
			const response = await fetch(api.url, {
				headers: {
					cookie: cookieString,
				},
			});
			const json = await response.json();
			let result;
			if (json.success && json.result) {
				result = json.result;
			} else {
				result = json;
			}
			if (api.file === 'account/permission_groups.json') {
				result = result.sort((groupA, groupB) => groupA.name.localeCompare(groupB.name));
			}

			await fs.writeFile(path.resolve(dir, api.file), JSON.stringify(result, null, '\t'));
		}

		console.log('Pushing!');
		const prefix = dateFormat(new Date(), 'd mmmm yyyy');
		await tryAndPush(
			['data/account/*.json'],
			`${prefix} -  Account Dash API Data was updated!`,
			'CFData - Account Dash API Data Update',
			'Pushed Account Dash API Data: ' + prefix,
			'DISCORD_WEBHOOK_ACCOUNT',
		);

		console.log('Done! :)');
	} catch (err) {
		console.error(err);
	}
}

run();
