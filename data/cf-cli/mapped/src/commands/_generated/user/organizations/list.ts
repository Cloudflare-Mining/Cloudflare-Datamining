/**
 * list command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  name?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  match?: string;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists organizations the user is associated with.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'Organization name.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of organizations per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order organizations by.',
        choices: ['id', 'name', 'status'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order organizations.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Whether the user is a member of the organization or has an inivitation pending.',
        choices: ['member', 'invited'] as const,
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
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.status !== undefined) params['status'] = argv.status;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.organizations.list(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
