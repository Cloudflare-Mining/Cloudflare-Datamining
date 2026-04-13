/**
 * applications-policies-create command
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

interface ApplicationsPoliciesCreateArgs {
  appId: string;
  precedence?: number;
  'approval-required'?: boolean;
  'connection-rules-rdp-allowed-clipboard-local-to-remote-formats'?: string;
  'connection-rules-rdp-allowed-clipboard-remote-to-local-formats'?: string;
  'isolation-required'?: boolean;
  'mfa-config-allowed-authenticators'?: string;
  'mfa-config-mfa-disabled'?: boolean;
  'mfa-config-session-duration'?: string;
  'purpose-justification-prompt'?: string;
  'purpose-justification-required'?: boolean;
  'session-duration'?: string;
  decision: string;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ApplicationsPoliciesCreateArgs> = {
  command: 'applications-policies-create <appId>',
  describe:
    "Creates a policy applying exclusive to a single application that defines the users or groups who can reach it. We recommend creating a reusable policy instead and subsequently referencing its ID in the application's 'policies' array.",

  builder: (yargs: Argv): Argv<ApplicationsPoliciesCreateArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The application ID.',
        demandOption: true,
      })
      .option('precedence', {
        type: 'number',
        description: 'The order of execution for this policy. Must be unique for each policy within an app. ',
        default: undefined,
      })
      .option('approval-required', {
        type: 'boolean',
        description: 'Requires the user to request access from an administrator at the start of each session.',
        default: false,
      })
      .option('connection-rules-rdp-allowed-clipboard-local-to-remote-formats', {
        type: 'string',
        description: 'Clipboard formats allowed when copying from local machine to remote RDP session.',
        default: undefined,
      })
      .option('connection-rules-rdp-allowed-clipboard-remote-to-local-formats', {
        type: 'string',
        description: 'Clipboard formats allowed when copying from remote RDP session to local machine.',
        default: undefined,
      })
      .option('isolation-required', {
        type: 'boolean',
        description:
          "Require this application to be served in an isolated browser for users matching this policy. 'Client Web Isolation' must be on for the account in order to use this feature.",
        default: false,
      })
      .option('mfa-config-allowed-authenticators', {
        type: 'string',
        description: 'Lists the MFA methods that users can authenticate with.',
        default: undefined,
      })
      .option('mfa-config-mfa-disabled', {
        type: 'boolean',
        description:
          'Indicates whether to disable MFA for this resource. This option is available at the application and policy level.',
        default: false,
      })
      .option('mfa-config-session-duration', {
        type: 'string',
        description:
          'Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:\`5m\` or \`24h\`.',
        default: undefined,
      })
      .option('purpose-justification-prompt', {
        type: 'string',
        description: 'A custom message that will appear on the purpose justification screen.',
        default: undefined,
      })
      .option('purpose-justification-required', {
        type: 'boolean',
        description: 'Require users to enter a justification when they log in to the application.',
        default: false,
      })
      .option('session-duration', {
        type: 'string',
        description:
          'The amount of time that tokens issued for the application will be valid. Must be in the format \`300ms\` or \`2h45m\`. Valid time units are: ns, us (or µs), ms, s, m, h.',
        default: undefined,
      })
      .option('decision', {
        type: 'string',
        description:
          'The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.',
        choices: ['allow', 'deny', 'non_identity', 'bypass'] as const,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the Access policy.',
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
      .choices('decision', [
        'allow',
        'deny',
        'non_identity',
        'bypass',
      ] as const) as Argv<ApplicationsPoliciesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ApplicationsPoliciesCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access applications-policies-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/apps/${argv.appId ?? '<appId>'}/policies`,
          pathParams: { appId: String(argv.appId ?? '') },
          body: {
            precedence: argv.precedence,
            approvalRequired: argv.approvalRequired,
            connectionRulesRdpAllowedClipboardLocalToRemoteFormats:
              argv.connectionRulesRdpAllowedClipboardLocalToRemoteFormats,
            connectionRulesRdpAllowedClipboardRemoteToLocalFormats:
              argv.connectionRulesRdpAllowedClipboardRemoteToLocalFormats,
            isolationRequired: argv.isolationRequired,
            mfaConfigAllowedAuthenticators: argv.mfaConfigAllowedAuthenticators,
            mfaConfigMfaDisabled: argv.mfaConfigMfaDisabled,
            mfaConfigSessionDuration: argv.mfaConfigSessionDuration,
            purposeJustificationPrompt: argv.purposeJustificationPrompt,
            purposeJustificationRequired: argv.purposeJustificationRequired,
            sessionDuration: argv.sessionDuration,
            decision: argv.decision,
            name: argv.name,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/access/apps/${argv.appId}/policies`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.precedence !== undefined) setNestedValue(bodyData, ['precedence'], argv.precedence);
      if (argv.approvalRequired !== undefined) setNestedValue(bodyData, ['approval_required'], argv.approvalRequired);
      if (argv.connectionRulesRdpAllowedClipboardLocalToRemoteFormats !== undefined)
        setNestedValue(
          bodyData,
          ['connection_rules', 'rdp', 'allowed_clipboard_local_to_remote_formats'],
          argv.connectionRulesRdpAllowedClipboardLocalToRemoteFormats,
        );
      if (argv.connectionRulesRdpAllowedClipboardRemoteToLocalFormats !== undefined)
        setNestedValue(
          bodyData,
          ['connection_rules', 'rdp', 'allowed_clipboard_remote_to_local_formats'],
          argv.connectionRulesRdpAllowedClipboardRemoteToLocalFormats,
        );
      if (argv.isolationRequired !== undefined)
        setNestedValue(bodyData, ['isolation_required'], argv.isolationRequired);
      if (argv.mfaConfigAllowedAuthenticators !== undefined)
        setNestedValue(bodyData, ['mfa_config', 'allowed_authenticators'], argv.mfaConfigAllowedAuthenticators);
      if (argv.mfaConfigMfaDisabled !== undefined)
        setNestedValue(bodyData, ['mfa_config', 'mfa_disabled'], argv.mfaConfigMfaDisabled);
      if (argv.mfaConfigSessionDuration !== undefined)
        setNestedValue(bodyData, ['mfa_config', 'session_duration'], argv.mfaConfigSessionDuration);
      if (argv.purposeJustificationPrompt !== undefined)
        setNestedValue(bodyData, ['purpose_justification_prompt'], argv.purposeJustificationPrompt);
      if (argv.purposeJustificationRequired !== undefined)
        setNestedValue(bodyData, ['purpose_justification_required'], argv.purposeJustificationRequired);
      if (argv.sessionDuration !== undefined) setNestedValue(bodyData, ['session_duration'], argv.sessionDuration);
      if (argv.decision !== undefined) setNestedValue(bodyData, ['decision'], argv.decision);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/access/apps/${argv.appId}/policies`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
