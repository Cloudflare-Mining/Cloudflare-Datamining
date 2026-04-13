/**
 * tags-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TagsGetArgs {
  page?: number;
  'page-size'?: number;
  search?: string;
  'category-uuid'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TagsGetArgs> = {
  command: 'tags-get',
  describe: 'Returns all Source-of-Truth tags for an account.',

  builder: (yargs: Argv): Argv<TagsGetArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'PageSize',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('category-uuid', {
        type: 'string',
        description: 'CategoryUuid',
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
      }) as Argv<TagsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TagsGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.pageSize !== undefined) params['pageSize'] = argv.pageSize;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.categoryUuid !== undefined) params['categoryUuid'] = argv.categoryUuid;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.tagsGet(
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
