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
  site?: string;
  type?: string;
  cursor?: number;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists all network interconnects configured for the account, including physical and virtual connections.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('site', {
        type: 'string',
        description: 'If specified, only show interconnects located at the given site',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'If specified, only show interconnects of the given type',
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
      if (argv.site !== undefined) params['site'] = argv.site;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.networkInterconnects.interconnects.list(
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
