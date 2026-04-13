/**
 * policies-default-fallback-domains-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PoliciesDefaultFallbackDomainsGetArgs {
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PoliciesDefaultFallbackDomainsGetArgs> = {
  command: 'policies-default-fallback-domains-get',
  describe:
    'Fetches a list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead.',

  builder: (yargs: Argv): Argv<PoliciesDefaultFallbackDomainsGetArgs> => {
    return yargs
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<PoliciesDefaultFallbackDomainsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoliciesDefaultFallbackDomainsGetArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.policiesDefaultFallbackDomainsGet(accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
