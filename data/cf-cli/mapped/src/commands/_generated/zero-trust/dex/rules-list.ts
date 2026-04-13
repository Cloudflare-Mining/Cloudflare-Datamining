/**
 * rules-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RulesListArgs {
  page: number;
  'per-page': number;
  'sort-order'?: string;
  'sort-by'?: string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RulesListArgs> = {
  command: 'rules-list',
  describe: 'List DEX Rules',

  builder: (yargs: Argv): Argv<RulesListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results',
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page',
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort direction for sort_by property',
        choices: ['ASC', 'DESC'] as const,
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description: 'Which property to sort results by',
        choices: ['name', 'created_at', 'updated_at'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Filter results by rule name',
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
      }) as Argv<RulesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RulesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.name !== undefined) params['name'] = argv.name;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.rulesList(
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
