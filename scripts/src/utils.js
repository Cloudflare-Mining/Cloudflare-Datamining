import path from 'path';
import process from 'process';
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
		const result = await git.status();
		if(result.files.length === 0){
			console.log('No changes to commit');
			return;
		}

		await git.add(files);
		await git.commit(commitMessage);
		await git.push('origin', 'main');
		// eslint-disable-next-line unicorn/no-await-expression-member
		const commit = (await git.log({maxCount: 1})).latest;
		const commitUrl = `https://github.com/Cherry/Cloudflare-NPM-Datamining/commit/${commit.hash}`;
		await sendToDiscord(webhookUsername, `[${webhookMessage}](${commitUrl})`);
	}catch(err){
		console.error(err);
	}
}
