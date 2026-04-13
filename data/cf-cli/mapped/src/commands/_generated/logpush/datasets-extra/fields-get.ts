/**
 * fields-get command
 * @generated from apis/logpush/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface FieldsGetArgs {
  datasetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, FieldsGetArgs> = {
  command: 'fields-get <datasetId>',
  describe:
    'Lists all fields available for a dataset. The response result is. an object with key-value pairs, where keys are field names, and values are descriptions.',

  builder: (yargs: Argv): Argv<FieldsGetArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description:
          'Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).',
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
      }) as Argv<FieldsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<FieldsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.logpush.datasetsextra.fieldsGet(argv.datasetId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
