/**
 * telemetry-keys-list command
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

interface TelemetryKeysListArgs {
  datasets?: string;
  from?: number;
  'key-needle-is-regex'?: boolean;
  'key-needle-match-case'?: boolean;
  limit?: number;
  'needle-is-regex'?: boolean;
  'needle-match-case'?: boolean;
  to?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TelemetryKeysListArgs> = {
  command: 'telemetry-keys-list',
  describe: 'List all the keys in your telemetry events.',

  builder: (yargs: Argv): Argv<TelemetryKeysListArgs> => {
    return yargs
      .option('datasets', {
        type: 'string',
        description: 'Leave this empty to use the default datasets',
        default: undefined,
      })
      .option('from', {
        type: 'number',
        description: 'The from field',
        default: undefined,
      })
      .option('key-needle-is-regex', {
        type: 'boolean',
        description: 'The keyNeedle.isRegex field',
        default: false,
      })
      .option('key-needle-match-case', {
        type: 'boolean',
        description: 'The keyNeedle.matchCase field',
        default: false,
      })
      .option('limit', {
        type: 'number',
        description:
          'Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering.',
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
      .option('to', {
        type: 'number',
        description: 'The to field',
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
      }) as Argv<TelemetryKeysListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TelemetryKeysListArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers observability telemetry-keys-list',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/observability/telemetry/keys`,
          pathParams: {},
          body: {
            datasets: argv.datasets,
            from: argv.from,
            keyNeedleIsRegex: argv.keyNeedleIsRegex,
            keyNeedleMatchCase: argv.keyNeedleMatchCase,
            limit: argv.limit,
            needleIsRegex: argv.needleIsRegex,
            needleMatchCase: argv.needleMatchCase,
            to: argv.to,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/keys`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.datasets !== undefined) setNestedValue(bodyData, ['datasets'], argv.datasets);
      if (argv.from !== undefined) setNestedValue(bodyData, ['from'], argv.from);
      if (argv.keyNeedleIsRegex !== undefined)
        setNestedValue(bodyData, ['keyNeedle', 'isRegex'], argv.keyNeedleIsRegex);
      if (argv.keyNeedleMatchCase !== undefined)
        setNestedValue(bodyData, ['keyNeedle', 'matchCase'], argv.keyNeedleMatchCase);
      if (argv.limit !== undefined) setNestedValue(bodyData, ['limit'], argv.limit);
      if (argv.needleIsRegex !== undefined) setNestedValue(bodyData, ['needle', 'isRegex'], argv.needleIsRegex);
      if (argv.needleMatchCase !== undefined) setNestedValue(bodyData, ['needle', 'matchCase'], argv.needleMatchCase);
      if (argv.to !== undefined) setNestedValue(bodyData, ['to'], argv.to);
      const result = await client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/keys`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
