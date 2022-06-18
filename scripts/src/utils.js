import path from 'path';
import process from 'process';
import fetch from 'node-fetch';
import simpleGit from 'simple-git';

// We want it to be ran from root not scripts
const git = simpleGit({baseDir: path.resolve('..')});

export function get(url){
	if(process.env.VERBOSE){
		console.log(`GET ${url}`);
	}

	return fetch(url, {
		method: 'GET',
		headers: {
			'User-Agent': 'Mozilla/5.0 (@CherryJimbo)',
		},
	});
}

export async function tryAndPush(files, commitMessage){
	try{
		const result = await git.status();
		if(result.files.length === 0){
			console.log('No changes to commit');
			return;
		}

		await git.add(files);
		await git.commit(commitMessage);
		await git.push('origin', 'main');
	}catch(err){
		console.error(err);
	}
}
