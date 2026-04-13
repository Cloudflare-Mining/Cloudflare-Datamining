/**
 * indicators-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface IndicatorsGetArgs {
  'dataset-ids'?: string;
  page?: number;
  'page-size'?: number;
  search?: string;
  name?: string;
  'indicator-type'?: string;
  'related-events'?: string;
  tags?: string;
  'created-after'?: string;
  'created-before'?: string;
  'related-events-limit'?: number;
  'include-tags'?: boolean;
  'include-total-count'?: boolean;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IndicatorsGetArgs> = {
  command: 'indicators-get',
  describe:
    'Retrieves a paginated list of indicators across specified datasets. Use datasetIds=all or datasetIds=* to query all datasets for the account. If no datasetIds provided, uses the default dataset.',

  builder: (yargs: Argv): Argv<IndicatorsGetArgs> => {
    return yargs
      .option('dataset-ids', {
        type: 'string',
        description:
          "Dataset IDs to query indicators from (array of UUIDs), or special value 'all' or '*' to query all datasets. If not provided, uses the default dataset.",
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'PageSize',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description:
          'Structured search as a JSON array of {field, op, value} objects. Searchable fields: value, indicatorType. Supports operators: equals, not, contains, startsWith, endsWith, gt, lt, gte, lte, like, in, find. Use the \'in\' operator with an array value to bulk-check up to 100 indicators in a single request, e.g. search=[{"field":"value","op":"in","value":["evil.com","bad.org"]}]. Multiple conditions are AND\'d together. Max 10 conditions per request.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'Filter indicators by value using substring match (LIKE). Legacy alternative to structured search.',
        default: undefined,
      })
      .option('indicator-type', {
        type: 'string',
        description: 'IndicatorType',
        default: undefined,
      })
      .option('related-events', {
        type: 'string',
        description: 'Filter by related event IDs',
        default: undefined,
      })
      .option('tags', {
        type: 'string',
        description:
          'Filter by tag values or UUIDs. Indicators must have at least one of the specified tags (OR logic). Supports both tag UUID and tag value.',
        default: undefined,
      })
      .option('created-after', {
        type: 'string',
        description:
          "Filter indicators created on or after this date. Must use ISO 8601 format (e.g., '2024-01-15T00:00:00Z').",
        default: undefined,
      })
      .option('created-before', {
        type: 'string',
        description:
          "Filter indicators created on or before this date. Must use ISO 8601 format (e.g., '2024-12-31T23:59:59Z').",
        default: undefined,
      })
      .option('related-events-limit', {
        type: 'number',
        description:
          'Limit the number of related events returned per indicator. Default: 2. Set to 0 for none, -1 for all events.',
        default: undefined,
      })
      .option('include-tags', {
        type: 'boolean',
        description: 'Whether to include full tag details for each indicator. Defaults to true.',
        default: false,
      })
      .option('include-total-count', {
        type: 'boolean',
        description:
          'Whether to compute accurate total count via COUNT(*). Defaults to false for performance. When false, total_count is an approximation.',
        default: false,
      })
      .option('format', {
        type: 'string',
        description:
          "Output format for indicator data. 'json' returns the default format, 'stix2' returns STIX 2.1 Indicator SDOs.",
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
      }) as Argv<IndicatorsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IndicatorsGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.datasetIds !== undefined) params['datasetIds'] = argv.datasetIds;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.pageSize !== undefined) params['pageSize'] = argv.pageSize;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.indicatorType !== undefined) params['indicatorType'] = argv.indicatorType;
      if (argv.relatedEvents !== undefined) params['relatedEvents'] = argv.relatedEvents;
      if (argv.tags !== undefined) params['tags'] = argv.tags;
      if (argv.createdAfter !== undefined) params['createdAfter'] = argv.createdAfter;
      if (argv.createdBefore !== undefined) params['createdBefore'] = argv.createdBefore;
      if (argv.relatedEventsLimit !== undefined) params['relatedEventsLimit'] = argv.relatedEventsLimit;
      if (argv.includeTags !== undefined) params['includeTags'] = argv.includeTags;
      if (argv.includeTotalCount !== undefined) params['includeTotalCount'] = argv.includeTotalCount;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.indicatorsGet(
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
