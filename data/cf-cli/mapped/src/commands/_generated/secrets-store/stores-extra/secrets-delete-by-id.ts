/**
 * secrets-delete-by-id command
 * @generated from apis/secrets-store/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface SecretsDeleteByIdArgs {
  accountTag: string;
  storeId: string;
  secretId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecretsDeleteByIdArgs> = {
  command: 'secrets-delete-by-id <accountTag> <storeId> <secretId>',
  describe:
    "Deletes a single secret from a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.",

  builder: (yargs: Argv): Argv<SecretsDeleteByIdArgs> => {
    return yargs
      .positional('accountTag', {
        type: 'string',
        description:
          "Account tag identifier (e.g., '12a6ed19f349896cfbd6694ba3de8d31'). This is the account's external tag identifier, not the numeric account ID.",
        demandOption: true,
      })
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<SecretsDeleteByIdArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsDeleteByIdArgs>): Promise<void> => {
    try {
      validateResourceId(argv.accountTag as string | undefined, 'accountTag');
      validateResourceId(argv.storeId as string | undefined, 'storeId');
      validateResourceId(argv.secretId as string | undefined, 'secretId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf secrets-store stores-extra secrets-delete-by-id',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/system/accounts/${argv.accountTag ?? '<accountTag>'}/stores/${argv.storeId ?? '<storeId>'}/secrets/${argv.secretId ?? '<secretId>'}`,
          pathParams: {
            accountTag: String(argv.accountTag ?? ''),
            storeId: String(argv.storeId ?? ''),
            secretId: String(argv.secretId ?? ''),
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

      const result = await client.secretsStore.storesextra.secretsDeleteById(
        argv.accountTag,
        argv.storeId,
        argv.secretId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
