/**
 * aggregate-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface AggregateGetArgs {
  'aggregate-by': string;
  'dataset-id'?: string;
  'start-date'?: string;
  'end-date'?: string;
  'group-by-date'?: boolean;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AggregateGetArgs> = {
  command: 'aggregate-get',
  describe:
    'Aggregate threat events by one or more columns (e.g., attacker, targetIndustry) with optional date filtering and daily grouping. Supports multi-dimensional aggregation for cross-analysis.',

  builder: (yargs: Argv): Argv<AggregateGetArgs> => {
    return yargs
      .option('aggregate-by', {
        type: 'string',
        description:
          "Column(s) to aggregate by - single column or comma-separated list (e.g., 'attacker', 'targetIndustry', 'attacker,targetIndustry')",
      })
      .option('dataset-id', {
        type: 'string',
        description:
          'Dataset ID(s) to filter by. Can be a single dataset ID, comma-separated list, or array. If not provided, uses default dataset',
        default: undefined,
      })
      .option('start-date', {
        type: 'string',
        description: "Start date for filtering (ISO 8601 format, e.g., '2024-01-01')",
        default: undefined,
      })
      .option('end-date', {
        type: 'string',
        description: "End date for filtering (ISO 8601 format, e.g., '2024-12-31')",
        default: undefined,
      })
      .option('group-by-date', {
        type: 'boolean',
        description: 'Whether to group results by date (daily aggregation)',
        default: false,
      })
      .option('limit', {
        type: 'number',
        description: 'Maximum number of results to return',
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
      }) as Argv<AggregateGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AggregateGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.aggregateBy !== undefined) params['aggregateBy'] = argv.aggregateBy;
      if (argv.datasetId !== undefined) params['datasetId'] = argv.datasetId;
      if (argv.startDate !== undefined) params['startDate'] = argv.startDate;
      if (argv.endDate !== undefined) params['endDate'] = argv.endDate;
      if (argv.groupByDate !== undefined) params['groupByDate'] = argv.groupByDate;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.aggregateGet(
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
