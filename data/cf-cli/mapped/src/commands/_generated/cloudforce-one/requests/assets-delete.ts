/**
 * assets-delete command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface AssetsDeleteArgs {
  requestId: string;
  assetId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AssetsDeleteArgs> = {
  command: 'assets-delete <requestId> <assetId>',
  describe: 'Removes an asset from a Cloudforce One intelligence request.',

  builder: (yargs: Argv): Argv<AssetsDeleteArgs> => {
    return yargs
      .positional('requestId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .positional('assetId', {
        type: 'string',
        description: 'UUID.',
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
      }) as Argv<AssetsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AssetsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.requestId as string | undefined, 'requestId');
      validateResourceId(argv.assetId as string | undefined, 'assetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one requests assets-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/requests/${argv.requestId ?? '<requestId>'}/asset/${argv.assetId ?? '<assetId>'}`,
          pathParams: { requestId: String(argv.requestId ?? ''), assetId: String(argv.assetId ?? '') },
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

      const result = await client.cloudforceOne.requests.assetsDelete(accountId, argv.requestId, argv.assetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
