/**
 * secrets-get command
 * @generated from apis/secrets-store/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SecretsGetArgs {
  storeId: string;
  secretId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecretsGetArgs> = {
  command: 'secrets-get <storeId> <secretId>',
  describe: 'Returns details of a single secret',

  builder: (yargs: Argv): Argv<SecretsGetArgs> => {
    return yargs
      .positional('storeId', {
        type: 'string',
        description: 'Store Identifier',
        demandOption: true,
      })
      .positional('secretId', {
        type: 'string',
        description: 'Secret identifier tag.',
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
      }) as Argv<SecretsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.storeId as string | undefined, 'storeId');
      validateResourceId(argv.secretId as string | undefined, 'secretId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.secretsStore.stores.secretsGet(accountId, argv.storeId, argv.secretId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
