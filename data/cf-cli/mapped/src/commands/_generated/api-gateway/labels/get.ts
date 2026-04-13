/**
 * get command
 * @generated from apis/api-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  source?: string;
  filter?: string;
  'with-mapped-resource-counts'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get',
  describe: 'Retrieve all labels',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of results per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order by',
        choices: ['name', 'description', 'created_at', 'last_updated', 'mapped_resources.operations'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order results.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('source', {
        type: 'string',
        description: 'Filter for labels with source',
        choices: ['user', 'managed'] as const,
        default: undefined,
      })
      .option('filter', {
        type: 'string',
        description: 'Filter for labels where the name or description matches using substring match',
        default: undefined,
      })
      .option('with-mapped-resource-counts', {
        type: 'boolean',
        description: 'Include \`mapped_resources\` for each label',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.source !== undefined) params['source'] = argv.source;
      if (argv.filter !== undefined) params['filter'] = argv.filter;
      if (argv.withMappedResourceCounts !== undefined)
        params['with_mapped_resource_counts'] = argv.withMappedResourceCounts;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.apiGateway.labels.get(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
