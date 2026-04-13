/**
 * TypeScript interfaces for the CLI help system.
 *
 * Core types (ArgumentMeta, OptionMeta, ExampleMeta, CommandMeta) are defined
 * in packages/common/shared/command-types.ts and re-exported here for backwards
 * compatibility within the CLI package.
 */

export type { ArgumentMeta, CommandMeta, ExampleMeta, OptionMeta } from 'common';

/**
 * Global options that are available on all commands.
 * These are displayed in the full help output.
 */
export interface GlobalOptions {
  options: import('common').OptionMeta[];
}

/**
 * Default global options available on all commands.
 */
export const DEFAULT_GLOBAL_OPTIONS: import('common').OptionMeta[] = [
  {
    name: 'quiet',
    type: 'boolean',
    required: false,
    default: false,
    description: 'Suppress non-essential output',
  },
  {
    name: 'account-id',
    type: 'string',
    required: false,
    description: 'Cloudflare account ID',
  },
  {
    name: 'api-token',
    type: 'string',
    required: false,
    description: 'Cloudflare API token (overrides CLOUDFLARE_API_TOKEN)',
  },
  {
    name: 'help',
    type: 'boolean',
    required: false,
    default: false,
    description: 'Show help',
  },
  {
    name: 'version',
    type: 'boolean',
    required: false,
    default: false,
    description: 'Show version',
  },
];
