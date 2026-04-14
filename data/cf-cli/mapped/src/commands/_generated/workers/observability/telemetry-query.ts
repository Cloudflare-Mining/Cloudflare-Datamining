/**
 * telemetry-query command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface TelemetryQueryArgs {
  chart?: boolean;
  compare?: boolean;
  dry?: boolean;
  granularity?: number;
  'ignore-series'?: boolean;
  limit?: number;
  offset?: string;
  'offset-by'?: number;
  'offset-direction'?: string;
  'parameters-datasets'?: string;
  'parameters-filter-combination'?: string;
  'parameters-limit'?: number;
  'parameters-needle-is-regex'?: boolean;
  'parameters-needle-match-case'?: boolean;
  'parameters-order-by-order'?: string;
  'parameters-order-by-value': string;
  'query-id': string;
  'timeframe-from': number;
  'timeframe-to': number;
  view?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TelemetryQueryArgs> = {
  command: 'telemetry-query',
  describe: 'Run a temporary or saved query.',

  builder: (yargs: Argv): Argv<TelemetryQueryArgs> => {
    return yargs
      .option('chart', {
        type: 'boolean',
        description: 'Whether to include timeseties data in the response',
        default: false,
      })
      .option('compare', {
        type: 'boolean',
        description: 'Whether to include comparison data with previous time periods',
        default: false,
      })
      .option('dry', {
        type: 'boolean',
        description: 'Whether to perform a dry run without saving the results of the query. Useful for validation',
        default: false,
      })
      .option('granularity', {
        type: 'number',
        description:
          'This is only used when the view is calculations. Leaving it empty lets Workers Observability detect the correct granularity.',
        default: undefined,
      })
      .option('ignore-series', {
        type: 'boolean',
        description: 'Whether to ignore time-series data in the results and return only aggregated values',
        default: false,
      })
      .option('limit', {
        type: 'number',
        description: 'Use this limit to cap the number of events returned when the view is events.',
        default: undefined,
      })
      .option('offset', {
        type: 'string',
        description:
          "Cursor pagination for event/trace/invocation views. Pass the last item's $metadata.id as the next offset.",
        default: undefined,
      })
      .option('offset-by', {
        type: 'number',
        description:
          'Numeric offset for pattern results (top-N list). Use with limit to page pattern groups; not used by cursor pagination.',
        default: undefined,
      })
      .option('offset-direction', {
        type: 'string',
        description: "Direction for offset-based pagination (e.g., 'next', 'prev')",
        default: undefined,
      })
      .option('parameters-datasets', {
        type: 'string',
        description: 'Set the Datasets to query. Leave it empty to query all the datasets.',
        default: undefined,
      })
      .option('parameters-filter-combination', {
        type: 'string',
        description: 'Set a Flag to describe how to combine the filters on the query.',
        choices: ['and', 'or', 'AND', 'OR'] as const,
        default: undefined,
      })
      .option('parameters-limit', {
        type: 'number',
        description: 'Set a limit on the number of results / records returned by the query',
        default: undefined,
      })
      .option('parameters-needle-is-regex', {
        type: 'boolean',
        description: 'The parameters.needle.isRegex field',
        default: false,
      })
      .option('parameters-needle-match-case', {
        type: 'boolean',
        description: 'The parameters.needle.matchCase field',
        default: false,
      })
      .option('parameters-order-by-order', {
        type: 'string',
        description: 'Set the order of the results',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('parameters-order-by-value', {
        type: 'string',
        description: 'Configure which Calculation to order the results by.',
      })
      .option('query-id', {
        type: 'string',
        description: 'Unique identifier for the query to execute',
      })
      .option('timeframe-from', {
        type: 'number',
        description: 'Start timestamp for the query timeframe (Unix timestamp in milliseconds)',
      })
      .option('timeframe-to', {
        type: 'number',
        description: 'End timestamp for the query timeframe (Unix timestamp in milliseconds)',
      })
      .option('view', {
        type: 'string',
        description:
          'Examples by view type. Events: show errors for a worker in the last 30 minutes. Calculations: p99 of wall time or count by status code. Invocations: find a specific request that resulted in a 500.',
        choices: ['traces', 'events', 'calculations', 'invocations', 'requests', 'agents'] as const,
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('parameters-filter-combination', ['and', 'or', 'AND', 'OR'] as const)
      .choices('parameters-order-by-order', ['asc', 'desc'] as const)
      .choices('view', [
        'traces',
        'events',
        'calculations',
        'invocations',
        'requests',
        'agents',
      ] as const) as Argv<TelemetryQueryArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TelemetryQueryArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers observability telemetry-query',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/observability/telemetry/query`,
          pathParams: {},
          body: {
            chart: argv.chart,
            compare: argv.compare,
            dry: argv.dry,
            granularity: argv.granularity,
            ignoreSeries: argv.ignoreSeries,
            limit: argv.limit,
            offset: argv.offset,
            offsetBy: argv.offsetBy,
            offsetDirection: argv.offsetDirection,
            parametersDatasets: argv.parametersDatasets,
            parametersFilterCombination: argv.parametersFilterCombination,
            parametersLimit: argv.parametersLimit,
            parametersNeedleIsRegex: argv.parametersNeedleIsRegex,
            parametersNeedleMatchCase: argv.parametersNeedleMatchCase,
            parametersOrderByOrder: argv.parametersOrderByOrder,
            parametersOrderByValue: argv.parametersOrderByValue,
            queryId: argv.queryId,
            timeframeFrom: argv.timeframeFrom,
            timeframeTo: argv.timeframeTo,
            view: argv.view,
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/query`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.chart !== undefined) setNestedValue(bodyData, ['chart'], argv.chart);
      if (argv.compare !== undefined) setNestedValue(bodyData, ['compare'], argv.compare);
      if (argv.dry !== undefined) setNestedValue(bodyData, ['dry'], argv.dry);
      if (argv.granularity !== undefined) setNestedValue(bodyData, ['granularity'], argv.granularity);
      if (argv.ignoreSeries !== undefined) setNestedValue(bodyData, ['ignoreSeries'], argv.ignoreSeries);
      if (argv.limit !== undefined) setNestedValue(bodyData, ['limit'], argv.limit);
      if (argv.offset !== undefined) setNestedValue(bodyData, ['offset'], argv.offset);
      if (argv.offsetBy !== undefined) setNestedValue(bodyData, ['offsetBy'], argv.offsetBy);
      if (argv.offsetDirection !== undefined) setNestedValue(bodyData, ['offsetDirection'], argv.offsetDirection);
      if (argv.parametersDatasets !== undefined)
        setNestedValue(bodyData, ['parameters', 'datasets'], argv.parametersDatasets);
      if (argv.parametersFilterCombination !== undefined)
        setNestedValue(bodyData, ['parameters', 'filterCombination'], argv.parametersFilterCombination);
      if (argv.parametersLimit !== undefined) setNestedValue(bodyData, ['parameters', 'limit'], argv.parametersLimit);
      if (argv.parametersNeedleIsRegex !== undefined)
        setNestedValue(bodyData, ['parameters', 'needle', 'isRegex'], argv.parametersNeedleIsRegex);
      if (argv.parametersNeedleMatchCase !== undefined)
        setNestedValue(bodyData, ['parameters', 'needle', 'matchCase'], argv.parametersNeedleMatchCase);
      if (argv.parametersOrderByOrder !== undefined)
        setNestedValue(bodyData, ['parameters', 'orderBy', 'order'], argv.parametersOrderByOrder);
      if (argv.parametersOrderByValue !== undefined)
        setNestedValue(bodyData, ['parameters', 'orderBy', 'value'], argv.parametersOrderByValue);
      if (argv.queryId !== undefined) setNestedValue(bodyData, ['queryId'], argv.queryId);
      if (argv.timeframeFrom !== undefined) setNestedValue(bodyData, ['timeframe', 'from'], argv.timeframeFrom);
      if (argv.timeframeTo !== undefined) setNestedValue(bodyData, ['timeframe', 'to'], argv.timeframeTo);
      if (argv.view !== undefined) setNestedValue(bodyData, ['view'], argv.view);
      const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/query`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
