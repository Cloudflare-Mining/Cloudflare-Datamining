/**
 * configurations-update command
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

interface ConfigurationsUpdateArgs {
  'settings-activity-log-enabled'?: boolean;
  'settings-antivirus-enabled-download-phase'?: boolean;
  'settings-antivirus-enabled-upload-phase'?: boolean;
  'settings-antivirus-fail-closed'?: boolean;
  'settings-antivirus-notification-settings-enabled'?: boolean;
  'settings-antivirus-notification-settings-include-context'?: boolean;
  'settings-antivirus-notification-settings-msg'?: string;
  'settings-antivirus-notification-settings-support-url'?: string;
  'settings-block-page-background-color'?: string;
  'settings-block-page-enabled'?: boolean;
  'settings-block-page-footer-text'?: string;
  'settings-block-page-header-text'?: string;
  'settings-block-page-include-context'?: boolean;
  'settings-block-page-logo-path'?: string;
  'settings-block-page-mailto-address'?: string;
  'settings-block-page-mailto-subject'?: string;
  'settings-block-page-mode'?: string;
  'settings-block-page-name'?: string;
  'settings-block-page-suppress-footer'?: boolean;
  'settings-block-page-target-uri'?: string;
  'settings-body-scanning-inspection-mode'?: string;
  'settings-browser-isolation-non-identity-enabled'?: boolean;
  'settings-browser-isolation-url-browser-isolation-enabled'?: boolean;
  'settings-certificate-id': string;
  'settings-custom-certificate-enabled': boolean;
  'settings-custom-certificate-id'?: string;
  'settings-extended-email-matching-enabled'?: boolean;
  'settings-fips-tls'?: boolean;
  'settings-host-selector-enabled'?: boolean;
  'settings-inspection-mode'?: string;
  'settings-protocol-detection-enabled'?: boolean;
  'settings-sandbox-enabled'?: boolean;
  'settings-sandbox-fallback-action'?: string;
  'settings-tls-decrypt-enabled'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConfigurationsUpdateArgs> = {
  command: 'configurations-update',
  describe: 'Update the current Zero Trust account configuration.',

  builder: (yargs: Argv): Argv<ConfigurationsUpdateArgs> => {
    return yargs
      .option('settings-activity-log-enabled', {
        type: 'boolean',
        description: 'Specify whether to log activity.',
        default: false,
      })
      .option('settings-antivirus-enabled-download-phase', {
        type: 'boolean',
        description: 'Specify whether to enable anti-virus scanning on downloads.',
        default: false,
      })
      .option('settings-antivirus-enabled-upload-phase', {
        type: 'boolean',
        description: 'Specify whether to enable anti-virus scanning on uploads.',
        default: false,
      })
      .option('settings-antivirus-fail-closed', {
        type: 'boolean',
        description: 'Specify whether to block requests for unscannable files.',
        default: false,
      })
      .option('settings-antivirus-notification-settings-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable notifications.',
        default: false,
      })
      .option('settings-antivirus-notification-settings-include-context', {
        type: 'boolean',
        description: 'Specify whether to include context information as query parameters.',
        default: false,
      })
      .option('settings-antivirus-notification-settings-msg', {
        type: 'string',
        description: 'Specify the message to show in the notification.',
        default: undefined,
      })
      .option('settings-antivirus-notification-settings-support-url', {
        type: 'string',
        description:
          'Specify a URL that directs users to more information. If unset, the notification opens a block page.',
        default: undefined,
      })
      .option('settings-block-page-background-color', {
        type: 'string',
        description:
          'Specify the block page background color in \`#rrggbb\` format when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable the custom block page.',
        default: false,
      })
      .option('settings-block-page-footer-text', {
        type: 'string',
        description: 'Specify the block page footer text when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-header-text', {
        type: 'string',
        description: 'Specify the block page header text when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-include-context', {
        type: 'boolean',
        description:
          'Specify whether to append context to target_uri as query parameters. This applies only when the mode is redirect_uri.',
        default: false,
      })
      .option('settings-block-page-logo-path', {
        type: 'string',
        description: 'Specify the full URL to the logo file when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-mailto-address', {
        type: 'string',
        description: 'Specify the admin email for users to contact when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-mailto-subject', {
        type: 'string',
        description:
          'Specify the subject line for emails created from the block page when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-mode', {
        type: 'string',
        description: 'Specify whether to redirect users to a Cloudflare-hosted block page or a customer-provided URI.',
        choices: ['customized_block_page', 'redirect_uri'] as const,
        default: undefined,
      })
      .option('settings-block-page-name', {
        type: 'string',
        description: 'Specify the block page title when the mode is customized_block_page.',
        default: undefined,
      })
      .option('settings-block-page-suppress-footer', {
        type: 'boolean',
        description:
          'Specify whether to suppress detailed information at the bottom of the block page when the mode is customized_block_page.',
        default: false,
      })
      .option('settings-block-page-target-uri', {
        type: 'string',
        description: 'Specify the URI to redirect users to when the mode is redirect_uri.',
        default: undefined,
      })
      .option('settings-body-scanning-inspection-mode', {
        type: 'string',
        description: 'Specify the inspection mode as either \`deep\` or \`shallow\`.',
        choices: ['deep', 'shallow'] as const,
        default: undefined,
      })
      .option('settings-browser-isolation-non-identity-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable non-identity onramp support for Browser Isolation.',
        default: false,
      })
      .option('settings-browser-isolation-url-browser-isolation-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable Clientless Browser Isolation.',
        default: false,
      })
      .option('settings-certificate-id', {
        type: 'string',
        description:
          "Specify the UUID of the certificate used for interception. Ensure the certificate is available at the edge(previously called 'active'). A nil UUID directs Cloudflare to use the Root CA.",
      })
      .option('settings-custom-certificate-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable a custom certificate authority for signing Gateway traffic.',
      })
      .option('settings-custom-certificate-id', {
        type: 'string',
        description: 'Specify the UUID of the certificate (ID from MTLS certificate store).',
        default: undefined,
      })
      .option('settings-extended-email-matching-enabled', {
        type: 'boolean',
        description:
          'Specify whether to match all variants of user emails (with + or . modifiers) used as criteria in Firewall policies.',
        default: false,
      })
      .option('settings-fips-tls', {
        type: 'boolean',
        description: 'Enforce cipher suites and TLS versions compliant with FIPS 140-2.',
        default: false,
      })
      .option('settings-host-selector-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable filtering via hosts for egress policies.',
        default: false,
      })
      .option('settings-inspection-mode', {
        type: 'string',
        description:
          'Define the proxy inspection mode.   1. static: Gateway applies static inspection to HTTP on TCP(80). With TLS decryption on, Gateway inspects HTTPS traffic on TCP(443) and UDP(443).   2. dynamic: Gateway applies protocol detection to inspect HTTP and HTTPS traffic on any port. TLS decryption must remain on to inspect HTTPS traffic.',
        choices: ['static', 'dynamic'] as const,
        default: undefined,
      })
      .option('settings-protocol-detection-enabled', {
        type: 'boolean',
        description: 'Specify whether to detect protocols from the initial bytes of client traffic.',
        default: false,
      })
      .option('settings-sandbox-enabled', {
        type: 'boolean',
        description: 'Specify whether to enable the sandbox.',
        default: false,
      })
      .option('settings-sandbox-fallback-action', {
        type: 'string',
        description: 'Specify the action to take when the system cannot scan the file.',
        choices: ['allow', 'block'] as const,
        default: undefined,
      })
      .option('settings-tls-decrypt-enabled', {
        type: 'boolean',
        description: 'Specify whether to inspect encrypted HTTP traffic.',
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
      .choices('settings-block-page-mode', ['customized_block_page', 'redirect_uri'] as const)
      .choices('settings-body-scanning-inspection-mode', ['deep', 'shallow'] as const)
      .choices('settings-inspection-mode', ['static', 'dynamic'] as const)
      .choices('settings-sandbox-fallback-action', ['allow', 'block'] as const) as Argv<ConfigurationsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigurationsUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust gateway configurations-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/configuration`,
          pathParams: {},
          body: {
            settingsActivityLogEnabled: argv.settingsActivityLogEnabled,
            settingsAntivirusEnabledDownloadPhase: argv.settingsAntivirusEnabledDownloadPhase,
            settingsAntivirusEnabledUploadPhase: argv.settingsAntivirusEnabledUploadPhase,
            settingsAntivirusFailClosed: argv.settingsAntivirusFailClosed,
            settingsAntivirusNotificationSettingsEnabled: argv.settingsAntivirusNotificationSettingsEnabled,
            settingsAntivirusNotificationSettingsIncludeContext:
              argv.settingsAntivirusNotificationSettingsIncludeContext,
            settingsAntivirusNotificationSettingsMsg: argv.settingsAntivirusNotificationSettingsMsg,
            settingsAntivirusNotificationSettingsSupportUrl: argv.settingsAntivirusNotificationSettingsSupportUrl,
            settingsBlockPageBackgroundColor: argv.settingsBlockPageBackgroundColor,
            settingsBlockPageEnabled: argv.settingsBlockPageEnabled,
            settingsBlockPageFooterText: argv.settingsBlockPageFooterText,
            settingsBlockPageHeaderText: argv.settingsBlockPageHeaderText,
            settingsBlockPageIncludeContext: argv.settingsBlockPageIncludeContext,
            settingsBlockPageLogoPath: argv.settingsBlockPageLogoPath,
            settingsBlockPageMailtoAddress: argv.settingsBlockPageMailtoAddress,
            settingsBlockPageMailtoSubject: argv.settingsBlockPageMailtoSubject,
            settingsBlockPageMode: argv.settingsBlockPageMode,
            settingsBlockPageName: argv.settingsBlockPageName,
            settingsBlockPageSuppressFooter: argv.settingsBlockPageSuppressFooter,
            settingsBlockPageTargetUri: argv.settingsBlockPageTargetUri,
            settingsBodyScanningInspectionMode: argv.settingsBodyScanningInspectionMode,
            settingsBrowserIsolationNonIdentityEnabled: argv.settingsBrowserIsolationNonIdentityEnabled,
            settingsBrowserIsolationUrlBrowserIsolationEnabled: argv.settingsBrowserIsolationUrlBrowserIsolationEnabled,
            settingsCertificateId: argv.settingsCertificateId,
            settingsCustomCertificateEnabled: argv.settingsCustomCertificateEnabled,
            settingsCustomCertificateId: argv.settingsCustomCertificateId,
            settingsExtendedEmailMatchingEnabled: argv.settingsExtendedEmailMatchingEnabled,
            settingsFipsTls: argv.settingsFipsTls,
            settingsHostSelectorEnabled: argv.settingsHostSelectorEnabled,
            settingsInspectionMode: argv.settingsInspectionMode,
            settingsProtocolDetectionEnabled: argv.settingsProtocolDetectionEnabled,
            settingsSandboxEnabled: argv.settingsSandboxEnabled,
            settingsSandboxFallbackAction: argv.settingsSandboxFallbackAction,
            settingsTlsDecryptEnabled: argv.settingsTlsDecryptEnabled,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/gateway/configuration`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.settingsActivityLogEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'activity_log', 'enabled'], argv.settingsActivityLogEnabled);
      if (argv.settingsAntivirusEnabledDownloadPhase !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'antivirus', 'enabled_download_phase'],
          argv.settingsAntivirusEnabledDownloadPhase,
        );
      if (argv.settingsAntivirusEnabledUploadPhase !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'antivirus', 'enabled_upload_phase'],
          argv.settingsAntivirusEnabledUploadPhase,
        );
      if (argv.settingsAntivirusFailClosed !== undefined)
        setNestedValue(bodyData, ['settings', 'antivirus', 'fail_closed'], argv.settingsAntivirusFailClosed);
      if (argv.settingsAntivirusNotificationSettingsEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'antivirus', 'notification_settings', 'enabled'],
          argv.settingsAntivirusNotificationSettingsEnabled,
        );
      if (argv.settingsAntivirusNotificationSettingsIncludeContext !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'antivirus', 'notification_settings', 'include_context'],
          argv.settingsAntivirusNotificationSettingsIncludeContext,
        );
      if (argv.settingsAntivirusNotificationSettingsMsg !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'antivirus', 'notification_settings', 'msg'],
          argv.settingsAntivirusNotificationSettingsMsg,
        );
      if (argv.settingsAntivirusNotificationSettingsSupportUrl !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'antivirus', 'notification_settings', 'support_url'],
          argv.settingsAntivirusNotificationSettingsSupportUrl,
        );
      if (argv.settingsBlockPageBackgroundColor !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'background_color'], argv.settingsBlockPageBackgroundColor);
      if (argv.settingsBlockPageEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'enabled'], argv.settingsBlockPageEnabled);
      if (argv.settingsBlockPageFooterText !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'footer_text'], argv.settingsBlockPageFooterText);
      if (argv.settingsBlockPageHeaderText !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'header_text'], argv.settingsBlockPageHeaderText);
      if (argv.settingsBlockPageIncludeContext !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'include_context'], argv.settingsBlockPageIncludeContext);
      if (argv.settingsBlockPageLogoPath !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'logo_path'], argv.settingsBlockPageLogoPath);
      if (argv.settingsBlockPageMailtoAddress !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'mailto_address'], argv.settingsBlockPageMailtoAddress);
      if (argv.settingsBlockPageMailtoSubject !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'mailto_subject'], argv.settingsBlockPageMailtoSubject);
      if (argv.settingsBlockPageMode !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'mode'], argv.settingsBlockPageMode);
      if (argv.settingsBlockPageName !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'name'], argv.settingsBlockPageName);
      if (argv.settingsBlockPageSuppressFooter !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'suppress_footer'], argv.settingsBlockPageSuppressFooter);
      if (argv.settingsBlockPageTargetUri !== undefined)
        setNestedValue(bodyData, ['settings', 'block_page', 'target_uri'], argv.settingsBlockPageTargetUri);
      if (argv.settingsBodyScanningInspectionMode !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'body_scanning', 'inspection_mode'],
          argv.settingsBodyScanningInspectionMode,
        );
      if (argv.settingsBrowserIsolationNonIdentityEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'browser_isolation', 'non_identity_enabled'],
          argv.settingsBrowserIsolationNonIdentityEnabled,
        );
      if (argv.settingsBrowserIsolationUrlBrowserIsolationEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'browser_isolation', 'url_browser_isolation_enabled'],
          argv.settingsBrowserIsolationUrlBrowserIsolationEnabled,
        );
      if (argv.settingsCertificateId !== undefined)
        setNestedValue(bodyData, ['settings', 'certificate', 'id'], argv.settingsCertificateId);
      if (argv.settingsCustomCertificateEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'custom_certificate', 'enabled'], argv.settingsCustomCertificateEnabled);
      if (argv.settingsCustomCertificateId !== undefined)
        setNestedValue(bodyData, ['settings', 'custom_certificate', 'id'], argv.settingsCustomCertificateId);
      if (argv.settingsExtendedEmailMatchingEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'extended_email_matching', 'enabled'],
          argv.settingsExtendedEmailMatchingEnabled,
        );
      if (argv.settingsFipsTls !== undefined)
        setNestedValue(bodyData, ['settings', 'fips', 'tls'], argv.settingsFipsTls);
      if (argv.settingsHostSelectorEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'host_selector', 'enabled'], argv.settingsHostSelectorEnabled);
      if (argv.settingsInspectionMode !== undefined)
        setNestedValue(bodyData, ['settings', 'inspection', 'mode'], argv.settingsInspectionMode);
      if (argv.settingsProtocolDetectionEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'protocol_detection', 'enabled'], argv.settingsProtocolDetectionEnabled);
      if (argv.settingsSandboxEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'sandbox', 'enabled'], argv.settingsSandboxEnabled);
      if (argv.settingsSandboxFallbackAction !== undefined)
        setNestedValue(bodyData, ['settings', 'sandbox', 'fallback_action'], argv.settingsSandboxFallbackAction);
      if (argv.settingsTlsDecryptEnabled !== undefined)
        setNestedValue(bodyData, ['settings', 'tls_decrypt', 'enabled'], argv.settingsTlsDecryptEnabled);
      const result = await client.put<unknown>(`/accounts/${accountId}/gateway/configuration`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
