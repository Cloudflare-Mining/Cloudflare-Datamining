/**
 * routes-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RoutesListArgs {
  comment?: string;
  'is-deleted'?: boolean;
  'network-subset'?: string;
  'network-superset'?: string;
  'existed-at'?: string;
  'tunnel-id'?: string;
  'route-id'?: string;
  'tun-types'?: string;
  'virtual-network-id'?: string;
  'per-page'?: string;
  page?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesListArgs> = {
  command: 'routes-list',
  describe: 'Lists and filters private network routes in an account.',

  builder: (yargs: Argv): Argv<RoutesListArgs> => {
    return yargs
      .option('comment', {
        type: 'string',
        description: 'Optional remark describing the route.',
        default: undefined,
      })
      .option('is-deleted', {
        type: 'boolean',
        description:
          'If \`true\`, only include deleted routes. If \`false\`, exclude deleted routes. If empty, all routes will be included.',
        default: false,
      })
      .option('network-subset', {
        type: 'string',
        description: 'If set, only list routes that are contained within this IP range.',
        default: undefined,
      })
      .option('network-superset', {
        type: 'string',
        description: 'If set, only list routes that contain this IP range.',
        default: undefined,
      })
      .option('existed-at', {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
        default: undefined,
      })
      .option('tunnel-id', {
        type: 'string',
        description: 'UUID of the tunnel.',
        default: undefined,
      })
      .option('route-id', {
        type: 'string',
        description: 'UUID of the route.',
        default: undefined,
      })
      .option('tun-types', {
        type: 'string',
        description: 'The types of tunnels to filter by, separated by commas.',
        default: undefined,
      })
      .option('virtual-network-id', {
        type: 'string',
        description: 'UUID of the virtual network.',
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
      }) as Argv<RoutesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.comment !== undefined) params['comment'] = argv.comment;
      if (argv.isDeleted !== undefined) params['is_deleted'] = argv.isDeleted;
      if (argv.networkSubset !== undefined) params['network_subset'] = argv.networkSubset;
      if (argv.networkSuperset !== undefined) params['network_superset'] = argv.networkSuperset;
      if (argv.existedAt !== undefined) params['existed_at'] = argv.existedAt;
      if (argv.tunnelId !== undefined) params['tunnel_id'] = argv.tunnelId;
      if (argv.routeId !== undefined) params['route_id'] = argv.routeId;
      if (argv.tunTypes !== undefined) params['tun_types'] = argv.tunTypes;
      if (argv.virtualNetworkId !== undefined) params['virtual_network_id'] = argv.virtualNetworkId;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.routesList(
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
