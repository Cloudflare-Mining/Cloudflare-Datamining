/**
 * secrets-edit command
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

interface SecretsEditArgs {
  accountTag: string;
  storeId: string;
  secretId: string;
  comment?: string;
  scopes?: string;
  value?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SecretsEditArgs> = {
  command: 'secrets-edit <accountTag> <storeId> <secretId>',
  describe:
    "Updates a single secret in a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.",

  builder: (yargs: Argv): Argv<SecretsEditArgs> => {
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
      .option('scopes', {
        type: 'string',
        description: 'The list of services that can use this secret.',
        default: undefined,
      })
      .option('value', {
        type: 'string',
        description:
          "The value of the secret. Note that this is 'write only' - no API reponse will provide this value, it is only used to create/modify secrets.",
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
      }) as Argv<SecretsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecretsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.accountTag as string | undefined, 'accountTag');
      validateResourceId(argv.storeId as string | undefined, 'storeId');
      validateResourceId(argv.secretId as string | undefined, 'secretId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf secrets-store stores-extra secrets-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/system/accounts/${argv.accountTag ?? '<accountTag>'}/stores/${argv.storeId ?? '<storeId>'}/secrets/${argv.secretId ?? '<secretId>'}`,
          pathParams: {
            accountTag: String(argv.accountTag ?? ''),
            storeId: String(argv.storeId ?? ''),
            secretId: String(argv.secretId ?? ''),
          },
          body: { comment: argv.comment, scopes: argv.scopes, value: argv.value },
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
        const result = await client.patch<unknown>(
          `/system/accounts/${argv.accountTag}/stores/${argv.storeId}/secrets/${argv.secretId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.scopes !== undefined) setNestedValue(bodyData, ['scopes'], argv.scopes);
      if (argv.value !== undefined) setNestedValue(bodyData, ['value'], argv.value);
      const result = await client.patch<unknown>(
        `/system/accounts/${argv.accountTag}/stores/${argv.storeId}/secrets/${argv.secretId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
