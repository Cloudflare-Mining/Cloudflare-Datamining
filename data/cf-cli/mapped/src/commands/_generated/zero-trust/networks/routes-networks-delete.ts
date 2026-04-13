/**
 * routes-networks-delete command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface RoutesNetworksDeleteArgs {
  ipNetworkEncoded: string;
  'virtual-network-id'?: string;
  'tun-type'?: string;
  'tunnel-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesNetworksDeleteArgs> = {
  command: 'routes-networks-delete <ipNetworkEncoded>',
  describe:
    'Deletes a private network route from an account. The CIDR in \`ip_network_encoded\` must be written in URL-encoded format. If no virtual_network_id is provided it will delete the route from the default vnet. If no tun_type is provided it will fetch the type from the tunnel_id or if that is missing it will assume Cloudflare Tunnel as default. If tunnel_id is provided it will delete the route from that tunnel, otherwise it will delete the route based on the vnet and tun_type.',

  builder: (yargs: Argv): Argv<RoutesNetworksDeleteArgs> => {
    return yargs
      .positional('ipNetworkEncoded', {
        type: 'string',
        description: 'IP/CIDR range in URL-encoded format',
        demandOption: true,
      })
      .option('virtual-network-id', {
        type: 'string',
        description: 'UUID of the virtual network.',
        default: undefined,
      })
      .option('tun-type', {
        type: 'string',
        description: 'The type of tunnel.',
        choices: ['cfd_tunnel', 'warp_connector', 'warp', 'magic', 'ip_sec', 'gre', 'cni'] as const,
        default: undefined,
      })
      .option('tunnel-id', {
        type: 'string',
        description: 'UUID of the tunnel.',
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
      }) as Argv<RoutesNetworksDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesNetworksDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ipNetworkEncoded as string | undefined, 'ipNetworkEncoded');

      const params: Record<string, unknown> = {};
      if (argv.virtualNetworkId !== undefined) params['virtual_network_id'] = argv.virtualNetworkId;
      if (argv.tunType !== undefined) params['tun_type'] = argv.tunType;
      if (argv.tunnelId !== undefined) params['tunnel_id'] = argv.tunnelId;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks routes-networks-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/teamnet/routes/network/${argv.ipNetworkEncoded ?? '<ipNetworkEncoded>'}`,
          pathParams: { ipNetworkEncoded: String(argv.ipNetworkEncoded ?? '') },
          body: { ...params },
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

      const result = await client.zeroTrust.networks.routesNetworksDelete(
        argv.ipNetworkEncoded,
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
