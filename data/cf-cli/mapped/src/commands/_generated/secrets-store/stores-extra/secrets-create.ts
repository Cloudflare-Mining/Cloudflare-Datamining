/**
 * secrets-create command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface SecretsCreateArgs {
  accountTag: string;
  storeId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SecretsCreateArgs> = {
  command: 'secrets-create <accountTag> <storeId>',
  describe:
    "Creates one or more secrets in a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.",

  builder: (yargs: Argv): Argv<SecretsCreateArgs> => {
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
      }) as Argv<SecretsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.accountTag as string | undefined, 'accountTag');
      validateResourceId(argv.storeId as string | undefined, 'storeId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf secrets-store stores-extra secrets-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/system/accounts/${argv.accountTag ?? '<accountTag>'}/stores/${argv.storeId ?? '<storeId>'}/secrets`,
          pathParams: { accountTag: String(argv.accountTag ?? ''), storeId: String(argv.storeId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/system/accounts/${argv.accountTag}/stores/${argv.storeId}/secrets`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.secretsStore.storesextra.secretsCreate(argv.accountTag, argv.storeId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
