/**
 * secrets-list command
 * @generated from apis/secrets-store/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SecretsListArgs {
  accountTag: string;
  storeId: string;
  direction?: string;
  page?: number;
  'per-page'?: number;
  search?: string;
  order?: string;
  scopes?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecretsListArgs> = {
  command: 'secrets-list <accountTag> <storeId>',
  describe:
    "Lists all secrets in a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.",

  builder: (yargs: Argv): Argv<SecretsListArgs> => {
    return yargs
      .positional('accountTag', {
        type: 'string',
        description:
          "Account tag identifier (e.g., '12a6ed19f349896cfbd6694ba3de8d31'). This is the account's external tag identifier, not the numeric account ID.",
        demandOption: true,
      })
      .positional('storeId', {
        type: 'string',
        description: 'Store Identifier',
        demandOption: true,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to sort objects',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of objects to return per page',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search secrets using a filter string, filtering across name and comment',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Order secrets by values in the given field',
        choices: ['name', 'comment', 'created', 'modified', 'status'] as const,
        default: undefined,
      })
      .option('scopes', {
        type: 'string',
        description: 'Only secrets with the given scopes will be returned',
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
      }) as Argv<SecretsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.accountTag as string | undefined, 'accountTag');
      validateResourceId(argv.storeId as string | undefined, 'storeId');

      const params: Record<string, unknown> = {};
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.scopes !== undefined) params['scopes'] = argv.scopes;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.secretsStore.storesextra.secretsList(
        argv.accountTag,
        argv.storeId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
