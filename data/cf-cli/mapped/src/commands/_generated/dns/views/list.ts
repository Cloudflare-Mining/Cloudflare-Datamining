/**
 * list command
 * @generated from apis/dns/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  name?: string;
  'name-exact'?: string;
  'name-contains'?: string;
  'name-startswith'?: string;
  'name-endswith'?: string;
  'zone-id'?: string;
  'zone-name'?: string;
  match?: string;
  page?: string;
  'per-page'?: string;
  order?: string;
  direction?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List DNS Internal Views for an Account',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'Exact value of the DNS view name. This is a convenience alias for \`name.exact\`.',
        default: undefined,
      })
      .option('name-exact', {
        type: 'string',
        description: 'Exact value of the DNS view name.',
        default: undefined,
      })
      .option('name-contains', {
        type: 'string',
        description: 'Substring of the DNS view name.',
        default: undefined,
      })
      .option('name-startswith', {
        type: 'string',
        description: 'Prefix of the DNS view name.',
        default: undefined,
      })
      .option('name-endswith', {
        type: 'string',
        description: 'Suffix of the DNS view name.',
        default: undefined,
      })
      .option('zone-id', {
        type: 'string',
        description: 'A zone ID that exists in the zones list for the view.',
        default: undefined,
      })
      .option('zone-name', {
        type: 'string',
        description: 'A zone name that exists in the zones list for the view.',
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description:
          'Whether to match all search requirements or at least one (any). If set to \`all\`, acts like a logical AND between filters. If set to \`any\`, acts like a logical OR instead.',
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'string',
        description: 'Number of DNS views per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order DNS views by.',
        choices: ['name', 'created_on', 'modified_on'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order DNS views in.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.nameExact !== undefined) params['nameExact'] = argv.nameExact;
      if (argv.nameContains !== undefined) params['nameContains'] = argv.nameContains;
      if (argv.nameStartswith !== undefined) params['nameStartswith'] = argv.nameStartswith;
      if (argv.nameEndswith !== undefined) params['nameEndswith'] = argv.nameEndswith;
      if (argv.zoneId !== undefined) params['zone_id'] = argv.zoneId;
      if (argv.zoneName !== undefined) params['zone_name'] = argv.zoneName;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.dns.views.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
