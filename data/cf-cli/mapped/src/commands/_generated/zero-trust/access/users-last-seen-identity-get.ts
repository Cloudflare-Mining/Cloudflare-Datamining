/**
 * users-last-seen-identity-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface UsersLastSeenIdentityGetArgs {
  userId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, UsersLastSeenIdentityGetArgs> = {
  command: 'users-last-seen-identity-get <userId>',
  describe: 'Get last seen identity for a single user.',

  builder: (yargs: Argv): Argv<UsersLastSeenIdentityGetArgs> => {
    return yargs
      .positional('userId', {
        type: 'string',
        description: 'UUID.',
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
      }) as Argv<UsersLastSeenIdentityGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UsersLastSeenIdentityGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userId as string | undefined, 'userId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.usersLastSeenIdentityGet(argv.userId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
