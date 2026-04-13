/**
 * services-get command
 * @generated from apis/connectivity/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ServicesGetArgs {
  serviceId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ServicesGetArgs> = {
  command: 'services-get <serviceId>',
  describe: 'Retrieves details for a specific connectivity service entry.',

  builder: (yargs: Argv): Argv<ServicesGetArgs> => {
    return yargs
      .positional('serviceId', {
        type: 'string',
        description: 'Service ID',
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
      }) as Argv<ServicesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServicesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.serviceId as string | undefined, 'serviceId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.connectivity.directory.servicesGet(accountId, argv.serviceId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
