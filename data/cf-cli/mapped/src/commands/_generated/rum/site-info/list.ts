/**
 * list command
 * @generated from apis/rum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'per-page'?: string;
  page?: string;
  'order-by'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists all Web Analytics sites of an account.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('per-page', {
        type: 'string',
        description: 'Number of items to return per page of results.',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Current page within the paginated list of results.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'The property used to sort the list of results.',
        choices: ['host', 'created'] as const,
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
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rum.siteinfo.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
