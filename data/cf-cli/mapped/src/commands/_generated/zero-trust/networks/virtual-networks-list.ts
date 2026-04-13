/**
 * virtual-networks-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface VirtualNetworksListArgs {
  id?: string;
  name?: string;
  'is-default'?: boolean;
  'is-default-network'?: boolean;
  'is-deleted'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, VirtualNetworksListArgs> = {
  command: 'virtual-networks-list',
  describe: 'Lists and filters virtual networks in an account.',

  builder: (yargs: Argv): Argv<VirtualNetworksListArgs> => {
    return yargs
      .option('id', {
        type: 'string',
        description: 'UUID of the virtual network.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
        default: undefined,
      })
      .option('is-default', {
        type: 'boolean',
        description:
          'If \`true\`, only include the default virtual network. If \`false\`, exclude the default virtual network. If empty, all virtual networks will be included.',
        default: false,
      })
      .option('is-default-network', {
        type: 'boolean',
        description:
          'If \`true\`, only include the default virtual network. If \`false\`, exclude the default virtual network. If empty, all virtual networks will be included.',
        default: false,
      })
      .option('is-deleted', {
        type: 'boolean',
        description:
          'If \`true\`, only include deleted virtual networks. If \`false\`, exclude deleted virtual networks. If empty, all virtual networks will be included.',
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
      }) as Argv<VirtualNetworksListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VirtualNetworksListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.isDefault !== undefined) params['is_default'] = argv.isDefault;
      if (argv.isDefaultNetwork !== undefined) params['is_default_network'] = argv.isDefaultNetwork;
      if (argv.isDeleted !== undefined) params['is_deleted'] = argv.isDeleted;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.virtualNetworksList(
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
