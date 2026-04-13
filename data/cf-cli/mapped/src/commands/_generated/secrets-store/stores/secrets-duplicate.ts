/**
 * secrets-duplicate command
 * @generated from apis/secrets-store/schema.ts
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

interface SecretsDuplicateArgs {
  storeId: string;
  secretId: string;
  comment?: string;
  name: string;
  scopes: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SecretsDuplicateArgs> = {
  command: 'secrets-duplicate <storeId> <secretId>',
  describe: 'Duplicates the secret, keeping the value',

  builder: (yargs: Argv): Argv<SecretsDuplicateArgs> => {
    return yargs
      .positional('storeId', {
        type: 'string',
        description: 'Store Identifier',
        demandOption: true,
      })
      .positional('secretId', {
        type: 'string',
        description: 'Secret identifier tag.',
        demandOption: true,
      })
      .option('comment', {
        type: 'string',
        description: 'Freeform text describing the secret',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the secret',
      })
      .option('scopes', {
        type: 'string',
        description: 'The list of services that can use this secret.',
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
      }) as Argv<SecretsDuplicateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsDuplicateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.storeId as string | undefined, 'storeId');
      validateResourceId(argv.secretId as string | undefined, 'secretId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf secrets-store stores secrets-duplicate',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/secrets_store/stores/${argv.storeId ?? '<storeId>'}/secrets/${argv.secretId ?? '<secretId>'}/duplicate`,
          pathParams: { storeId: String(argv.storeId ?? ''), secretId: String(argv.secretId ?? '') },
          body: { comment: argv.comment, name: argv.name, scopes: argv.scopes },
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
          `/accounts/${accountId}/secrets_store/stores/${argv.storeId}/secrets/${argv.secretId}/duplicate`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.scopes !== undefined) setNestedValue(bodyData, ['scopes'], argv.scopes);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/secrets_store/stores/${argv.storeId}/secrets/${argv.secretId}/duplicate`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
