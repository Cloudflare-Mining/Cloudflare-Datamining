/**
 * list command
 * @generated from apis/scim/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'start-index'?: number;
  count?: number;
  filter?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Lists SCIM Group resources for the account. Returns both system groups (backed by Cloudflare permission groups, prefixed \`cloudflare-v1-\`) and custom user groups. Supports filtering by \`displayName\` using SCIM filter syntax.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('start-index', {
        type: 'number',
        description:
          'The 1-based index of the first result in the current set of list results. Values less than 1 are treated as 1.',
        default: undefined,
      })
      .option('count', {
        type: 'number',
        description: 'Specifies the desired maximum number of query results per page.',
        default: undefined,
      })
      .option('filter', {
        type: 'string',
        description: 'SCIM filter expression (RFC 7644 Section 3.4.2.2). Only \`displayName eq "value"\` is supported.',
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
      if (argv.startIndex !== undefined) params['startIndex'] = argv.startIndex;
      if (argv.count !== undefined) params['count'] = argv.count;
      if (argv.filter !== undefined) params['filter'] = argv.filter;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.scim.groups.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
