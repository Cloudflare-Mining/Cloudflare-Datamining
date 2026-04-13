/**
 * get command
 * @generated from apis/resource-tagging/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetArgs {
  zoneId?: string;
  'resource-id': string;
  'resource-type': string;
  'access-application-id'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get [zoneId]',
  describe: 'Retrieves tags for a specific zone-level resource.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID is required only for zone-level resources (or use --zone flag)',
      })
      .option('resource-id', {
        type: 'string',
        description: 'The ID of the resource to retrieve tags for.',
      })
      .option('resource-type', {
        type: 'string',
        description: 'The type of the resource.',
        choices: [
          'access_application_policy',
          'api_gateway_operation',
          'custom_certificate',
          'custom_hostname',
          'dns_record',
          'load_balancer',
          'managed_client_certificate',
          'zone',
        ] as const,
      })
      .option('access-application-id', {
        type: 'string',
        description: 'Access application ID identifier. Required for access_application_policy resources.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.resourceId !== undefined) params['resource_id'] = argv.resourceId;
      if (argv.resourceType !== undefined) params['resource_type'] = argv.resourceType;
      if (argv.accessApplicationId !== undefined) params['access_application_id'] = argv.accessApplicationId;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.resourceTagging.zonetags.get(
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
