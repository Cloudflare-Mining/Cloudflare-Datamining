/**
 * dataset-groups-members-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DatasetGroupsMembersGetArgs {
  groupId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetGroupsMembersGetArgs> = {
  command: 'dataset-groups-members-get <groupId>',
  describe: 'List group members',

  builder: (yargs: Argv): Argv<DatasetGroupsMembersGetArgs> => {
    return yargs
      .positional('groupId', {
        type: 'string',
        description: 'Group ID',
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
      }) as Argv<DatasetGroupsMembersGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetGroupsMembersGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.groupId as string | undefined, 'groupId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.datasetGroupsMembersGet(accountId, argv.groupId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
