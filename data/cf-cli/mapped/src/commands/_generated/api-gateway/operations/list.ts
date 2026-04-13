/**
 * list command
 * @generated from apis/api-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  host?: string;
  method?: string;
  endpoint?: string;
  feature?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Lists all API operations tracked by API Shield for a zone with pagination. Returns operation details including method, path, and feature configurations.',

  builder: (yargs: Argv): Argv<ListArgs> => {
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
        description:
          'Field to order by. When requesting a feature, the feature keys are available for ordering as well, e.g., \`thresholds.suggested_threshold\`.',
        choices: ['method', 'host', 'endpoint', 'thresholds.$key'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order results.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('host', {
        type: 'string',
        description: 'Filter results to only include the specified hosts.',
        default: undefined,
      })
      .option('method', {
        type: 'string',
        description: 'Filter results to only include the specified HTTP methods.',
        default: undefined,
      })
      .option('endpoint', {
        type: 'string',
        description: 'Filter results to only include endpoints containing this pattern.',
        default: undefined,
      })
      .option('feature', {
        type: 'string',
        description:
          'Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.',
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
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.host !== undefined) params['host'] = argv.host;
      if (argv.method !== undefined) params['method'] = argv.method;
      if (argv.endpoint !== undefined) params['endpoint'] = argv.endpoint;
      if (argv.feature !== undefined) params['feature'] = argv.feature;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.apiGateway.operations.list(
        zoneId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
