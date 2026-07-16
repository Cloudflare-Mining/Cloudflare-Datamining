import process from 'node:process';

import fetch from 'node-fetch';

import { git } from './utils.js';

// A sync diff can be huge, so the summarizer gets a condensed view sized for the model's context window.
const TOTAL_PATCH_BUDGET = 120000;
const PER_FILE_PATCH_CAP = 15000;
const MAX_PATCH_FILES = 30;
const REQUEST_TIMEOUT_MS = 240000;

// Commit bodies should stay readable in `git log`; anything longer gets cut at a line boundary.
const MAX_SUMMARY_CHARS = 1800;
// A single enormous line is the classic garbled-output signature for a model told to emit short bullets.
const MAX_LINE_CHARS = 500;

async function stagedNumstat() {
	const stdout = await git.diff(['--cached', '--numstat']);
	return stdout.split('\n').filter(Boolean).map((line) => {
		const [adds, dels, ...rest] = line.split('\t');
		return {
			path: rest.join('\t'),
			churn: adds === '-' ? 0 : Number(adds) + Number(dels),
		};
	});
}

function overview(entries) {
	const lines = [`${entries.length} files changed:`];
	for (const { path, churn } of entries) {
		lines.push(`- ${path} (${churn} lines changed)`);
	}
	return lines.join('\n');
}

// Appends per-file patches until the shared character budget runs out.
async function collectPatches(files, budget) {
	const chunks = [];
	let used = 0;
	let included = 0;
	for (const { path } of files) {
		if (included >= MAX_PATCH_FILES || used >= budget) {
			break;
		}
		let patch = await git.diff(['--cached', '--unified=2', '--', path]);
		if (!patch.trim()) {
			continue;
		}
		if (patch.length > PER_FILE_PATCH_CAP) {
			patch = patch.slice(0, PER_FILE_PATCH_CAP) + '\n[... patch truncated ...]\n';
		}
		if (used + patch.length > budget) {
			break;
		}
		chunks.push(patch);
		used += patch.length;
		included++;
	}
	if (included < files.length) {
		chunks.push(`[+ ${files.length - included} more changed files omitted for size]\n`);
	}
	return chunks;
}

// Sanitizes the model output for use as a commit body. Returns null when the
// text looks garbled — the caller then continues without a summary.
export function cleanSummary(raw) {
	if (typeof raw !== 'string') {
		return null;
	}
	let text = raw
		.replaceAll(/<think>[\S\s]*?<\/think>/g, '')
		.replaceAll(/^```[a-z]*\s*$/gm, '')
		.trim();
	// Replacement chars or stray control chars mean the output is garbled.
	// eslint-disable-next-line no-control-regex
	if (text.includes('�') || /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(text)) {
		return null;
	}
	const lines = text
		.split('\n')
		.map(line => line.trim())
		.filter(line => line.length > 0 && line.length <= MAX_LINE_CHARS);
	text = lines.join('\n');
	if (text.length < 20) {
		return null;
	}
	if (text.length > MAX_SUMMARY_CHARS) {
		const cut = text.lastIndexOf('\n', MAX_SUMMARY_CHARS);
		text = text.slice(0, cut > 0 ? cut : MAX_SUMMARY_CHARS).trimEnd();
	}
	return text;
}

// Best-effort AI summary of the currently staged changes, for use as a commit
// description and Discord embed. Never throws: any failure logs and returns
// null so the commit still happens, just without a description.
// `excludeFromPatches` skips a file's diff (but not its overview line) when its
// content duplicates other staged files and would waste the patch budget.
export async function summarizeStagedChanges(title, { kind = 'openapi', excludeFromPatches = [] } = {}) {
	// The summary service is configured entirely via secrets so it never appears in the repo or logs.
	const url = process.env.SUMMARY_URL;
	const token = process.env.SUMMARY_TOKEN;
	if (!url || !token) {
		console.log('[summary] SUMMARY_URL/SUMMARY_TOKEN not set - skipping AI summary');
		return null;
	}
	try {
		const entries = await stagedNumstat();
		if (entries.length === 0) {
			return null;
		}
		const excluded = new Set(excludeFromPatches);
		const patchable = entries
			.filter(entry => !excluded.has(entry.path))
			.sort((first, second) => second.churn - first.churn);

		const parts = [overview(entries)];
		const chunks = await collectPatches(patchable, TOTAL_PATCH_BUDGET);
		if (chunks.length > 0) {
			parts.push('=== diffs ===', ...chunks);
		}

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({ title, diff: parts.join('\n'), kind }),
			signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
		});
		if (!response.ok) {
			const body = await response.text().catch(() => '');
			console.error(`[summary] service returned ${response.status}: ${body.slice(0, 300)}`);
			return null;
		}
		const data = await response.json();
		const summary = cleanSummary(data?.summary);
		if (!summary) {
			console.error('[summary] model output rejected as empty/garbled - continuing without a summary');
			return null;
		}
		console.log(`[summary] generated description (${summary.length} chars, model=${data?.model})`);
		return summary;
	} catch (error) {
		console.error('[summary] failed - continuing without a summary:', error.message);
		return null;
	}
}
