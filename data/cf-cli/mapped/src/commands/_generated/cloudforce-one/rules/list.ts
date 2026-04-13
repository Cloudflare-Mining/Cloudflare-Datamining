/**
 * list command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  namespace?: string;
  recursive?: string;
  search?: string;
  limit?: number;
  offset?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List all rules for an account with optional filtering.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('namespace', {
        type: 'string',
        description: 'Namespace',
        default: undefined,
      })
      .option('recursive', {
        type: 'string',
        description: 'Recursive',
        choices: ['true', 'false'] as const,
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Offset',
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
      if (argv.namespace !== undefined) params['namespace'] = argv.namespace;
      if (argv.recursive !== undefined) params['recursive'] = argv.recursive;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.rules.list(
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
