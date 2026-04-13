/**
 * list command
 * @generated from apis/resource-tagging/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  type?: string;
  tag?: string;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists all tagged resources for an account.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('type', {
        type: 'string',
        description:
          'Filter by resource type. Can be repeated to filter by multiple types (OR logic). Example: ?type=zone&type=worker',
        default: undefined,
      })
      .option('tag', {
        type: 'string',
        description:
          'Filter resources by tag criteria. This parameter can be repeated multiple times, with AND logic between parameters.  Supported syntax: - **Key-only**: \`tag=<key>\` - Resource must have the tag key (e.g., \`tag=production\`) - **Key-value**: \`tag=<key>=<value>\` - Resource must have the tag with specific value (e.g., \`tag=env=prod\`) - **Multiple values (OR)**: \`tag=<key>=<v1>,<v2>\` - Resource must have tag with any of the values (e.g., \`tag=env=prod,staging\`) - **Negate key-only**: \`tag=!<key>\` - Resource must not have the tag key (e.g., \`tag=!archived\`) - **Negate key-value**: \`tag=<key>!=<value>\` - Resource must not have the tag with specific value (e.g., \`tag=region!=us-west-1\`)  Multiple tag parameters are combined with AND logic.',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description: 'Cursor for pagination.',
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
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.tag !== undefined) params['tag'] = argv.tag;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.resourceTagging.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
