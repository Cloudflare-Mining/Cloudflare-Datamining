/**
 * instances-get command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface InstancesGetArgs {
  workflowName: string;
  instanceId: string;
  simple?: string;
  order?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InstancesGetArgs> = {
  command: 'instances-get <workflowName> <instanceId>',
  describe: 'Retrieves logs and execution status for a specific workflow instance.',

  builder: (yargs: Argv): Argv<InstancesGetArgs> => {
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
      .option('simple', {
        type: 'string',
        description: 'When true, omits step details and returns only metadata with step_count.',
        choices: ['true', 'false'] as const,
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Step ordering: "asc" (default, oldest first) or "desc" (newest first).',
        choices: ['asc', 'desc'] as const,
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
      }) as Argv<InstancesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workflowName as string | undefined, 'workflowName');
      validateResourceId(argv.instanceId as string | undefined, 'instanceId');

      const params: Record<string, unknown> = {};
      if (argv.simple !== undefined) params['simple'] = argv.simple;
      if (argv.order !== undefined) params['order'] = argv.order;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.workflows.instancesGet(
        argv.workflowName,
        argv.instanceId,
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
