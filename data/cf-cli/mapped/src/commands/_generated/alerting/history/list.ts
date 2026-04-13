/**
 * list command
 * @generated from apis/alerting/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'per-page'?: string;
  before?: string;
  page?: number;
  since?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Gets a list of history records for notifications sent to an account. The records are displayed for last \`x\` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('per-page', {
        type: 'string',
        description: 'Number of items per page.',
        default: undefined,
      })
      .option('before', {
        type: 'string',
        description:
          'Limit the returned results to history records older than the specified date. This must be a timestamp that conforms to RFC3339.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description:
          'Limit the returned results to history records newer than the specified date. This must be a timestamp that conforms to RFC3339.',
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
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.before !== undefined) params['before'] = argv.before;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.since !== undefined) params['since'] = argv.since;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.alerting.history.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
