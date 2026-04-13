/**
 * secrets-duplicate-create command
 * @generated from apis/secrets-store/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface SecretsDuplicateCreateArgs {
  accountTag: string;
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

const command: CommandModule<object, SecretsDuplicateCreateArgs> = {
  command: 'secrets-duplicate-create <accountTag> <storeId> <secretId>',
  describe:
    "Duplicates a secret in a store managed by the calling service, keeping the value. Returns 404 if the store doesn't exist or is not managed by the authenticated service.",

  builder: (yargs: Argv): Argv<SecretsDuplicateCreateArgs> => {
    return yargs
      .positional('accountTag', {
        type: 'string',
        description:
          "Account tag identifier (e.g., '12a6ed19f349896cfbd6694ba3de8d31'). This is the account's external tag identifier, not the numeric account ID.",
        demandOption: true,
      })
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
      }) as Argv<SecretsDuplicateCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsDuplicateCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.accountTag as string | undefined, 'accountTag');
      validateResourceId(argv.storeId as string | undefined, 'storeId');
      validateResourceId(argv.secretId as string | undefined, 'secretId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf secrets-store stores-extra secrets-duplicate-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/system/accounts/${argv.accountTag ?? '<accountTag>'}/stores/${argv.storeId ?? '<storeId>'}/secrets/${argv.secretId ?? '<secretId>'}/duplicate`,
          pathParams: {
            accountTag: String(argv.accountTag ?? ''),
            storeId: String(argv.storeId ?? ''),
            secretId: String(argv.secretId ?? ''),
          },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/system/accounts/${argv.accountTag}/stores/${argv.storeId}/secrets/${argv.secretId}/duplicate`,
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
        `/system/accounts/${argv.accountTag}/stores/${argv.storeId}/secrets/${argv.secretId}/duplicate`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
