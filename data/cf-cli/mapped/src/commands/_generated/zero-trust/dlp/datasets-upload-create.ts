/**
 * datasets-upload-create command
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

interface DatasetsUploadCreateArgs {
  datasetId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DatasetsUploadCreateArgs> = {
  command: 'datasets-upload-create <datasetId>',
  describe:
    'Creates a new version of a DLP dataset, allowing you to stage changes before activation. Used for single-column EDM and custom word lists.',

  builder: (yargs: Argv): Argv<DatasetsUploadCreateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset ID',
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
      }) as Argv<DatasetsUploadCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetsUploadCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp datasets-upload-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/datasets/${argv.datasetId ?? '<datasetId>'}/upload`,
          pathParams: { datasetId: String(argv.datasetId ?? '') },
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

      const result = await client.zeroTrust.dlp.datasetsUploadCreate(accountId, argv.datasetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
