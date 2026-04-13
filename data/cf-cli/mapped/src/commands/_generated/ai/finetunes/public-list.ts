/**
 * public-list command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PublicListArgs {
  limit?: number;
  offset?: number;
  'order-by'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PublicListArgs> = {
  command: 'public-list',
  describe: 'Lists publicly available fine-tuned models that can be used with Workers AI.',

  builder: (yargs: Argv): Argv<PublicListArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Pagination Limit',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Pagination Offset',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'Order By Column Name',
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
      }) as Argv<PublicListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PublicListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.orderBy !== undefined) params['orderBy'] = argv.orderBy;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.ai.finetunes.publicList(
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
