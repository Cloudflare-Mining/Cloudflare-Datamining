import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
// Generated commands
import { generatedCommands } from './commands/_generated/index.js';
import agentContext from './commands/agent-context.js';
// Static commands (hand-written)
import auth from './commands/auth/index.js';
import __complete from './commands/completions/__complete.js';
import completions from './commands/completions/index.js';
import context from './commands/context/index.js';
import schema from './commands/schema.js';
import tools from './commands/tools.js';

/**
 * A yargs CommandModule that requires a `describe` string.
 * All hand-written commands registered on the top-level CLI must have help text.
 * Uses a structural check on just the `describe` property so handler generics don't interfere.
 */
type DescribedCommand = { describe: string };

import { setApiTokenFromFlag } from './lib/auth.js';
import { maybePromptForCompletions } from './lib/completions-prompt.js';
import { formatBriefHelp, formatFullHelp } from './lib/help/formatter.js';
import { type CommandsMetadata, isCommandsMetadata } from './lib/help/metadata.js';
import type { CommandMeta } from './lib/help/types.js';
import { formatCommand, printBanner, theme } from './lib/ui/index.js';
import { VERSION as version } from './version.js';

/**
 * Known command groups (commands that have subcommands).
 * Generated API names are discovered from the generated commands array;
 * static groups are hand-written commands with subcommands.
 */
const STATIC_GROUPS = ['auth', 'context'] as const;
type StaticGroup = (typeof STATIC_GROUPS)[number];
const showHiddenCommands = process.env.CF_HIDE_COMMANDS === 'false' || process.env.CF_HIDE_COMMANDS === '0';
const visibleCommands = generatedCommands.filter((gc) => !gc.hideCommand || showHiddenCommands);
const visibleProductNames = new Set(
  visibleCommands.map((gc) => {
    const cmd = gc.command.command;
    return typeof cmd === 'string' ? cmd : String(cmd);
  }),
);

const COMMAND_GROUPS_SET = new Set<string>([...STATIC_GROUPS, ...visibleProductNames]);

/** Subcommand definition for static commands */
interface SubcommandDef {
  name: string;
  description: string;
}

/**
 * Static commands (not in generated metadata) and their subcommands.
 */
const STATIC_SUBCOMMANDS: Partial<Record<StaticGroup, SubcommandDef[]>> = {
  auth: [
    { name: 'login', description: 'Authenticate with Cloudflare' },
    { name: 'logout', description: 'Log out and revoke OAuth tokens' },
    { name: 'whoami', description: 'Show current user and authentication status' },
  ],
  context: [
    { name: 'show', description: 'Show current context (default account and zone)' },
    { name: 'set', description: 'Set a default context value' },
    { name: 'clear', description: 'Clear a default context value' },
  ],
};

/**
 * Hand-written commands to include in top-level listings.
 * These don't appear in generated metadata but must show in --help and splash.
 * Every entry must have a description — this is the single source of truth for
 * hand-written command help text at the top level.
 */
interface StaticCommandDef {
  name: string;
  description: string;
}
const STATIC_COMMANDS_BASE: StaticCommandDef[] = [
  { name: 'auth', description: 'Authentication commands (login, logout, whoami)' },
  { name: 'completions', description: 'Install and manage shell completion scripts' },
  { name: 'context', description: 'Manage default account and zone context' },
  { name: 'schema', description: 'Show API schema details for a command' },
  { name: 'agent-context', description: 'Output agent context and tool definitions' },
];
const STATIC_COMMANDS_ALPHA: StaticCommandDef[] = [
  { name: 'tools', description: 'Output MCP tool definitions (JSON)' },
];
const STATIC_COMMANDS: StaticCommandDef[] = showHiddenCommands
  ? [...STATIC_COMMANDS_BASE, ...STATIC_COMMANDS_ALPHA]
  : STATIC_COMMANDS_BASE;

