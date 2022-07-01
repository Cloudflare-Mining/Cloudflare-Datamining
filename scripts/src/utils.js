/* eslint-disable unicorn/no-await-expression-member */
import path from 'node:path';
import process from 'node:process';
import fetch from 'node-fetch';
import simpleGit from 'simple-git';

// We want it to be ran from root not scripts
const git = simpleGit({baseDir: path.resolve('..')});

export async function sendToDiscord(name, msg){
	// Send message
	return fetch(`${process.env.DISCORD_URL}?wait=true`, {
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

export async function tryAndPush(files, commitMessage, webhookUsername, webhookMessage){
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
			const commitUrl = `https://github.com/Cherry/Cloudflare-Datamining/commit/${commit.hash}`;
			await sendToDiscord(webhookUsername, `[${webhookMessage}](${commitUrl})`);
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
