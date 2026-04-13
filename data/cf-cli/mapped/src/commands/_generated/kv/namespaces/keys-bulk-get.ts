/**
 * keys-bulk-get command
 * @generated from apis/kv/schema.ts
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

interface KeysBulkGetArgs {
  namespaceId: string;
  keys: string;
  type?: string;
  'with-metadata'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, KeysBulkGetArgs> = {
  command: 'keys-bulk-get <namespaceId>',
  describe:
    'Retrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if \`withMetadata\` is true.',

  builder: (yargs: Argv): Argv<KeysBulkGetArgs> => {
    return yargs
      .positional('namespaceId', {
        type: 'string',
        description: 'Namespace identifier tag.',
        demandOption: true,
      })
      .option('keys', {
        type: 'string',
        description: 'Array of keys to retrieve (maximum of 100).',
      })
      .option('type', {
        type: 'string',
        description: 'Whether to parse JSON values in the response.',
        choices: ['text', 'json'] as const,
        default: undefined,
      })
      .option('with-metadata', {
        type: 'boolean',
        description: 'Whether to include metadata in the response.',
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
      })
      .choices('type', ['text', 'json'] as const) as Argv<KeysBulkGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<KeysBulkGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.namespaceId as string | undefined, 'namespaceId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf kv namespaces keys-bulk-get',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/storage/kv/namespaces/${argv.namespaceId ?? '<namespaceId>'}/bulk/get`,
          pathParams: { namespaceId: String(argv.namespaceId ?? '') },
          body: { keys: argv.keys, type: argv.type, withMetadata: argv.withMetadata },
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
          `/accounts/${accountId}/storage/kv/namespaces/${argv.namespaceId}/bulk/get`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.keys !== undefined) setNestedValue(bodyData, ['keys'], argv.keys);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.withMetadata !== undefined) setNestedValue(bodyData, ['withMetadata'], argv.withMetadata);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/storage/kv/namespaces/${argv.namespaceId}/bulk/get`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
