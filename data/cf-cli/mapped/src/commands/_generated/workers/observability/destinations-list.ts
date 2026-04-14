/**
 * destinations-list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface DestinationsListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  'order-by'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DestinationsListArgs> = {
  command: 'destinations-list',
  describe: 'List your Workers Observability Telemetry Destinations.',

  builder: (yargs: Argv): Argv<DestinationsListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'PerPage',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Order',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'OrderBy',
        choices: ['created', 'updated'] as const,
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
      }) as Argv<DestinationsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DestinationsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['perPage'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.orderBy !== undefined) params['orderBy'] = argv.orderBy;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.observability.destinationsList(
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
