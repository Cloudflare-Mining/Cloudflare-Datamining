/**
 * infrastructure-targets-update command
 * @generated from apis/zero-trust/schema.ts
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

interface InfrastructureTargetsUpdateArgs {
  targetId: string;
  hostname: string;
  'ip-ipv4-ip-addr'?: string;
  'ip-ipv4-virtual-network-id'?: string;
  'ip-ipv6-ip-addr'?: string;
  'ip-ipv6-virtual-network-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, InfrastructureTargetsUpdateArgs> = {
  command: 'infrastructure-targets-update <targetId>',
  describe:
    "Updates an existing infrastructure access target's configuration, including connection parameters and access policies.",

  builder: (yargs: Argv): Argv<InfrastructureTargetsUpdateArgs> => {
    return yargs
      .positional('targetId', {
        type: 'string',
        description: 'Target identifier',
        demandOption: true,
      })
      .option('hostname', {
        type: 'string',
        description:
          'A non-unique field that refers to a target. Case insensitive, maximum length of 255 characters, supports the use of special characters dash and period, does not support spaces, and must start and end with an alphanumeric character.',
      })
      .option('ip-ipv4-ip-addr', {
        type: 'string',
        description: 'IP address of the target',
        default: undefined,
      })
      .option('ip-ipv4-virtual-network-id', {
        type: 'string',
        description:
          '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.',
        default: undefined,
      })
      .option('ip-ipv6-ip-addr', {
        type: 'string',
        description: 'IP address of the target',
        default: undefined,
      })
      .option('ip-ipv6-virtual-network-id', {
        type: 'string',
        description:
          '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.',
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
      }) as Argv<InfrastructureTargetsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InfrastructureTargetsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.targetId as string | undefined, 'targetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access infrastructure-targets-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/infrastructure/targets/${argv.targetId ?? '<targetId>'}`,
          pathParams: { targetId: String(argv.targetId ?? '') },
          body: {
            hostname: argv.hostname,
            ipIpv4IpAddr: argv.ipIpv4IpAddr,
            ipIpv4VirtualNetworkId: argv.ipIpv4VirtualNetworkId,
            ipIpv6IpAddr: argv.ipIpv6IpAddr,
            ipIpv6VirtualNetworkId: argv.ipIpv6VirtualNetworkId,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/infrastructure/targets/${argv.targetId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.hostname !== undefined) setNestedValue(bodyData, ['hostname'], argv.hostname);
      if (argv.ipIpv4IpAddr !== undefined) setNestedValue(bodyData, ['ip', 'ipv4', 'ip_addr'], argv.ipIpv4IpAddr);
      if (argv.ipIpv4VirtualNetworkId !== undefined)
        setNestedValue(bodyData, ['ip', 'ipv4', 'virtual_network_id'], argv.ipIpv4VirtualNetworkId);
      if (argv.ipIpv6IpAddr !== undefined) setNestedValue(bodyData, ['ip', 'ipv6', 'ip_addr'], argv.ipIpv6IpAddr);
      if (argv.ipIpv6VirtualNetworkId !== undefined)
        setNestedValue(bodyData, ['ip', 'ipv6', 'virtual_network_id'], argv.ipIpv6VirtualNetworkId);
      const result = await client.put<unknown>(`/accounts/${accountId}/infrastructure/targets/${argv.targetId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
