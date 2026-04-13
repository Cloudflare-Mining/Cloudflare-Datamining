/**
 * items-update command
 * @generated from apis/rules/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface ItemsUpdateArgs {
  listId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ItemsUpdateArgs> = {
  command: 'items-update <listId>',
  describe:
    'Removes all existing items from the list and adds the provided items to the list. This operation is asynchronous. To get current the operation status, invoke the \`Get bulk operation status\` endpoint with the returned \`operation_id\`. There is a limit of 1 pending bulk operation per account. If an outstanding bulk operation is in progress, the request will be rejected.',

  builder: (yargs: Argv): Argv<ItemsUpdateArgs> => {
    return yargs
      .positional('listId', {
        type: 'string',
        description: 'The unique ID of the list.',
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<ItemsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ItemsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.listId as string | undefined, 'listId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf rules lists items-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/rules/lists/${argv.listId ?? '<listId>'}/items`,
          pathParams: { listId: String(argv.listId ?? '') },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/accounts/${accountId}/rules/lists/${argv.listId}/items`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.rules.lists.itemsUpdate(argv.listId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
