/**
 * dataset-indicator-types-create-create command
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

interface DatasetIndicatorTypesCreateCreateArgs {
  datasetId: string;
  description?: string;
  'indicator-type': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetIndicatorTypesCreateCreateArgs> = {
  command: 'dataset-indicator-types-create-create <datasetId>',
  describe: 'Creates a new indicator type and initializes its dedicated Durable Object',

  builder: (yargs: Argv): Argv<DatasetIndicatorTypesCreateCreateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset ID.',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'Optional description for the indicator type',
        default: undefined,
      })
      .option('indicator-type', {
        type: 'string',
        description: "The indicator type to create (e.g., 'DOMAIN', 'IP', 'URL', 'HASH', 'EMAIL')",
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
      }) as Argv<DatasetIndicatorTypesCreateCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetIndicatorTypesCreateCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-indicator-types-create-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/indicatorTypes/create`,
          pathParams: { datasetId: String(argv.datasetId ?? '') },
          body: { description: argv.description, indicatorType: argv.indicatorType },
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
          `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/indicatorTypes/create`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.indicatorType !== undefined) setNestedValue(bodyData, ['indicatorType'], argv.indicatorType);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/indicatorTypes/create`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
