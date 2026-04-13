/**
 * list command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'per-page'?: number;
  page?: number;
  task?: string;
  author?: string;
  source?: number;
  'hide-experimental'?: boolean;
  search?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Searches Workers AI models by name or description.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('per-page', {
        type: 'number',
        description: 'Per page',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('task', {
        type: 'string',
        description: 'Filter by Task Name',
        default: undefined,
      })
      .option('author', {
        type: 'string',
        description: 'Filter by Author',
        default: undefined,
      })
      .option('source', {
        type: 'number',
        description: 'Filter by Source Id',
        default: undefined,
      })
      .option('hide-experimental', {
        type: 'boolean',
        description: 'Filter to hide experimental models',
        default: false,
      })
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.task !== undefined) params['task'] = argv.task;
      if (argv.author !== undefined) params['author'] = argv.author;
      if (argv.source !== undefined) params['source'] = argv.source;
      if (argv.hideExperimental !== undefined) params['hide_experimental'] = argv.hideExperimental;
      if (argv.search !== undefined) params['search'] = argv.search;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.ai.models.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
