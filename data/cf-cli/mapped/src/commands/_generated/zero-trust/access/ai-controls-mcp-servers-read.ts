/**
 * ai-controls-mcp-servers-read command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface AIControlsMcpServersReadArgs {
  id: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AIControlsMcpServersReadArgs> = {
  command: 'ai-controls-mcp-servers-read <id>',
  describe: 'Retrieves gateway configuration for MCP portals.',

  builder: (yargs: Argv): Argv<AIControlsMcpServersReadArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'server id',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<AIControlsMcpServersReadArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AIControlsMcpServersReadArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.aiControlsMcpServersRead(accountId, argv.id);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
