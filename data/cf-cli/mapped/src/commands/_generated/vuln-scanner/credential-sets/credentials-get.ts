/**
 * credentials-get command
 * @generated from apis/vuln-scanner/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface CredentialsGetArgs {
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CredentialsGetArgs> = {
  command: 'credentials-get',
  describe: 'Returns a single credential by ID.',

  builder: (yargs: Argv): Argv<CredentialsGetArgs> => {
    return yargs
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<CredentialsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CredentialsGetArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.vulnScanner.credentialsets.credentialsGet(
        accountId,
        argv.credentialSetId as string,
        argv.credentialId as string,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
