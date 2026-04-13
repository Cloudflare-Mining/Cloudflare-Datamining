/**
 * namespaces-scripts-secrets-update command
 * @generated from apis/workers-for-platforms/schema.ts
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

interface NamespacesScriptsSecretsUpdateArgs {
  dispatchNamespace: string;
  scriptName: string;
  name: string;
  text?: string;
  type: string;
  format?: string;
  'key-base64'?: string;
  usages?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, NamespacesScriptsSecretsUpdateArgs> = {
  command: 'namespaces-scripts-secrets-update <dispatchNamespace> <scriptName>',
  describe: 'Add a secret to a script uploaded to a Workers for Platforms namespace.',

  builder: (yargs: Argv): Argv<NamespacesScriptsSecretsUpdateArgs> => {
    return yargs
      .positional('dispatchNamespace', {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
        demandOption: true,
      })
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'A JavaScript variable name for the binding.',
      })
      .option('text', {
        type: 'string',
        description: 'The secret value to use.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'The kind of resource that the binding provides.',
        choices: ['secret_text'] as const,
      })
      .option('format', {
        type: 'string',
        description:
          'Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).',
        choices: ['raw', 'pkcs8', 'spki', 'jwk'] as const,
        default: undefined,
      })
      .option('key-base64', {
        type: 'string',
        description: 'Base64-encoded key data. Required if \`format\` is "raw", "pkcs8", or "spki".',
        default: undefined,
      })
      .option('usages', {
        type: 'string',
        description:
          'Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).',
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
      .conflicts('text', ['format', 'keyBase64', 'usages'])
      .conflicts('format', ['text'])
      .implies('format', ['usages'])
      .conflicts('key-base64', ['text'])
      .conflicts('usages', ['text'])
      .implies('usages', ['format'])
      .choices('type', ['secret_text'] as const)
      .choices('format', ['raw', 'pkcs8', 'spki', 'jwk'] as const) as Argv<NamespacesScriptsSecretsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NamespacesScriptsSecretsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dispatchNamespace as string | undefined, 'dispatchNamespace');
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers-for-platforms dispatch namespaces-scripts-secrets-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/dispatch/namespaces/${argv.dispatchNamespace ?? '<dispatchNamespace>'}/scripts/${argv.scriptName ?? '<scriptName>'}/secrets`,
          pathParams: {
            dispatchNamespace: String(argv.dispatchNamespace ?? ''),
            scriptName: String(argv.scriptName ?? ''),
          },
          body: {
            name: argv.name,
            text: argv.text,
            type: argv.type,
            format: argv.format,
            keyBase64: argv.keyBase64,
            usages: argv.usages,
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/workers/dispatch/namespaces/${argv.dispatchNamespace}/scripts/${argv.scriptName}/secrets`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.text !== undefined) setNestedValue(bodyData, ['text'], argv.text);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.format !== undefined) setNestedValue(bodyData, ['format'], argv.format);
      if (argv.keyBase64 !== undefined) setNestedValue(bodyData, ['key_base64'], argv.keyBase64);
      if (argv.usages !== undefined) setNestedValue(bodyData, ['usages'], argv.usages);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/workers/dispatch/namespaces/${argv.dispatchNamespace}/scripts/${argv.scriptName}/secrets`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
