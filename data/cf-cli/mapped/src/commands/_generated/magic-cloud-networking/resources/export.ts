/**
 * export command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ExportArgs {
  'provider-id'?: string;
  'resource-type'?: string;
  'resource-id'?: string;
  region?: string;
  'resource-group'?: string;
  search?: string;
  'order-by'?: string;
  desc?: boolean;
  v2?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ExportArgs> = {
  command: 'export',
  describe: 'Export resources in the Resource Catalog as a JSON file (Closed Beta).',

  builder: (yargs: Argv): Argv<ExportArgs> => {
    return yargs
      .option('provider-id', {
        type: 'string',
        description: 'Provider ID',
        default: undefined,
      })
      .option('resource-type', {
        type: 'string',
        description: 'Resource type',
        default: undefined,
      })
      .option('resource-id', {
        type: 'string',
        description: 'Resource ID',
        default: undefined,
      })
      .option('region', {
        type: 'string',
        description: 'Region',
        default: undefined,
      })
      .option('resource-group', {
        type: 'string',
        description: 'Resource group',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'One of ["id", "resource_type", "region"].',
        default: undefined,
      })
      .option('desc', {
        type: 'boolean',
        description: 'Desc',
        default: false,
      })
      .option('v2', {
        type: 'boolean',
        description: 'V2',
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
      }) as Argv<ExportArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ExportArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.providerId !== undefined) params['provider_id'] = argv.providerId;
      if (argv.resourceType !== undefined) params['resource_type'] = argv.resourceType;
      if (argv.resourceId !== undefined) params['resource_id'] = argv.resourceId;
      if (argv.region !== undefined) params['region'] = argv.region;
      if (argv.resourceGroup !== undefined) params['resource_group'] = argv.resourceGroup;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.desc !== undefined) params['desc'] = argv.desc;
      if (argv.v2 !== undefined) params['v2'] = argv.v2;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicCloudNetworking.resources.export(
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
