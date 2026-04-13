/**
 * actions-delete command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface ActionsDeleteArgs {
  id: string;
  actionId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ActionsDeleteArgs> = {
  command: 'actions-delete <id> <actionId>',
  describe: 'Delete an action from a rule.',

  builder: (yargs: Argv): Argv<ActionsDeleteArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'The unique identifier for the rule.',
        demandOption: true,
      })
      .positional('actionId', {
        type: 'string',
        description: 'Action ID',
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
      }) as Argv<ActionsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ActionsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.actionId as string | undefined, 'actionId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one rules actions-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/rules/${argv.id ?? '<id>'}/actions/${argv.actionId ?? '<actionId>'}`,
          pathParams: { id: String(argv.id ?? ''), actionId: String(argv.actionId ?? '') },
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

      const result = await client.cloudforceOne.rules.actionsDelete(accountId, argv.id, argv.actionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
