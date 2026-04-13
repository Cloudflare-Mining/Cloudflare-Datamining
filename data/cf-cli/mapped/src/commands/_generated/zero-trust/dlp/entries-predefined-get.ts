/**
 * entries-predefined-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface EntriesPredefinedGetArgs {
  entryId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EntriesPredefinedGetArgs> = {
  command: 'entries-predefined-get <entryId>',
  describe: 'Fetches a DLP entry by ID.',

  builder: (yargs: Argv): Argv<EntriesPredefinedGetArgs> => {
    return yargs
      .positional('entryId', {
        type: 'string',
        description: 'Entry ID',
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
      }) as Argv<EntriesPredefinedGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EntriesPredefinedGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.entryId as string | undefined, 'entryId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dlp.entriesPredefinedGet(accountId, argv.entryId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