const GLOBAL_LONG_FLAGS = ['help', 'help-full', 'quiet', 'account-id', 'zone', 'api-token', 'version'] as const;
const STATIC_LONG_FLAGS = ['token', 'project', 'all', 'list', 'shell', 'force'] as const;
const DEFAULT_METADATA: CommandsMetadata = { version: '1.0', generatedAt: '', commands: [] };

// Get the directory where this script is located (works with bundled code too)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let metadataCache: CommandsMetadata | undefined;
let parseArgsOverride: string[] | undefined;

function camelToKebab(value: string): string {
  return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

function kebabToCamel(value: string): string {
  return value.replace(/-([a-z\d])/g, (_match, char: string) => char.toUpperCase());
}

/**
 * Load command metadata from the generated metadata file.
 * Returns an object with an empty commands array if the file doesn't exist.
 */
function loadMetadata(): CommandsMetadata {
  if (metadataCache) {
    return metadataCache;
  }

  // Try multiple locations: bundled (cf-dist), development (src), and cwd fallback
  const possiblePaths = [
    join(__dirname, '_meta', 'commands.json'), // Bundled: cf-dist/_meta/commands.json
    join(__dirname, 'commands', '_generated', '_meta', 'commands.json'), // Dev: __dirname is src/
    join(process.cwd(), 'src', 'commands', '_generated', '_meta', 'commands.json'), // Fallback to cwd
  ];

  for (const metaPath of possiblePaths) {
    if (existsSync(metaPath)) {
      try {
        const parsed: unknown = JSON.parse(readFileSync(metaPath, 'utf-8'));
        if (isCommandsMetadata(parsed)) {
          metadataCache = parsed;
          return metadataCache;
        }
      } catch {
        continue;
      }
    }
  }

  metadataCache = DEFAULT_METADATA;
  return metadataCache;
}

/** Filter metadata to only include visible commands (respects hideCommand + CF_HIDE_COMMANDS) */
function filterMetadata(metadata: CommandsMetadata): CommandsMetadata {
  if (showHiddenCommands) return metadata;
  return {
    ...metadata,
    commands: metadata.commands.filter((cmd) => {
      const product = cmd.fullPath[0];
      return product !== undefined && visibleProductNames.has(product);
    }),
  };
}

function buildSupportedLongFlagSet(metadata: CommandsMetadata): Set<string> {
  const supported = new Set<string>([...GLOBAL_LONG_FLAGS, ...STATIC_LONG_FLAGS]);

  for (const cmd of metadata.commands) {
    for (const option of cmd.options) {
      supported.add(option.name);
      supported.add(option.name.toLowerCase());
      supported.add(camelToKebab(option.name));
    }
  }

  return supported;
}

function findUnknownLongFlag(args: string[], supportedLongFlags: Set<string>): string | undefined {
  for (const arg of args) {
    if (!arg.startsWith('--') || arg === '--') {
      continue;
    }

    const [name] = arg.slice(2).split('=');
    if (!name) {
      continue;
    }

    const normalizedName = kebabToCamel(name);
    if (
      supportedLongFlags.has(name) ||
      supportedLongFlags.has(name.toLowerCase()) ||
      supportedLongFlags.has(normalizedName)
    ) {
      continue;
    }

    return name;
  }

  return undefined;
}

/**
 * Find a command by its path in the metadata.
 * @param metadata The loaded metadata
 * @param path Command path segments (e.g., ['dns', 'records', 'create'])
 * @returns The matching CommandMeta or undefined if not found
 */
function findCommand(metadata: CommandsMetadata, path: string[]): CommandMeta | undefined {
  if (path.length === 0) {
    return undefined;
  }
  const fullCommand = 'cf ' + path.join(' ');
  return metadata.commands.find((cmd) => cmd.command === fullCommand);
}

/**
 * Show help for a command group (non-leaf commands like 'cf dns' or top-level 'cf').
 * Lists available subcommands at that level.
 */
function showGroupHelp(commandPath: string[], metadata: CommandsMetadata): void {
  const prefix = commandPath.length === 0 ? 'cf' : 'cf ' + commandPath.join(' ');

  // Check if this is a static command group first
  const staticSubs = commandPath.length === 1 ? STATIC_SUBCOMMANDS[commandPath[0] as StaticGroup] : undefined;
  if (staticSubs) {
    console.log(`${theme.brand(prefix)}\n`);
    console.log(theme.bold('Available commands:'));
    for (const sub of staticSubs) {
      console.log(`  ${formatCommand(`${commandPath[0]} ${sub.name}`)}  ${theme.muted(sub.description)}`);
    }
    console.log(`\n${theme.muted(`Run '${prefix} <command> --help' for more information.`)}`);
    return;
  }

  // Find all commands that start with this prefix (from generated metadata)
  const subcommands = new Set<string>();
  for (const cmd of metadata.commands) {
    if (commandPath.length === 0 || cmd.command.startsWith(prefix + ' ')) {
      const remaining = commandPath.length === 0 ? cmd.fullPath : cmd.fullPath.slice(commandPath.length);
      const nextSegment = remaining[0];
      if (nextSegment !== undefined) {
        subcommands.add(nextSegment);
      }
    }
  }

  // At top level, also include hand-written commands
  if (commandPath.length === 0) {
    for (const cmd of STATIC_COMMANDS) {
      subcommands.add(cmd.name);
    }
  }

  // Look up group description — merge generated descriptions with static command descriptions
  const groupKey = commandPath.join(' ');
  const groupDescription = groupKey ? metadata.descriptions?.[groupKey] : undefined;
  const descriptions: Record<string, string> = { ...metadata.descriptions };
  for (const cmd of STATIC_COMMANDS) {
    descriptions[cmd.name] = cmd.description;
  }

  // Human-readable output with colors
  console.log(`${theme.brand(prefix)}\n`);
  if (groupDescription) {
    console.log(`${groupDescription}\n`);
  }
  if (subcommands.size > 0) {
    console.log(theme.bold('Available commands:'));
    // Look up per-subcommand descriptions
    for (const sub of Array.from(subcommands).sort()) {
      const subKey = commandPath.length === 0 ? sub : `${groupKey} ${sub}`;
      const desc = descriptions[subKey];
      if (desc) {
        console.log(`  ${formatCommand(commandPath.concat(sub).join(' '))}  ${theme.muted(desc)}`);
      } else {
        console.log(`  ${formatCommand(commandPath.concat(sub).join(' '))}`);
      }
    }
    console.log(`\n${theme.muted(`Run '${prefix} <command> --help' for more information.`)}`);
  } else {
    console.log(theme.muted('No subcommands available.'));
  }
}

/**
 * Handle help requests by intercepting --help or --help-full flags.
 * Shows appropriate help output based on flags and command path.
 * @returns true if help was handled, false if yargs should handle it
 */
function handleHelp(argv: { _: (string | number)[]; help?: boolean; helpFull?: boolean }): boolean {
  // Get the command path from argv._
  const commandPath = (argv._ as (string | number)[]).map(String);

  // Load metadata
  const metadata = filterMetadata(loadMetadata());

  // Find the matching command
  const command = findCommand(metadata, commandPath);

  if (!command) {
    // For known groups or top-level, show our styled help
    if (commandPath.length === 0 || COMMAND_GROUPS_SET.has(commandPath[0]!)) {
      // If the path goes deeper than the group (e.g. 'auth login'),
      // check if it's a known static leaf — let yargs handle --help natively.
      // For static groups, also let yargs handle unknown subcommands so it
      // can show its "Unknown argument" error instead of "No subcommands available."
      if (commandPath.length > 1) {
        const staticSubs = STATIC_SUBCOMMANDS[commandPath[0] as StaticGroup];
        if (staticSubs) {
          return false;
        }
      }
      showGroupHelp(commandPath, metadata);
      return true;
    }
    // Not a known group (hand-written leaf commands like schema, agent-context, tools)
    // Let yargs handle --help
    return false;
  }

  // Show command help
  if (argv.helpFull) {
    console.log(formatFullHelp(command));
  } else {
    console.log(formatBriefHelp(command));
  }
  return true;
}

/**
 * Check if help flags are present in the raw arguments and handle them before yargs parsing.
 * This is necessary because yargs subcommands may have their own help configuration.
 */
function maybeHandleHelpEarly(): boolean {
  const args = process.argv.slice(2);
  const hasHelp = args.includes('--help') || args.includes('-h');
  const hasHelpFull = args.includes('--help-full');

  if (!hasHelp && !hasHelpFull) {
    return false;
  }

  // Only handle pure help requests early.
  // If other flags are present, let yargs validate and format output.
  const helpFlags = new Set(['--help', '-h', '--help-full']);
  const hasNonHelpFlags = args.some((arg) => arg.startsWith('-') && !helpFlags.has(arg));
  if (hasNonHelpFlags) {
    return false;
  }

  // Extract command path (all args that don't start with -)
  const commandPath = args.filter((arg) => !arg.startsWith('-'));

  const handled = handleHelp({
    _: commandPath,
    help: hasHelp,
    helpFull: hasHelpFull,
  });

  // For hand-written commands, --help is handled by yargs.
  // Parse with an explicit '--help' fallback so handlers don't run.
  if (!handled && hasHelpFull && !hasHelp) {
    parseArgsOverride = args.concat('--help');
  }

  return handled;
}

function maybeRejectUnknownFlagsEarly(): boolean {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    return false;
  }

  // Fast path for the common case: no long flags, nothing to validate.
  if (!args.some((arg) => arg.startsWith('--'))) {
    return false;
  }

  const firstCommand = args.find((arg) => !arg.startsWith('-'));
  const metadata = filterMetadata(loadMetadata());
  const supportedLongFlags = buildSupportedLongFlagSet(metadata);
  const unknownLongFlag = findUnknownLongFlag(args, supportedLongFlags);
  if (!unknownLongFlag) {
    return false;
  }

  console.error(`Unknown argument: ${unknownLongFlag}`);
  return true;
}

