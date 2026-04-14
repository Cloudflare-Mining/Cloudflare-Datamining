/**
 * get-applications command
 * @generated from apis/accounts/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetApplicationsArgs {
  filter?: string;
  limit?: number;
  offset?: number;
  'order-by'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetApplicationsArgs> = {
  command: 'get-applications',
  describe: 'Get applications with different filters.',

  builder: (yargs: Argv): Argv<GetApplicationsArgs> => {
    return yargs
      .option('filter', {
        type: 'string',
        description:
          'Filter applications using key:value format. Supported filter keys: - name: Filter by application name (e.g., name:HR) - id: Filter by application ID (e.g., id:0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0) - human_id: Filter by human-readable ID (e.g., human_id:HR) - hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com) - source: Filter by application source name (e.g., source:cloudflare) - ip_subnet: Filter by IP subnet in CIDR notation (e.g., ip_subnet:192.168.1.0/24) - intel_id: Filter by Intel API ID (e.g., intel_id:498). .',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit of number of results to return (max 250).',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Offset of results to return.',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'Order by result by field name and order (e.g., name:asc).',
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
      }) as Argv<GetApplicationsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetApplicationsArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.filter !== undefined) params['filter'] = argv.filter;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.accounts.applications.getApplications(
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
