/**
 * update command
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

interface UpdateArgs {
  documentFingerprintId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  file?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <documentFingerprintId>',
  describe:
    'Uploads a new document to create or update a fingerprint. The document structure is analyzed to enable detection of similar documents.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('documentFingerprintId', {
        type: 'string',
        description: 'Document fingerprint ID',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.documentFingerprintId as string | undefined, 'documentFingerprintId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust document-fingerprints update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/document_fingerprints/${argv.documentFingerprintId ?? '<documentFingerprintId>'}`,
          pathParams: { documentFingerprintId: String(argv.documentFingerprintId ?? '') },
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
        const formData = new FormData();
        formData.append('file', new Blob([fileContent]), argv.file.split('/').pop());
        const result = await client.put<unknown>(
          `/accounts/${accountId}/dlp/document_fingerprints/${argv.documentFingerprintId}`,
          { body: formData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(
          `/accounts/${accountId}/dlp/document_fingerprints/${argv.documentFingerprintId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.zeroTrust.documentfingerprints.update(accountId, argv.documentFingerprintId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
