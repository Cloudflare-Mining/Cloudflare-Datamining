/**
 * lans-edit command
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

interface LansEditArgs {
  siteId: string;
  lanId: string;
  'bond-id'?: number;
  'is-breakout'?: boolean;
  'is-prioritized'?: boolean;
  name?: string;
  'nat-static-prefix'?: string;
  physport?: number;
  'static-addressing-address': string;
  'static-addressing-dhcp-relay-server-addresses'?: string;
  'static-addressing-dhcp-server-dhcp-pool-end'?: string;
  'static-addressing-dhcp-server-dhcp-pool-start'?: string;
  'static-addressing-dhcp-server-dns-server'?: string;
  'static-addressing-dhcp-server-dns-servers'?: string;
  'static-addressing-secondary-address'?: string;
  'static-addressing-virtual-address'?: string;
  'vlan-tag'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, LansEditArgs> = {
  command: 'lans-edit <siteId> <lanId>',
  describe: 'Patch a specific Site LAN.',

  builder: (yargs: Argv): Argv<LansEditArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .positional('lanId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('bond-id', {
        type: 'number',
        description: 'The bond_id field',
        default: undefined,
      })
      .option('is-breakout', {
        type: 'boolean',
        description: 'mark true to use this LAN for source-based breakout traffic',
        default: false,
      })
      .option('is-prioritized', {
        type: 'boolean',
        description: 'mark true to use this LAN for source-based prioritized traffic',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
        default: undefined,
      })
      .option('nat-static-prefix', {
        type: 'string',
        description: 'A valid CIDR notation representing an IP range.',
        default: undefined,
      })
      .option('physport', {
        type: 'number',
        description: 'The physport field',
        default: undefined,
      })
      .option('static-addressing-address', {
        type: 'string',
        description: 'A valid CIDR notation representing an IP range.',
      })
      .option('static-addressing-dhcp-relay-server-addresses', {
        type: 'string',
        description: 'List of DHCP server IPs.',
        default: undefined,
      })
      .option('static-addressing-dhcp-server-dhcp-pool-end', {
        type: 'string',
        description: 'A valid IPv4 address.',
        default: undefined,
      })
      .option('static-addressing-dhcp-server-dhcp-pool-start', {
        type: 'string',
        description: 'A valid IPv4 address.',
        default: undefined,
      })
      .option('static-addressing-dhcp-server-dns-server', {
        type: 'string',
        description: 'A valid IPv4 address.',
        default: undefined,
      })
      .option('static-addressing-dhcp-server-dns-servers', {
        type: 'string',
        description: 'The static_addressing.dhcp_server.dns_servers field',
        default: undefined,
      })
      .option('static-addressing-secondary-address', {
        type: 'string',
        description: 'A valid CIDR notation representing an IP range.',
        default: undefined,
      })
      .option('static-addressing-virtual-address', {
        type: 'string',
        description: 'A valid CIDR notation representing an IP range.',
        default: undefined,
      })
      .option('vlan-tag', {
        type: 'number',
        description: 'VLAN ID. Use zero for untagged.',
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
      }) as Argv<LansEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LansEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');
      validateResourceId(argv.lanId as string | undefined, 'lanId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites lans-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}/lans/${argv.lanId ?? '<lanId>'}`,
          pathParams: { siteId: String(argv.siteId ?? ''), lanId: String(argv.lanId ?? '') },
          body: {
            bondId: argv.bondId,
            isBreakout: argv.isBreakout,
            isPrioritized: argv.isPrioritized,
            name: argv.name,
            natStaticPrefix: argv.natStaticPrefix,
            physport: argv.physport,
            staticAddressingAddress: argv.staticAddressingAddress,
            staticAddressingDhcpRelayServerAddresses: argv.staticAddressingDhcpRelayServerAddresses,
            staticAddressingDhcpServerDhcpPoolEnd: argv.staticAddressingDhcpServerDhcpPoolEnd,
            staticAddressingDhcpServerDhcpPoolStart: argv.staticAddressingDhcpServerDhcpPoolStart,
            staticAddressingDhcpServerDnsServer: argv.staticAddressingDhcpServerDnsServer,
            staticAddressingDhcpServerDnsServers: argv.staticAddressingDhcpServerDnsServers,
            staticAddressingSecondaryAddress: argv.staticAddressingSecondaryAddress,
            staticAddressingVirtualAddress: argv.staticAddressingVirtualAddress,
            vlanTag: argv.vlanTag,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/magic/sites/${argv.siteId}/lans/${argv.lanId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bondId !== undefined) setNestedValue(bodyData, ['bond_id'], argv.bondId);
      if (argv.isBreakout !== undefined) setNestedValue(bodyData, ['is_breakout'], argv.isBreakout);
      if (argv.isPrioritized !== undefined) setNestedValue(bodyData, ['is_prioritized'], argv.isPrioritized);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.natStaticPrefix !== undefined) setNestedValue(bodyData, ['nat', 'static_prefix'], argv.natStaticPrefix);
      if (argv.physport !== undefined) setNestedValue(bodyData, ['physport'], argv.physport);
      if (argv.staticAddressingAddress !== undefined)
        setNestedValue(bodyData, ['static_addressing', 'address'], argv.staticAddressingAddress);
      if (argv.staticAddressingDhcpRelayServerAddresses !== undefined)
        setNestedValue(
          bodyData,
          ['static_addressing', 'dhcp_relay', 'server_addresses'],
          argv.staticAddressingDhcpRelayServerAddresses,
        );
      if (argv.staticAddressingDhcpServerDhcpPoolEnd !== undefined)
        setNestedValue(
          bodyData,
          ['static_addressing', 'dhcp_server', 'dhcp_pool_end'],
          argv.staticAddressingDhcpServerDhcpPoolEnd,
        );
      if (argv.staticAddressingDhcpServerDhcpPoolStart !== undefined)
        setNestedValue(
          bodyData,
          ['static_addressing', 'dhcp_server', 'dhcp_pool_start'],
          argv.staticAddressingDhcpServerDhcpPoolStart,
        );
      if (argv.staticAddressingDhcpServerDnsServer !== undefined)
        setNestedValue(
          bodyData,
          ['static_addressing', 'dhcp_server', 'dns_server'],
          argv.staticAddressingDhcpServerDnsServer,
        );
      if (argv.staticAddressingDhcpServerDnsServers !== undefined)
        setNestedValue(
          bodyData,
          ['static_addressing', 'dhcp_server', 'dns_servers'],
          argv.staticAddressingDhcpServerDnsServers,
        );
      if (argv.staticAddressingSecondaryAddress !== undefined)
        setNestedValue(bodyData, ['static_addressing', 'secondary_address'], argv.staticAddressingSecondaryAddress);
      if (argv.staticAddressingVirtualAddress !== undefined)
        setNestedValue(bodyData, ['static_addressing', 'virtual_address'], argv.staticAddressingVirtualAddress);
      if (argv.vlanTag !== undefined) setNestedValue(bodyData, ['vlan_tag'], argv.vlanTag);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/magic/sites/${argv.siteId}/lans/${argv.lanId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
