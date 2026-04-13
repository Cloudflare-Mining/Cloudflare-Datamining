/**
 * keys-delete command
 * @generated from apis/images/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface KeysDeleteArgs {
  signingKeyName: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, KeysDeleteArgs> = {
  command: 'keys-delete <signingKeyName>',
  describe:
    'Delete signing key with specified name. Returns all keys available. When last key is removed, a new default signing key will be generated.',

  builder: (yargs: Argv): Argv<KeysDeleteArgs> => {
    return yargs
      .positional('signingKeyName', {
        type: 'string',
        description: 'Signing key name',
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
      }) as Argv<KeysDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<KeysDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.signingKeyName as string | undefined, 'signingKeyName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf images v1 keys-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/images/v1/keys/${argv.signingKeyName ?? '<signingKeyName>'}`,
          pathParams: { signingKeyName: String(argv.signingKeyName ?? '') },
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

      const result = await client.images.v1.keysDelete(argv.signingKeyName, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
