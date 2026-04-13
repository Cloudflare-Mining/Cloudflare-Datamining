/**
 * subnets-warp-delete command
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

interface SubnetsWarpDeleteArgs {
  subnetId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SubnetsWarpDeleteArgs> = {
  command: 'subnets-warp-delete <subnetId>',
  describe:
    'Delete a WARP IP assignment subnet. This operation is idempotent - deleting an already-deleted or non-existent subnet will return success with a null result.',

  builder: (yargs: Argv): Argv<SubnetsWarpDeleteArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<SubnetsWarpDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubnetsWarpDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.subnetId as string | undefined, 'subnetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks subnets-warp-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/subnets/warp/${argv.subnetId ?? '<subnetId>'}`,
          pathParams: { subnetId: String(argv.subnetId ?? '') },
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

      const result = await client.zeroTrust.networks.subnetsWarpDelete(accountId, argv.subnetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
