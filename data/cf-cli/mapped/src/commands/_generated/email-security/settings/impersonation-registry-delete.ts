/**
 * impersonation-registry-delete command
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

interface ImpersonationRegistryDeleteArgs {
  displayNameId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ImpersonationRegistryDeleteArgs> = {
  command: 'impersonation-registry-delete <displayNameId>',
  describe: 'Removes a display name from impersonation protection monitoring.',

  builder: (yargs: Argv): Argv<ImpersonationRegistryDeleteArgs> => {
    return yargs
      .positional('displayNameId', {
        type: 'string',
        description: 'Display name ID',
        demandOption: true,
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
      }) as Argv<ImpersonationRegistryDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ImpersonationRegistryDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.displayNameId as string | undefined, 'displayNameId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings impersonation-registry-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/impersonation_registry/${argv.displayNameId ?? '<displayNameId>'}`,
          pathParams: { displayNameId: String(argv.displayNameId ?? '') },
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

      const result = await client.emailSecurity.settings.impersonationRegistryDelete(accountId, argv.displayNameId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
