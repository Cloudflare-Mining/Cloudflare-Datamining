/**
 * outputs-list command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface OutputsListArgs {
  liveInputIdentifier: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, OutputsListArgs> = {
  command: 'outputs-list <liveInputIdentifier>',
  describe: 'Retrieves all outputs associated with a specified live input.',

  builder: (yargs: Argv): Argv<OutputsListArgs> => {
    return yargs
      .positional('liveInputIdentifier', {
        type: 'string',
        description: 'A unique identifier for a live input.',
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
      }) as Argv<OutputsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OutputsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.liveInputIdentifier as string | undefined, 'liveInputIdentifier');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.stream.liveinputs.outputsList(argv.liveInputIdentifier, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
