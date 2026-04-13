/**
 * workers-update command
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

interface WorkersUpdateArgs {
  workerId: string;
  logpush: boolean;
  name: string;
  'observability-enabled'?: boolean;
  'observability-head-sampling-rate'?: number;
  'observability-logs-destinations'?: string;
  'observability-logs-enabled'?: boolean;
  'observability-logs-head-sampling-rate'?: number;
  'observability-logs-invocation-logs'?: boolean;
  'observability-logs-persist'?: boolean;
  'observability-traces-destinations'?: string;
  'observability-traces-enabled'?: boolean;
  'observability-traces-head-sampling-rate'?: number;
  'observability-traces-persist'?: boolean;
  'subdomain-enabled'?: boolean;
  'subdomain-previews-enabled'?: boolean;
  tags: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, WorkersUpdateArgs> = {
  command: 'workers-update <workerId>',
  describe:
    'Perform a complete replacement of a Worker, where omitted properties are set to their default values. This is the exact same as the Create Worker endpoint, but operates on an existing Worker. To perform a partial update instead, use the Edit Worker endpoint.',

  builder: (yargs: Argv): Argv<WorkersUpdateArgs> => {
    return yargs
      .positional('workerId', {
        type: 'string',
        description: 'Identifier for the Worker, which can be ID or name.',
        demandOption: true,
      })
      .option('logpush', {
        type: 'boolean',
        description: 'Whether logpush is enabled for the Worker.',
      })
      .option('name', {
        type: 'string',
        description: 'Name of the Worker.',
      })
      .option('observability-enabled', {
        type: 'boolean',
        description: 'Whether observability is enabled for the Worker.',
        default: false,
      })
      .option('observability-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).',
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
        default: false,
      })
      .option('observability-logs-head-sampling-rate', {
        type: 'number',
        description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).',
        default: undefined,
      })
      .option('observability-logs-invocation-logs', {
        type: 'boolean',
        description:
          'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.',
        default: false,
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
        description: 'The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).',
        default: undefined,
      })
      .option('observability-traces-persist', {
        type: 'boolean',
        description: 'Whether trace persistence is enabled for the Worker.',
        default: false,
      })
      .option('subdomain-enabled', {
        type: 'boolean',
        description: 'Whether the *.workers.dev subdomain is enabled for the Worker.',
        default: false,
      })
      .option('subdomain-previews-enabled', {
        type: 'boolean',
        description:
          'Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.',
        default: false,
      })
      .option('tags', {
        type: 'string',
        description: 'Tags associated with the Worker.',
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
      }) as Argv<WorkersUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WorkersUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workerId as string | undefined, 'workerId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers beta workers-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/workers/${argv.workerId ?? '<workerId>'}`,
          pathParams: { workerId: String(argv.workerId ?? '') },
          body: {
            logpush: argv.logpush,
            name: argv.name,
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
            subdomainEnabled: argv.subdomainEnabled,
            subdomainPreviewsEnabled: argv.subdomainPreviewsEnabled,
            tags: argv.tags,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/workers/workers/${argv.workerId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.logpush !== undefined) setNestedValue(bodyData, ['logpush'], argv.logpush);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
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
      if (argv.subdomainEnabled !== undefined)
        setNestedValue(bodyData, ['subdomain', 'enabled'], argv.subdomainEnabled);
      if (argv.subdomainPreviewsEnabled !== undefined)
        setNestedValue(bodyData, ['subdomain', 'previews_enabled'], argv.subdomainPreviewsEnabled);
      if (argv.tags !== undefined) setNestedValue(bodyData, ['tags'], argv.tags);
      const result = await client.put<unknown>(`/accounts/${accountId}/workers/workers/${argv.workerId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
