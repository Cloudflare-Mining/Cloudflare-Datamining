/**
 * operations-list command
 * @generated from apis/api-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface OperationsListArgs {
  page?: number;
  'per-page'?: number;
  host?: string;
  method?: string;
  endpoint?: string;
  direction?: string;
  order?: string;
  diff?: boolean;
  origin?: string;
  state?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, OperationsListArgs> = {
  command: 'operations-list',
  describe: 'Retrieve the most up to date view of discovered operations',

  builder: (yargs: Argv): Argv<OperationsListArgs> => {
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
      .option('direction', {
        type: 'string',
        description: 'Direction to order results.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order by',
        choices: ['host', 'method', 'endpoint', 'traffic_stats.requests', 'traffic_stats.last_updated'] as const,
        default: undefined,
      })
      .option('diff', {
        type: 'boolean',
        description:
          'When \`true\`, only return API Discovery results that are not saved into API Shield Endpoint Management',
        default: false,
      })
      .option('origin', {
        type: 'string',
        description:
          'Filter results to only include discovery results sourced from a particular discovery engine   * \`ML\` - Discovered operations that were sourced using ML API Discovery   * \`SessionIdentifier\` - Discovered operations that were sourced using Session Identifier API Discovery',
        choices: ['ML', 'SessionIdentifier', 'LabelDiscovery'] as const,
        default: undefined,
      })
      .option('state', {
        type: 'string',
        description:
          'Filter results to only include discovery results in a particular state. States are as follows   * \`review\` - Discovered operations that are not saved into API Shield Endpoint Management   * \`saved\` - Discovered operations that are already saved into API Shield Endpoint Management   * \`ignored\` - Discovered operations that have been marked as ignored',
        choices: ['review', 'saved', 'ignored'] as const,
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
      }) as Argv<OperationsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OperationsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.host !== undefined) params['host'] = argv.host;
      if (argv.method !== undefined) params['method'] = argv.method;
      if (argv.endpoint !== undefined) params['endpoint'] = argv.endpoint;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.diff !== undefined) params['diff'] = argv.diff;
      if (argv.origin !== undefined) params['origin'] = argv.origin;
      if (argv.state !== undefined) params['state'] = argv.state;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.apiGateway.discovery.operationsList(
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
