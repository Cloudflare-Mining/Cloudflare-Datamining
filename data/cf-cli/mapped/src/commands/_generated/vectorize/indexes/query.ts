/**
 * query command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface QueryArgs {
  indexName: string;
  'return-metadata'?: string;
  'return-values'?: boolean;
  'top-k'?: number;
  vector: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, QueryArgs> = {
  command: 'query <indexName>',
  describe: 'Finds vectors closest to a given vector in an index.',

  builder: (yargs: Argv): Argv<QueryArgs> => {
    return yargs
      .positional('indexName', {
        type: 'string',
        description: 'Index name',
        demandOption: true,
      })
      .option('return-metadata', {
        type: 'string',
        description:
          'Whether to return no metadata, indexed metadata or all metadata associated with the closest vectors.',
        choices: ['none', 'indexed', 'all'] as const,
        default: undefined,
      })
      .option('return-values', {
        type: 'boolean',
        description: 'Whether to return the values associated with the closest vectors.',
        default: false,
      })
      .option('top-k', {
        type: 'number',
        description: 'The number of nearest neighbors to find.',
        default: undefined,
      })
      .option('vector', {
        type: 'string',
        description: 'The search vector that will be used to find the nearest neighbors.',
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
      .choices('return-metadata', ['none', 'indexed', 'all'] as const) as Argv<QueryArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<QueryArgs>): Promise<void> => {
    try {
      validateResourceId(argv.indexName as string | undefined, 'indexName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf vectorize indexes query',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/vectorize/v2/indexes/${argv.indexName ?? '<indexName>'}/query`,
          pathParams: { indexName: String(argv.indexName ?? '') },
          body: {
            returnMetadata: argv.returnMetadata,
            returnValues: argv.returnValues,
            topK: argv.topK,
            vector: argv.vector,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/vectorize/v2/indexes/${argv.indexName}/query`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.returnMetadata !== undefined) setNestedValue(bodyData, ['returnMetadata'], argv.returnMetadata);
      if (argv.returnValues !== undefined) setNestedValue(bodyData, ['returnValues'], argv.returnValues);
      if (argv.topK !== undefined) setNestedValue(bodyData, ['topK'], argv.topK);
      if (argv.vector !== undefined) setNestedValue(bodyData, ['vector'], argv.vector);
      const result = await client.post<unknown>(`/accounts/${accountId}/vectorize/v2/indexes/${argv.indexName}/query`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
