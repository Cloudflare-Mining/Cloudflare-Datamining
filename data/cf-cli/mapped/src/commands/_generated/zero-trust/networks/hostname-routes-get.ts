/**
 * hostname-routes-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface HostnameRoutesGetArgs {
  hostnameRouteId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, HostnameRoutesGetArgs> = {
  command: 'hostname-routes-get <hostnameRouteId>',
  describe: 'Get a hostname route.',

  builder: (yargs: Argv): Argv<HostnameRoutesGetArgs> => {
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
      }) as Argv<HostnameRoutesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HostnameRoutesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.hostnameRouteId as string | undefined, 'hostnameRouteId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.hostnameRoutesGet(accountId, argv.hostnameRouteId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
