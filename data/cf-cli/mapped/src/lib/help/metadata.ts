import type { CommandMeta } from './types.js';

/**
 * Metadata structure from the generated commands.json file.
 */
export interface CommandsMetadata {
  version: string;
  generatedAt: string;
  commands: CommandMeta[];
  /** Descriptions for command groups (product and method group levels) */
  descriptions?: Record<string, string>;
}

/**
 * Runtime shape check for parsed command metadata.
 */
export function isCommandsMetadata(value: unknown): value is CommandsMetadata {
  return (
    value !== null &&
    typeof value === 'object' &&
    'commands' in value &&
    Array.isArray((value as Record<string, unknown>).commands)
  );
}
