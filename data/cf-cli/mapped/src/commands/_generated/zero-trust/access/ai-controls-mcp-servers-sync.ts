/**
 * ai-controls-mcp-servers-sync command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface AIControlsMcpServersSyncArgs {
  id: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AIControlsMcpServersSyncArgs> = {
  command: 'ai-controls-mcp-servers-sync <id>',
  describe: "Syncs an MCP server's tool catalog with the portal.",

  builder: (yargs: Argv): Argv<AIControlsMcpServersSyncArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'portal id',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<AIControlsMcpServersSyncArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AIControlsMcpServersSyncArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access ai-controls-mcp-servers-sync',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/ai-controls/mcp/servers/${argv.id ?? '<id>'}/sync`,
          pathParams: { id: String(argv.id ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.aiControlsMcpServersSync(argv.id, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
