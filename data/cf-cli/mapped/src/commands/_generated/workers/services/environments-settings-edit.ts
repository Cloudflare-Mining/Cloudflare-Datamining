/**
 * environments-settings-edit command
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

interface EnvironmentsSettingsEditArgs {
  serviceName: string;
  environmentName: string;
  success: boolean;
  'result-logpush'?: boolean;
  'result-observability-enabled': boolean;
  'result-observability-head-sampling-rate'?: number;
  'result-observability-logs-destinations'?: string;
  'result-observability-logs-enabled': boolean;
  'result-observability-logs-head-sampling-rate'?: number;
  'result-observability-logs-invocation-logs': boolean;
  'result-observability-logs-persist'?: boolean;
  'result-observability-traces-destinations'?: string;
  'result-observability-traces-enabled'?: boolean;
  'result-observability-traces-head-sampling-rate'?: number;
  'result-observability-traces-persist'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EnvironmentsSettingsEditArgs> = {
  command: 'environments-settings-edit <serviceName> <environmentName>',
  describe: 'Patch script metadata, such as bindings.',

  builder: (yargs: Argv): Argv<EnvironmentsSettingsEditArgs> => {
    return yargs
      .positional('serviceName', {
        type: 'string',
        description: 'Name of Worker to bind to.',
        demandOption: true,
      })
      .positional('environmentName', {
        type: 'string',
        description: 'Optional environment if the Worker utilizes one.',
        demandOption: true,
      })
      .option('success', {
        type: 'boolean',
        description: 'Whether the API call was successful.',
      })
      .option('result-logpush', {
        type: 'boolean',
        description: 'Whether Logpush is turned on for the Worker.',
        default: false,
      })
      .option('result-observability-enabled', {
        type: 'boolean',
        description: 'Whether observability is enabled for the Worker.',
      })
      .option('result-observability-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
        default: undefined,
      })
      .option('result-observability-logs-destinations', {
        type: 'string',
        description: 'A list of destinations where logs will be exported to.',
        default: undefined,
      })
      .option('result-observability-logs-enabled', {
        type: 'boolean',
        description: 'Whether logs are enabled for the Worker.',
      })
      .option('result-observability-logs-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
        default: undefined,
      })
      .option('result-observability-logs-invocation-logs', {
        type: 'boolean',
        description:
          'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.',
      })
      .option('result-observability-logs-persist', {
        type: 'boolean',
        description: 'Whether log persistence is enabled for the Worker.',
        default: false,
      })
      .option('result-observability-traces-destinations', {
        type: 'string',
        description: 'A list of destinations where traces will be exported to.',
        default: undefined,
      })
      .option('result-observability-traces-enabled', {
        type: 'boolean',
        description: 'Whether traces are enabled for the Worker.',
        default: false,
      })
      .option('result-observability-traces-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
        default: undefined,
      })
      .option('result-observability-traces-persist', {
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
      }) as Argv<EnvironmentsSettingsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EnvironmentsSettingsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.serviceName as string | undefined, 'serviceName');
      validateResourceId(argv.environmentName as string | undefined, 'environmentName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers services environments-settings-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/services/${argv.serviceName ?? '<serviceName>'}/environments/${argv.environmentName ?? '<environmentName>'}/settings`,
          pathParams: {
            serviceName: String(argv.serviceName ?? ''),
            environmentName: String(argv.environmentName ?? ''),
          },
          body: {
            success: argv.success,
            resultLogpush: argv.resultLogpush,
            resultObservabilityEnabled: argv.resultObservabilityEnabled,
            resultObservabilityHeadSamplingRate: argv.resultObservabilityHeadSamplingRate,
            resultObservabilityLogsDestinations: argv.resultObservabilityLogsDestinations,
            resultObservabilityLogsEnabled: argv.resultObservabilityLogsEnabled,
            resultObservabilityLogsHeadSamplingRate: argv.resultObservabilityLogsHeadSamplingRate,
            resultObservabilityLogsInvocationLogs: argv.resultObservabilityLogsInvocationLogs,
            resultObservabilityLogsPersist: argv.resultObservabilityLogsPersist,
            resultObservabilityTracesDestinations: argv.resultObservabilityTracesDestinations,
            resultObservabilityTracesEnabled: argv.resultObservabilityTracesEnabled,
            resultObservabilityTracesHeadSamplingRate: argv.resultObservabilityTracesHeadSamplingRate,
            resultObservabilityTracesPersist: argv.resultObservabilityTracesPersist,
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
          `/accounts/${accountId}/workers/services/${argv.serviceName}/environments/${argv.environmentName}/settings`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.success !== undefined) setNestedValue(bodyData, ['success'], argv.success);
      if (argv.resultLogpush !== undefined) setNestedValue(bodyData, ['result', 'logpush'], argv.resultLogpush);
      if (argv.resultObservabilityEnabled !== undefined)
        setNestedValue(bodyData, ['result', 'observability', 'enabled'], argv.resultObservabilityEnabled);
      if (argv.resultObservabilityHeadSamplingRate !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'head_sampling_rate'],
          argv.resultObservabilityHeadSamplingRate,
        );
      if (argv.resultObservabilityLogsDestinations !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'logs', 'destinations'],
          argv.resultObservabilityLogsDestinations,
        );
      if (argv.resultObservabilityLogsEnabled !== undefined)
        setNestedValue(bodyData, ['result', 'observability', 'logs', 'enabled'], argv.resultObservabilityLogsEnabled);
      if (argv.resultObservabilityLogsHeadSamplingRate !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'logs', 'head_sampling_rate'],
          argv.resultObservabilityLogsHeadSamplingRate,
        );
      if (argv.resultObservabilityLogsInvocationLogs !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'logs', 'invocation_logs'],
          argv.resultObservabilityLogsInvocationLogs,
        );
      if (argv.resultObservabilityLogsPersist !== undefined)
        setNestedValue(bodyData, ['result', 'observability', 'logs', 'persist'], argv.resultObservabilityLogsPersist);
      if (argv.resultObservabilityTracesDestinations !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'traces', 'destinations'],
          argv.resultObservabilityTracesDestinations,
        );
      if (argv.resultObservabilityTracesEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'traces', 'enabled'],
          argv.resultObservabilityTracesEnabled,
        );
      if (argv.resultObservabilityTracesHeadSamplingRate !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'traces', 'head_sampling_rate'],
          argv.resultObservabilityTracesHeadSamplingRate,
        );
      if (argv.resultObservabilityTracesPersist !== undefined)
        setNestedValue(
          bodyData,
          ['result', 'observability', 'traces', 'persist'],
          argv.resultObservabilityTracesPersist,
        );
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/workers/services/${argv.serviceName}/environments/${argv.environmentName}/settings`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
