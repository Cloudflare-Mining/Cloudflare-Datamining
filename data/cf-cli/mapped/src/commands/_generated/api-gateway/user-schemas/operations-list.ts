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
  feature?: string;
  host?: string;
  method?: string;
  endpoint?: string;
  page?: number;
  'per-page'?: number;
  'operation-status'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, OperationsListArgs> = {
  command: 'operations-list',
  describe:
    'Retrieves all operations from the schema. Operations that already exist in API Shield Endpoint Management will be returned as full operations.',

  builder: (yargs: Argv): Argv<OperationsListArgs> => {
    return yargs
      .option('feature', {
        type: 'string',
        description:
          'Add feature(s) to the results. The feature name that is given here corresponds to the resulting feature object. Have a look at the top-level object description for more details on the specific meaning.',
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
      .option('operation-status', {
        type: 'string',
        description:
          'Filter results by whether operations exist in API Shield Endpoint Management or not. \`new\` will just return operations from the schema that do not exist in API Shield Endpoint Management. \`existing\` will just return operations from the schema that already exist in API Shield Endpoint Management.',
        choices: ['new', 'existing'] as const,
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
      if (argv.feature !== undefined) params['feature'] = argv.feature;
      if (argv.host !== undefined) params['host'] = argv.host;
      if (argv.method !== undefined) params['method'] = argv.method;
      if (argv.endpoint !== undefined) params['endpoint'] = argv.endpoint;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.operationStatus !== undefined) params['operation_status'] = argv.operationStatus;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.apiGateway.userschemas.operationsList(
        zoneId,
        argv.schemaId as string,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
