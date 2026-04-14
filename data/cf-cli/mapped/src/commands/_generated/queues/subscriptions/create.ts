/**
 * create command
 * @generated from apis/queues/schema.ts
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

interface CreateArgs {
  'destination-queue-id': string;
  'destination-type': string;
  enabled?: boolean;
  events?: string;
  name?: string;
  'source-type'?: string;
  'source-model-name'?: string;
  'source-worker-name'?: string;
  'source-workflow-name'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new event subscription for a queue',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('destination-queue-id', {
        type: 'string',
        description: 'ID of the target queue',
      })
      .option('destination-type', {
        type: 'string',
        description: 'Type of destination',
        choices: ['queues.queue'] as const,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether the subscription is active',
        default: false,
      })
      .option('events', {
        type: 'string',
        description: 'List of event types this subscription handles',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Name of the subscription',
        default: undefined,
      })
      .option('source-type', {
        type: 'string',
        description: 'Type of source',
        choices: ['images'] as const,
        default: undefined,
      })
      .option('source-model-name', {
        type: 'string',
        description: 'Name of the Workers AI model',
        default: undefined,
      })
      .option('source-worker-name', {
        type: 'string',
        description: 'Name of the worker',
        default: undefined,
      })
      .option('source-workflow-name', {
        type: 'string',
        description: 'Name of the workflow',
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
      .conflicts('source-model-name', ['sourceWorkerName', 'sourceWorkflowName'])
      .conflicts('source-worker-name', ['sourceModelName', 'sourceWorkflowName'])
      .conflicts('source-workflow-name', ['sourceModelName', 'sourceWorkerName'])
      .choices('destination-type', ['queues.queue'] as const)
      .choices('source-type', ['images'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf queues subscriptions create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/event_subscriptions/subscriptions`,
          pathParams: {},
          body: {
            destinationQueueId: argv.destinationQueueId,
            destinationType: argv.destinationType,
            enabled: argv.enabled,
            events: argv.events,
            name: argv.name,
            sourceType: argv.sourceType,
            sourceModelName: argv.sourceModelName,
            sourceWorkerName: argv.sourceWorkerName,
            sourceWorkflowName: argv.sourceWorkflowName,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/event_subscriptions/subscriptions`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationQueueId !== undefined)
        setNestedValue(bodyData, ['destination', 'queue_id'], argv.destinationQueueId);
      if (argv.destinationType !== undefined) setNestedValue(bodyData, ['destination', 'type'], argv.destinationType);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.events !== undefined) setNestedValue(bodyData, ['events'], argv.events);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.sourceType !== undefined) setNestedValue(bodyData, ['source', 'type'], argv.sourceType);
      if (argv.sourceModelName !== undefined) setNestedValue(bodyData, ['source', 'model_name'], argv.sourceModelName);
      if (argv.sourceWorkerName !== undefined)
        setNestedValue(bodyData, ['source', 'worker_name'], argv.sourceWorkerName);
      if (argv.sourceWorkflowName !== undefined)
        setNestedValue(bodyData, ['source', 'workflow_name'], argv.sourceWorkflowName);
      const result = await client.post<unknown>(`/accounts/${accountId}/event_subscriptions/subscriptions`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
