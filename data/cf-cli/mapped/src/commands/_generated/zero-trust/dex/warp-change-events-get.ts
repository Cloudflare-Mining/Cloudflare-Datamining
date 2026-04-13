/**
 * warp-change-events-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface WarpChangeEventsGetArgs {
  page: number;
  'per-page': number;
  from: string;
  to: string;
  type?: string;
  toggle?: string;
  'config-name'?: string;
  'account-name'?: string;
  'sort-order'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WarpChangeEventsGetArgs> = {
  command: 'warp-change-events-get',
  describe: 'List WARP configuration and enablement toggle change events by device.',

  builder: (yargs: Argv): Argv<WarpChangeEventsGetArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results',
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page',
      })
      .option('from', {
        type: 'string',
        description: 'Start time for the query in ISO (RFC3339 - ISO 8601) format',
      })
      .option('to', {
        type: 'string',
        description: 'End time for the query in ISO (RFC3339 - ISO 8601) format',
      })
      .option('type', {
        type: 'string',
        description: "Filter events by type 'config' or 'toggle'",
        choices: ['config', 'toggle'] as const,
        default: undefined,
      })
      .option('toggle', {
        type: 'string',
        description: "Filter events by type toggle value. Applicable to type='toggle' events only.",
        choices: ['on', 'off'] as const,
        default: undefined,
      })
      .option('config-name', {
        type: 'string',
        description:
          "Filter events by WARP configuration name changed from or to. Applicable to type='config' events only.",
        default: undefined,
      })
      .option('account-name', {
        type: 'string',
        description: 'Filter events by account name.',
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort response by event timestamp.',
        choices: ['ASC', 'DESC'] as const,
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
      }) as Argv<WarpChangeEventsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WarpChangeEventsGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.toggle !== undefined) params['toggle'] = argv.toggle;
      if (argv.configName !== undefined) params['config_name'] = argv.configName;
      if (argv.accountName !== undefined) params['account_name'] = argv.accountName;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.warpChangeEventsGet(
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
