/**
 * dataset-groups-members-delete command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DatasetGroupsMembersDeleteArgs {
  groupId: string;
  memberId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetGroupsMembersDeleteArgs> = {
  command: 'dataset-groups-members-delete <groupId> <memberId>',
  describe: 'Delete a group member',

  builder: (yargs: Argv): Argv<DatasetGroupsMembersDeleteArgs> => {
    return yargs
      .positional('groupId', {
        type: 'string',
        description: 'Group ID',
        demandOption: true,
      })
      .positional('memberId', {
        type: 'string',
        description: 'Member ID',
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
      }) as Argv<DatasetGroupsMembersDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetGroupsMembersDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.groupId as string | undefined, 'groupId');
      validateResourceId(argv.memberId as string | undefined, 'memberId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-groups-members-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/-/groups/${argv.groupId ?? '<groupId>'}/members/${argv.memberId ?? '<memberId>'}`,
          pathParams: { groupId: String(argv.groupId ?? ''), memberId: String(argv.memberId ?? '') },
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

      const result = await client.cloudforceOne.events.datasetGroupsMembersDelete(
        accountId,
        argv.groupId,
        argv.memberId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
