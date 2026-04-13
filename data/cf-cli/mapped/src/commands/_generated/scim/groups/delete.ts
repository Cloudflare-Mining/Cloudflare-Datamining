/**
 * delete command
 * @generated from apis/scim/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeleteArgs {
  groupId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <groupId>',
  describe:
    'Deletes a SCIM Group (custom user groups only). System groups backed by Cloudflare permission groups cannot be deleted via SCIM. Returns 204 No Content on success.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('groupId', {
        type: 'string',
        description:
          'The group identifier for a SCIM Group resource. For system groups this is prefixed \`cloudflare-v1-<permissionGroupTag>\`; for custom user groups this is a UUID-style tag.',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.groupId as string | undefined, 'groupId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf scim groups delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/scim/v2/Groups/${argv.groupId ?? '<groupId>'}`,
          pathParams: { groupId: String(argv.groupId ?? '') },
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

      const result = await client.scim.groups.delete(accountId, argv.groupId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
