/**
 * get-document-fingerprints command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetDocumentFingerprintsArgs {
  documentFingerprintId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetDocumentFingerprintsArgs> = {
  command: 'get-document-fingerprints <documentFingerprintId>',
  describe: 'Retrieve data about a specific document fingerprint.',

  builder: (yargs: Argv): Argv<GetDocumentFingerprintsArgs> => {
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
      }) as Argv<GetDocumentFingerprintsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetDocumentFingerprintsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.documentFingerprintId as string | undefined, 'documentFingerprintId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.documentfingerprints.getDocumentFingerprints(
        accountId,
        argv.documentFingerprintId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