if (maybeRejectUnknownFlagsEarly()) {
  process.exit(1);
}

// Handle help early, before yargs parsing
if (maybeHandleHelpEarly()) {
  process.exit(0);
}

/**
 * Check if a group command was called without a subcommand.
 * If so, show our colored help instead of yargs' default.
 */
function maybeHandleGroupCommandEarly(): boolean {
  const args = process.argv.slice(2);
  // Filter out flags
  const commands = args.filter((arg) => !arg.startsWith('-'));

  if (commands.length === 0) {
    return false; // No command - will show splash
  }

  const firstCommand = commands[0] as string;

  // Check if it's a known group command
  if (!COMMAND_GROUPS_SET.has(firstCommand)) {
    return false;
  }

  // Load metadata to check if this is a group or a leaf command
  const metadata = filterMetadata(loadMetadata());
  const command = findCommand(metadata, commands);

  // If we found a leaf command, let yargs handle it
  if (command) {
    return false;
  }

  // Check if there are subcommands under this path
  const prefix = 'cf ' + commands.join(' ');
  const hasSubcommands = metadata.commands.some(
    (cmd) => cmd.command.startsWith(prefix + ' ') || cmd.command === prefix,
  );

  // If it's a group (has subcommands but isn't a leaf command), show our help
  const lastCommand = commands[commands.length - 1] as string;
  if (hasSubcommands || COMMAND_GROUPS_SET.has(lastCommand)) {
    showGroupHelp(commands, metadata);
    return true;
  }

  return false;
}

