/**
 * items-get command
 * @generated from apis/rules/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ItemsGetArgs {
  itemId: string;
  listId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ItemsGetArgs> = {
  command: 'items-get <itemId> <listId>',
  describe: 'Fetches a list item in the list.',

  builder: (yargs: Argv): Argv<ItemsGetArgs> => {
    return yargs
      .positional('itemId', {
        type: 'string',
        description: 'Defines the unique ID of the item in the List.',
        demandOption: true,
      })
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
      }) as Argv<ItemsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ItemsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.itemId as string | undefined, 'itemId');
      validateResourceId(argv.listId as string | undefined, 'listId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rules.lists.itemsGet(argv.itemId, argv.listId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
