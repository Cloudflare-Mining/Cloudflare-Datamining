/**
 * virtual-networks-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface VirtualNetworksGetArgs {
  virtualNetworkId: string;
  comment?: string;
  'is-default-network'?: boolean;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, VirtualNetworksGetArgs> = {
  command: 'virtual-networks-get <virtualNetworkId>',
  describe: 'Get a virtual network.',

  builder: (yargs: Argv): Argv<VirtualNetworksGetArgs> => {
    return yargs
      .positional('virtualNetworkId', {
        type: 'string',
        description: 'UUID of the virtual network.',
        demandOption: true,
      })
      .option('comment', {
        type: 'string',
        description: 'Optional remark describing the virtual network.',
        default: undefined,
      })
      .option('is-default-network', {
        type: 'boolean',
        description: 'If \`true\`, this virtual network is the default for the account.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
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
      }) as Argv<VirtualNetworksGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VirtualNetworksGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.virtualNetworkId as string | undefined, 'virtualNetworkId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.virtualNetworksGet(accountId, argv.virtualNetworkId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
