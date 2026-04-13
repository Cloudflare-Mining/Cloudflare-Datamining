/**
 * dataset-target-industries-get command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DatasetTargetIndustriesGetArgs {
  datasetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetTargetIndustriesGetArgs> = {
  command: 'dataset-target-industries-get <datasetId>',
  describe: 'Lists all target industries for a specific dataset',

  builder: (yargs: Argv): Argv<DatasetTargetIndustriesGetArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset UUID.',
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
      }) as Argv<DatasetTargetIndustriesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetTargetIndustriesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.datasetTargetIndustriesGet(accountId, argv.datasetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
