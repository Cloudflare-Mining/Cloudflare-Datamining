/**
 * override-codes-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface OverrideCodesGetArgs {
  registrationId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, OverrideCodesGetArgs> = {
  command: 'override-codes-get <registrationId>',
  describe:
    'Fetches one-time use admin override codes for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.',

  builder: (yargs: Argv): Argv<OverrideCodesGetArgs> => {
    return yargs
      .positional('registrationId', {
        type: 'string',
        description: 'Registration ID',
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
      }) as Argv<OverrideCodesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OverrideCodesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.registrationId as string | undefined, 'registrationId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.overrideCodesGet(accountId, argv.registrationId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
