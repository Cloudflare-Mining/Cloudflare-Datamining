/**
 * users-active-sessions-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface UsersActiveSessionsGetArgs {
  userId: string;
  nonce: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, UsersActiveSessionsGetArgs> = {
  command: 'users-active-sessions-get <userId> <nonce>',
  describe: 'Get an active session for a single user.',

  builder: (yargs: Argv): Argv<UsersActiveSessionsGetArgs> => {
    return yargs
      .positional('userId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('nonce', {
        type: 'string',
        description: 'Nonce',
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
      }) as Argv<UsersActiveSessionsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UsersActiveSessionsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userId as string | undefined, 'userId');
      validateResourceId(argv.nonce as string | undefined, 'nonce');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.usersActiveSessionsGet(argv.userId, accountId, argv.nonce);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
