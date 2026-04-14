/**
 * instances-list command
 * @generated from apis/ai-search/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface InstancesListArgs {
  name: string;
  page?: number;
  'per-page'?: number;
  namespace?: string;
  search?: string;
  'order-by'?: string;
  'order-by-direction'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InstancesListArgs> = {
  command: 'instances-list <name>',
  describe: 'List instances.',

  builder: (yargs: Argv): Argv<InstancesListArgs> => {
    return yargs
      .positional('name', {
        type: 'string',
        description: 'Namespace name',
        demandOption: true,
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
      .option('namespace', {
        type: 'string',
        description: 'Namespace',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search by id',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'Order By Column Name',
        choices: ['created_at'] as const,
        default: undefined,
      })
      .option('order-by-direction', {
        type: 'string',
        description: 'Order By Direction',
        choices: ['asc', 'desc'] as const,
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
      }) as Argv<InstancesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.name as string | undefined, 'name');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.namespace !== undefined) params['namespace'] = argv.namespace;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.orderByDirection !== undefined) params['order_by_direction'] = argv.orderByDirection;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiSearch.namespaces.instancesList(
        accountId,
        argv.name,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
