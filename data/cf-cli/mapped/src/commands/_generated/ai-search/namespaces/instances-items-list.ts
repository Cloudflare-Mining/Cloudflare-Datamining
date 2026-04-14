/**
 * instances-items-list command
 * @generated from apis/ai-search/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface InstancesItemsListArgs {
  id: string;
  name: string;
  page?: number;
  'per-page'?: number;
  search?: string;
  'sort-by'?: string;
  status?: string;
  source?: string;
  'metadata-filter'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InstancesItemsListArgs> = {
  command: 'instances-items-list <id> <name>',
  describe: 'Lists indexed items in an AI Search instance.',

  builder: (yargs: Argv): Argv<InstancesItemsListArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.',
        demandOption: true,
      })
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
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description:
          'Sort order for items. "status" (default) sorts by status priority then last_seen_at. "modified_at" sorts by file modification time (most recent first), falling back to created_at.',
        choices: ['status', 'modified_at'] as const,
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Status',
        choices: ['queued', 'running', 'completed', 'error', 'skipped', 'outdated'] as const,
        default: undefined,
      })
      .option('source', {
        type: 'string',
        description:
          'Filter items by source_id. Use "builtin" for uploaded files, or a source identifier like "web-crawler:https://example.com".',
        default: undefined,
      })
      .option('metadata-filter', {
        type: 'string',
        description:
          'JSON-encoded metadata filter using Vectorize filter syntax. Examples: {"folder":"reports/"}, {"timestamp":{"$gte":1700000000000}}, {"folder":{"$in":["docs/","reports/"]}}',
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
      }) as Argv<InstancesItemsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesItemsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.name as string | undefined, 'name');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.source !== undefined) params['source'] = argv.source;
      if (argv.metadataFilter !== undefined) params['metadata_filter'] = argv.metadataFilter;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiSearch.namespaces.instancesItemsList(
        argv.id,
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
