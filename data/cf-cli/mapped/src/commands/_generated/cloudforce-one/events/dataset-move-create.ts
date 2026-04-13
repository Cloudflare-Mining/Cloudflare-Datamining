/**
 * dataset-move-create command
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

interface DatasetMoveCreateArgs {
  datasetId: string;
  'keep-raw-data'?: boolean;
  'dest-dataset-id': string;
  'event-ids': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetMoveCreateArgs> = {
  command: 'dataset-move-create <datasetId>',
  describe: 'Moves specified events from one dataset to another dataset',

  builder: (yargs: Argv): Argv<DatasetMoveCreateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset UUID.',
        demandOption: true,
      })
      .option('keep-raw-data', {
        type: 'boolean',
        description:
          'If true, copies raw data to the destination dataset. Default is false (raw data is stripped/not copied). Raw data is always deleted from the source.',
        default: false,
      })
      .option('dest-dataset-id', {
        type: 'string',
        description: 'The destDatasetId field',
      })
      .option('event-ids', {
        type: 'string',
        description: 'The eventIds field',
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
      }) as Argv<DatasetMoveCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetMoveCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      const params: Record<string, unknown> = {};
      if (argv.keepRawData !== undefined) params['keepRawData'] = argv.keepRawData;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-move-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/move`,
          pathParams: { datasetId: String(argv.datasetId ?? '') },
          body: { ...params, destDatasetId: argv.destDatasetId, eventIds: argv.eventIds },
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
          `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/move`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destDatasetId !== undefined) setNestedValue(bodyData, ['destDatasetId'], argv.destDatasetId);
      if (argv.eventIds !== undefined) setNestedValue(bodyData, ['eventIds'], argv.eventIds);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/move${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
