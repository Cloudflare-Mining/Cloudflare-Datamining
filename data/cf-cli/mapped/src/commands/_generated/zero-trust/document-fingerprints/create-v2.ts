/**
 * create-v2 command
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

interface CreateV2Args {
  documentFingerprintId: string;
  description?: string;
  'match-percent'?: number;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateV2Args> = {
  command: 'create-v2 <documentFingerprintId>',
  describe: 'Updates metadata for an existing document fingerprint, such as its name or description.',

  builder: (yargs: Argv): Argv<CreateV2Args> => {
    return yargs
      .positional('documentFingerprintId', {
        type: 'string',
        description: 'Document fingerprint ID',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('match-percent', {
        type: 'number',
        description: 'The match_percent field',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
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
      }) as Argv<CreateV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.documentFingerprintId as string | undefined, 'documentFingerprintId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust document-fingerprints create-v2',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/document_fingerprints/${argv.documentFingerprintId ?? '<documentFingerprintId>'}`,
          pathParams: { documentFingerprintId: String(argv.documentFingerprintId ?? '') },
          body: { description: argv.description, matchPercent: argv.matchPercent, name: argv.name },
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
          `/accounts/${accountId}/dlp/document_fingerprints/${argv.documentFingerprintId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.matchPercent !== undefined) setNestedValue(bodyData, ['match_percent'], argv.matchPercent);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/dlp/document_fingerprints/${argv.documentFingerprintId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
