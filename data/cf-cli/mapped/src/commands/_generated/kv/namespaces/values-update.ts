/**
 * values-update command
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

interface ValuesUpdateArgs {
  keyName: string;
  namespaceId: string;
  expiration?: string;
  'expiration-ttl'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  file?: string;
  accountId?: string;
}

const command: CommandModule<object, ValuesUpdateArgs> = {
  command: 'values-update <keyName> <namespaceId>',
  describe:
    'Write a value identified by a key. Use URL-encoding to use special characters (for example, \`:\`, \`!\`, \`%\`) in the key name. Body should be the value to be stored. If JSON metadata to be associated with the key/value pair is needed, use \`multipart/form-data\` content type for your PUT request (see dropdown below in \`REQUEST BODY SCHEMA\`). Existing values, expirations, and metadata will be overwritten. If neither \`expiration\` nor \`expiration_ttl\` is specified, the key-value pair will never expire. If both are set, \`expiration_ttl\` is used and \`expiration\` is ignored.',

  builder: (yargs: Argv): Argv<ValuesUpdateArgs> => {
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
      .option('expiration', {
        type: 'string',
        description: 'Expires the key at a certain time, measured in number of seconds since the UNIX epoch.',
        default: undefined,
      })
      .option('expiration-ttl', {
        type: 'string',
        description: 'Expires the key after a number of seconds. Must be at least 60.',
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
      }) as Argv<ValuesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ValuesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.keyName as string | undefined, 'keyName');
      validateResourceId(argv.namespaceId as string | undefined, 'namespaceId');

      const params: Record<string, unknown> = {};
      if (argv.expiration !== undefined) params['expiration'] = argv.expiration;
      if (argv.expirationTtl !== undefined) params['expiration_ttl'] = argv.expirationTtl;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf kv namespaces values-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/storage/kv/namespaces/${argv.namespaceId ?? '<namespaceId>'}/values/${argv.keyName ?? '<keyName>'}`,
          pathParams: { keyName: String(argv.keyName ?? ''), namespaceId: String(argv.namespaceId ?? '') },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/storage/kv/namespaces/${argv.namespaceId}/values/${argv.keyName}`,
          { body: fileContent, headers: { 'Content-Type': 'application/octet-stream' } },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(
          `/accounts/${accountId}/storage/kv/namespaces/${argv.namespaceId}/values/${argv.keyName}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.kv.namespaces.valuesUpdate(
        argv.keyName,
        argv.namespaceId,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
