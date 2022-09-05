/* eslint-disable unicorn/no-await-expression-member */
import path from 'node:path';
import process from 'node:process';
import fetch from 'node-fetch';
import simpleGit from 'simple-git';
import jsBeautify from 'js-beautify';
import flat from 'flat';

// enablle keepalives for faster fetching
import https from 'node:https';
export function getHttpsAgent(){
	const agent = new https.Agent({
		keepAlive: true,
	});
	return agent;
}
https.globalAgent = getHttpsAgent();

// We want it to be ran from root not scripts
const git = simpleGit({baseDir: path.resolve('..')});

export async function sendToDiscord(name, msg, type){
	// Send message
	let url = process.env.DISCORD_URL;
	if(type === 'marketing'){
		url = process.env.DISCORD_MARKETING_URL;
	}
	return fetch(`${url}?wait=true`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: name,
			content: msg,
		}),
	});
}

export async function tryAndPush(files, commitMessage, webhookUsername, webhookMessage, type = 'default'){
	if(!process.env.CI){
		console.log('Not pushing changes as not in CI environment.');
		return;
	}
	try{
		const prevCommit = (await git.log({maxCount: 1})).latest;
		const result = await git.status();
		if(result.files.length === 0){
			console.log('No changes to commit');
			return;
		}

		await git.add(files);
		await git.commit(commitMessage);
		await git.push('origin', 'main');
		const commit = (await git.log({maxCount: 1})).latest;
		if(commit.hash !== prevCommit.hash){
			const commitUrl = `https://github.com/Cloudflare-Mining/Cloudflare-Datamining/commit/${commit.hash}`;
			await sendToDiscord(webhookUsername, `[${webhookMessage}](${commitUrl})`, type);
		}
	}catch(err){
		console.error(err);
	}
}

const getUnescapedAny = (sequence, code) => {
	if(code !== null){
		return String.fromCodePoint(code);
	}
	switch(sequence){
		case '\\b':
			return '\b';
		case '\\f':
			return '\f';
		case '\\n':
			return '\n';
		case '\\r':
			return '\r';
		case '\\t':
			return '\t';
		case '\\v':
			return '\v';
	}
	return false;
};

export function removeSlashes(source){
	const rx = /(?:(\\(u([0-9a-f]{4})|u\{([0-9a-f]+)\}|x([0-9a-f]{2})|(\d{1,3})|([\s\S]|$)))|([\s\S]))/giu;
	let match;
	let result = '';
	while((match = rx.exec(source)) !== null){
		const [, sequence, fallback, unicode, unicodePoint, hex, octal, char, literal] = match;
		if(literal){
			result += literal;
			continue;
		}
		let code;
		if(char !== null){
			code = null;
		}else if(octal){
			code = Number.parseInt(octal, 8);
		}else{
			code = Number.parseInt(unicodePoint || unicode || hex, 16);
		}
		try{
			const unescaped = getUnescapedAny(sequence, code);
			if(!unescaped){
				result += fallback;
			}else if(unescaped === true){
				result += getUnescapedAny(sequence, code) || fallback;
			}else{
				result += unescaped;
			}
		}catch{
			result += fallback;
		}
	}
	return result;
}

export function beautify(data){
	return jsBeautify.js(data,
		{
			indent_size: 4,
			indent_char: '\t',
			indent_with_tabs: true,
		},
	);
}

export function sleep(ms){
	console.log('Sleeping for', ms, 'ms');
	// eslint-disable-next-line no-promise-executor-return
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function propertiesToArray(obj){
	return Object.keys(flat(obj));
}

const agent = getHttpsAgent();
export function cfRequest(url, options = {}){
	return fetch(url, {
		...options,
		headers: {
			'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
			'X-Auth-Key': process.env.CLOUDFLARE_GLOBAL_KEY,
			'Content-Type': 'application/json',
			...options.headers,
		},
		agent,
	});
}