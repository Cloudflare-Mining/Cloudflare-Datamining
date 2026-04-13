/**
 * list-repos command
 * @generated from apis/scm/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface ListReposArgs {
  connectionId: string;
  search?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListReposArgs> = {
  command: 'list-repos <connectionId>',
  describe: 'Returns repositories accessible via the specified SCM connection.',

  builder: (yargs: Argv): Argv<ListReposArgs> => {
    return yargs
      .positional('connectionId', {
        type: 'string',
        description: 'ConnectionId',
        demandOption: true,
      })
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Per page',
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
      }) as Argv<ListReposArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListReposArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectionId as string | undefined, 'connectionId');

      const params: Record<string, unknown> = {};
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.scm.connections.listRepos(
        accountId,
        argv.connectionId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
