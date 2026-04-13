/**
 * routes-ips-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface RoutesIpsGetArgs {
  ip: string;
  'virtual-network-id'?: string;
  'default-virtual-network-fallback'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesIpsGetArgs> = {
  command: 'routes-ips-get <ip>',
  describe: 'Fetches routes that contain the given IP address.',

  builder: (yargs: Argv): Argv<RoutesIpsGetArgs> => {
    return yargs
      .positional('ip', {
        type: 'string',
        description: 'Ip',
        demandOption: true,
      })
      .option('virtual-network-id', {
        type: 'string',
        description: 'UUID of the virtual network.',
        default: undefined,
      })
      .option('default-virtual-network-fallback', {
        type: 'boolean',
        description:
          'When the virtual_network_id parameter is not provided the request filter will default search routes that are in the default virtual network for the account. If this parameter is set to false, the search will include routes that do not have a virtual network.',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<RoutesIpsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesIpsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ip as string | undefined, 'ip');

      const params: Record<string, unknown> = {};
      if (argv.virtualNetworkId !== undefined) params['virtual_network_id'] = argv.virtualNetworkId;
      if (argv.defaultVirtualNetworkFallback !== undefined)
        params['default_virtual_network_fallback'] = argv.defaultVirtualNetworkFallback;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.routesIpsGet(
        argv.ip,
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
