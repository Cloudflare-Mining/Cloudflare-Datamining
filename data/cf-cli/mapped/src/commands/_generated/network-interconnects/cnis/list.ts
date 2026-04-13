/**
 * list command
 * @generated from apis/network-interconnects/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  slot?: string;
  'tunnel-id'?: string;
  cursor?: number;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Lists all Cloud Network Interconnects (CNIs) configured for the account, showing connection status and parameters.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('slot', {
        type: 'string',
        description: 'If specified, only show CNIs associated with the specified slot',
        default: undefined,
      })
      .option('tunnel-id', {
        type: 'string',
        description: 'If specified, only show cnis associated with the specified tunnel id',
        default: undefined,
      })
      .option('cursor', {
        type: 'number',
        description: 'Cursor',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit',
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.slot !== undefined) params['slot'] = argv.slot;
      if (argv.tunnelId !== undefined) params['tunnel_id'] = argv.tunnelId;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.networkInterconnects.cnis.list(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
