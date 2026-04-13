/**
 * create command
 * @generated from apis/zero-trust/schema.ts
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

interface CreateArgs {
  zoneId?: string;
  'auth-domain': string;
  'is-ui-read-only'?: boolean;
  'login-design-background-color'?: string;
  'login-design-footer-text'?: string;
  'login-design-header-text'?: string;
  'login-design-logo-path'?: string;
  'login-design-text-color'?: string;
  name: string;
  'ui-read-only-toggle-reason'?: string;
  'user-seat-expiration-inactive-time'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe: 'Sets up a Zero Trust organization for your account.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('auth-domain', {
        type: 'string',
        description: 'The unique subdomain assigned to your Zero Trust organization.',
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
      .option('name', {
        type: 'string',
        description: 'The name of your Zero Trust organization.',
      })
      .option('ui-read-only-toggle-reason', {
        type: 'string',
        description: 'A description of the reason why the UI read only field is being toggled.',
        default: undefined,
      })
      .option('user-seat-expiration-inactive-time', {
        type: 'string',
        description:
          'The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format \`300ms\` or \`2h45m\`. Valid time units are: \`ns\`, \`us\` (or \`µs\`), \`ms\`, \`s\`, \`m\`, \`h\`.',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf zero-trust organizations-extra create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/access/organizations`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            authDomain: argv.authDomain,
            isUiReadOnly: argv.isUiReadOnly,
            loginDesignBackgroundColor: argv.loginDesignBackgroundColor,
            loginDesignFooterText: argv.loginDesignFooterText,
            loginDesignHeaderText: argv.loginDesignHeaderText,
            loginDesignLogoPath: argv.loginDesignLogoPath,
            loginDesignTextColor: argv.loginDesignTextColor,
            name: argv.name,
            uiReadOnlyToggleReason: argv.uiReadOnlyToggleReason,
            userSeatExpirationInactiveTime: argv.userSeatExpirationInactiveTime,
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
        const result = await client.post<unknown>(`/zones/${zoneId}/access/organizations`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.authDomain !== undefined) setNestedValue(bodyData, ['auth_domain'], argv.authDomain);
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
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.uiReadOnlyToggleReason !== undefined)
        setNestedValue(bodyData, ['ui_read_only_toggle_reason'], argv.uiReadOnlyToggleReason);
      if (argv.userSeatExpirationInactiveTime !== undefined)
        setNestedValue(bodyData, ['user_seat_expiration_inactive_time'], argv.userSeatExpirationInactiveTime);
      const result = await client.post<unknown>(`/zones/${zoneId}/access/organizations`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
