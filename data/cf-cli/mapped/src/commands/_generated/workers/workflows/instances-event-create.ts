/**
 * instances-event-create command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface InstancesEventCreateArgs {
  workflowName: string;
  instanceId: string;
  eventType: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, InstancesEventCreateArgs> = {
  command: 'instances-event-create <workflowName> <instanceId> <eventType>',
  describe: 'Sends an event to a running workflow instance to trigger state transitions.',

  builder: (yargs: Argv): Argv<InstancesEventCreateArgs> => {
    return yargs
      .positional('workflowName', {
        type: 'string',
        description: 'Workflow name',
        demandOption: true,
      })
      .positional('instanceId', {
        type: 'string',
        description: 'Instance ID',
        demandOption: true,
      })
      .positional('eventType', {
        type: 'string',
        description: 'Event type',
        demandOption: true,
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
      }) as Argv<InstancesEventCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesEventCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workflowName as string | undefined, 'workflowName');
      validateResourceId(argv.instanceId as string | undefined, 'instanceId');
      validateResourceId(argv.eventType as string | undefined, 'eventType');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers workflows instances-event-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workflows/${argv.workflowName ?? '<workflowName>'}/instances/${argv.instanceId ?? '<instanceId>'}/events/${argv.eventType ?? '<eventType>'}`,
          pathParams: {
            workflowName: String(argv.workflowName ?? ''),
            instanceId: String(argv.instanceId ?? ''),
            eventType: String(argv.eventType ?? ''),
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/workflows/${argv.workflowName}/instances/${argv.instanceId}/events/${argv.eventType}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.workers.workflows.instancesEventCreate(
        argv.workflowName,
        argv.instanceId,
        argv.eventType,
        accountId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
