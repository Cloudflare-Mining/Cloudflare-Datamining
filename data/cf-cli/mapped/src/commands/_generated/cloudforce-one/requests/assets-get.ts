/**
 * assets-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface AssetsGetArgs {
  requestId: string;
  assetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AssetsGetArgs> = {
  command: 'assets-get <requestId> <assetId>',
  describe: 'Retrieves an asset attached to a Cloudforce One intelligence request.',

  builder: (yargs: Argv): Argv<AssetsGetArgs> => {
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
      }) as Argv<AssetsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AssetsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.requestId as string | undefined, 'requestId');
      validateResourceId(argv.assetId as string | undefined, 'assetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.requests.assetsGet(accountId, argv.requestId, argv.assetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
