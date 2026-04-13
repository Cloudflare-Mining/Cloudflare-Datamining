/**
 * datasets-versions-entries-create command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface DatasetsVersionsEntriesCreateArgs {
  datasetId: string;
  version: string;
  entryId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  file?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetsVersionsEntriesCreateArgs> = {
  command: 'datasets-versions-entries-create <datasetId> <version> <entryId>',
  describe:
    'This is used for multi-column EDMv2 datasets. The EDMv2 format can only be created in the Cloudflare dashboard.',

  builder: (yargs: Argv): Argv<DatasetsVersionsEntriesCreateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset ID',
        demandOption: true,
      })
      .positional('version', {
        type: 'string',
        description: 'Version',
        demandOption: true,
      })
      .positional('entryId', {
        type: 'string',
        description: 'Entry ID',
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .option('file', {
        type: 'string',
        description: 'Path to a file to upload as the request body',
      }) as Argv<DatasetsVersionsEntriesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetsVersionsEntriesCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      validateResourceId(argv.version as string | undefined, 'version');
      validateResourceId(argv.entryId as string | undefined, 'entryId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp datasets-versions-entries-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/datasets/${argv.datasetId ?? '<datasetId>'}/versions/${argv.version ?? '<version>'}/entries/${argv.entryId ?? '<entryId>'}`,
          pathParams: {
            datasetId: String(argv.datasetId ?? ''),
            version: String(argv.version ?? ''),
            entryId: String(argv.entryId ?? ''),
          },
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

      if (argv.file) {
        const { readFileSync } = await import('node:fs');
        const { resolve } = await import('node:path');
        const filePath = resolve(argv.file);
        const fileContent = readFileSync(filePath);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/dlp/datasets/${argv.datasetId}/versions/${argv.version}/entries/${argv.entryId}`,
          { body: fileContent, headers: { 'Content-Type': 'application/octet-stream' } },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/dlp/datasets/${argv.datasetId}/versions/${argv.version}/entries/${argv.entryId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.zeroTrust.dlp.datasetsVersionsEntriesCreate(
        accountId,
        argv.datasetId,
        argv.version,
        argv.entryId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
