/**
 * dataset-indicators-get-indicator command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DatasetIndicatorsGetIndicatorArgs {
  datasetId: string;
  indicatorId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetIndicatorsGetIndicatorArgs> = {
  command: 'dataset-indicators-get-indicator <datasetId> <indicatorId>',
  describe: 'Retrieves a specific indicator by its UUID.',

  builder: (yargs: Argv): Argv<DatasetIndicatorsGetIndicatorArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset ID.',
        demandOption: true,
      })
      .positional('indicatorId', {
        type: 'string',
        description: 'Indicator UUID.',
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
      }) as Argv<DatasetIndicatorsGetIndicatorArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetIndicatorsGetIndicatorArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      validateResourceId(argv.indicatorId as string | undefined, 'indicatorId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.datasetIndicatorsGetIndicator(
        accountId,
        argv.datasetId,
        argv.indicatorId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
