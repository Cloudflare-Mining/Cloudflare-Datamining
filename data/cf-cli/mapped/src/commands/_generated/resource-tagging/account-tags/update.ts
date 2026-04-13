/**
 * update command
 * @generated from apis/resource-tagging/schema.ts
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

interface UpdateArgs {
  'if-match'?: string;
  'resource-id': string;
  'resource-type': string;
  'worker-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update',
  describe: 'Creates or updates tags for a specific account-level resource.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .option('if-match', {
        type: 'string',
        description:
          'ETag value for optimistic concurrency control. When provided, the server will verify the current resource ETag matches before applying the write. Returns 412 Precondition Failed if the resource has been modified since the ETag was obtained. Omit this header for unconditional writes.',
        default: undefined,
      })
      .option('resource-id', {
        type: 'string',
        description: 'Identifies the unique resource.',
      })
      .option('resource-type', {
        type: 'string',
        description: 'Enum for worker_version resource type.',
        choices: ['worker_version'] as const,
      })
      .option('worker-id', {
        type: 'string',
        description: 'Worker ID is required only for worker_version resources',
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
      .choices('resource-type', ['worker_version'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      const headers: Record<string, string> = {};
      if (argv.ifMatch !== undefined) headers['If-Match'] = String(argv.ifMatch);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf resource-tagging account-tags update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/tags`,
          pathParams: {},
          body: { resourceId: argv.resourceId, resourceType: argv.resourceType, workerId: argv.workerId },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/tags`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.resourceId !== undefined) setNestedValue(bodyData, ['resource_id'], argv.resourceId);
      if (argv.resourceType !== undefined) setNestedValue(bodyData, ['resource_type'], argv.resourceType);
      if (argv.workerId !== undefined) setNestedValue(bodyData, ['worker_id'], argv.workerId);
      const result = await client.put<unknown>(`/accounts/${accountId}/tags`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
