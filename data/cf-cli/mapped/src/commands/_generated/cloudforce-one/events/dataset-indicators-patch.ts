/**
 * dataset-indicators-patch command
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

interface DatasetIndicatorsPatchArgs {
  datasetId: string;
  indicatorId: string;
  'indicator-type'?: string;
  value?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetIndicatorsPatchArgs> = {
  command: 'dataset-indicators-patch <datasetId> <indicatorId>',
  describe: "Updates an existing indicator's properties.",

  builder: (yargs: Argv): Argv<DatasetIndicatorsPatchArgs> => {
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
      .option('indicator-type', {
        type: 'string',
        description: 'The indicatorType field',
        default: undefined,
      })
      .option('value', {
        type: 'string',
        description: 'The value field',
        default: undefined,
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
      }) as Argv<DatasetIndicatorsPatchArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetIndicatorsPatchArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      validateResourceId(argv.indicatorId as string | undefined, 'indicatorId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-indicators-patch',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/indicators/${argv.indicatorId ?? '<indicatorId>'}`,
          pathParams: { datasetId: String(argv.datasetId ?? ''), indicatorId: String(argv.indicatorId ?? '') },
          body: { indicatorType: argv.indicatorType, value: argv.value },
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/indicators/${argv.indicatorId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.indicatorType !== undefined) setNestedValue(bodyData, ['indicatorType'], argv.indicatorType);
      if (argv.value !== undefined) setNestedValue(bodyData, ['value'], argv.value);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/indicators/${argv.indicatorId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
