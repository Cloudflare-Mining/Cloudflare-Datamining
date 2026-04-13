/**
 * insert command
 * @generated from apis/vectorize/schema.ts
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

interface InsertArgs {
  indexName: string;
  'unparsable-behavior'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  file?: string;
  accountId?: string;
}

const command: CommandModule<object, InsertArgs> = {
  command: 'insert <indexName>',
  describe:
    'Inserts vectors into the specified index and returns a mutation id corresponding to the vectors enqueued for insertion.',

  builder: (yargs: Argv): Argv<InsertArgs> => {
    return yargs
      .positional('indexName', {
        type: 'string',
        description: 'Index name',
        demandOption: true,
      })
      .option('unparsable-behavior', {
        type: 'string',
        description: 'Behavior for ndjson parse failures.',
        choices: ['error', 'discard'] as const,
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
      })
      .option('file', {
        type: 'string',
        description: 'Path to a file to upload as the request body',
      }) as Argv<InsertArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InsertArgs>): Promise<void> => {
    try {
      validateResourceId(argv.indexName as string | undefined, 'indexName');

      const params: Record<string, unknown> = {};
      if (argv.unparsableBehavior !== undefined) params['unparsable-behavior'] = argv.unparsableBehavior;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vectorize indexes insert',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vectorize/v2/indexes/${argv.indexName ?? '<indexName>'}/insert`,
          pathParams: { indexName: String(argv.indexName ?? '') },
          body: { ...params },
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
          `/accounts/${accountId}/vectorize/v2/indexes/${argv.indexName}/insert`,
          { body: fileContent, headers: { 'Content-Type': 'application/x-ndjson' } },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/vectorize/v2/indexes/${argv.indexName}/insert`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.vectorize.indexes.insert(
        accountId,
        argv.indexName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
