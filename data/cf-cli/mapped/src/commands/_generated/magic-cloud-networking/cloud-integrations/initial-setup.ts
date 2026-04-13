/**
 * initial-setup command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface InitialSetupArgs {
  providerId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InitialSetupArgs> = {
  command: 'initial-setup <providerId>',
  describe: 'Get initial configuration to complete Cloud Integration setup (Closed Beta).',

  builder: (yargs: Argv): Argv<InitialSetupArgs> => {
    return yargs
      .positional('providerId', {
        type: 'string',
        description: 'Provider ID',
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
      }) as Argv<InitialSetupArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InitialSetupArgs>): Promise<void> => {
    try {
      validateResourceId(argv.providerId as string | undefined, 'providerId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicCloudNetworking.cloudintegrations.initialSetup(accountId, argv.providerId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
