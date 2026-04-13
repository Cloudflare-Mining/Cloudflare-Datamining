/**
 * list command
 * @generated from apis/images/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'continuation-token'?: string;
  'per-page'?: number;
  'sort-order'?: string;
  creator?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'List up to 10000 images with up to 1000 results per page. Use the optional parameters below to get a specific range of images. Pagination is supported via continuation_token. **Metadata Filtering (Optional):** You can optionally filter images by custom metadata fields using the \`meta.<field>[<operator>]=<value>\` syntax. **Supported Operators:** - \`eq\` / \`eq:string\` / \`eq:number\` / \`eq:boolean\` - Exact match - \`in\` / \`in:string\` / \`in:number\` - Match any value in list (pipe-separated) **Metadata Filter Constraints:** - Maximum 5 metadata filters per request - Maximum 5 levels of nesting (e.g., \`meta.first.second.third.fourth.fifth\`) - Maximum 10 elements for list operators (\`in\`) - Supports string, number, and boolean value types **Examples:** \`\`\` # List all images /images/v2 # Filter by metadata [eq] /images/v2?meta.status[eq:string]=active # Filter by metadata [in] /images/v2?meta.status[in]=pending|deleted|flagged # Filter by metadata [in:number] /images/v2?meta.ratings[in:number]=4|5 # Filter by nested metadata /images/v2?meta.region.name[eq]=eu-west # Combine metadata filters with creator /images/v2?meta.status[eq]=active&creator=user123 # Multiple metadata filters (AND logic) /images/v2?meta.status[eq]=active&meta.priority[eq:number]=5 \`\`\`',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('continuation-token', {
        type: 'string',
        description:
          'Continuation token to fetch next page. Passed as a query param when requesting List V2 api endpoint.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of items per page',
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sorting order by upload time',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('creator', {
        type: 'string',
        description:
          'Internal user ID set within the creator field. Setting to empty string "" will return images where creator field is not set',
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
      if (argv.continuationToken !== undefined) params['continuation_token'] = argv.continuationToken;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.creator !== undefined) params['creator'] = argv.creator;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.images.v2.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
