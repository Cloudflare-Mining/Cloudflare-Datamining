/**
 * datasets-update command
 * @generated from apis/zero-trust/schema.ts
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

interface DatasetsUpdateArgs {
  datasetId: string;
  'case-sensitive'?: boolean;
  description?: string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetsUpdateArgs> = {
  command: 'datasets-update <datasetId>',
  describe:
    'Updates the configuration of an existing DLP dataset, such as its name, description, or detection settings.',

  builder: (yargs: Argv): Argv<DatasetsUpdateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset ID',
        demandOption: true,
      })
      .option('case-sensitive', {
        type: 'boolean',
        description:
          'Determines if the words should be matched in a case-sensitive manner.  Only required for custom word lists.',
        default: false,
      })
      .option('description', {
        type: 'string',
        description: 'The description of the dataset.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the dataset, must be unique.',
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
      }) as Argv<DatasetsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp datasets-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/datasets/${argv.datasetId ?? '<datasetId>'}`,
          pathParams: { datasetId: String(argv.datasetId ?? '') },
          body: { caseSensitive: argv.caseSensitive, description: argv.description, name: argv.name },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/dlp/datasets/${argv.datasetId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.caseSensitive !== undefined) setNestedValue(bodyData, ['case_sensitive'], argv.caseSensitive);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.put<unknown>(`/accounts/${accountId}/dlp/datasets/${argv.datasetId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
