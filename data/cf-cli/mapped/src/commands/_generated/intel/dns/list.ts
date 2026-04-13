/**
 * list command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'start-end-params'?: string;
  ipv4?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Gets a list of all the domains that have resolved to a specific IP address.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('start-end-params', {
        type: 'string',
        description: 'Start end params',
        default: undefined,
      })
      .option('ipv4', {
        type: 'string',
        description: 'Ipv4',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Requested page within paginated list of results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of results requested.',
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
      if (argv.startEndParams !== undefined) params['start_end_params'] = argv.startEndParams;
      if (argv.ipv4 !== undefined) params['ipv4'] = argv.ipv4;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.intel.dns.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
