/**
 * results-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ResultsGetArgs {
  configId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ResultsGetArgs> = {
  command: 'results-get <configId>',
  describe:
    'Retrieves the latest scan results for a Cloudforce One scan configuration, including discovered open ports.',

  builder: (yargs: Argv): Argv<ResultsGetArgs> => {
    return yargs
      .positional('configId', {
        type: 'string',
        description: 'Defines the Config ID.',
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
      }) as Argv<ResultsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ResultsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.configId as string | undefined, 'configId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.scans.resultsGet(accountId, argv.configId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
