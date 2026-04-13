/**
 * services-delete command
 * @generated from apis/connectivity/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ServicesDeleteArgs {
  serviceId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ServicesDeleteArgs> = {
  command: 'services-delete <serviceId>',
  describe: 'Removes a connectivity service entry from the directory.',

  builder: (yargs: Argv): Argv<ServicesDeleteArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<ServicesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServicesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.serviceId as string | undefined, 'serviceId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf connectivity directory services-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/connectivity/directory/services/${argv.serviceId ?? '<serviceId>'}`,
          pathParams: { serviceId: String(argv.serviceId ?? '') },
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

      const result = await client.connectivity.directory.servicesDelete(accountId, argv.serviceId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
