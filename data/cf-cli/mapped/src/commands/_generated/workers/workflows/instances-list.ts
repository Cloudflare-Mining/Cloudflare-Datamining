/**
 * instances-list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface InstancesListArgs {
  workflowName: string;
  page?: number;
  'per-page'?: number;
  cursor?: string;
  direction?: string;
  status?: string;
  'date-start'?: string;
  'date-end'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InstancesListArgs> = {
  command: 'instances-list <workflowName>',
  describe: 'Lists all instances of a workflow with their execution status.',

  builder: (yargs: Argv): Argv<InstancesListArgs> => {
    return yargs
      .positional('workflowName', {
        type: 'string',
        description: 'Workflow name',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: '\`page\` and \`cursor\` are mutually exclusive, use one or the other.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Per page',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description: '\`page\` and \`cursor\` are mutually exclusive, use one or the other.',
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'should only be used when \`cursor\` is used, defines a new direction for the cursor',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Status',
        choices: [
          'queued',
          'running',
          'paused',
          'errored',
          'terminated',
          'complete',
          'waitingForPause',
          'waiting',
        ] as const,
        default: undefined,
      })
      .option('date-start', {
        type: 'string',
        description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',
        default: undefined,
      })
      .option('date-end', {
        type: 'string',
        description: 'Accepts ISO 8601 with no timezone offsets and in UTC.',
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
      }) as Argv<InstancesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workflowName as string | undefined, 'workflowName');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.dateStart !== undefined) params['date_start'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['date_end'] = argv.dateEnd;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.workflows.instancesList(
        argv.workflowName,
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
