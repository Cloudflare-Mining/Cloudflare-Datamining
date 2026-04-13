/**
 * tags-categories-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TagsCategoriesGetArgs {
  search?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TagsCategoriesGetArgs> = {
  command: 'tags-categories-get',
  describe: 'Returns all Source-of-Truth tag categories for an account.',

  builder: (yargs: Argv): Argv<TagsCategoriesGetArgs> => {
    return yargs
      .option('search', {
        type: 'string',
        description: 'Search',
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
      }) as Argv<TagsCategoriesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TagsCategoriesGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.search !== undefined) params['search'] = argv.search;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.tagsCategoriesGet(
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
