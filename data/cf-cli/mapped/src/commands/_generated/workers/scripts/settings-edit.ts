/**
 * settings-edit command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface SettingsEditArgs {
  scriptName: string;
  logpush?: boolean;
  'observability-enabled': boolean;
  'observability-head-sampling-rate'?: number;
  'observability-logs-destinations'?: string;
  'observability-logs-enabled': boolean;
  'observability-logs-head-sampling-rate'?: number;
  'observability-logs-invocation-logs': boolean;
  'observability-logs-persist'?: boolean;
  'observability-traces-destinations'?: string;
  'observability-traces-enabled'?: boolean;
  'observability-traces-head-sampling-rate'?: number;
  'observability-traces-persist'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SettingsEditArgs> = {
  command: 'settings-edit <scriptName>',
  describe:
    'Patch script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Including but not limited to Logpush and Tail Consumers.',

  builder: (yargs: Argv): Argv<SettingsEditArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .option('logpush', {
        type: 'boolean',
        description: 'Whether Logpush is turned on for the Worker.',
        default: false,
      })
      .option('observability-enabled', {
        type: 'boolean',
        description: 'Whether observability is enabled for the Worker.',
      })
      .option('observability-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
        default: undefined,
      })
      .option('observability-logs-destinations', {
        type: 'string',
        description: 'A list of destinations where logs will be exported to.',
        default: undefined,
      })
      .option('observability-logs-enabled', {
        type: 'boolean',
        description: 'Whether logs are enabled for the Worker.',
      })
      .option('observability-logs-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
        default: undefined,
      })
      .option('observability-logs-invocation-logs', {
        type: 'boolean',
        description:
          'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.',
      })
      .option('observability-logs-persist', {
        type: 'boolean',
        description: 'Whether log persistence is enabled for the Worker.',
        default: false,
      })
      .option('observability-traces-destinations', {
        type: 'string',
        description: 'A list of destinations where traces will be exported to.',
        default: undefined,
      })
      .option('observability-traces-enabled', {
        type: 'boolean',
        description: 'Whether traces are enabled for the Worker.',
        default: false,
      })
      .option('observability-traces-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
        default: undefined,
      })
      .option('observability-traces-persist', {
        type: 'boolean',
        description: 'Whether trace persistence is enabled for the Worker.',
        default: false,
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
      }) as Argv<SettingsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SettingsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers scripts settings-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/scripts/${argv.scriptName ?? '<scriptName>'}/script-settings`,
          pathParams: { scriptName: String(argv.scriptName ?? '') },
          body: {
            logpush: argv.logpush,
            observabilityEnabled: argv.observabilityEnabled,
            observabilityHeadSamplingRate: argv.observabilityHeadSamplingRate,
            observabilityLogsDestinations: argv.observabilityLogsDestinations,
            observabilityLogsEnabled: argv.observabilityLogsEnabled,
            observabilityLogsHeadSamplingRate: argv.observabilityLogsHeadSamplingRate,
            observabilityLogsInvocationLogs: argv.observabilityLogsInvocationLogs,
            observabilityLogsPersist: argv.observabilityLogsPersist,
            observabilityTracesDestinations: argv.observabilityTracesDestinations,
            observabilityTracesEnabled: argv.observabilityTracesEnabled,
            observabilityTracesHeadSamplingRate: argv.observabilityTracesHeadSamplingRate,
            observabilityTracesPersist: argv.observabilityTracesPersist,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/workers/scripts/${argv.scriptName}/script-settings`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.logpush !== undefined) setNestedValue(bodyData, ['logpush'], argv.logpush);
      if (argv.observabilityEnabled !== undefined)
        setNestedValue(bodyData, ['observability', 'enabled'], argv.observabilityEnabled);
      if (argv.observabilityHeadSamplingRate !== undefined)
        setNestedValue(bodyData, ['observability', 'head_sampling_rate'], argv.observabilityHeadSamplingRate);
      if (argv.observabilityLogsDestinations !== undefined)
        setNestedValue(bodyData, ['observability', 'logs', 'destinations'], argv.observabilityLogsDestinations);
      if (argv.observabilityLogsEnabled !== undefined)
        setNestedValue(bodyData, ['observability', 'logs', 'enabled'], argv.observabilityLogsEnabled);
      if (argv.observabilityLogsHeadSamplingRate !== undefined)
        setNestedValue(
          bodyData,
          ['observability', 'logs', 'head_sampling_rate'],
          argv.observabilityLogsHeadSamplingRate,
        );
      if (argv.observabilityLogsInvocationLogs !== undefined)
        setNestedValue(bodyData, ['observability', 'logs', 'invocation_logs'], argv.observabilityLogsInvocationLogs);
      if (argv.observabilityLogsPersist !== undefined)
        setNestedValue(bodyData, ['observability', 'logs', 'persist'], argv.observabilityLogsPersist);
      if (argv.observabilityTracesDestinations !== undefined)
        setNestedValue(bodyData, ['observability', 'traces', 'destinations'], argv.observabilityTracesDestinations);
      if (argv.observabilityTracesEnabled !== undefined)
        setNestedValue(bodyData, ['observability', 'traces', 'enabled'], argv.observabilityTracesEnabled);
      if (argv.observabilityTracesHeadSamplingRate !== undefined)
        setNestedValue(
          bodyData,
          ['observability', 'traces', 'head_sampling_rate'],
          argv.observabilityTracesHeadSamplingRate,
        );
      if (argv.observabilityTracesPersist !== undefined)
        setNestedValue(bodyData, ['observability', 'traces', 'persist'], argv.observabilityTracesPersist);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/workers/scripts/${argv.scriptName}/script-settings`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
