/**
 * users-active-sessions-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface UsersActiveSessionsListArgs {
  userId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, UsersActiveSessionsListArgs> = {
  command: 'users-active-sessions-list <userId>',
  describe: 'Get active sessions for a single user.',

  builder: (yargs: Argv): Argv<UsersActiveSessionsListArgs> => {
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
      }) as Argv<UsersActiveSessionsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UsersActiveSessionsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userId as string | undefined, 'userId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.usersActiveSessionsList(argv.userId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
