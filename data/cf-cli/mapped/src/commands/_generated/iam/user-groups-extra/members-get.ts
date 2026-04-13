/**
 * members-get command
 * @generated from apis/iam/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MembersGetArgs {
  userGroupId: string;
  memberId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MembersGetArgs> = {
  command: 'members-get <userGroupId> <memberId>',
  describe: 'Get details of a specific member in a user group.',

  builder: (yargs: Argv): Argv<MembersGetArgs> => {
    return yargs
      .positional('userGroupId', {
        type: 'string',
        description: 'User Group identifier tag.',
        demandOption: true,
      })
      .positional('memberId', {
        type: 'string',
        description: 'The identifier of an existing account Member.',
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
      }) as Argv<MembersGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MembersGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userGroupId as string | undefined, 'userGroupId');
      validateResourceId(argv.memberId as string | undefined, 'memberId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.iam.usergroupsextra.membersGet(accountId, argv.userGroupId, argv.memberId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
