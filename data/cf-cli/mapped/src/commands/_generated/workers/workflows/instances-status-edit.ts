/**
 * instances-status-edit command
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

interface InstancesStatusEditArgs {
  workflowName: string;
  instanceId: string;
  status: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, InstancesStatusEditArgs> = {
  command: 'instances-status-edit <workflowName> <instanceId>',
  describe: 'Changes the execution status of a workflow instance (e.g., pause, resume, terminate).',

  builder: (yargs: Argv): Argv<InstancesStatusEditArgs> => {
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
      .option('status', {
        type: 'string',
        description: 'Apply action to instance.',
        choices: ['resume', 'pause', 'terminate', 'restart'] as const,
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
      .choices('status', ['resume', 'pause', 'terminate', 'restart'] as const) as Argv<InstancesStatusEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesStatusEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workflowName as string | undefined, 'workflowName');
      validateResourceId(argv.instanceId as string | undefined, 'instanceId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers workflows instances-status-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workflows/${argv.workflowName ?? '<workflowName>'}/instances/${argv.instanceId ?? '<instanceId>'}/status`,
          pathParams: { workflowName: String(argv.workflowName ?? ''), instanceId: String(argv.instanceId ?? '') },
          body: { status: argv.status },
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
          `/accounts/${accountId}/workflows/${argv.workflowName}/instances/${argv.instanceId}/status`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.status !== undefined) setNestedValue(bodyData, ['status'], argv.status);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/workflows/${argv.workflowName}/instances/${argv.instanceId}/status`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
