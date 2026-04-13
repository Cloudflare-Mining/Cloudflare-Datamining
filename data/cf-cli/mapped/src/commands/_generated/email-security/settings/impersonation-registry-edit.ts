/**
 * impersonation-registry-edit command
 * @generated from apis/email-security/schema.ts
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

interface ImpersonationRegistryEditArgs {
  displayNameId: string;
  email?: string;
  'is-email-regex'?: boolean;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ImpersonationRegistryEditArgs> = {
  command: 'impersonation-registry-edit <displayNameId>',
  describe: 'Updates a display name entry used for impersonation protection.',

  builder: (yargs: Argv): Argv<ImpersonationRegistryEditArgs> => {
    return yargs
      .positional('displayNameId', {
        type: 'string',
        description: 'Display name ID',
        demandOption: true,
      })
      .option('email', {
        type: 'string',
        description: 'The email field',
        default: undefined,
      })
      .option('is-email-regex', {
        type: 'boolean',
        description: 'The is_email_regex field',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
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
      }) as Argv<ImpersonationRegistryEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ImpersonationRegistryEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.displayNameId as string | undefined, 'displayNameId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings impersonation-registry-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/impersonation_registry/${argv.displayNameId ?? '<displayNameId>'}`,
          pathParams: { displayNameId: String(argv.displayNameId ?? '') },
          body: { email: argv.email, isEmailRegex: argv.isEmailRegex, name: argv.name },
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
          `/accounts/${accountId}/email-security/settings/impersonation_registry/${argv.displayNameId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.email !== undefined) setNestedValue(bodyData, ['email'], argv.email);
      if (argv.isEmailRegex !== undefined) setNestedValue(bodyData, ['is_email_regex'], argv.isEmailRegex);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/email-security/settings/impersonation_registry/${argv.displayNameId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
