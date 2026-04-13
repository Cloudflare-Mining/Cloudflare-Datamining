/**
 * list command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'name-contains'?: string;
  'start-after'?: string;
  'per-page'?: number;
  order?: string;
  direction?: string;
  cursor?: string;
  'cf-r2-jurisdiction'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists all R2 buckets on your account.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('name-contains', {
        type: 'string',
        description: 'Bucket names to filter by. Only buckets with this phrase in their name will be returned.',
        default: undefined,
      })
      .option('start-after', {
        type: 'string',
        description: 'Bucket name to start searching after. Buckets are ordered lexicographically.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of buckets to return in a single call.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order buckets by.',
        choices: ['name'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order buckets.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description:
          'Pagination cursor received during the last List Buckets call. R2 buckets are paginated using cursors instead of page numbers.',
        default: undefined,
      })
      .option('cf-r2-jurisdiction', {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
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
      if (argv.nameContains !== undefined) params['name_contains'] = argv.nameContains;
      if (argv.startAfter !== undefined) params['start_after'] = argv.startAfter;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.get<unknown>(`/accounts/${accountId}/r2/buckets`, {
        query: Object.keys(params).length > 0 ? params : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
