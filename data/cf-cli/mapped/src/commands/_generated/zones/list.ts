/**
 * list command
 * @generated from apis/zones/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  name?: string;
  status?: string;
  'account-id'?: string;
  'account-name'?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  match?: string;
  fields?: string;
  ndjson?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Lists, searches, sorts, and filters your zones. Listing zones across more than 500 accounts is currently not allowed.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description:
          'A domain name. Optional filter operators can be provided to extend refine the search:   * \`equal\` (default)   * \`not_equal\`   * \`starts_with\`   * \`ends_with\`   * \`contains\`   * \`starts_with_case_sensitive\`   * \`ends_with_case_sensitive\`   * \`contains_case_sensitive\`',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Specify a zone status to filter by.',
        choices: ['initializing', 'pending', 'active', 'moved'] as const,
        default: undefined,
      })
      .option('account-id', {
        type: 'string',
        description: 'Filter by an account ID.',
        default: undefined,
      })
      .option('account-name', {
        type: 'string',
        description:
          'An account Name. Optional filter operators can be provided to extend refine the search:   * \`equal\` (default)   * \`not_equal\`   * \`starts_with\`   * \`ends_with\`   * \`contains\`   * \`starts_with_case_sensitive\`   * \`ends_with_case_sensitive\`   * \`contains_case_sensitive\`',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of zones per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order zones by.',
        choices: ['name', 'status', 'account.id', 'account.name', 'plan.id'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order zones.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        choices: ['any', 'all'] as const,
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
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.accountId !== undefined) params['accountId'] = argv.accountId;
      if (argv.accountName !== undefined) params['accountName'] = argv.accountName;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.match !== undefined) params['match'] = argv.match;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.zones.list(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
