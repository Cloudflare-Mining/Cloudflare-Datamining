/**
 * create command
 * @generated from apis/magic-transit/schema.ts
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

interface CreateArgs {
  'x-magic-new-hc-target'?: string;
  'automatic-return-routing'?: boolean;
  'bgp-customer-asn': number;
  'bgp-extra-prefixes'?: string;
  'bgp-md5-key'?: string;
  'cloudflare-endpoint': string;
  'custom-remote-identities-fqdn-id'?: string;
  'customer-endpoint'?: string;
  description?: string;
  'health-check-enabled'?: boolean;
  'health-check-rate'?: string;
  'health-check-type'?: string;
  'health-check-direction'?: string;
  'interface-address': string;
  'interface-address6'?: string;
  name: string;
  psk?: string;
  'replay-protection'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Creates a new IPsec tunnel associated with an account. Use \`?validate_only=true\` as an optional query parameter to only run validation without persisting changes.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
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
      .option('bgp-customer-asn', {
        type: 'number',
        description: 'ASN used on the customer end of the BGP session',
      })
      .option('bgp-extra-prefixes', {
        type: 'string',
        description:
          'Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.',
        default: undefined,
      })
      .option('bgp-md5-key', {
        type: 'string',
        description:
          'MD5 key to use for session authentication.  Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the key is not treated as a secret value. This is *only* supported for preventing misconfiguration, not for defending against malicious attacks.  The MD5 key, if set, must be of non-zero length and consist only of the following types of character:  * ASCII alphanumerics: \`[a-zA-Z0-9]\` * Special characters in the set \`\'!@#$%^&*()+[]{}<>/.,;:_-~\`= \\|\`  In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A), quotation mark (\`"\`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed (0x0C), and the question mark (\`?\`). Requests specifying an MD5 key with one or more of these disallowed characters will be rejected.',
        default: undefined,
      })
      .option('cloudflare-endpoint', {
        type: 'string',
        description: 'The IP address assigned to the Cloudflare side of the IPsec tunnel.',
      })
      .option('custom-remote-identities-fqdn-id', {
        type: 'string',
        description:
          'A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel. The generated IKE IDs can still be used even if this custom value is specified.  Must be of the form \`<custom label>.<account ID>.custom.ipsec.cloudflare.com\`.  This custom ID does not need to be unique. Two IPsec tunnels may have the same custom fqdn_id. However, if another IPsec tunnel has the same value then the two tunnels cannot have the same cloudflare_endpoint.',
        default: undefined,
      })
      .option('customer-endpoint', {
        type: 'string',
        description:
          'The IP address assigned to the customer side of the IPsec tunnel. Not required, but must be set for proactive traceroutes to work.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'An optional description forthe IPsec tunnel.',
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
      .option('name', {
        type: 'string',
        description: 'The name of the IPsec tunnel. The name cannot share a name with other tunnels.',
      })
      .option('psk', {
        type: 'string',
        description: 'A randomly generated or provided string for use in the IPsec tunnel.',
        default: undefined,
      })
      .option('replay-protection', {
        type: 'boolean',
        description:
          'If \`true\`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.',
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
      .choices('health-check-direction', ['unidirectional', 'bidirectional'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      const headers: Record<string, string> = {};
      if (argv.xMagicNewHcTarget !== undefined) headers['x-magic-new-hc-target'] = String(argv.xMagicNewHcTarget);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit ipsec-tunnels create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/ipsec_tunnels`,
          pathParams: {},
          body: {
            automaticReturnRouting: argv.automaticReturnRouting,
            bgpCustomerAsn: argv.bgpCustomerAsn,
            bgpExtraPrefixes: argv.bgpExtraPrefixes,
            bgpMd5Key: argv.bgpMd5Key,
            cloudflareEndpoint: argv.cloudflareEndpoint,
            customRemoteIdentitiesFqdnId: argv.customRemoteIdentitiesFqdnId,
            customerEndpoint: argv.customerEndpoint,
            description: argv.description,
            healthCheckEnabled: argv.healthCheckEnabled,
            healthCheckRate: argv.healthCheckRate,
            healthCheckType: argv.healthCheckType,
            healthCheckDirection: argv.healthCheckDirection,
            interfaceAddress: argv.interfaceAddress,
            interfaceAddress6: argv.interfaceAddress6,
            name: argv.name,
            psk: argv.psk,
            replayProtection: argv.replayProtection,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels`, {
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
      if (argv.bgpCustomerAsn !== undefined) setNestedValue(bodyData, ['bgp', 'customer_asn'], argv.bgpCustomerAsn);
      if (argv.bgpExtraPrefixes !== undefined)
        setNestedValue(bodyData, ['bgp', 'extra_prefixes'], argv.bgpExtraPrefixes);
      if (argv.bgpMd5Key !== undefined) setNestedValue(bodyData, ['bgp', 'md5_key'], argv.bgpMd5Key);
      if (argv.cloudflareEndpoint !== undefined)
        setNestedValue(bodyData, ['cloudflare_endpoint'], argv.cloudflareEndpoint);
      if (argv.customRemoteIdentitiesFqdnId !== undefined)
        setNestedValue(bodyData, ['custom_remote_identities', 'fqdn_id'], argv.customRemoteIdentitiesFqdnId);
      if (argv.customerEndpoint !== undefined) setNestedValue(bodyData, ['customer_endpoint'], argv.customerEndpoint);
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
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.psk !== undefined) setNestedValue(bodyData, ['psk'], argv.psk);
      if (argv.replayProtection !== undefined) setNestedValue(bodyData, ['replay_protection'], argv.replayProtection);
      const result = await client.post<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels`, {
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
