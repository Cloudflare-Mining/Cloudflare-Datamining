/**
 * telemetry-values-list command
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

interface TelemetryValuesListArgs {
  datasets: string;
  key: string;
  limit?: number;
  'needle-is-regex'?: boolean;
  'needle-match-case'?: boolean;
  'timeframe-from': number;
  'timeframe-to': number;
  type: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TelemetryValuesListArgs> = {
  command: 'telemetry-values-list',
  describe: 'List unique values found in your events.',

  builder: (yargs: Argv): Argv<TelemetryValuesListArgs> => {
    return yargs
      .option('datasets', {
        type: 'string',
        description: 'Leave this empty to use the default datasets',
      })
      .option('key', {
        type: 'string',
        description: 'The key field',
      })
      .option('limit', {
        type: 'number',
        description: 'The limit field',
        default: undefined,
      })
      .option('needle-is-regex', {
        type: 'boolean',
        description: 'The needle.isRegex field',
        default: false,
      })
      .option('needle-match-case', {
        type: 'boolean',
        description: 'The needle.matchCase field',
        default: false,
      })
      .option('timeframe-from', {
        type: 'number',
        description: 'The timeframe.from field',
      })
      .option('timeframe-to', {
        type: 'number',
        description: 'The timeframe.to field',
      })
      .option('type', {
        type: 'string',
        description: 'The type field',
        choices: ['string', 'boolean', 'number'] as const,
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
      .choices('type', ['string', 'boolean', 'number'] as const) as Argv<TelemetryValuesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TelemetryValuesListArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers observability telemetry-values-list',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/observability/telemetry/values`,
          pathParams: {},
          body: {
            datasets: argv.datasets,
            key: argv.key,
            limit: argv.limit,
            needleIsRegex: argv.needleIsRegex,
            needleMatchCase: argv.needleMatchCase,
            timeframeFrom: argv.timeframeFrom,
            timeframeTo: argv.timeframeTo,
            type: argv.type,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/values`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.datasets !== undefined) setNestedValue(bodyData, ['datasets'], argv.datasets);
      if (argv.key !== undefined) setNestedValue(bodyData, ['key'], argv.key);
      if (argv.limit !== undefined) setNestedValue(bodyData, ['limit'], argv.limit);
      if (argv.needleIsRegex !== undefined) setNestedValue(bodyData, ['needle', 'isRegex'], argv.needleIsRegex);
      if (argv.needleMatchCase !== undefined) setNestedValue(bodyData, ['needle', 'matchCase'], argv.needleMatchCase);
      if (argv.timeframeFrom !== undefined) setNestedValue(bodyData, ['timeframe', 'from'], argv.timeframeFrom);
      if (argv.timeframeTo !== undefined) setNestedValue(bodyData, ['timeframe', 'to'], argv.timeframeTo);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/values`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
