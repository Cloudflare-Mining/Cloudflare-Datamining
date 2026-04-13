/**
 * email-account-mapping-create command
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

interface EmailAccountMappingCreateArgs {
  'auth-requirements-allowed-microsoft-organizations'?: string;
  'auth-requirements-type': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EmailAccountMappingCreateArgs> = {
  command: 'email-account-mapping-create',
  describe: 'Creates a mapping between a Cloudflare account and an email provider for DLP email scanning integration.',

  builder: (yargs: Argv): Argv<EmailAccountMappingCreateArgs> => {
    return yargs
      .option('auth-requirements-allowed-microsoft-organizations', {
        type: 'string',
        description: 'The auth_requirements.allowed_microsoft_organizations field',
        default: undefined,
      })
      .option('auth-requirements-type', {
        type: 'string',
        description: 'The auth_requirements.type field',
        choices: ['Org'] as const,
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
      .choices('auth-requirements-type', ['Org'] as const) as Argv<EmailAccountMappingCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EmailAccountMappingCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp email-account-mapping-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/email/account_mapping`,
          pathParams: {},
          body: {
            authRequirementsAllowedMicrosoftOrganizations: argv.authRequirementsAllowedMicrosoftOrganizations,
            authRequirementsType: argv.authRequirementsType,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dlp/email/account_mapping`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.authRequirementsAllowedMicrosoftOrganizations !== undefined)
        setNestedValue(
          bodyData,
          ['auth_requirements', 'allowed_microsoft_organizations'],
          argv.authRequirementsAllowedMicrosoftOrganizations,
        );
      if (argv.authRequirementsType !== undefined)
        setNestedValue(bodyData, ['auth_requirements', 'type'], argv.authRequirementsType);
      const result = await client.post<unknown>(`/accounts/${accountId}/dlp/email/account_mapping`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
