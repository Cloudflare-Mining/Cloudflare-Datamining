/**
 * rules-create command
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

interface RulesCreateArgs {
  action: string;
  description?: string;
  'device-posture'?: string;
  enabled?: boolean;
  'expiration-duration'?: number;
  filters?: string;
  identity?: string;
  name: string;
  precedence?: number;
  'rule-settings-allow-child-bypass'?: boolean;
  'rule-settings-audit-ssh-command-logging'?: boolean;
  'rule-settings-biso-admin-controls-copy'?: string;
  'rule-settings-biso-admin-controls-dcp'?: boolean;
  'rule-settings-biso-admin-controls-dd'?: boolean;
  'rule-settings-biso-admin-controls-dk'?: boolean;
  'rule-settings-biso-admin-controls-download'?: string;
  'rule-settings-biso-admin-controls-dp'?: boolean;
  'rule-settings-biso-admin-controls-du'?: boolean;
  'rule-settings-biso-admin-controls-keyboard'?: string;
  'rule-settings-biso-admin-controls-paste'?: string;
  'rule-settings-biso-admin-controls-printing'?: string;
  'rule-settings-biso-admin-controls-upload'?: string;
  'rule-settings-biso-admin-controls-version'?: string;
  'rule-settings-block-page-include-context'?: boolean;
  'rule-settings-block-page-target-uri': string;
  'rule-settings-block-page-enabled'?: boolean;
  'rule-settings-block-reason'?: string;
  'rule-settings-bypass-parent-rule'?: boolean;
  'rule-settings-check-session-duration'?: string;
  'rule-settings-check-session-enforce'?: boolean;
  'rule-settings-egress-ipv4'?: string;
  'rule-settings-egress-ipv4-fallback'?: string;
  'rule-settings-egress-ipv6'?: string;
  'rule-settings-forensic-copy-enabled'?: boolean;
  'rule-settings-ignore-cname-category-matches'?: boolean;
  'rule-settings-insecure-disable-dnssec-validation'?: boolean;
  'rule-settings-ip-categories'?: boolean;
  'rule-settings-ip-indicator-feeds'?: boolean;
  'rule-settings-l4override-ip'?: string;
  'rule-settings-l4override-port'?: number;
  'rule-settings-notification-settings-enabled'?: boolean;
  'rule-settings-notification-settings-include-context'?: boolean;
  'rule-settings-notification-settings-msg'?: string;
  'rule-settings-notification-settings-support-url'?: string;
  'rule-settings-override-host'?: string;
  'rule-settings-override-ips'?: string;
  'rule-settings-payload-log-enabled'?: boolean;
  'rule-settings-quarantine-file-types'?: string;
  'rule-settings-redirect-include-context'?: boolean;
  'rule-settings-redirect-preserve-path-and-query'?: boolean;
  'rule-settings-redirect-target-uri': string;
  'rule-settings-resolve-dns-internally-fallback'?: string;
  'rule-settings-resolve-dns-internally-view-id'?: string;
  'rule-settings-resolve-dns-through-cloudflare'?: boolean;
  'rule-settings-untrusted-cert-action'?: string;
  'schedule-fri'?: string;
  'schedule-mon'?: string;
  'schedule-sat'?: string;
  'schedule-sun'?: string;
  'schedule-thu'?: string;
  'schedule-time-zone'?: string;
  'schedule-tue'?: string;
  'schedule-wed'?: string;
  traffic?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RulesCreateArgs> = {
  command: 'rules-create',
  describe: 'Create a new Zero Trust Gateway rule.',

  builder: (yargs: Argv): Argv<RulesCreateArgs> => {
    return yargs
      .option('action', {
        type: 'string',
        description:
          'Specify the action to perform when the associated traffic, identity, and device posture expressions either absent or evaluate to \`true\`.',
        choices: [
          'on',
          'off',
          'allow',
          'block',
          'scan',
          'noscan',
          'safesearch',
          'ytrestricted',
          'isolate',
          'noisolate',
          'override',
          'l4_override',
          'egress',
          'resolve',
          'quarantine',
          'redirect',
        ] as const,
      })
      .option('description', {
        type: 'string',
        description: 'Specify the rule description.',
        default: undefined,
      })
      .option('device-posture', {
        type: 'string',
        description:
          'Specify the wirefilter expression used for device posture check. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Specify whether the rule is enabled.',
        default: false,
      })
      .option('expiration-duration', {
        type: 'number',
        description:
          'Defines the default duration a policy active in minutes. Must set in order to use the \`reset_expiration\` endpoint on this rule.',
        default: undefined,
      })
      .option('filters', {
        type: 'string',
        description:
          'Specify the protocol or layer to evaluate the traffic, identity, and device posture expressions. Can only contain a single value.',
        default: undefined,
      })
      .option('identity', {
        type: 'string',
        description:
          'Specify the wirefilter expression used for identity matching. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Specify the rule name.',
      })
      .option('precedence', {
        type: 'number',
        description:
          'Set the order of your rules. Lower values indicate higher precedence. At each processing phase, evaluate applicable rules in ascending order of this value. Refer to [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform) to manage precedence via Terraform.',
        default: undefined,
      })
      .option('rule-settings-allow-child-bypass', {
        type: 'boolean',
        description:
          'Set to enable MSP children to bypass this rule. Only parent MSP accounts can set this. this rule. Settable for all types of rules.',
        default: false,
      })
      .option('rule-settings-audit-ssh-command-logging', {
        type: 'boolean',
        description: 'Enable SSH command logging.',
        default: false,
      })
      .option('rule-settings-biso-admin-controls-copy', {
        type: 'string',
        description:
          'Configure copy behavior. If set to remote_only, users cannot copy isolated content from the remote browser to the local clipboard. If this field is absent, copying remains enabled. Applies only when version == "v2".',
        choices: ['enabled', 'disabled', 'remote_only'] as const,
        default: undefined,
      })
      .option('rule-settings-biso-admin-controls-dcp', {
        type: 'boolean',
        description: 'Set to false to enable copy-pasting. Only applies when \`version == "v1"\`.',
        default: false,
      })
      .option('rule-settings-biso-admin-controls-dd', {
        type: 'boolean',
        description: 'Set to false to enable downloading. Only applies when \`version == "v1"\`.',
        default: false,
      })
      .option('rule-settings-biso-admin-controls-dk', {
        type: 'boolean',
        description: 'Set to false to enable keyboard usage. Only applies when \`version == "v1"\`.',
        default: false,
      })
      .option('rule-settings-biso-admin-controls-download', {
        type: 'string',
        description:
          'Configure download behavior. When set to remote_only, users can view downloads but cannot save them. Applies only when version == "v2".',
        choices: ['enabled', 'disabled', 'remote_only'] as const,
        default: undefined,
      })
      .option('rule-settings-biso-admin-controls-dp', {
        type: 'boolean',
        description: 'Set to false to enable printing. Only applies when \`version == "v1"\`.',
        default: false,
      })
      .option('rule-settings-biso-admin-controls-du', {
        type: 'boolean',
        description: 'Set to false to enable uploading. Only applies when \`version == "v1"\`.',
        default: false,
      })
      .option('rule-settings-biso-admin-controls-keyboard', {
        type: 'string',
        description:
          'Configure keyboard usage behavior. If this field is absent, keyboard usage remains enabled. Applies only when version == "v2".',
        choices: ['enabled', 'disabled'] as const,
        default: undefined,
      })
      .option('rule-settings-biso-admin-controls-paste', {
        type: 'string',
        description:
          'Configure paste behavior. If set to remote_only, users cannot paste content from the local clipboard into isolated pages. If this field is absent, pasting remains enabled. Applies only when version == "v2".',
        choices: ['enabled', 'disabled', 'remote_only'] as const,
        default: undefined,
      })
      .option('rule-settings-biso-admin-controls-printing', {
        type: 'string',
        description: 'Configure print behavior. Default, Printing is enabled. Applies only when version == "v2".',
        choices: ['enabled', 'disabled'] as const,
        default: undefined,
      })
      .option('rule-settings-biso-admin-controls-upload', {
        type: 'string',
        description:
          'Configure upload behavior. If this field is absent, uploading remains enabled. Applies only when version == "v2".',
        choices: ['enabled', 'disabled'] as const,
        default: undefined,
      })
      .option('rule-settings-biso-admin-controls-version', {
        type: 'string',
        description: 'Indicate which version of the browser isolation controls should apply.',
        choices: ['v1', 'v2'] as const,
        default: undefined,
      })
      .option('rule-settings-block-page-include-context', {
        type: 'boolean',
        description: 'Specify whether to pass the context information as query parameters.',
        default: false,
      })
      .option('rule-settings-block-page-target-uri', {
        type: 'string',
        description: 'Specify the URI to which the user is redirected.',
      })
      .option('rule-settings-block-page-enabled', {
        type: 'boolean',
        description: 'Enable the custom block page. Settable only for \`dns\` rules with action \`block\`.',
        default: false,
      })
      .option('rule-settings-block-reason', {
        type: 'string',
        description:
          'Explain why the rule blocks the request. The custom block page shows this text (if enabled). Settable only for \`dns\`, \`l4\`, and \`http\` rules when the action set to \`block\`.',
        default: undefined,
      })
      .option('rule-settings-bypass-parent-rule', {
        type: 'boolean',
        description:
          "Set to enable MSP accounts to bypass their parent's rules. Only MSP child accounts can set this. Settable for all types of rules.",
        default: false,
      })
      .option('rule-settings-check-session-duration', {
        type: 'string',
        description:
          'Sets the required session freshness threshold. The API returns a normalized version of this value.',
        default: undefined,
      })
      .option('rule-settings-check-session-enforce', {
        type: 'boolean',
        description: 'Enable session enforcement.',
        default: false,
      })
      .option('rule-settings-egress-ipv4', {
        type: 'string',
        description: 'Specify the IPv4 address to use for egress.',
        default: undefined,
      })
      .option('rule-settings-egress-ipv4-fallback', {
        type: 'string',
        description:
          "Specify the fallback IPv4 address to use for egress when the primary IPv4 fails. Set '0.0.0.0' to indicate local egress via WARP IPs.",
        default: undefined,
      })
      .option('rule-settings-egress-ipv6', {
        type: 'string',
        description: 'Specify the IPv6 range to use for egress.',
        default: undefined,
      })
      .option('rule-settings-forensic-copy-enabled', {
        type: 'boolean',
        description: 'Enable sending the copy to storage.',
        default: false,
      })
      .option('rule-settings-ignore-cname-category-matches', {
        type: 'boolean',
        description:
          'Ignore category matches at CNAME domains in a response. When off, evaluate categories in this rule against all CNAME domain categories in the response. Settable only for \`dns\` and \`dns_resolver\` rules.',
        default: false,
      })
      .option('rule-settings-insecure-disable-dnssec-validation', {
        type: 'boolean',
        description:
          'Specify whether to disable DNSSEC validation (for Allow actions) [INSECURE]. Settable only for \`dns\` rules.',
        default: false,
      })
      .option('rule-settings-ip-categories', {
        type: 'boolean',
        description:
          'Enable IPs in DNS resolver category blocks. The system blocks only domain name categories unless you enable this setting. Settable only for \`dns\` and \`dns_resolver\` rules.',
        default: false,
      })
      .option('rule-settings-ip-indicator-feeds', {
        type: 'boolean',
        description:
          'Indicates whether to include IPs in DNS resolver indicator feed blocks. Default, indicator feeds block only domain names. Settable only for \`dns\` and \`dns_resolver\` rules.',
        default: false,
      })
      .option('rule-settings-l4override-ip', {
        type: 'string',
        description: 'Defines the IPv4 or IPv6 address.',
        default: undefined,
      })
      .option('rule-settings-l4override-port', {
        type: 'number',
        description: 'Defines a port number to use for TCP/UDP overrides.',
        default: undefined,
      })
      .option('rule-settings-notification-settings-enabled', {
        type: 'boolean',
        description: 'Enable notification.',
        default: false,
      })
      .option('rule-settings-notification-settings-include-context', {
        type: 'boolean',
        description: 'Indicates whether to pass the context information as query parameters.',
        default: false,
      })
      .option('rule-settings-notification-settings-msg', {
        type: 'string',
        description: 'Customize the message shown in the notification.',
        default: undefined,
      })
      .option('rule-settings-notification-settings-support-url', {
        type: 'string',
        description:
          'Defines an optional URL to direct users to additional information. If unset, the notification opens a block page.',
        default: undefined,
      })
      .option('rule-settings-override-host', {
        type: 'string',
        description:
          'Defines a hostname for override, for the matching DNS queries. Settable only for \`dns\` rules with the action set to \`override\`.',
        default: undefined,
      })
      .option('rule-settings-override-ips', {
        type: 'string',
        description:
          'Defines a an IP or set of IPs for overriding matched DNS queries. Settable only for \`dns\` rules with the action set to \`override\`.',
        default: undefined,
      })
      .option('rule-settings-payload-log-enabled', {
        type: 'boolean',
        description: 'Enable DLP payload logging for this rule.',
        default: false,
      })
      .option('rule-settings-quarantine-file-types', {
        type: 'string',
        description: 'Specify the types of files to sandbox.',
        default: undefined,
      })
      .option('rule-settings-redirect-include-context', {
        type: 'boolean',
        description: 'Specify whether to pass the context information as query parameters.',
        default: false,
      })
      .option('rule-settings-redirect-preserve-path-and-query', {
        type: 'boolean',
        description: 'Specify whether to append the path and query parameters from the original request to target_uri.',
        default: false,
      })
      .option('rule-settings-redirect-target-uri', {
        type: 'string',
        description: 'Specify the URI to which the user is redirected.',
      })
      .option('rule-settings-resolve-dns-internally-fallback', {
        type: 'string',
        description:
          "Specify the fallback behavior to apply when the internal DNS response code differs from 'NOERROR' or when the response data contains only CNAME records for 'A' or 'AAAA' queries.",
        choices: ['none', 'public_dns'] as const,
        default: undefined,
      })
      .option('rule-settings-resolve-dns-internally-view-id', {
        type: 'string',
        description: 'Specify the internal DNS view identifier to pass to the internal DNS service.',
        default: undefined,
      })
      .option('rule-settings-resolve-dns-through-cloudflare', {
        type: 'boolean',
        description:
          "Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS resolver. Cannot set when 'dns_resolvers' specified or 'resolve_dns_internally' is set. Only valid when a rule's action set to 'resolve'. Settable only for \`dns_resolver\` rules.",
        default: false,
      })
      .option('rule-settings-untrusted-cert-action', {
        type: 'string',
        description:
          'Defines the action performed when an untrusted certificate seen. The default action an error with HTTP code 526.',
        choices: ['pass_through', 'block', 'error'] as const,
        default: undefined,
      })
      .option('schedule-fri', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Fridays, in the increasing order from 00:00-24:00.  If this parameter omitted, the rule is deactivated on Fridays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('schedule-mon', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Mondays, in the increasing order from 00:00-24:00(capped at maximum of 6 time splits). If this parameter omitted, the rule is deactivated on Mondays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('schedule-sat', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Saturdays, in the increasing order from 00:00-24:00.  If this parameter omitted, the rule is deactivated on Saturdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('schedule-sun', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Sundays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Sundays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('schedule-thu', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Thursdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Thursdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('schedule-time-zone', {
        type: 'string',
        description:
          "Specify the time zone for rule evaluation. When a [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) is provided, Gateway always uses the current time for that time zone. When this parameter is omitted, Gateway uses the time zone determined from the user's IP address. Colo time zone is used when the user's IP address does not resolve to a location.",
        default: undefined,
      })
      .option('schedule-tue', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Tuesdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Tuesdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('schedule-wed', {
        type: 'string',
        description:
          'Specify the time intervals when the rule is active on Wednesdays, in the increasing order from 00:00-24:00. If this parameter omitted, the rule is deactivated on Wednesdays. API returns a formatted version of this string, which may cause Terraform drift if a unformatted value is used.',
        default: undefined,
      })
      .option('traffic', {
        type: 'string',
        description:
          'Specify the wirefilter expression used for traffic matching. The API automatically formats and sanitizes expressions before storing them. To prevent Terraform state drift, use the formatted expression returned in the API response.',
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
      .choices('action', [
        'on',
        'off',
        'allow',
        'block',
        'scan',
        'noscan',
        'safesearch',
        'ytrestricted',
        'isolate',
        'noisolate',
        'override',
        'l4_override',
        'egress',
        'resolve',
        'quarantine',
        'redirect',
      ] as const)
      .choices('rule-settings-biso-admin-controls-copy', ['enabled', 'disabled', 'remote_only'] as const)
      .choices('rule-settings-biso-admin-controls-download', ['enabled', 'disabled', 'remote_only'] as const)
      .choices('rule-settings-biso-admin-controls-keyboard', ['enabled', 'disabled'] as const)
      .choices('rule-settings-biso-admin-controls-paste', ['enabled', 'disabled', 'remote_only'] as const)
      .choices('rule-settings-biso-admin-controls-printing', ['enabled', 'disabled'] as const)
      .choices('rule-settings-biso-admin-controls-upload', ['enabled', 'disabled'] as const)
      .choices('rule-settings-biso-admin-controls-version', ['v1', 'v2'] as const)
      .choices('rule-settings-resolve-dns-internally-fallback', ['none', 'public_dns'] as const)
      .choices('rule-settings-untrusted-cert-action', [
        'pass_through',
        'block',
        'error',
      ] as const) as Argv<RulesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RulesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust gateway rules-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/rules`,
          pathParams: {},
          body: {
            action: argv.action,
            description: argv.description,
            devicePosture: argv.devicePosture,
            enabled: argv.enabled,
            expirationDuration: argv.expirationDuration,
            filters: argv.filters,
            identity: argv.identity,
            name: argv.name,
            precedence: argv.precedence,
            ruleSettingsAllowChildBypass: argv.ruleSettingsAllowChildBypass,
            ruleSettingsAuditSshCommandLogging: argv.ruleSettingsAuditSshCommandLogging,
            ruleSettingsBisoAdminControlsCopy: argv.ruleSettingsBisoAdminControlsCopy,
            ruleSettingsBisoAdminControlsDcp: argv.ruleSettingsBisoAdminControlsDcp,
            ruleSettingsBisoAdminControlsDd: argv.ruleSettingsBisoAdminControlsDd,
            ruleSettingsBisoAdminControlsDk: argv.ruleSettingsBisoAdminControlsDk,
            ruleSettingsBisoAdminControlsDownload: argv.ruleSettingsBisoAdminControlsDownload,
            ruleSettingsBisoAdminControlsDp: argv.ruleSettingsBisoAdminControlsDp,
            ruleSettingsBisoAdminControlsDu: argv.ruleSettingsBisoAdminControlsDu,
            ruleSettingsBisoAdminControlsKeyboard: argv.ruleSettingsBisoAdminControlsKeyboard,
            ruleSettingsBisoAdminControlsPaste: argv.ruleSettingsBisoAdminControlsPaste,
            ruleSettingsBisoAdminControlsPrinting: argv.ruleSettingsBisoAdminControlsPrinting,
            ruleSettingsBisoAdminControlsUpload: argv.ruleSettingsBisoAdminControlsUpload,
            ruleSettingsBisoAdminControlsVersion: argv.ruleSettingsBisoAdminControlsVersion,
            ruleSettingsBlockPageIncludeContext: argv.ruleSettingsBlockPageIncludeContext,
            ruleSettingsBlockPageTargetUri: argv.ruleSettingsBlockPageTargetUri,
            ruleSettingsBlockPageEnabled: argv.ruleSettingsBlockPageEnabled,
            ruleSettingsBlockReason: argv.ruleSettingsBlockReason,
            ruleSettingsBypassParentRule: argv.ruleSettingsBypassParentRule,
            ruleSettingsCheckSessionDuration: argv.ruleSettingsCheckSessionDuration,
            ruleSettingsCheckSessionEnforce: argv.ruleSettingsCheckSessionEnforce,
            ruleSettingsEgressIpv4: argv.ruleSettingsEgressIpv4,
            ruleSettingsEgressIpv4Fallback: argv.ruleSettingsEgressIpv4Fallback,
            ruleSettingsEgressIpv6: argv.ruleSettingsEgressIpv6,
            ruleSettingsForensicCopyEnabled: argv.ruleSettingsForensicCopyEnabled,
            ruleSettingsIgnoreCnameCategoryMatches: argv.ruleSettingsIgnoreCnameCategoryMatches,
            ruleSettingsInsecureDisableDnssecValidation: argv.ruleSettingsInsecureDisableDnssecValidation,
            ruleSettingsIpCategories: argv.ruleSettingsIpCategories,
            ruleSettingsIpIndicatorFeeds: argv.ruleSettingsIpIndicatorFeeds,
            ruleSettingsL4overrideIp: argv.ruleSettingsL4overrideIp,
            ruleSettingsL4overridePort: argv.ruleSettingsL4overridePort,
            ruleSettingsNotificationSettingsEnabled: argv.ruleSettingsNotificationSettingsEnabled,
            ruleSettingsNotificationSettingsIncludeContext: argv.ruleSettingsNotificationSettingsIncludeContext,
            ruleSettingsNotificationSettingsMsg: argv.ruleSettingsNotificationSettingsMsg,
            ruleSettingsNotificationSettingsSupportUrl: argv.ruleSettingsNotificationSettingsSupportUrl,
            ruleSettingsOverrideHost: argv.ruleSettingsOverrideHost,
            ruleSettingsOverrideIps: argv.ruleSettingsOverrideIps,
            ruleSettingsPayloadLogEnabled: argv.ruleSettingsPayloadLogEnabled,
            ruleSettingsQuarantineFileTypes: argv.ruleSettingsQuarantineFileTypes,
            ruleSettingsRedirectIncludeContext: argv.ruleSettingsRedirectIncludeContext,
            ruleSettingsRedirectPreservePathAndQuery: argv.ruleSettingsRedirectPreservePathAndQuery,
            ruleSettingsRedirectTargetUri: argv.ruleSettingsRedirectTargetUri,
            ruleSettingsResolveDnsInternallyFallback: argv.ruleSettingsResolveDnsInternallyFallback,
            ruleSettingsResolveDnsInternallyViewId: argv.ruleSettingsResolveDnsInternallyViewId,
            ruleSettingsResolveDnsThroughCloudflare: argv.ruleSettingsResolveDnsThroughCloudflare,
            ruleSettingsUntrustedCertAction: argv.ruleSettingsUntrustedCertAction,
            scheduleFri: argv.scheduleFri,
            scheduleMon: argv.scheduleMon,
            scheduleSat: argv.scheduleSat,
            scheduleSun: argv.scheduleSun,
            scheduleThu: argv.scheduleThu,
            scheduleTimeZone: argv.scheduleTimeZone,
            scheduleTue: argv.scheduleTue,
            scheduleWed: argv.scheduleWed,
            traffic: argv.traffic,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/gateway/rules`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.devicePosture !== undefined) setNestedValue(bodyData, ['device_posture'], argv.devicePosture);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.expirationDuration !== undefined)
        setNestedValue(bodyData, ['expiration', 'duration'], argv.expirationDuration);
      if (argv.filters !== undefined) setNestedValue(bodyData, ['filters'], argv.filters);
      if (argv.identity !== undefined) setNestedValue(bodyData, ['identity'], argv.identity);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.precedence !== undefined) setNestedValue(bodyData, ['precedence'], argv.precedence);
      if (argv.ruleSettingsAllowChildBypass !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'allow_child_bypass'], argv.ruleSettingsAllowChildBypass);
      if (argv.ruleSettingsAuditSshCommandLogging !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'audit_ssh', 'command_logging'],
          argv.ruleSettingsAuditSshCommandLogging,
        );
      if (argv.ruleSettingsBisoAdminControlsCopy !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'copy'],
          argv.ruleSettingsBisoAdminControlsCopy,
        );
      if (argv.ruleSettingsBisoAdminControlsDcp !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'dcp'],
          argv.ruleSettingsBisoAdminControlsDcp,
        );
      if (argv.ruleSettingsBisoAdminControlsDd !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'biso_admin_controls', 'dd'], argv.ruleSettingsBisoAdminControlsDd);
      if (argv.ruleSettingsBisoAdminControlsDk !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'biso_admin_controls', 'dk'], argv.ruleSettingsBisoAdminControlsDk);
      if (argv.ruleSettingsBisoAdminControlsDownload !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'download'],
          argv.ruleSettingsBisoAdminControlsDownload,
        );
      if (argv.ruleSettingsBisoAdminControlsDp !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'biso_admin_controls', 'dp'], argv.ruleSettingsBisoAdminControlsDp);
      if (argv.ruleSettingsBisoAdminControlsDu !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'biso_admin_controls', 'du'], argv.ruleSettingsBisoAdminControlsDu);
      if (argv.ruleSettingsBisoAdminControlsKeyboard !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'keyboard'],
          argv.ruleSettingsBisoAdminControlsKeyboard,
        );
      if (argv.ruleSettingsBisoAdminControlsPaste !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'paste'],
          argv.ruleSettingsBisoAdminControlsPaste,
        );
      if (argv.ruleSettingsBisoAdminControlsPrinting !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'printing'],
          argv.ruleSettingsBisoAdminControlsPrinting,
        );
      if (argv.ruleSettingsBisoAdminControlsUpload !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'upload'],
          argv.ruleSettingsBisoAdminControlsUpload,
        );
      if (argv.ruleSettingsBisoAdminControlsVersion !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'biso_admin_controls', 'version'],
          argv.ruleSettingsBisoAdminControlsVersion,
        );
      if (argv.ruleSettingsBlockPageIncludeContext !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'block_page', 'include_context'],
          argv.ruleSettingsBlockPageIncludeContext,
        );
      if (argv.ruleSettingsBlockPageTargetUri !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'block_page', 'target_uri'], argv.ruleSettingsBlockPageTargetUri);
      if (argv.ruleSettingsBlockPageEnabled !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'block_page_enabled'], argv.ruleSettingsBlockPageEnabled);
      if (argv.ruleSettingsBlockReason !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'block_reason'], argv.ruleSettingsBlockReason);
      if (argv.ruleSettingsBypassParentRule !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'bypass_parent_rule'], argv.ruleSettingsBypassParentRule);
      if (argv.ruleSettingsCheckSessionDuration !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'check_session', 'duration'], argv.ruleSettingsCheckSessionDuration);
      if (argv.ruleSettingsCheckSessionEnforce !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'check_session', 'enforce'], argv.ruleSettingsCheckSessionEnforce);
      if (argv.ruleSettingsEgressIpv4 !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'egress', 'ipv4'], argv.ruleSettingsEgressIpv4);
      if (argv.ruleSettingsEgressIpv4Fallback !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'egress', 'ipv4_fallback'], argv.ruleSettingsEgressIpv4Fallback);
      if (argv.ruleSettingsEgressIpv6 !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'egress', 'ipv6'], argv.ruleSettingsEgressIpv6);
      if (argv.ruleSettingsForensicCopyEnabled !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'forensic_copy', 'enabled'], argv.ruleSettingsForensicCopyEnabled);
      if (argv.ruleSettingsIgnoreCnameCategoryMatches !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'ignore_cname_category_matches'],
          argv.ruleSettingsIgnoreCnameCategoryMatches,
        );
      if (argv.ruleSettingsInsecureDisableDnssecValidation !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'insecure_disable_dnssec_validation'],
          argv.ruleSettingsInsecureDisableDnssecValidation,
        );
      if (argv.ruleSettingsIpCategories !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'ip_categories'], argv.ruleSettingsIpCategories);
      if (argv.ruleSettingsIpIndicatorFeeds !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'ip_indicator_feeds'], argv.ruleSettingsIpIndicatorFeeds);
      if (argv.ruleSettingsL4overrideIp !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'l4override', 'ip'], argv.ruleSettingsL4overrideIp);
      if (argv.ruleSettingsL4overridePort !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'l4override', 'port'], argv.ruleSettingsL4overridePort);
      if (argv.ruleSettingsNotificationSettingsEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'notification_settings', 'enabled'],
          argv.ruleSettingsNotificationSettingsEnabled,
        );
      if (argv.ruleSettingsNotificationSettingsIncludeContext !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'notification_settings', 'include_context'],
          argv.ruleSettingsNotificationSettingsIncludeContext,
        );
      if (argv.ruleSettingsNotificationSettingsMsg !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'notification_settings', 'msg'],
          argv.ruleSettingsNotificationSettingsMsg,
        );
      if (argv.ruleSettingsNotificationSettingsSupportUrl !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'notification_settings', 'support_url'],
          argv.ruleSettingsNotificationSettingsSupportUrl,
        );
      if (argv.ruleSettingsOverrideHost !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'override_host'], argv.ruleSettingsOverrideHost);
      if (argv.ruleSettingsOverrideIps !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'override_ips'], argv.ruleSettingsOverrideIps);
      if (argv.ruleSettingsPayloadLogEnabled !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'payload_log', 'enabled'], argv.ruleSettingsPayloadLogEnabled);
      if (argv.ruleSettingsQuarantineFileTypes !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'quarantine', 'file_types'], argv.ruleSettingsQuarantineFileTypes);
      if (argv.ruleSettingsRedirectIncludeContext !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'redirect', 'include_context'],
          argv.ruleSettingsRedirectIncludeContext,
        );
      if (argv.ruleSettingsRedirectPreservePathAndQuery !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'redirect', 'preserve_path_and_query'],
          argv.ruleSettingsRedirectPreservePathAndQuery,
        );
      if (argv.ruleSettingsRedirectTargetUri !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'redirect', 'target_uri'], argv.ruleSettingsRedirectTargetUri);
      if (argv.ruleSettingsResolveDnsInternallyFallback !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'resolve_dns_internally', 'fallback'],
          argv.ruleSettingsResolveDnsInternallyFallback,
        );
      if (argv.ruleSettingsResolveDnsInternallyViewId !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'resolve_dns_internally', 'view_id'],
          argv.ruleSettingsResolveDnsInternallyViewId,
        );
      if (argv.ruleSettingsResolveDnsThroughCloudflare !== undefined)
        setNestedValue(
          bodyData,
          ['rule_settings', 'resolve_dns_through_cloudflare'],
          argv.ruleSettingsResolveDnsThroughCloudflare,
        );
      if (argv.ruleSettingsUntrustedCertAction !== undefined)
        setNestedValue(bodyData, ['rule_settings', 'untrusted_cert', 'action'], argv.ruleSettingsUntrustedCertAction);
      if (argv.scheduleFri !== undefined) setNestedValue(bodyData, ['schedule', 'fri'], argv.scheduleFri);
      if (argv.scheduleMon !== undefined) setNestedValue(bodyData, ['schedule', 'mon'], argv.scheduleMon);
      if (argv.scheduleSat !== undefined) setNestedValue(bodyData, ['schedule', 'sat'], argv.scheduleSat);
      if (argv.scheduleSun !== undefined) setNestedValue(bodyData, ['schedule', 'sun'], argv.scheduleSun);
      if (argv.scheduleThu !== undefined) setNestedValue(bodyData, ['schedule', 'thu'], argv.scheduleThu);
      if (argv.scheduleTimeZone !== undefined)
        setNestedValue(bodyData, ['schedule', 'time_zone'], argv.scheduleTimeZone);
      if (argv.scheduleTue !== undefined) setNestedValue(bodyData, ['schedule', 'tue'], argv.scheduleTue);
      if (argv.scheduleWed !== undefined) setNestedValue(bodyData, ['schedule', 'wed'], argv.scheduleWed);
      if (argv.traffic !== undefined) setNestedValue(bodyData, ['traffic'], argv.traffic);
      const result = await client.post<unknown>(`/accounts/${accountId}/gateway/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
