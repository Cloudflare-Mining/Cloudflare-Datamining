/**
 * Help formatting module for the CLI.
 * Renders brief and full help output.
 *
 * All functions are pure (no I/O, no side effects).
 */

import { getChalk, theme } from '../ui/theme.js';
import type { ArgumentMeta, CommandMeta, OptionMeta } from './types.js';
import { DEFAULT_GLOBAL_OPTIONS } from './types.js';

/** Indentation for content under section headers */
const INDENT = '  ';

/**
 * Pad a string to the right with spaces.
 */
function padRight(str: string, width: number): string {
  return str.length >= width ? str : str + ' '.repeat(width - str.length);
}

/**
 * Calculate the maximum width needed for a column of strings.
 */
function maxWidth(items: string[]): number {
  if (items.length === 0) return 0;
  return Math.max(...items.map((s) => s.length));
}

/**
 * Format an argument for display.
 * Returns something like: "zoneId   Zone identifier   [required]"
 */
function formatArgument(arg: ArgumentMeta, nameWidth: number): string {
  const chalk = getChalk();
  const name = padRight(arg.name, nameWidth);
  const tag = arg.required ? chalk.hex('#FF5555')('[required]') : chalk.dim('[optional]');
  return `${INDENT}${theme.info(name)}  ${arg.description}  ${tag}`;
}

/**
 * Format an option for display.
 * Returns something like: "--proxied    Proxy through Cloudflare  [default: false]"
 */
function formatOption(opt: OptionMeta, nameWidth: number): string {
  const chalk = getChalk();
  const name = padRight(`--${opt.name}`, nameWidth);
  let tag = '';

  if (opt.required) {
    tag = chalk.hex('#FF5555')('[required]');
  } else if (opt.default !== undefined) {
    const defaultStr = typeof opt.default === 'string' ? `"${opt.default}"` : String(opt.default);
    tag = chalk.dim(`[default: ${defaultStr}]`);
  }

  const parts = [`${INDENT}${theme.info(name)}  ${opt.description}`];
  if (tag) {
    parts.push(`  ${tag}`);
  }
  return parts.join('');
}

/**
 * Format a section header with content.
 */
function formatSection(header: string, lines: string[]): string {
  if (lines.length === 0) return '';
  return `${theme.bold(header)}:\n${lines.join('\n')}`;
}

/**
 * Format brief help output.
 *
 * Shows:
 * - Description
 * - Usage
 * - Required arguments
 *
 * Ends with a hint to use --help-full for more details.
 */
export function formatBriefHelp(meta: CommandMeta): string {
  const sections: string[] = [];

  // Description
  sections.push(meta.description);

  // Usage
  sections.push(`${theme.bold('Usage')}: ${theme.code(meta.usage)}`);

  // Arguments (all, since they're positional and important)
  if (meta.arguments.length > 0) {
    const nameWidth = maxWidth(meta.arguments.map((a) => a.name)) + 2;
    const argLines = meta.arguments.map((arg) => formatArgument(arg, nameWidth));
    sections.push(formatSection('Arguments', argLines));
  }

  // Hint for full help
  sections.push(theme.muted(`Run '${meta.command} --help-full' for all options.`));

  return sections.join('\n\n');
}

/**
 * Format full help output.
 *
 * Shows:
 * - Description
 * - Usage
 * - ALL arguments
 * - ALL options (grouped)
 * - Global options section
 */
export function formatFullHelp(meta: CommandMeta): string {
  const sections: string[] = [];

  // Description
  sections.push(meta.description);

  // Usage
  sections.push(`${theme.bold('Usage')}: ${theme.code(meta.usage)}`);

  // All arguments
  if (meta.arguments.length > 0) {
    const nameWidth = maxWidth(meta.arguments.map((a) => a.name)) + 2;
    const argLines = meta.arguments.map((arg) => formatArgument(arg, nameWidth));
    sections.push(formatSection('Arguments', argLines));
  }

  // All options
  if (meta.options.length > 0) {
    const nameWidth = maxWidth(meta.options.map((o) => `--${o.name}`)) + 2;
    const optLines = meta.options.map((opt) => formatOption(opt, nameWidth));
    sections.push(formatSection('Options', optLines));
  }

  // Global options — map of option name to display string (with short aliases)
  const GLOBAL_ALIASES: Record<string, string> = {
    quiet: '-q, --quiet',
    'account-id': '-a, --account-id',
    help: '-h, --help',
    version: '-v, --version',
  };
  const globalDisplayNames = DEFAULT_GLOBAL_OPTIONS.map((o) => GLOBAL_ALIASES[o.name] ?? `--${o.name}`);
  const globalNameWidth = maxWidth(globalDisplayNames) + 2;
  const globalLines = DEFAULT_GLOBAL_OPTIONS.map((opt) => {
    const displayName = GLOBAL_ALIASES[opt.name] ?? `--${opt.name}`;
    return `${INDENT}${theme.info(padRight(displayName, globalNameWidth))}  ${opt.description}`;
  });
  sections.push(formatSection('Global options', globalLines));

  return sections.join('\n\n');
}
