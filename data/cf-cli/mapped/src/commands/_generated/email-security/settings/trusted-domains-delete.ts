/**
 * trusted-domains-delete command
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

interface TrustedDomainsDeleteArgs {
  trustedDomainId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TrustedDomainsDeleteArgs> = {
  command: 'trusted-domains-delete <trustedDomainId>',
  describe: 'Removes a domain from the trusted domains list, subjecting it to normal security scanning.',

  builder: (yargs: Argv): Argv<TrustedDomainsDeleteArgs> => {
    return yargs
      .positional('trustedDomainId', {
        type: 'string',
        description: 'The unique identifier for the trusted domain.',
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
      }) as Argv<TrustedDomainsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TrustedDomainsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.trustedDomainId as string | undefined, 'trustedDomainId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings trusted-domains-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/trusted_domains/${argv.trustedDomainId ?? '<trustedDomainId>'}`,
          pathParams: { trustedDomainId: String(argv.trustedDomainId ?? '') },
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

      const result = await client.emailSecurity.settings.trustedDomainsDelete(accountId, argv.trustedDomainId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
