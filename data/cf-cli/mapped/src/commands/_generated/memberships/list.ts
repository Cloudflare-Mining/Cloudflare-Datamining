/**
 * list command
 * @generated from apis/memberships/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  'account-name'?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  name?: string;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List memberships of accounts the user can access.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('account-name', {
        type: 'string',
        description: 'Account name',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of memberships per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order memberships by.',
        choices: ['id', 'account.name', 'status'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order memberships.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Account name',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Status of this membership.',
        choices: ['accepted', 'pending', 'rejected'] as const,
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
      if (argv.accountName !== undefined) params['accountName'] = argv.accountName;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.status !== undefined) params['status'] = argv.status;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.memberships.list(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
