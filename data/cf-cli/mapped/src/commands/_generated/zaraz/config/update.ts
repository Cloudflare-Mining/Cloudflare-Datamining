/**
 * update command
 * @generated from apis/zaraz/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  'analytics-default-purpose'?: string;
  'analytics-enabled'?: boolean;
  'analytics-session-exp-time'?: number;
  'consent-company-email'?: string;
  'consent-company-name'?: string;
  'consent-company-street-address'?: string;
  'consent-consent-modal-intro-html'?: string;
  'consent-cookie-name'?: string;
  'consent-custom-css'?: string;
  'consent-custom-intro-disclaimer-dismissed'?: boolean;
  'consent-default-language'?: string;
  'consent-enabled': boolean;
  'consent-hide-modal'?: boolean;
  'consent-tcf-compliant'?: boolean;
  'data-layer': boolean;
  'debug-key': string;
  'history-change'?: boolean;
  'settings-auto-inject-script': boolean;
  'settings-context-enricher-escaped-worker-name': string;
  'settings-context-enricher-worker-tag': string;
  'settings-cookie-domain'?: string;
  'settings-ecommerce'?: boolean;
  'settings-events-api-path'?: string;
  'settings-hide-external-referer'?: boolean;
  'settings-hide-ipaddress'?: boolean;
  'settings-hide-query-params'?: boolean;
  'settings-hide-user-agent'?: boolean;
  'settings-init-path'?: string;
  'settings-inject-iframes'?: boolean;
  'settings-mc-root-path'?: string;
  'settings-script-path'?: string;
  'settings-track-path'?: string;
  'zaraz-version': number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId]',
  describe: 'Updates Zaraz configuration for a zone.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('analytics-default-purpose', {
        type: 'string',
        description: 'Consent purpose assigned to Monitoring.',
        default: undefined,
      })
      .option('analytics-enabled', {
        type: 'boolean',
        description: 'Whether Advanced Monitoring reports are enabled.',
        default: false,
      })
      .option('analytics-session-exp-time', {
        type: 'number',
        description: 'Session expiration time (seconds).',
        default: undefined,
      })
      .option('consent-company-email', {
        type: 'string',
        description: 'The consent.companyEmail field',
        default: undefined,
      })
      .option('consent-company-name', {
        type: 'string',
        description: 'The consent.companyName field',
        default: undefined,
      })
      .option('consent-company-street-address', {
        type: 'string',
        description: 'The consent.companyStreetAddress field',
        default: undefined,
      })
      .option('consent-consent-modal-intro-html', {
        type: 'string',
        description: 'The consent.consentModalIntroHTML field',
        default: undefined,
      })
      .option('consent-cookie-name', {
        type: 'string',
        description: 'The consent.cookieName field',
        default: undefined,
      })
      .option('consent-custom-css', {
        type: 'string',
        description: 'The consent.customCSS field',
        default: undefined,
      })
      .option('consent-custom-intro-disclaimer-dismissed', {
        type: 'boolean',
        description: 'The consent.customIntroDisclaimerDismissed field',
        default: false,
      })
      .option('consent-default-language', {
        type: 'string',
        description: 'The consent.defaultLanguage field',
        default: undefined,
      })
      .option('consent-enabled', {
        type: 'boolean',
        description: 'The consent.enabled field',
      })
      .option('consent-hide-modal', {
        type: 'boolean',
        description: 'The consent.hideModal field',
        default: false,
      })
      .option('consent-tcf-compliant', {
        type: 'boolean',
        description: 'The consent.tcfCompliant field',
        default: false,
      })
      .option('data-layer', {
        type: 'boolean',
        description: 'Data layer compatibility mode enabled.',
      })
      .option('debug-key', {
        type: 'string',
        description: 'The key for Zaraz debug mode.',
      })
      .option('history-change', {
        type: 'boolean',
        description: 'Single Page Application support enabled.',
        default: false,
      })
      .option('settings-auto-inject-script', {
        type: 'boolean',
        description: 'Automatic injection of Zaraz scripts enabled.',
      })
      .option('settings-context-enricher-escaped-worker-name', {
        type: 'string',
        description: 'The settings.contextEnricher.escapedWorkerName field',
      })
      .option('settings-context-enricher-worker-tag', {
        type: 'string',
        description: 'The settings.contextEnricher.workerTag field',
      })
      .option('settings-cookie-domain', {
        type: 'string',
        description: 'The domain Zaraz will use for writing and reading its cookies.',
        default: undefined,
      })
      .option('settings-ecommerce', {
        type: 'boolean',
        description: 'Ecommerce API enabled.',
        default: false,
      })
      .option('settings-events-api-path', {
        type: 'string',
        description: 'Custom endpoint for server-side track events.',
        default: undefined,
      })
      .option('settings-hide-external-referer', {
        type: 'boolean',
        description: 'Hiding external referrer URL enabled.',
        default: false,
      })
      .option('settings-hide-ipaddress', {
        type: 'boolean',
        description: 'Trimming IP address enabled.',
        default: false,
      })
      .option('settings-hide-query-params', {
        type: 'boolean',
        description: 'Removing URL query params enabled.',
        default: false,
      })
      .option('settings-hide-user-agent', {
        type: 'boolean',
        description: 'Removing sensitive data from User Aagent string enabled.',
        default: false,
      })
      .option('settings-init-path', {
        type: 'string',
        description: 'Custom endpoint for Zaraz init script.',
        default: undefined,
      })
      .option('settings-inject-iframes', {
        type: 'boolean',
        description: 'Injection of Zaraz scripts into iframes enabled.',
        default: false,
      })
      .option('settings-mc-root-path', {
        type: 'string',
        description: 'Custom path for Managed Components server functionalities.',
        default: undefined,
      })
      .option('settings-script-path', {
        type: 'string',
        description: 'Custom endpoint for Zaraz main script.',
        default: undefined,
      })
      .option('settings-track-path', {
        type: 'string',
        description: 'Custom endpoint for Zaraz tracking requests.',
        default: undefined,
      })
      .option('zaraz-version', {
        type: 'number',
        description: 'Zaraz internal version of the config.',
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
        formatDryRun({
          command: 'cf zaraz config update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/settings/zaraz/config`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            analyticsDefaultPurpose: argv.analyticsDefaultPurpose,
            analyticsEnabled: argv.analyticsEnabled,
            analyticsSessionExpTime: argv.analyticsSessionExpTime,
            consentCompanyEmail: argv.consentCompanyEmail,
            consentCompanyName: argv.consentCompanyName,
            consentCompanyStreetAddress: argv.consentCompanyStreetAddress,
            consentConsentModalIntroHtml: argv.consentConsentModalIntroHtml,
            consentCookieName: argv.consentCookieName,
            consentCustomCss: argv.consentCustomCss,
            consentCustomIntroDisclaimerDismissed: argv.consentCustomIntroDisclaimerDismissed,
            consentDefaultLanguage: argv.consentDefaultLanguage,
            consentEnabled: argv.consentEnabled,
            consentHideModal: argv.consentHideModal,
            consentTcfCompliant: argv.consentTcfCompliant,
            dataLayer: argv.dataLayer,
            debugKey: argv.debugKey,
            historyChange: argv.historyChange,
            settingsAutoInjectScript: argv.settingsAutoInjectScript,
            settingsContextEnricherEscapedWorkerName: argv.settingsContextEnricherEscapedWorkerName,
            settingsContextEnricherWorkerTag: argv.settingsContextEnricherWorkerTag,
            settingsCookieDomain: argv.settingsCookieDomain,
            settingsEcommerce: argv.settingsEcommerce,
            settingsEventsApiPath: argv.settingsEventsApiPath,
            settingsHideExternalReferer: argv.settingsHideExternalReferer,
            settingsHideIpaddress: argv.settingsHideIpaddress,
            settingsHideQueryParams: argv.settingsHideQueryParams,
            settingsHideUserAgent: argv.settingsHideUserAgent,
            settingsInitPath: argv.settingsInitPath,
            settingsInjectIframes: argv.settingsInjectIframes,
            settingsMcRootPath: argv.settingsMcRootPath,
            settingsScriptPath: argv.settingsScriptPath,
            settingsTrackPath: argv.settingsTrackPath,
            zarazVersion: argv.zarazVersion,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${zoneId}/settings/zaraz/config`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.analyticsDefaultPurpose !== undefined)
        setNestedValue(bodyData, ['analytics', 'defaultPurpose'], argv.analyticsDefaultPurpose);
      if (argv.analyticsEnabled !== undefined)
        setNestedValue(bodyData, ['analytics', 'enabled'], argv.analyticsEnabled);
      if (argv.analyticsSessionExpTime !== undefined)
        setNestedValue(bodyData, ['analytics', 'sessionExpTime'], argv.analyticsSessionExpTime);
      if (argv.consentCompanyEmail !== undefined)
        setNestedValue(bodyData, ['consent', 'companyEmail'], argv.consentCompanyEmail);
      if (argv.consentCompanyName !== undefined)
        setNestedValue(bodyData, ['consent', 'companyName'], argv.consentCompanyName);
      if (argv.consentCompanyStreetAddress !== undefined)
        setNestedValue(bodyData, ['consent', 'companyStreetAddress'], argv.consentCompanyStreetAddress);
      if (argv.consentConsentModalIntroHtml !== undefined)
        setNestedValue(bodyData, ['consent', 'consentModalIntroHTML'], argv.consentConsentModalIntroHtml);
      if (argv.consentCookieName !== undefined)
        setNestedValue(bodyData, ['consent', 'cookieName'], argv.consentCookieName);
      if (argv.consentCustomCss !== undefined)
        setNestedValue(bodyData, ['consent', 'customCSS'], argv.consentCustomCss);
      if (argv.consentCustomIntroDisclaimerDismissed !== undefined)
        setNestedValue(
          bodyData,
          ['consent', 'customIntroDisclaimerDismissed'],
          argv.consentCustomIntroDisclaimerDismissed,
        );
      if (argv.consentDefaultLanguage !== undefined)
        setNestedValue(bodyData, ['consent', 'defaultLanguage'], argv.consentDefaultLanguage);
      if (argv.consentEnabled !== undefined) setNestedValue(bodyData, ['consent', 'enabled'], argv.consentEnabled);
      if (argv.consentHideModal !== undefined)
        setNestedValue(bodyData, ['consent', 'hideModal'], argv.consentHideModal);
      if (argv.consentTcfCompliant !== undefined)
        setNestedValue(bodyData, ['consent', 'tcfCompliant'], argv.consentTcfCompliant);
      if (argv.dataLayer !== undefined) setNestedValue(bodyData, ['dataLayer'], argv.dataLayer);
      if (argv.debugKey !== undefined) setNestedValue(bodyData, ['debugKey'], argv.debugKey);
      if (argv.historyChange !== undefined) setNestedValue(bodyData, ['historyChange'], argv.historyChange);
      if (argv.settingsAutoInjectScript !== undefined)
        setNestedValue(bodyData, ['settings', 'autoInjectScript'], argv.settingsAutoInjectScript);
      if (argv.settingsContextEnricherEscapedWorkerName !== undefined)
        setNestedValue(
          bodyData,
          ['settings', 'contextEnricher', 'escapedWorkerName'],
          argv.settingsContextEnricherEscapedWorkerName,
        );
      if (argv.settingsContextEnricherWorkerTag !== undefined)
        setNestedValue(bodyData, ['settings', 'contextEnricher', 'workerTag'], argv.settingsContextEnricherWorkerTag);
      if (argv.settingsCookieDomain !== undefined)
        setNestedValue(bodyData, ['settings', 'cookieDomain'], argv.settingsCookieDomain);
      if (argv.settingsEcommerce !== undefined)
        setNestedValue(bodyData, ['settings', 'ecommerce'], argv.settingsEcommerce);
      if (argv.settingsEventsApiPath !== undefined)
        setNestedValue(bodyData, ['settings', 'eventsApiPath'], argv.settingsEventsApiPath);
      if (argv.settingsHideExternalReferer !== undefined)
        setNestedValue(bodyData, ['settings', 'hideExternalReferer'], argv.settingsHideExternalReferer);
      if (argv.settingsHideIpaddress !== undefined)
        setNestedValue(bodyData, ['settings', 'hideIPAddress'], argv.settingsHideIpaddress);
      if (argv.settingsHideQueryParams !== undefined)
        setNestedValue(bodyData, ['settings', 'hideQueryParams'], argv.settingsHideQueryParams);
      if (argv.settingsHideUserAgent !== undefined)
        setNestedValue(bodyData, ['settings', 'hideUserAgent'], argv.settingsHideUserAgent);
      if (argv.settingsInitPath !== undefined)
        setNestedValue(bodyData, ['settings', 'initPath'], argv.settingsInitPath);
      if (argv.settingsInjectIframes !== undefined)
        setNestedValue(bodyData, ['settings', 'injectIframes'], argv.settingsInjectIframes);
      if (argv.settingsMcRootPath !== undefined)
        setNestedValue(bodyData, ['settings', 'mcRootPath'], argv.settingsMcRootPath);
      if (argv.settingsScriptPath !== undefined)
        setNestedValue(bodyData, ['settings', 'scriptPath'], argv.settingsScriptPath);
      if (argv.settingsTrackPath !== undefined)
        setNestedValue(bodyData, ['settings', 'trackPath'], argv.settingsTrackPath);
      if (argv.zarazVersion !== undefined) setNestedValue(bodyData, ['zarazVersion'], argv.zarazVersion);
      const result = await client.put<unknown>(`/zones/${zoneId}/settings/zaraz/config`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
