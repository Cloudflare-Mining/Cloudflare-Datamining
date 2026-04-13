/**
 * history-list command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface HistoryListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  'occurred-at'?: string;
  type?: string;
  action?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, HistoryListArgs> = {
  command: 'history-list',
  describe: 'Accesses your billing history object.',

  builder: (yargs: Argv): Argv<HistoryListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order billing history by.',
        choices: ['type', 'occurred_at', 'action'] as const,
        default: undefined,
      })
      .option('occurred-at', {
        type: 'string',
        description: 'When the billing item was created.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'The billing item type.',
        default: undefined,
      })
      .option('action', {
        type: 'string',
        description: 'The billing item action.',
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
      }) as Argv<HistoryListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HistoryListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.occurredAt !== undefined) params['occurred_at'] = argv.occurredAt;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.action !== undefined) params['action'] = argv.action;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.billing.historyList(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
