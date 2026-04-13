/**
 * hostname-routes-delete command
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

interface HostnameRoutesDeleteArgs {
  hostnameRouteId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, HostnameRoutesDeleteArgs> = {
  command: 'hostname-routes-delete <hostnameRouteId>',
  describe: 'Delete a hostname route.',

  builder: (yargs: Argv): Argv<HostnameRoutesDeleteArgs> => {
    return yargs
      .positional('hostnameRouteId', {
        type: 'string',
        description: 'The hostname route ID.',
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
      }) as Argv<HostnameRoutesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HostnameRoutesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.hostnameRouteId as string | undefined, 'hostnameRouteId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks hostname-routes-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/routes/hostname/${argv.hostnameRouteId ?? '<hostnameRouteId>'}`,
          pathParams: { hostnameRouteId: String(argv.hostnameRouteId ?? '') },
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

      const result = await client.zeroTrust.networks.hostnameRoutesDelete(accountId, argv.hostnameRouteId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