// Handle group commands without subcommands (show colored help)
if (maybeHandleGroupCommandEarly()) {
  process.exit(0);
}

/**
 * Check if --version flag is present and show branded version.
 */
function maybeHandleVersionEarly(): boolean {
  const args = process.argv.slice(2);
  const hasVersion = args.includes('--version') || args.includes('-v');

  if (!hasVersion) {
    return false;
  }

  // Show branded banner with version
  printBanner(version, 'full');
  return true;
}

// Handle version early with branded banner
if (maybeHandleVersionEarly()) {
  process.exit(0);
}

/**
 * Check if no command was provided and show splash screen.
 */
function maybeShowSplash(): boolean {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    return false;
  }

  // No command provided - show splash with available commands
  printBanner(version, 'full');

  const metadata = filterMetadata(loadMetadata());
  const subcommands = new Set<string>();
  for (const cmd of metadata.commands) {
    const firstSegment = cmd.fullPath[0];
    if (firstSegment !== undefined) {
      subcommands.add(firstSegment);
    }
  }

  // Add static commands that aren't in metadata
  for (const cmd of STATIC_COMMANDS) {
    subcommands.add(cmd.name);
  }

  console.log('Available commands:\n');
  for (const sub of Array.from(subcommands).sort()) {
    console.log(`  ${formatCommand(sub)}`);
  }
  console.log(`\nRun '${formatCommand('<command>')} --help' for more information.`);

  return true;
}

