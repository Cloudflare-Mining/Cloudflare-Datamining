/**
 * dataset-indicators-delete command
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

interface DatasetIndicatorsDeleteArgs {
  datasetId: string;
  indicatorId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetIndicatorsDeleteArgs> = {
  command: 'dataset-indicators-delete <datasetId> <indicatorId>',
  describe: 'Deletes a specific indicator by its UUID.',

  builder: (yargs: Argv): Argv<DatasetIndicatorsDeleteArgs> => {
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<DatasetIndicatorsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetIndicatorsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      validateResourceId(argv.indicatorId as string | undefined, 'indicatorId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-indicators-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/indicators/${argv.indicatorId ?? '<indicatorId>'}`,
          pathParams: { datasetId: String(argv.datasetId ?? ''), indicatorId: String(argv.indicatorId ?? '') },
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

      const result = await client.cloudforceOne.events.datasetIndicatorsDelete(
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
