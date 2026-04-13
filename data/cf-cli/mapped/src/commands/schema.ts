/**
 * `cf schema` command
 *
 * Outputs API schema details for agent introspection.
 * Always outputs JSON (this command is for agents).
 */
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import type { CommandModule } from 'yargs';
import { formatOutput } from '../lib/output.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface SchemaInfo {
  operationId: string;
  httpMethod: string;
  path: string;
  pathParams: { name: string; type: string; required: boolean }[];
  queryParams: { name: string; type: string; required: boolean }[];
  hasRequestBody: boolean;
  requestBodyFields: { name: string; type: string; required: boolean; description: string }[];
}

interface SchemaFile {
  version: string;
  generatedAt: string;
  schemas: Record<string, SchemaInfo>;
}

/**
 * Validate that a parsed object has the expected SchemaFile shape.
 */
function isSchemaFile(value: unknown): value is SchemaFile {
  return (
    value !== null &&
    typeof value === 'object' &&
    'version' in value &&
    'schemas' in value &&
    typeof (value as Record<string, unknown>).version === 'string' &&
    typeof (value as Record<string, unknown>).schemas === 'object'
  );
}

/**
 * Load schemas.json from the generated metadata directory.
 */
async function loadSchemas(): Promise<SchemaFile | null> {
  const possiblePaths = [
    join(__dirname, '_meta', 'schemas.json'), // Bundled: cf-dist/_meta/schemas.json
    join(__dirname, '_generated', '_meta', 'schemas.json'), // Dev: src/commands/_generated/_meta/
    join(process.cwd(), 'src', 'commands', '_generated', '_meta', 'schemas.json'), // Fallback to cwd
  ];

  for (const schemaPath of possiblePaths) {
    try {
      const content = await readFile(schemaPath, 'utf-8');
      const parsed: unknown = JSON.parse(content);
      if (!isSchemaFile(parsed)) {
        console.error(`Warning: ${schemaPath} has unexpected format, skipping.`);
        continue;
      }
      return parsed;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') continue;
      console.error(`Warning: Failed to parse ${schemaPath}: ${err instanceof Error ? err.message : err}`);
      continue;
    }
  }

  return null;
}

interface SchemaArgs {
  command: string[];
  list: boolean;
}

const schema: CommandModule<object, SchemaArgs> & { describe: string } = {
  command: 'schema [command..]',
  describe: 'Show API schema details for a command',
  builder: (yargs) =>
    yargs
      .positional('command', {
        describe: 'Command path segments (e.g., dns records create)',
        type: 'string',
        array: true,
        default: [] as string[],
      })
      .option('list', {
        type: 'boolean',
        describe: 'List all available schemas',
        default: false,
      }),
  handler: async (argv) => {
    const schemas = await loadSchemas();
    if (!schemas) {
      console.error('Error: Could not load schemas.json. Run `pnpm generate` first.');
      process.exit(1);
    }

    if (argv.list) {
      // List all schemas with summary info
      const summary = Object.entries(schemas.schemas).map(([command, info]) => ({
        command: `cf ${command}`,
        httpMethod: info.httpMethod,
        apiPath: info.path,
        operationId: info.operationId,
      }));
      formatOutput(summary);
      return;
    }

    if (argv.command.length === 0) {
      console.error('Usage: cf schema <command...>  or  cf schema --list');
      console.error('Example: cf schema dns records create');
      process.exit(1);
    }

    const commandPath = argv.command.join(' ');
    const info = schemas.schemas[commandPath];

    if (!info) {
      // Try to find close matches
      const allPaths = Object.keys(schemas.schemas);
      const matches = allPaths.filter((p) => p.includes(commandPath) || commandPath.includes(p));

      if (matches.length > 0) {
        console.error(`Schema not found for "${commandPath}". Did you mean:`);
        for (const m of matches) {
          console.error(`  cf schema ${m}`);
        }
      } else {
        console.error(`Schema not found for "${commandPath}". Use --list to see available schemas.`);
      }
      process.exit(1);
    }

    formatOutput(info);
  },
};

export default schema;
