/**
 * `cf agent-context` command
 *
 * Outputs agent skill files for context loading.
 * Outputs raw markdown to stdout (designed for agent context ingestion).
 */
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import type { CommandModule } from 'yargs';
import { formatOutput } from '../lib/output.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface AgentContextFile {
  version: string;
  generatedAt: string;
  products: Record<string, string>;
  universal: string;
}

/**
 * Validate that a parsed object has the expected AgentContextFile shape.
 */
function isAgentContextFile(value: unknown): value is AgentContextFile {
  return (
    value !== null &&
    typeof value === 'object' &&
    'version' in value &&
    'products' in value &&
    'universal' in value &&
    typeof (value as Record<string, unknown>).version === 'string' &&
    typeof (value as Record<string, unknown>).universal === 'string' &&
    typeof (value as Record<string, unknown>).products === 'object'
  );
}

/**
 * Load agent-context.json from the generated metadata directory.
 */
async function loadAgentContext(): Promise<AgentContextFile | null> {
  const possiblePaths = [
    join(__dirname, '_meta', 'agent-context.json'), // Bundled: cf-dist/_meta/agent-context.json
    join(__dirname, '_generated', '_meta', 'agent-context.json'), // Dev: src/commands/_generated/_meta/
    join(process.cwd(), 'src', 'commands', '_generated', '_meta', 'agent-context.json'), // Fallback to cwd
  ];

  for (const contextPath of possiblePaths) {
    try {
      const content = await readFile(contextPath, 'utf-8');
      const parsed: unknown = JSON.parse(content);
      if (!isAgentContextFile(parsed)) {
        console.error(`Warning: ${contextPath} has unexpected format, skipping.`);
        continue;
      }
      return parsed;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') continue;
      console.error(`Warning: Failed to parse ${contextPath}: ${err instanceof Error ? err.message : err}`);
      continue;
    }
  }

  return null;
}

interface AgentContextArgs {
  product: string | undefined;
  list: boolean;
}

const agentContext: CommandModule<object, AgentContextArgs> & { describe: string } = {
  command: 'agent-context [product]',
  describe: 'Output agent context and skill files',
  builder: (yargs) =>
    yargs
      .positional('product', {
        describe: 'Product name (e.g., d1, dns, zones)',
        type: 'string',
      })
      .option('list', {
        type: 'boolean',
        describe: 'List available products',
        default: false,
      }),
  handler: async (argv) => {
    const context = await loadAgentContext();
    if (!context) {
      console.error('Error: Could not load agent context. Run `pnpm generate` first.');
      process.exit(1);
    }

    if (argv.list) {
      const products = Object.keys(context.products);
      formatOutput(products);
      return;
    }

    if (argv.product) {
      const skill = context.products[argv.product];
      if (!skill) {
        const available = Object.keys(context.products).join(', ');
        console.error(`Product "${argv.product}" not found. Available: ${available}`);
        process.exit(1);
      }
      console.log(context.universal + '\n\n' + skill);
      return;
    }

    // No product specified — output everything
    console.log(context.universal + '\n\n' + Object.values(context.products).join('\n\n'));
  },
};

export default agentContext;
