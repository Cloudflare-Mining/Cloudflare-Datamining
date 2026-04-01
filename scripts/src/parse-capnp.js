import { execSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { Message } from 'capnp-es';
import { CodeGeneratorRequest, Node_Which, Value_Which } from 'capnp-es/capnp/schema';

function extractAnnotations(annotations, nodeMap) {
	const result = {};
	if (!annotations) { return result; }
	for (const ann of annotations) {
		const annNode = nodeMap.get(ann.id);
		if (!annNode) { continue; }
		const annName = annNode.displayName.slice(annNode.displayNamePrefixLength);
		const val = ann.value;
		switch (val.which()) {
			case Value_Which.TEXT: {
				result[annName] = val.text;
				break;
			}
			case Value_Which.BOOL: {
				result[annName] = val.bool;
				break;
			}
			case Value_Which.VOID: {
				result[annName] = true;
				break;
			}
			case Value_Which.UINT16: {
				result[annName] = val.uint16;
				break;
			}
			case Value_Which.UINT32: {
				result[annName] = val.uint32;
				break;
			}
			case Value_Which.INT32: {
				result[annName] = val.int32;
				break;
			}
			default: {
				break;
			}
		}
	}
	return result;
}

function findCapnpSystemInclude() {
	for (const dir of ['/usr/local/include', '/usr/include']) {
		if (existsSync(path.join(dir, 'capnp', 'c++.capnp'))) {
			return dir;
		}
	}
	return null;
}

function findCapnpFiles(workerdDir) {
	const srcDir = path.join(workerdDir, 'src', 'workerd');
	const entries = readdirSync(srcDir, { recursive: true });
	return entries
		.filter(entry => entry.endsWith('.capnp'))
		.map(entry => `workerd/src/workerd/${entry.replaceAll('\\', '/')}`);
}

function buildImportFlags(workerdImportPath) {
	const flags = [`-I "${workerdImportPath}"`];
	const systemInclude = findCapnpSystemInclude();
	if (systemInclude) {
		flags.push(`-I "${systemInclude}"`);
	}
	return flags.join(' ');
}

function runCapnpc(files, importFlags, cwd) {
	try {
		return execSync(
			`capnpc -o- ${importFlags} ${files.join(' ')}`,
			{ cwd, maxBuffer: 50 * 1024 * 1024 },
		);
	} catch (error) {
		const stderr = error.stderr?.toString() || '';
		console.warn('capnpc failed, checking for problematic files...');
		console.warn(stderr);

		// Extract file paths from error lines like "path/to/file.capnp:1:1: error: ..."
		const errorFiles = new Set();
		for (const line of stderr.split('\n')) {
			const match = line.match(/^(.+\.capnp):\d+/);
			if (match) { errorFiles.add(match[1]); }
		}

		if (errorFiles.size === 0) { throw error; }

		const remaining = files.filter((f) => {
			for (const ef of errorFiles) {
				if (f === ef || f.endsWith(`/${ef}`)) { return false; }
			}
			return true;
		});

		if (remaining.length === files.length) { throw error; }

		console.warn(`Retrying without ${files.length - remaining.length} problematic file(s)`);
		return execSync(
			`capnpc -o- ${importFlags} ${remaining.join(' ')}`,
			{ cwd, maxBuffer: 50 * 1024 * 1024 },
		);
	}
}

export function parseWorkerdCapnp(workerdDir) {
	// workerdDir should be a path like '../temp/workerd'
	// We run capnpc from the parent dir so display names start with 'workerd/src/...'
	const cwd = path.resolve(path.dirname(workerdDir));
	const importFlags = buildImportFlags('workerd/src');

	const files = findCapnpFiles(path.resolve(workerdDir));
	if (files.length === 0) {
		throw new Error('No .capnp files found in workerd clone');
	}
	console.log(`Found ${files.length} .capnp files to compile`);

	const stdout = runCapnpc(files, importFlags, cwd);

	// Parse the CodeGeneratorRequest binary output with capnp-es
	const buf = new Uint8Array(stdout).buffer;
	const msg = new Message(buf, false);
	const req = msg.getRoot(CodeGeneratorRequest);

	// Build a lookup map of all nodes by ID
	const nodeMap = new Map();
	for (const node of req.nodes) {
		nodeMap.set(node.id, node);
	}

	const structs = [];
	const enums = [];
	const interfaces = [];
	const unk = [];

	for (const node of req.nodes) {
		const name = node.displayName;

		switch (node.which()) {
			case Node_Which.STRUCT: {
				if (node.struct.isGroup) { break; }
				structs.push({
					name,
					fields: Array.from(node.struct.fields, (field) => {
						return {
							name: field.name,
							annotations: extractAnnotations(field.annotations, nodeMap),
						};
					}),
				});
				break;
			}
			case Node_Which.ENUM: {
				enums.push({
					name,
					enumerants: Array.from(node.enum.enumerants, (e) => {
						return {
							name: e.name,
							annotations: extractAnnotations(e.annotations, nodeMap),
						};
					}),
				});
				break;
			}
			case Node_Which.INTERFACE: {
				interfaces.push({
					name,
					methods: Array.from(node.interface.methods, (m) => {
						return {
							name: m.name,
							annotations: extractAnnotations(m.annotations, nodeMap),
						};
					}),
				});
				break;
			}
			default: {
				unk.push(name);
				break;
			}
		}
	}

	return { structs, enums, interfaces, unk };
}
