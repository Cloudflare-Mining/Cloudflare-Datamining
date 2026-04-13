/**
 * locations-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface LocationsGetArgs {
  locationId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LocationsGetArgs> = {
  command: 'locations-get <locationId>',
  describe: 'Get a single Zero Trust Gateway location.',

  builder: (yargs: Argv): Argv<LocationsGetArgs> => {
    return yargs
      .positional('locationId', {
        type: 'string',
        description: 'Location ID',
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
      }) as Argv<LocationsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LocationsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.locationId as string | undefined, 'locationId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.gateway.locationsGet(argv.locationId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
