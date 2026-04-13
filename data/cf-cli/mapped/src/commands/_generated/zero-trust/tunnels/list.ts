/**
 * list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  name?: string;
  'is-deleted'?: boolean;
  'existed-at'?: string;
  uuid?: string;
  'was-active-at'?: string;
  'was-inactive-at'?: string;
  'include-prefix'?: string;
  'exclude-prefix'?: string;
  'tun-types'?: string;
  status?: string;
  'per-page'?: string;
  page?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists and filters all types of Tunnels in an account.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the tunnel.',
        default: undefined,
      })
      .option('is-deleted', {
        type: 'boolean',
        description:
          'If \`true\`, only include deleted tunnels. If \`false\`, exclude deleted tunnels. If empty, all tunnels will be included.',
        default: false,
      })
      .option('existed-at', {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
        default: undefined,
      })
      .option('uuid', {
        type: 'string',
        description: 'UUID of the tunnel.',
        default: undefined,
      })
      .option('was-active-at', {
        type: 'string',
        description: 'Was active at',
        default: undefined,
      })
      .option('was-inactive-at', {
        type: 'string',
        description: 'Was inactive at',
        default: undefined,
      })
      .option('include-prefix', {
        type: 'string',
        description: 'Include prefix',
        default: undefined,
      })
      .option('exclude-prefix', {
        type: 'string',
        description: 'Exclude prefix',
        default: undefined,
      })
      .option('tun-types', {
        type: 'string',
        description: 'The types of tunnels to filter by, separated by commas.',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description:
          'The status of the tunnel. Valid values are \`inactive\` (tunnel has never been run), \`degraded\` (tunnel is active and able to serve traffic but in an unhealthy state), \`healthy\` (tunnel is active and able to serve traffic), or \`down\` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).',
        choices: ['inactive', 'degraded', 'healthy', 'down'] as const,
        default: undefined,
      })
      .option('per-page', {
        type: 'string',
        description: 'Number of results to display.',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Page number of paginated results.',
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
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.isDeleted !== undefined) params['is_deleted'] = argv.isDeleted;
      if (argv.existedAt !== undefined) params['existed_at'] = argv.existedAt;
      if (argv.uuid !== undefined) params['uuid'] = argv.uuid;
      if (argv.wasActiveAt !== undefined) params['was_active_at'] = argv.wasActiveAt;
      if (argv.wasInactiveAt !== undefined) params['was_inactive_at'] = argv.wasInactiveAt;
      if (argv.includePrefix !== undefined) params['include_prefix'] = argv.includePrefix;
      if (argv.excludePrefix !== undefined) params['exclude_prefix'] = argv.excludePrefix;
      if (argv.tunTypes !== undefined) params['tun_types'] = argv.tunTypes;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.tunnels.list(
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
