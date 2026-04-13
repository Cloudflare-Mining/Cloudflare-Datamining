/**
 * update command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  greTunnelId: string;
  'x-magic-new-hc-target'?: string;
  'automatic-return-routing'?: boolean;
  'cloudflare-gre-endpoint': string;
  'customer-gre-endpoint': string;
  description?: string;
  'health-check-enabled'?: boolean;
  'health-check-rate'?: string;
  'health-check-type'?: string;
  'health-check-direction'?: string;
  'interface-address': string;
  'interface-address6'?: string;
  mtu?: number;
  name: string;
  ttl?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <greTunnelId>',
  describe:
    'Updates a specific GRE tunnel. Use \`?validate_only=true\` as an optional query parameter to only run validation without persisting changes.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('greTunnelId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('x-magic-new-hc-target', {
        type: 'string',
        description:
          'If true, the health check target in the request and response bodies will be presented using the new object format. Defaults to false.',
        default: undefined,
      })
      .option('automatic-return-routing', {
        type: 'boolean',
        description: 'True if automatic stateful return routing should be enabled for a tunnel, false otherwise.',
        default: false,
      })
      .option('cloudflare-gre-endpoint', {
        type: 'string',
        description: 'The IP address assigned to the Cloudflare side of the GRE tunnel.',
      })
      .option('customer-gre-endpoint', {
        type: 'string',
        description: 'The IP address assigned to the customer side of the GRE tunnel.',
      })
      .option('description', {
        type: 'string',
        description: 'An optional description of the GRE tunnel.',
        default: undefined,
      })
      .option('health-check-enabled', {
        type: 'boolean',
        description: 'Determines whether to run healthchecks for a tunnel.',
        default: false,
      })
      .option('health-check-rate', {
        type: 'string',
        description: 'How frequent the health check is run. The default value is \`mid\`.',
        choices: ['low', 'mid', 'high'] as const,
        default: undefined,
      })
      .option('health-check-type', {
        type: 'string',
        description: 'The type of healthcheck to run, reply or request. The default value is \`reply\`.',
        choices: ['reply', 'request'] as const,
        default: undefined,
      })
      .option('health-check-direction', {
        type: 'string',
        description:
          'The direction of the flow of the healthcheck. Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.',
        choices: ['unidirectional', 'bidirectional'] as const,
        default: undefined,
      })
      .option('interface-address', {
        type: 'string',
        description:
          'A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.',
      })
      .option('interface-address6', {
        type: 'string',
        description:
          'A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127',
        default: undefined,
      })
      .option('mtu', {
        type: 'number',
        description: 'Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description:
          'The name of the tunnel. The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.',
      })
      .option('ttl', {
        type: 'number',
        description: 'Time To Live (TTL) in number of hops of the GRE tunnel.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('health-check-rate', ['low', 'mid', 'high'] as const)
      .choices('health-check-type', ['reply', 'request'] as const)
      .choices('health-check-direction', ['unidirectional', 'bidirectional'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.greTunnelId as string | undefined, 'greTunnelId');

      const headers: Record<string, string> = {};
      if (argv.xMagicNewHcTarget !== undefined) headers['x-magic-new-hc-target'] = String(argv.xMagicNewHcTarget);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit gre-tunnels update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/gre_tunnels/${argv.greTunnelId ?? '<greTunnelId>'}`,
          pathParams: { greTunnelId: String(argv.greTunnelId ?? '') },
          body: {
            automaticReturnRouting: argv.automaticReturnRouting,
            cloudflareGreEndpoint: argv.cloudflareGreEndpoint,
            customerGreEndpoint: argv.customerGreEndpoint,
            description: argv.description,
            healthCheckEnabled: argv.healthCheckEnabled,
            healthCheckRate: argv.healthCheckRate,
            healthCheckType: argv.healthCheckType,
            healthCheckDirection: argv.healthCheckDirection,
            interfaceAddress: argv.interfaceAddress,
            interfaceAddress6: argv.interfaceAddress6,
            mtu: argv.mtu,
            name: argv.name,
            ttl: argv.ttl,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${argv.greTunnelId}`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.automaticReturnRouting !== undefined)
        setNestedValue(bodyData, ['automatic_return_routing'], argv.automaticReturnRouting);
      if (argv.cloudflareGreEndpoint !== undefined)
        setNestedValue(bodyData, ['cloudflare_gre_endpoint'], argv.cloudflareGreEndpoint);
      if (argv.customerGreEndpoint !== undefined)
        setNestedValue(bodyData, ['customer_gre_endpoint'], argv.customerGreEndpoint);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.healthCheckEnabled !== undefined)
        setNestedValue(bodyData, ['health_check', 'enabled'], argv.healthCheckEnabled);
      if (argv.healthCheckRate !== undefined) setNestedValue(bodyData, ['health_check', 'rate'], argv.healthCheckRate);
      if (argv.healthCheckType !== undefined) setNestedValue(bodyData, ['health_check', 'type'], argv.healthCheckType);
      if (argv.healthCheckDirection !== undefined)
        setNestedValue(bodyData, ['health_check', 'direction'], argv.healthCheckDirection);
      if (argv.interfaceAddress !== undefined) setNestedValue(bodyData, ['interface_address'], argv.interfaceAddress);
      if (argv.interfaceAddress6 !== undefined)
        setNestedValue(bodyData, ['interface_address6'], argv.interfaceAddress6);
      if (argv.mtu !== undefined) setNestedValue(bodyData, ['mtu'], argv.mtu);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.ttl !== undefined) setNestedValue(bodyData, ['ttl'], argv.ttl);
      const result = await client.put<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${argv.greTunnelId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