// Show splash screen if no command provided
if (maybeShowSplash()) {
  process.exit(0);
}

const cli = yargs(hideBin(process.argv))
  .scriptName('cf')
  .usage('$0 <command> [options]')
  .usage('\nThe Cloudflare CLI - manage your Cloudflare resources')
  // Generated commands get custom help via maybeHandleHelpEarly() (brief/full).
  // Hand-written commands fall through to yargs' built-in help.
  .help('help', 'Show help')
  .alias('h', 'help')
  .option('help-full', {
    type: 'boolean',
    description: 'Show full help with all options',
    global: true,
  })
  .option('quiet', {
    type: 'boolean',
    alias: 'q',
    description: 'Suppress non-essential output',
    global: true,
    default: false,
  })
  .option('account-id', {
    type: 'string',
    alias: 'a',
    description: 'Cloudflare account ID (overrides CLOUDFLARE_ACCOUNT_ID)',
    global: true,
  })
  .option('zone', {
    type: 'string',
    alias: 'z',
    description: 'Zone ID or domain name (overrides CLOUDFLARE_ZONE_ID)',
    global: true,
  })
  .option('api-token', {
    type: 'string',
    description: 'Cloudflare API token (overrides CLOUDFLARE_API_TOKEN and stored credentials)',
    global: true,
  })
  .command(auth satisfies DescribedCommand)
  .command(context satisfies DescribedCommand)
  .command(completions satisfies DescribedCommand)
  .command(__complete) // hidden (describe: false) — intentionally not DescribedCommand
  .command(schema satisfies DescribedCommand)
  .command(agentContext satisfies DescribedCommand);

if (showHiddenCommands) {
  cli.command(tools); // hidden (describe: false) — intentionally not DescribedCommand
}

// Register generated commands dynamically — no hard-coded API names
// Commands with hideCommand:false are always visible; hideCommand:true requires CF_HIDE_COMMANDS=false
for (const gc of visibleCommands) {
  cli.command(gc.command);
}

cli
  .middleware((argv) => {
    const token = argv.apiToken as string | undefined;
    if (token) {
      setApiTokenFromFlag(token);
    }
  })
  .demandCommand(1, 'You need to specify a command')
  .strict()
  .version(version)
  .alias('v', 'version')
  .epilogue('For more information, visit https://developers.cloudflare.com/');

// Offer shell completions on first run (non-blocking UX)
await maybePromptForCompletions(process.argv.slice(2));

await cli.parse(parseArgsOverride ?? hideBin(process.argv));
