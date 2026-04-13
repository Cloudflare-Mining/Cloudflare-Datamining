/**
 * settings-update command
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

interface SettingsUpdateArgs {
  'disable-for-time'?: number;
  'external-emergency-signal-enabled'?: boolean;
  'external-emergency-signal-fingerprint'?: string;
  'external-emergency-signal-interval'?: string;
  'external-emergency-signal-url'?: string;
  'gateway-proxy-enabled'?: boolean;
  'gateway-udp-proxy-enabled'?: boolean;
  'root-certificate-installation-enabled'?: boolean;
  'use-zt-virtual-ip'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SettingsUpdateArgs> = {
  command: 'settings-update',
  describe: 'Updates the current device settings for a Zero Trust account.',

  builder: (yargs: Argv): Argv<SettingsUpdateArgs> => {
    return yargs
      .option('disable-for-time', {
        type: 'number',
        description: 'Sets the time limit, in seconds, that a user can use an override code to bypass WARP.',
        default: undefined,
      })
      .option('external-emergency-signal-enabled', {
        type: 'boolean',
        description: 'Controls whether the external emergency disconnect feature is enabled.',
        default: false,
      })
      .option('external-emergency-signal-fingerprint', {
        type: 'string',
        description:
          "The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.",
        default: undefined,
      })
      .option('external-emergency-signal-interval', {
        type: 'string',
        description:
          'The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). Minimum 30 seconds.',
        default: undefined,
      })
      .option('external-emergency-signal-url', {
        type: 'string',
        description:
          'The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.',
        default: undefined,
      })
      .option('gateway-proxy-enabled', {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on TCP.',
        default: false,
      })
      .option('gateway-udp-proxy-enabled', {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on UDP.',
        default: false,
      })
      .option('root-certificate-installation-enabled', {
        type: 'boolean',
        description: 'Enable installation of cloudflare managed root certificate.',
        default: false,
      })
      .option('use-zt-virtual-ip', {
        type: 'boolean',
        description: 'Enable using CGNAT virtual IPv4.',
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
      }) as Argv<SettingsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SettingsUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices settings-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/devices/settings`,
          pathParams: {},
          body: {
            disableForTime: argv.disableForTime,
            externalEmergencySignalEnabled: argv.externalEmergencySignalEnabled,
            externalEmergencySignalFingerprint: argv.externalEmergencySignalFingerprint,
            externalEmergencySignalInterval: argv.externalEmergencySignalInterval,
            externalEmergencySignalUrl: argv.externalEmergencySignalUrl,
            gatewayProxyEnabled: argv.gatewayProxyEnabled,
            gatewayUdpProxyEnabled: argv.gatewayUdpProxyEnabled,
            rootCertificateInstallationEnabled: argv.rootCertificateInstallationEnabled,
            useZtVirtualIp: argv.useZtVirtualIp,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/devices/settings`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.disableForTime !== undefined) setNestedValue(bodyData, ['disable_for_time'], argv.disableForTime);
      if (argv.externalEmergencySignalEnabled !== undefined)
        setNestedValue(bodyData, ['external_emergency_signal_enabled'], argv.externalEmergencySignalEnabled);
      if (argv.externalEmergencySignalFingerprint !== undefined)
        setNestedValue(bodyData, ['external_emergency_signal_fingerprint'], argv.externalEmergencySignalFingerprint);
      if (argv.externalEmergencySignalInterval !== undefined)
        setNestedValue(bodyData, ['external_emergency_signal_interval'], argv.externalEmergencySignalInterval);
      if (argv.externalEmergencySignalUrl !== undefined)
        setNestedValue(bodyData, ['external_emergency_signal_url'], argv.externalEmergencySignalUrl);
      if (argv.gatewayProxyEnabled !== undefined)
        setNestedValue(bodyData, ['gateway_proxy_enabled'], argv.gatewayProxyEnabled);
      if (argv.gatewayUdpProxyEnabled !== undefined)
        setNestedValue(bodyData, ['gateway_udp_proxy_enabled'], argv.gatewayUdpProxyEnabled);
      if (argv.rootCertificateInstallationEnabled !== undefined)
        setNestedValue(bodyData, ['root_certificate_installation_enabled'], argv.rootCertificateInstallationEnabled);
      if (argv.useZtVirtualIp !== undefined) setNestedValue(bodyData, ['use_zt_virtual_ip'], argv.useZtVirtualIp);
      const result = await client.put<unknown>(`/accounts/${accountId}/devices/settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
