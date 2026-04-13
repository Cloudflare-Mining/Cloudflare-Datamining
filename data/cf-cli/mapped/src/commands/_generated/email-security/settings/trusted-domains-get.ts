/**
 * trusted-domains-get command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TrustedDomainsGetArgs {
  trustedDomainId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TrustedDomainsGetArgs> = {
  command: 'trusted-domains-get <trustedDomainId>',
  describe: 'Gets information about a specific trusted domain entry.',

  builder: (yargs: Argv): Argv<TrustedDomainsGetArgs> => {
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
      }) as Argv<TrustedDomainsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TrustedDomainsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.trustedDomainId as string | undefined, 'trustedDomainId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.settings.trustedDomainsGet(accountId, argv.trustedDomainId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
