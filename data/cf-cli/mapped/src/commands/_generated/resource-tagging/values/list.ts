/**
 * list command
 * @generated from apis/resource-tagging/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  tagKey: string;
  type?: string;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <tagKey>',
  describe: 'Lists all distinct values for a given tag key, optionally filtered by resource type.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('tagKey', {
        type: 'string',
        description: 'The tag key to retrieve values for.',
        demandOption: true,
      })
      .option('type', {
        type: 'string',
        description: 'Filter by resource type.',
        choices: [
          'access_application',
          'access_application_policy',
          'access_group',
          'account',
          'ai_gateway',
          'alerting_policy',
          'alerting_webhook',
          'api_gateway_operation',
          'cloudflared_tunnel',
          'custom_certificate',
          'custom_hostname',
          'd1_database',
          'dns_record',
          'durable_object_namespace',
          'gateway_list',
          'gateway_rule',
          'image',
          'kv_namespace',
          'load_balancer',
          'load_balancer_monitor',
          'load_balancer_pool',
          'managed_client_certificate',
          'queue',
          'r2_bucket',
          'resource_share',
          'stream_live_input',
          'stream_video',
          'worker',
          'worker_version',
          'zone',
        ] as const,
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description: 'Cursor for pagination.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tagKey as string | undefined, 'tagKey');

      const params: Record<string, unknown> = {};
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.resourceTagging.values.list(
        accountId,
        argv.tagKey,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
