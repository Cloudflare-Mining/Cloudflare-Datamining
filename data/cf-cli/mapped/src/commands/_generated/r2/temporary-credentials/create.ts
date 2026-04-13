/**
 * create command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  bucket: string;
  objects?: string;
  'parent-access-key-id': string;
  permission: string;
  prefixes?: string;
  'ttl-seconds': number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates temporary access credentials on a bucket that can be optionally scoped to prefixes or objects.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('bucket', {
        type: 'string',
        description: 'Name of the R2 bucket.',
      })
      .option('objects', {
        type: 'string',
        description: 'Optional object paths to scope the credentials to.',
        default: undefined,
      })
      .option('parent-access-key-id', {
        type: 'string',
        description: 'The parent access key id to use for signing.',
      })
      .option('permission', {
        type: 'string',
        description: 'Permissions allowed on the credentials.',
        choices: ['admin-read-write', 'admin-read-only', 'object-read-write', 'object-read-only'] as const,
      })
      .option('prefixes', {
        type: 'string',
        description: 'Optional prefix paths to scope the credentials to.',
        default: undefined,
      })
      .option('ttl-seconds', {
        type: 'number',
        description: 'How long the credentials will live for in seconds.',
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
      .choices('permission', [
        'admin-read-write',
        'admin-read-only',
        'object-read-write',
        'object-read-only',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 temporary-credentials create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2/temp-access-credentials`,
          pathParams: {},
          body: {
            bucket: argv.bucket,
            objects: argv.objects,
            parentAccessKeyId: argv.parentAccessKeyId,
            permission: argv.permission,
            prefixes: argv.prefixes,
            ttlSeconds: argv.ttlSeconds,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/r2/temp-access-credentials`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bucket !== undefined) setNestedValue(bodyData, ['bucket'], argv.bucket);
      if (argv.objects !== undefined) setNestedValue(bodyData, ['objects'], argv.objects);
      if (argv.parentAccessKeyId !== undefined) setNestedValue(bodyData, ['parentAccessKeyId'], argv.parentAccessKeyId);
      if (argv.permission !== undefined) setNestedValue(bodyData, ['permission'], argv.permission);
      if (argv.prefixes !== undefined) setNestedValue(bodyData, ['prefixes'], argv.prefixes);
      if (argv.ttlSeconds !== undefined) setNestedValue(bodyData, ['ttlSeconds'], argv.ttlSeconds);
      const result = await client.post<unknown>(`/accounts/${accountId}/r2/temp-access-credentials`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
