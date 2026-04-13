/**
 * policies-default-edit command
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

interface PoliciesDefaultEditArgs {
  'allow-mode-switch'?: boolean;
  'allow-updates'?: boolean;
  'allowed-to-leave'?: boolean;
  'auto-connect'?: number;
  'captive-portal'?: number;
  'disable-auto-fallback'?: boolean;
  'exclude-office-ips'?: boolean;
  'lan-allow-minutes'?: number;
  'lan-allow-subnet-size'?: number;
  'register-interface-ip-with-dns'?: boolean;
  'sccm-vpn-boundary-support'?: boolean;
  'service-mode-v2-mode'?: string;
  'service-mode-v2-port'?: number;
  'support-url'?: string;
  'switch-locked'?: boolean;
  'tunnel-protocol'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PoliciesDefaultEditArgs> = {
  command: 'policies-default-edit',
  describe: 'Updates the default device settings profile for an account.',

  builder: (yargs: Argv): Argv<PoliciesDefaultEditArgs> => {
    return yargs
      .option('allow-mode-switch', {
        type: 'boolean',
        description: 'Whether to allow the user to switch WARP between modes.',
        default: false,
      })
      .option('allow-updates', {
        type: 'boolean',
        description: 'Whether to receive update notifications when a new version of the client is available.',
        default: false,
      })
      .option('allowed-to-leave', {
        type: 'boolean',
        description: 'Whether to allow devices to leave the organization.',
        default: false,
      })
      .option('auto-connect', {
        type: 'number',
        description: 'The amount of time in seconds to reconnect after having been disabled.',
        default: undefined,
      })
      .option('captive-portal', {
        type: 'number',
        description: 'Turn on the captive portal after the specified amount of time.',
        default: undefined,
      })
      .option('disable-auto-fallback', {
        type: 'boolean',
        description:
          'If the \`dns_server\` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to \`true\`.',
        default: false,
      })
      .option('exclude-office-ips', {
        type: 'boolean',
        description: 'Whether to add Microsoft IPs to Split Tunnel exclusions.',
        default: false,
      })
      .option('lan-allow-minutes', {
        type: 'number',
        description:
          'The amount of time in minutes a user is allowed access to their LAN. A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.',
        default: undefined,
      })
      .option('lan-allow-subnet-size', {
        type: 'number',
        description:
          'The size of the subnet for the local access network. Note that this field is omitted from the response if null or unset.',
        default: undefined,
      })
      .option('register-interface-ip-with-dns', {
        type: 'boolean',
        description:
          "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.",
        default: false,
      })
      .option('sccm-vpn-boundary-support', {
        type: 'boolean',
        description:
          'Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).',
        default: false,
      })
      .option('service-mode-v2-mode', {
        type: 'string',
        description: 'The mode to run the WARP client under.',
        default: undefined,
      })
      .option('service-mode-v2-port', {
        type: 'number',
        description: 'The port number when used with proxy mode.',
        default: undefined,
      })
      .option('support-url', {
        type: 'string',
        description: 'The URL to launch when the Send Feedback button is clicked.',
        default: undefined,
      })
      .option('switch-locked', {
        type: 'boolean',
        description: 'Whether to allow the user to turn off the WARP switch and disconnect the client.',
        default: false,
      })
      .option('tunnel-protocol', {
        type: 'string',
        description: 'Determines which tunnel protocol to use.',
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
      }) as Argv<PoliciesDefaultEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoliciesDefaultEditArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices policies-default-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/devices/policy`,
          pathParams: {},
          body: {
            allowModeSwitch: argv.allowModeSwitch,
            allowUpdates: argv.allowUpdates,
            allowedToLeave: argv.allowedToLeave,
            autoConnect: argv.autoConnect,
            captivePortal: argv.captivePortal,
            disableAutoFallback: argv.disableAutoFallback,
            excludeOfficeIps: argv.excludeOfficeIps,
            lanAllowMinutes: argv.lanAllowMinutes,
            lanAllowSubnetSize: argv.lanAllowSubnetSize,
            registerInterfaceIpWithDns: argv.registerInterfaceIpWithDns,
            sccmVpnBoundarySupport: argv.sccmVpnBoundarySupport,
            serviceModeV2Mode: argv.serviceModeV2Mode,
            serviceModeV2Port: argv.serviceModeV2Port,
            supportUrl: argv.supportUrl,
            switchLocked: argv.switchLocked,
            tunnelProtocol: argv.tunnelProtocol,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/devices/policy`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowModeSwitch !== undefined) setNestedValue(bodyData, ['allow_mode_switch'], argv.allowModeSwitch);
      if (argv.allowUpdates !== undefined) setNestedValue(bodyData, ['allow_updates'], argv.allowUpdates);
      if (argv.allowedToLeave !== undefined) setNestedValue(bodyData, ['allowed_to_leave'], argv.allowedToLeave);
      if (argv.autoConnect !== undefined) setNestedValue(bodyData, ['auto_connect'], argv.autoConnect);
      if (argv.captivePortal !== undefined) setNestedValue(bodyData, ['captive_portal'], argv.captivePortal);
      if (argv.disableAutoFallback !== undefined)
        setNestedValue(bodyData, ['disable_auto_fallback'], argv.disableAutoFallback);
      if (argv.excludeOfficeIps !== undefined) setNestedValue(bodyData, ['exclude_office_ips'], argv.excludeOfficeIps);
      if (argv.lanAllowMinutes !== undefined) setNestedValue(bodyData, ['lan_allow_minutes'], argv.lanAllowMinutes);
      if (argv.lanAllowSubnetSize !== undefined)
        setNestedValue(bodyData, ['lan_allow_subnet_size'], argv.lanAllowSubnetSize);
      if (argv.registerInterfaceIpWithDns !== undefined)
        setNestedValue(bodyData, ['register_interface_ip_with_dns'], argv.registerInterfaceIpWithDns);
      if (argv.sccmVpnBoundarySupport !== undefined)
        setNestedValue(bodyData, ['sccm_vpn_boundary_support'], argv.sccmVpnBoundarySupport);
      if (argv.serviceModeV2Mode !== undefined)
        setNestedValue(bodyData, ['service_mode_v2', 'mode'], argv.serviceModeV2Mode);
      if (argv.serviceModeV2Port !== undefined)
        setNestedValue(bodyData, ['service_mode_v2', 'port'], argv.serviceModeV2Port);
      if (argv.supportUrl !== undefined) setNestedValue(bodyData, ['support_url'], argv.supportUrl);
      if (argv.switchLocked !== undefined) setNestedValue(bodyData, ['switch_locked'], argv.switchLocked);
      if (argv.tunnelProtocol !== undefined) setNestedValue(bodyData, ['tunnel_protocol'], argv.tunnelProtocol);
      const result = await client.patch<unknown>(`/accounts/${accountId}/devices/policy`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
