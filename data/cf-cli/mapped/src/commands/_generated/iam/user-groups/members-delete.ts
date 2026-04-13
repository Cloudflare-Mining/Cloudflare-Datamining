/**
 * members-delete command
 * @generated from apis/iam/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface MembersDeleteArgs {
  userGroupId: string;
  memberId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MembersDeleteArgs> = {
  command: 'members-delete <userGroupId> <memberId>',
  describe: 'Remove a member from User Group',

  builder: (yargs: Argv): Argv<MembersDeleteArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<MembersDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MembersDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.userGroupId as string | undefined, 'userGroupId');
      validateResourceId(argv.memberId as string | undefined, 'memberId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf iam user-groups members-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/iam/user_groups/${argv.userGroupId ?? '<userGroupId>'}/members/${argv.memberId ?? '<memberId>'}`,
          pathParams: { userGroupId: String(argv.userGroupId ?? ''), memberId: String(argv.memberId ?? '') },
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

      const result = await client.iam.usergroups.membersDelete(accountId, argv.userGroupId, argv.memberId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
