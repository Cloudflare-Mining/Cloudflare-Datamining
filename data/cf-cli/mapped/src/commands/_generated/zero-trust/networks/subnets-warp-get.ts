/**
 * subnets-warp-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SubnetsWarpGetArgs {
  subnetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SubnetsWarpGetArgs> = {
  command: 'subnets-warp-get <subnetId>',
  describe: 'Get a WARP IP assignment subnet.',

  builder: (yargs: Argv): Argv<SubnetsWarpGetArgs> => {
    return yargs
      .positional('subnetId', {
        type: 'string',
        description: 'The UUID of the subnet.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<SubnetsWarpGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubnetsWarpGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.subnetId as string | undefined, 'subnetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.subnetsWarpGet(accountId, argv.subnetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
