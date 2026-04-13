/**
 * get command
 * @generated from apis/brand-protection/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetArgs {
  offset?: string;
  limit?: string;
  'query-id': string;
  download?: string;
  'order-by'?: string;
  order?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get',
  describe: 'Get paginated list of logo matches for a specific brand protection logo query',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .option('offset', {
        type: 'string',
        description: 'Offset',
        default: undefined,
      })
      .option('limit', {
        type: 'string',
        description: 'Limit',
        default: undefined,
      })
      .option('query-id', {
        type: 'string',
        description: 'Query ID',
      })
      .option('download', {
        type: 'string',
        description: 'Download',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: "Column to sort by. Options: 'matchedAt', 'domain', or 'similarityScore'",
        choices: ['matchedAt', 'domain', 'similarityScore'] as const,
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: "Sort order. Options: 'asc' (ascending) or 'desc' (descending)",
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.queryId !== undefined) params['query_id'] = argv.queryId;
      if (argv.download !== undefined) params['download'] = argv.download;
      if (argv.orderBy !== undefined) params['orderBy'] = argv.orderBy;
      if (argv.order !== undefined) params['order'] = argv.order;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.brandProtection.logomatches.get(
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
