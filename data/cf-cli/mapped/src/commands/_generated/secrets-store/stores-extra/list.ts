/**
 * list command
 * @generated from apis/secrets-store/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  accountTag: string;
  direction?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <accountTag>',
  describe:
    'Lists all stores in an account that are managed by the calling service. Only returns stores where managed_by matches the authenticated service.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('accountTag', {
        type: 'string',
        description:
          "Account tag identifier (e.g., '12a6ed19f349896cfbd6694ba3de8d31'). This is the account's external tag identifier, not the numeric account ID.",
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
      .option('order', {
        type: 'string',
        description: 'Order secrets by values in the given field',
        choices: ['name', 'comment', 'created', 'modified', 'status'] as const,
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
      validateResourceId(argv.accountTag as string | undefined, 'accountTag');

      const params: Record<string, unknown> = {};
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.secretsStore.storesextra.list(
        argv.accountTag,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
