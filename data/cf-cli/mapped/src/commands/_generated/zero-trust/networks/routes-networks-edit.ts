/**
 * routes-networks-edit command
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

interface RoutesNetworksEditArgs {
  ipNetworkEncoded: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesNetworksEditArgs> = {
  command: 'routes-networks-edit <ipNetworkEncoded>',
  describe:
    'Updates an existing private network route in an account. The CIDR in \`ip_network_encoded\` must be written in URL-encoded format.',

  builder: (yargs: Argv): Argv<RoutesNetworksEditArgs> => {
    return yargs
      .positional('ipNetworkEncoded', {
        type: 'string',
        description: 'IP/CIDR range in URL-encoded format',
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
      }) as Argv<RoutesNetworksEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesNetworksEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ipNetworkEncoded as string | undefined, 'ipNetworkEncoded');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks routes-networks-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/teamnet/routes/network/${argv.ipNetworkEncoded ?? '<ipNetworkEncoded>'}`,
          pathParams: { ipNetworkEncoded: String(argv.ipNetworkEncoded ?? '') },
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

      const result = await client.zeroTrust.networks.routesNetworksEdit(argv.ipNetworkEncoded, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
