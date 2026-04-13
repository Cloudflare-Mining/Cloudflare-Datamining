/**
 * Hidden __complete command for shell completions
 *
 * This is the single entry point for ALL shell completions. The bash/zsh
 * completion scripts delegate here for subcommands, options, and dynamic
 * values. Everything is resolved at runtime from commands.json metadata
 * and the HAND_WRITTEN_COMMANDS constant — no API names are hard-coded.
 *
 * Usage: cf __complete <words...>
 * Output: Newline-separated list of completion values
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Cloudflare } from '@cloudflare/sdk';
import type { CommandModule } from 'yargs';
import { getAuthToken } from '../../lib/auth.js';
import type { DynamicCompletion } from '../../lib/completions/dynamic-map.js';
import type { CommandMeta } from '../../lib/help/types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Hand-written command tree. Duplicated from common/shared/generated-cli-options.ts
 * because the CLI package cannot import from 'common' at runtime (NodeNext resolution).
 */
const showHiddenCommands = process.env.CF_HIDE_COMMANDS === 'false' || process.env.CF_HIDE_COMMANDS === '0';
const HAND_WRITTEN_COMMANDS: Record<string, readonly string[]> = {
  '': showHiddenCommands
    ? ['auth', 'completions', 'context', 'schema', 'agent-context', 'tools']
    : ['auth', 'completions', 'context', 'schema', 'agent-context'],
  auth: ['login', 'logout', 'whoami'],
  completions: ['install', 'uninstall'],
  context: ['show', 'set', 'clear'],
};

interface CompleteArgs {
  words: string[];
}

/**
 * Load command metadata from the generated commands.json file.
 * Caches after first load.
 */
let cachedCommands: CommandMeta[] | null | undefined;
function loadCommands(): CommandMeta[] | null {
  if (cachedCommands !== undefined) return cachedCommands;

  const possiblePaths = [
    join(__dirname, '_meta', 'commands.json'), // Bundled: cf-dist/_meta/commands.json
    join(__dirname, '..', '_meta', 'commands.json'),
    join(__dirname, '..', '_generated', '_meta', 'commands.json'),
  ];

  for (const p of possiblePaths) {
    if (!existsSync(p)) continue;
    try {
      const parsed = JSON.parse(readFileSync(p, 'utf-8'));
      if (parsed && Array.isArray(parsed.commands)) {
        cachedCommands = parsed.commands as CommandMeta[];
        return cachedCommands;
      }
    } catch {
      continue;
    }
  }

  cachedCommands = null;
  return null;
}

/**
 * Build a full command tree from commands.json + hand-written commands.
 * Returns a map of "parent path" → child names.
 * Cached after first build since commands.json is static.
 */
let cachedTree: Record<string, string[]> | undefined;
function buildCommandTree(): Record<string, string[]> {
  if (cachedTree) return cachedTree;
  const tree: Record<string, string[]> = {};

  // Start with hand-written commands
  for (const [parent, children] of Object.entries(HAND_WRITTEN_COMMANDS)) {
    tree[parent] = [...children];
  }

  // Add generated commands from commands.json (filtered by alpha)
  const commands = loadCommands();
  if (commands) {
    const filtered = showHiddenCommands ? commands : commands.filter((c) => !c.hideCommand);
    for (const cmd of filtered) {
      const parts = cmd.fullPath;
      // Add top-level resource to root
      if (parts[0] && !tree['']?.includes(parts[0])) {
        if (!tree['']) tree[''] = [];
        tree[''].push(parts[0]);
      }
      // Add intermediate path segments
      for (let i = 0; i < parts.length - 1; i++) {
        const parent = parts.slice(0, i + 1).join(' ');
        const child = parts[i + 1]!;
        if (!tree[parent]) tree[parent] = [];
        if (!tree[parent].includes(child)) {
          tree[parent].push(child);
        }
      }
    }
  }

  cachedTree = tree;
  return tree;
}

/**
 * Get options for a specific command path from commands.json.
 */
