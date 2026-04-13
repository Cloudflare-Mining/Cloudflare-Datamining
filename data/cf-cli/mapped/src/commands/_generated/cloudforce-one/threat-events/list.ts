/**
 * list command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  cursor?: string;
  search?: string;
  page?: number;
  'page-size'?: number;
  'order-by'?: string;
  order?: string;
  'dataset-id'?: string;
  'force-refresh'?: boolean;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'When \`datasetId\` is unspecified, events will be listed from the \`Cloudforce One Threat Events\` dataset. To list existing datasets (and their IDs), use the [\`List Datasets\`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint). Also, must provide query parameters.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('cursor', {
        type: 'string',
        description:
          "Cursor for pagination. When provided, filters are embedded in the cursor so you only need to pass cursor and pageSize. Returned in the previous response's result_info.cursor field. Use cursor-based pagination for deep pagination (beyond 100,000 records) or for optimal performance.",
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description:
          'Page number (1-indexed) for offset-based pagination. Limited to offset of 100,000 records. For deep pagination, use cursor-based pagination instead.',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'Number of results per page. Maximum 25,000.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'OrderBy',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Order',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('dataset-id', {
        type: 'string',
        description: 'DatasetId',
        default: undefined,
      })
      .option('force-refresh', {
        type: 'boolean',
        description: 'ForceRefresh',
        default: false,
      })
      .option('format', {
        type: 'string',
        description: 'Format',
        choices: ['json', 'stix2'] as const,
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
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.pageSize !== undefined) params['pageSize'] = argv.pageSize;
      if (argv.orderBy !== undefined) params['orderBy'] = argv.orderBy;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.datasetId !== undefined) params['datasetId'] = argv.datasetId;
      if (argv.forceRefresh !== undefined) params['forceRefresh'] = argv.forceRefresh;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.threatevents.list(
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
