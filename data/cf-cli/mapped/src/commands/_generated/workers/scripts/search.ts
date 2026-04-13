/**
 * search command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface SearchArgs {
  name?: string;
  id?: string;
  'order-by'?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SearchArgs> = {
  command: 'search',
  describe: 'Search for Workers in an account.',

  builder: (yargs: Argv): Argv<SearchArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'Worker name to search for. Both exact and partial matches are returned.',
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'Worker ID (also called tag) to search for. Only exact matches are returned.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'Property to sort results by. Results are sorted in ascending order.',
        choices: ['created_on', 'modified_on', 'name'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Current page.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Items per page.',
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
      }) as Argv<SearchArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SearchArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.scripts.search(
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
