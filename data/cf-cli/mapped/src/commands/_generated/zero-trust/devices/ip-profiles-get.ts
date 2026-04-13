/**
 * ip-profiles-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface IPProfilesGetArgs {
  profileId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IPProfilesGetArgs> = {
  command: 'ip-profiles-get <profileId>',
  describe: 'Fetches a single WARP Device IP profile.',

  builder: (yargs: Argv): Argv<IPProfilesGetArgs> => {
    return yargs
      .positional('profileId', {
        type: 'string',
        description: 'Profile ID',
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
      }) as Argv<IPProfilesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IPProfilesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.profileId as string | undefined, 'profileId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.ipProfilesGet(accountId, argv.profileId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
