/**
 * items-list command
 * @generated from apis/rules/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ItemsListArgs {
  listId: string;
  cursor?: string;
  'per-page'?: number;
  search?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ItemsListArgs> = {
  command: 'items-list <listId>',
  describe: 'Fetches all the items in the list.',

  builder: (yargs: Argv): Argv<ItemsListArgs> => {
    return yargs
      .positional('listId', {
        type: 'string',
        description: 'The unique ID of the list.',
        demandOption: true,
      })
      .option('cursor', {
        type: 'string',
        description:
          "The pagination cursor. An opaque string token indicating the position from which to continue when requesting the next/previous set of records. Cursor values are provided under \`result_info.cursors\` in the response. You should make no assumptions about a cursor's content or length.",
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Amount of results to include in each paginated response. A non-negative 32 bit integer.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description:
          'A search query to filter returned items. Its meaning depends on the list type: IP addresses must start with the provided string, hostnames and bulk redirects must contain the string, and ASNs must match the string exactly.',
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<ItemsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ItemsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.listId as string | undefined, 'listId');

      const params: Record<string, unknown> = {};
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.search !== undefined) params['search'] = argv.search;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.rules.lists.itemsList(
        argv.listId,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
