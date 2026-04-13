/**
 * impersonation-registry-get command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ImpersonationRegistryGetArgs {
  displayNameId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ImpersonationRegistryGetArgs> = {
  command: 'impersonation-registry-get <displayNameId>',
  describe: 'Retrieves a display name entry used for impersonation protection.',

  builder: (yargs: Argv): Argv<ImpersonationRegistryGetArgs> => {
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
      }) as Argv<ImpersonationRegistryGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ImpersonationRegistryGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.displayNameId as string | undefined, 'displayNameId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.settings.impersonationRegistryGet(accountId, argv.displayNameId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
