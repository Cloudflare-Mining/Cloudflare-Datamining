/**
 * get command
 * @generated from apis/resource-tagging/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetArgs {
  'resource-id': string;
  'resource-type': string;
  'worker-id'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get',
  describe: 'Retrieves tags for a specific account-level resource.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .option('resource-id', {
        type: 'string',
        description: 'The ID of the resource to retrieve tags for.',
      })
      .option('resource-type', {
        type: 'string',
        description: 'The type of the resource.',
        choices: [
          'access_application',
          'access_group',
          'account',
          'ai_gateway',
          'alerting_policy',
          'alerting_webhook',
          'cloudflared_tunnel',
          'd1_database',
          'durable_object_namespace',
          'gateway_list',
          'gateway_rule',
          'image',
          'kv_namespace',
          'load_balancer_monitor',
          'load_balancer_pool',
          'queue',
          'r2_bucket',
          'resource_share',
          'stream_live_input',
          'stream_video',
          'worker',
          'worker_version',
        ] as const,
      })
      .option('worker-id', {
        type: 'string',
        description: 'Worker identifier. Required for worker_version resources.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.resourceId !== undefined) params['resource_id'] = argv.resourceId;
      if (argv.resourceType !== undefined) params['resource_type'] = argv.resourceType;
      if (argv.workerId !== undefined) params['worker_id'] = argv.workerId;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.resourceTagging.accounttags.get(
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