function getOptionsForCommand(commandParts: string[]): string[] {
  const commands = loadCommands();
  if (!commands) return [];

  const cmd = commands.find(
    (c) =>
      c.fullPath.length === commandParts.length &&
      c.fullPath.every((seg: string, i: number) => seg === commandParts[i]),
  );
  if (!cmd) return [];

  return cmd.options.map((o: { name: string }) => `--${o.name}`);
}

/**
 * Find the dynamic completion source for a command path.
 */
function findDynamicCompletion(commandParts: string[]): DynamicCompletion | undefined {
  const commands = loadCommands();
  if (!commands) return undefined;

  for (let len = commandParts.length; len > 0; len--) {
    const fullPath = commandParts.slice(0, len);
    const cmd = commands.find(
      (c) => c.fullPath.length === fullPath.length && c.fullPath.every((seg: string, i: number) => seg === fullPath[i]),
    );
    if (!cmd) continue;

    for (const arg of cmd.arguments) {
      if (arg.completion?.type === 'dynamic') {
        return { operation: arg.completion.operation, displayField: arg.completion.displayField };
      }
    }
  }

  return undefined;
}

/**
 * Fetch completions for a dynamic completion source.
 *
 * TODO: This needs a proper generic SDK dispatch mechanism.
 * The DynamicCompletion metadata should include the SDK resource path
 * and method so we can call `client[resource][method]()` generically
 * instead of hard-coding API names. For now, returns empty to avoid
 * violating the "no hard-coded API names" invariant.
 */
async function fetchDynamicCompletions(_completion: DynamicCompletion, _client: Cloudflare): Promise<string[]> {
  return [];
}

const completeCommand: CommandModule<object, CompleteArgs> = {
  command: '__complete [words..]',
  describe: false, // Hidden command

  builder: (yargs) => {
    return yargs.positional('words', {
      type: 'string',
      array: true,
      default: [],
      description: 'Command words to complete',
    });
  },

  handler: async (argv) => {
    try {
      const words = argv.words || [];
      const cur = words[words.length - 1] ?? '';

      // Separate command parts and option parts
      const commandParts: string[] = [];
      for (const word of words.slice(0, -1)) {
        if (!word.startsWith('-')) commandParts.push(word);
      }

      // If current word is an option prefix, complete options
      if (cur.startsWith('-')) {
        const opts = getOptionsForCommand(commandParts);
        // Add global options
        const globalOpts = ['--quiet', '-q', '--account-id', '-a', '--zone', '-z', '--help', '-h', '--version', '-v'];
        const allOpts = [...new Set([...opts, ...globalOpts])];
        const matching = allOpts.filter((o) => o.startsWith(cur));
        if (matching.length > 0) {
          console.log(matching.join('\n'));
        }
        process.exit(0);
      }

      // Check if there are subcommands at this path
      const tree = buildCommandTree();

      // Try completing subcommands: use commandParts as the parent path
      const parentPath = commandParts.join(' ');
      const children = tree[parentPath];
      if (children && children.length > 0) {
        const matching = cur ? children.filter((c) => c.startsWith(cur)) : children;
        if (matching.length > 0) {
          console.log(matching.join('\n'));
          process.exit(0);
        }
      }

      // No subcommand match — try dynamic completion for positional args
      const dynCompletion = findDynamicCompletion(commandParts);
      if (dynCompletion) {
        let token: string;
        try {
          token = await getAuthToken();
        } catch {
          process.exit(0);
        }

        const client = new Cloudflare({ apiToken: token });
        const completions = await fetchDynamicCompletions(dynCompletion, client);

        if (completions.length > 0) {
          const matching = cur ? completions.filter((c) => c.startsWith(cur)) : completions;
          if (matching.length > 0) {
            console.log(matching.join('\n'));
          }
        }
        process.exit(0);
      }
    } catch {
      // Fail silently - don't break shell completion
      process.exit(0);
    }
  },
};

export default completeCommand;
