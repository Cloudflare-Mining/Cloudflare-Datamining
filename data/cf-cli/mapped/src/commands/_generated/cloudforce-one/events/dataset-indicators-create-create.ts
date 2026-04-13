/**
 * dataset-indicators-create-create command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface DatasetIndicatorsCreateCreateArgs {
  datasetId: string;
  'auto-create-type'?: boolean;
  'indicator-type': string;
  value: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetIndicatorsCreateCreateArgs> = {
  command: 'dataset-indicators-create-create <datasetId>',
  describe: 'Creates a new indicator with the specified type and related datasets.',

  builder: (yargs: Argv): Argv<DatasetIndicatorsCreateCreateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset UUID.',
        demandOption: true,
      })
      .option('auto-create-type', {
        type: 'boolean',
        description:
          "If true, automatically create the indicator type if it doesn't exist. If false (default), throw an error when the indicator type doesn't exist.",
        default: false,
      })
      .option('indicator-type', {
        type: 'string',
        description: 'The indicatorType field',
      })
      .option('value', {
        type: 'string',
        description: 'The value field',
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<DatasetIndicatorsCreateCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetIndicatorsCreateCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-indicators-create-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/indicators/create`,
          pathParams: { datasetId: String(argv.datasetId ?? '') },
          body: { autoCreateType: argv.autoCreateType, indicatorType: argv.indicatorType, value: argv.value },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/indicators/create`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.autoCreateType !== undefined) setNestedValue(bodyData, ['autoCreateType'], argv.autoCreateType);
      if (argv.indicatorType !== undefined) setNestedValue(bodyData, ['indicatorType'], argv.indicatorType);
      if (argv.value !== undefined) setNestedValue(bodyData, ['value'], argv.value);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/indicators/create`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
