/**
 * workers-list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface WorkersListArgs {
  page?: number;
  'per-page'?: number;
  'order-by'?: string;
  order?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WorkersListArgs> = {
  command: 'workers-list',
  describe: 'List all Workers for an account.',

  builder: (yargs: Argv): Argv<WorkersListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Current page.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Items per-page.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'Property to sort results by.',
        choices: ['deployed_on', 'updated_on', 'created_on', 'name'] as const,
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Sort direction.',
        choices: ['asc', 'desc'] as const,
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
      }) as Argv<WorkersListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WorkersListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.order !== undefined) params['order'] = argv.order;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.beta.workersList(
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
