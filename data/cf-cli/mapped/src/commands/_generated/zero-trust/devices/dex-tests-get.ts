/**
 * dex-tests-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DexTestsGetArgs {
  dexTestId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DexTestsGetArgs> = {
  command: 'dex-tests-get <dexTestId>',
  describe: 'Fetch a single DEX test.',

  builder: (yargs: Argv): Argv<DexTestsGetArgs> => {
    return yargs
      .positional('dexTestId', {
        type: 'string',
        description: 'The unique identifier for the test.',
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
      }) as Argv<DexTestsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DexTestsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dexTestId as string | undefined, 'dexTestId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.dexTestsGet(accountId, argv.dexTestId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
