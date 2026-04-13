/**
 * bulk-create command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface BulkCreateArgs {
  'dataset-id': string;
  'include-created-events'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, BulkCreateArgs> = {
  command: 'bulk-create',
  describe:
    'The \`datasetId\` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [\`List Datasets\`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.',

  builder: (yargs: Argv): Argv<BulkCreateArgs> => {
    return yargs
      .option('dataset-id', {
        type: 'string',
        description: 'The datasetId field',
      })
      .option('include-created-events', {
        type: 'boolean',
        description:
          'When true, response includes array of created event UUIDs and shard IDs. Useful for tracking which events were created and where.',
        default: false,
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
      }) as Argv<BulkCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BulkCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one threat-events bulk-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/create/bulk`,
          pathParams: {},
          body: { datasetId: argv.datasetId, includeCreatedEvents: argv.includeCreatedEvents },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create/bulk`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.datasetId !== undefined) setNestedValue(bodyData, ['datasetId'], argv.datasetId);
      if (argv.includeCreatedEvents !== undefined)
        setNestedValue(bodyData, ['includeCreatedEvents'], argv.includeCreatedEvents);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/create/bulk`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
