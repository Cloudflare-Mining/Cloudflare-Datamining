/**
 * update command
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

interface UpdateArgs {
  'allow-authenticate-via-warp'?: boolean;
  'auth-domain'?: string;
  'auto-redirect-to-identity'?: boolean;
  'custom-pages-forbidden'?: string;
  'custom-pages-identity-denied'?: string;
  'deny-unmatched-requests'?: boolean;
  'deny-unmatched-requests-exempted-zone-names'?: string;
  'is-ui-read-only'?: boolean;
  'login-design-background-color'?: string;
  'login-design-footer-text'?: string;
  'login-design-header-text'?: string;
  'login-design-logo-path'?: string;
  'login-design-text-color'?: string;
  'mfa-config-allowed-authenticators'?: string;
  'mfa-config-session-duration'?: string;
  'mfa-required-for-all-apps'?: boolean;
  name?: string;
  'session-duration'?: string;
  'ui-read-only-toggle-reason'?: string;
  'user-seat-expiration-inactive-time'?: string;
  'warp-auth-session-duration'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update',
  describe: 'Updates the configuration for your Zero Trust organization.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .option('allow-authenticate-via-warp', {
        type: 'boolean',
        description:
          'When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over this value.',
        default: false,
      })
      .option('auth-domain', {
        type: 'string',
        description: 'The unique subdomain assigned to your Zero Trust organization.',
        default: undefined,
      })
      .option('auto-redirect-to-identity', {
        type: 'boolean',
        description: 'When set to \`true\`, users skip the identity provider selection step during login.',
        default: false,
      })
      .option('custom-pages-forbidden', {
        type: 'string',
        description:
          'The uid of the custom page to use when a user is denied access after failing a non-identity rule.',
        default: undefined,
      })
      .option('custom-pages-identity-denied', {
        type: 'string',
        description: 'The uid of the custom page to use when a user is denied access.',
        default: undefined,
      })
      .option('deny-unmatched-requests', {
        type: 'boolean',
        description:
          'Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must explicitly configure an Access application and policy to allow traffic to your Cloudflare-protected resources. For domains you want to be public across all subdomains, add the domain to the \`deny_unmatched_requests_exempted_zone_names\` array.',
        default: false,
      })
      .option('deny-unmatched-requests-exempted-zone-names', {
        type: 'string',
        description:
          'Contains zone names to exempt from the \`deny_unmatched_requests\` feature. Requests to a subdomain in an exempted zone will block unauthenticated traffic by default if there is a configured Access application and policy that matches the request.',
        default: undefined,
      })
      .option('is-ui-read-only', {
        type: 'boolean',
        description:
          'Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this account when enabled.',
        default: false,
      })
      .option('login-design-background-color', {
        type: 'string',
        description: 'The background color on your login page.',
        default: undefined,
      })
      .option('login-design-footer-text', {
        type: 'string',
        description: 'The text at the bottom of your login page.',
        default: undefined,
      })
      .option('login-design-header-text', {
        type: 'string',
        description: 'The text at the top of your login page.',
        default: undefined,
      })
      .option('login-design-logo-path', {
        type: 'string',
        description: 'The URL of the logo on your login page.',
        default: undefined,
      })
      .option('login-design-text-color', {
        type: 'string',
        description: 'The text color on your login page.',
        default: undefined,
      })
      .option('mfa-config-allowed-authenticators', {
        type: 'string',
        description: 'Lists the MFA methods that users can authenticate with.',
        default: undefined,
      })
      .option('mfa-config-session-duration', {
        type: 'string',
        description:
          'Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:\`5m\` or \`24h\`.',
        default: undefined,
      })
      .option('mfa-required-for-all-apps', {
        type: 'boolean',
        description:
          'Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentication method and a session duration configured.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name of your Zero Trust organization.',
        default: undefined,
      })
      .option('session-duration', {
        type: 'string',
        description:
          'The amount of time that tokens issued for applications will be valid. Must be in the format \`300ms\` or \`2h45m\`. Valid time units are: ns, us (or µs), ms, s, m, h.',
        default: undefined,
      })
      .option('ui-read-only-toggle-reason', {
        type: 'string',
        description: 'A description of the reason why the UI read only field is being toggled.',
        default: undefined,
      })
      .option('user-seat-expiration-inactive-time', {
        type: 'string',
        description:
          'The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format \`300ms\` or \`2h45m\`. Valid time units are: \`ns\`, \`us\` (or \`µs\`), \`ms\`, \`s\`, \`m\`, \`h\`.',
        default: undefined,
      })
      .option('warp-auth-session-duration', {
        type: 'string',
        description:
          'The amount of time that tokens issued for applications will be valid. Must be in the format \`30m\` or \`2h45m\`. Valid time units are: m, h.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust organizations update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/organizations`,
          pathParams: {},
          body: {
            allowAuthenticateViaWarp: argv.allowAuthenticateViaWarp,
            authDomain: argv.authDomain,
            autoRedirectToIdentity: argv.autoRedirectToIdentity,
            customPagesForbidden: argv.customPagesForbidden,
            customPagesIdentityDenied: argv.customPagesIdentityDenied,
            denyUnmatchedRequests: argv.denyUnmatchedRequests,
            denyUnmatchedRequestsExemptedZoneNames: argv.denyUnmatchedRequestsExemptedZoneNames,
            isUiReadOnly: argv.isUiReadOnly,
            loginDesignBackgroundColor: argv.loginDesignBackgroundColor,
            loginDesignFooterText: argv.loginDesignFooterText,
            loginDesignHeaderText: argv.loginDesignHeaderText,
            loginDesignLogoPath: argv.loginDesignLogoPath,
            loginDesignTextColor: argv.loginDesignTextColor,
            mfaConfigAllowedAuthenticators: argv.mfaConfigAllowedAuthenticators,
            mfaConfigSessionDuration: argv.mfaConfigSessionDuration,
            mfaRequiredForAllApps: argv.mfaRequiredForAllApps,
            name: argv.name,
            sessionDuration: argv.sessionDuration,
            uiReadOnlyToggleReason: argv.uiReadOnlyToggleReason,
            userSeatExpirationInactiveTime: argv.userSeatExpirationInactiveTime,
            warpAuthSessionDuration: argv.warpAuthSessionDuration,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/access/organizations`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowAuthenticateViaWarp !== undefined)
        setNestedValue(bodyData, ['allow_authenticate_via_warp'], argv.allowAuthenticateViaWarp);
      if (argv.authDomain !== undefined) setNestedValue(bodyData, ['auth_domain'], argv.authDomain);
      if (argv.autoRedirectToIdentity !== undefined)
        setNestedValue(bodyData, ['auto_redirect_to_identity'], argv.autoRedirectToIdentity);
      if (argv.customPagesForbidden !== undefined)
        setNestedValue(bodyData, ['custom_pages', 'forbidden'], argv.customPagesForbidden);
      if (argv.customPagesIdentityDenied !== undefined)
        setNestedValue(bodyData, ['custom_pages', 'identity_denied'], argv.customPagesIdentityDenied);
      if (argv.denyUnmatchedRequests !== undefined)
        setNestedValue(bodyData, ['deny_unmatched_requests'], argv.denyUnmatchedRequests);
      if (argv.denyUnmatchedRequestsExemptedZoneNames !== undefined)
        setNestedValue(
          bodyData,
          ['deny_unmatched_requests_exempted_zone_names'],
          argv.denyUnmatchedRequestsExemptedZoneNames,
        );
      if (argv.isUiReadOnly !== undefined) setNestedValue(bodyData, ['is_ui_read_only'], argv.isUiReadOnly);
      if (argv.loginDesignBackgroundColor !== undefined)
        setNestedValue(bodyData, ['login_design', 'background_color'], argv.loginDesignBackgroundColor);
      if (argv.loginDesignFooterText !== undefined)
        setNestedValue(bodyData, ['login_design', 'footer_text'], argv.loginDesignFooterText);
      if (argv.loginDesignHeaderText !== undefined)
        setNestedValue(bodyData, ['login_design', 'header_text'], argv.loginDesignHeaderText);
      if (argv.loginDesignLogoPath !== undefined)
        setNestedValue(bodyData, ['login_design', 'logo_path'], argv.loginDesignLogoPath);
      if (argv.loginDesignTextColor !== undefined)
        setNestedValue(bodyData, ['login_design', 'text_color'], argv.loginDesignTextColor);
      if (argv.mfaConfigAllowedAuthenticators !== undefined)
        setNestedValue(bodyData, ['mfa_config', 'allowed_authenticators'], argv.mfaConfigAllowedAuthenticators);
      if (argv.mfaConfigSessionDuration !== undefined)
        setNestedValue(bodyData, ['mfa_config', 'session_duration'], argv.mfaConfigSessionDuration);
      if (argv.mfaRequiredForAllApps !== undefined)
        setNestedValue(bodyData, ['mfa_required_for_all_apps'], argv.mfaRequiredForAllApps);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.sessionDuration !== undefined) setNestedValue(bodyData, ['session_duration'], argv.sessionDuration);
      if (argv.uiReadOnlyToggleReason !== undefined)
        setNestedValue(bodyData, ['ui_read_only_toggle_reason'], argv.uiReadOnlyToggleReason);
      if (argv.userSeatExpirationInactiveTime !== undefined)
        setNestedValue(bodyData, ['user_seat_expiration_inactive_time'], argv.userSeatExpirationInactiveTime);
      if (argv.warpAuthSessionDuration !== undefined)
        setNestedValue(bodyData, ['warp_auth_session_duration'], argv.warpAuthSessionDuration);
      const result = await client.put<unknown>(`/accounts/${accountId}/access/organizations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
