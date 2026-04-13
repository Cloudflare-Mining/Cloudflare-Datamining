/**
 * locations-create command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface LocationsCreateArgs {
  'client-default'?: boolean;
  'dns-destination-ips-id'?: string;
  'ecs-support'?: boolean;
  'endpoints-doh-enabled'?: boolean;
  'endpoints-doh-require-token'?: boolean;
  'endpoints-dot-enabled'?: boolean;
  'endpoints-ipv4-enabled'?: boolean;
  'endpoints-ipv6-enabled'?: boolean;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, LocationsCreateArgs> = {
  command: 'locations-create',
  describe: 'Create a new Zero Trust Gateway location.',

  builder: (yargs: Argv): Argv<LocationsCreateArgs> => {
    return yargs
      .option('client-default', {
        type: 'boolean',
        description: 'Indicate whether this location is the default location.',
        default: false,
      })
      .option('dns-destination-ips-id', {
        type: 'string',
        description:
          'Specify the identifier of the pair of IPv4 addresses assigned to this location. When creating a location, if this field is absent or set to null, the pair of shared IPv4 addresses (0e4a32c6-6fb8-4858-9296-98f51631e8e6) is auto-assigned. When updating a location, if this field is absent or set to null, the pre-assigned pair remains unchanged.',
        default: undefined,
      })
      .option('ecs-support', {
        type: 'boolean',
        description: 'Indicate whether the location must resolve EDNS queries.',
        default: false,
      })
      .option('endpoints-doh-enabled', {
        type: 'boolean',
        description: 'Indicate whether the DOH endpoint is enabled for this location.',
        default: false,
      })
      .option('endpoints-doh-require-token', {
        type: 'boolean',
        description: 'Specify whether the DOH endpoint requires user identity authentication.',
        default: false,
      })
      .option('endpoints-dot-enabled', {
        type: 'boolean',
        description: 'Indicate whether the DOT endpoint is enabled for this location.',
        default: false,
      })
      .option('endpoints-ipv4-enabled', {
        type: 'boolean',
        description: 'Indicate whether the IPv4 endpoint is enabled for this location.',
        default: false,
      })
      .option('endpoints-ipv6-enabled', {
        type: 'boolean',
        description: 'Indicate whether the IPV6 endpoint is enabled for this location.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'Specify the location name.',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<LocationsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LocationsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust gateway locations-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/locations`,
          pathParams: {},
          body: {
            clientDefault: argv.clientDefault,
            dnsDestinationIpsId: argv.dnsDestinationIpsId,
            ecsSupport: argv.ecsSupport,
            endpointsDohEnabled: argv.endpointsDohEnabled,
            endpointsDohRequireToken: argv.endpointsDohRequireToken,
            endpointsDotEnabled: argv.endpointsDotEnabled,
            endpointsIpv4Enabled: argv.endpointsIpv4Enabled,
            endpointsIpv6Enabled: argv.endpointsIpv6Enabled,
            name: argv.name,
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/gateway/locations`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.clientDefault !== undefined) setNestedValue(bodyData, ['client_default'], argv.clientDefault);
      if (argv.dnsDestinationIpsId !== undefined)
        setNestedValue(bodyData, ['dns_destination_ips_id'], argv.dnsDestinationIpsId);
      if (argv.ecsSupport !== undefined) setNestedValue(bodyData, ['ecs_support'], argv.ecsSupport);
      if (argv.endpointsDohEnabled !== undefined)
        setNestedValue(bodyData, ['endpoints', 'doh', 'enabled'], argv.endpointsDohEnabled);
      if (argv.endpointsDohRequireToken !== undefined)
        setNestedValue(bodyData, ['endpoints', 'doh', 'require_token'], argv.endpointsDohRequireToken);
      if (argv.endpointsDotEnabled !== undefined)
        setNestedValue(bodyData, ['endpoints', 'dot', 'enabled'], argv.endpointsDotEnabled);
      if (argv.endpointsIpv4Enabled !== undefined)
        setNestedValue(bodyData, ['endpoints', 'ipv4', 'enabled'], argv.endpointsIpv4Enabled);
      if (argv.endpointsIpv6Enabled !== undefined)
        setNestedValue(bodyData, ['endpoints', 'ipv6', 'enabled'], argv.endpointsIpv6Enabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/gateway/locations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
