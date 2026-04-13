/**
 * values-delete command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface ValuesDeleteArgs {
  keyName: string;
  namespaceId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ValuesDeleteArgs> = {
  command: 'values-delete <keyName> <namespaceId>',
  describe:
    'Remove a KV pair from the namespace. Use URL-encoding to use special characters (for example, \`:\`, \`!\`, \`%\`) in the key name.',

  builder: (yargs: Argv): Argv<ValuesDeleteArgs> => {
    return yargs
      .positional('keyName', {
        type: 'string',
        description:
          "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.",
        demandOption: true,
      })
      .positional('namespaceId', {
        type: 'string',
        description: 'Namespace identifier tag.',
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
      }) as Argv<ValuesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ValuesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.keyName as string | undefined, 'keyName');
      validateResourceId(argv.namespaceId as string | undefined, 'namespaceId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf kv namespaces values-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/storage/kv/namespaces/${argv.namespaceId ?? '<namespaceId>'}/values/${argv.keyName ?? '<keyName>'}`,
          pathParams: { keyName: String(argv.keyName ?? ''), namespaceId: String(argv.namespaceId ?? '') },
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
        const result = await client.delete<unknown>(
          `/accounts/${accountId}/storage/kv/namespaces/${argv.namespaceId}/values/${argv.keyName}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.kv.namespaces.valuesDelete(argv.keyName, argv.namespaceId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
