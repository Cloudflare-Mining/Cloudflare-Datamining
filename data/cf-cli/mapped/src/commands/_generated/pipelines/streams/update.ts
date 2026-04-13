/**
 * update command
 * @generated from apis/pipelines/schema.ts
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

interface UpdateArgs {
  streamId: string;
  'http-authentication': boolean;
  'http-cors-origins'?: string;
  'http-enabled': boolean;
  'worker-binding-enabled': boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <streamId>',
  describe: 'Update a Stream.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('streamId', {
        type: 'string',
        description: 'Specifies the public ID of the stream.',
        demandOption: true,
      })
      .option('http-authentication', {
        type: 'boolean',
        description: 'Indicates that authentication is required for the HTTP endpoint.',
      })
      .option('http-cors-origins', {
        type: 'string',
        description: 'The http.cors.origins field',
        default: undefined,
      })
      .option('http-enabled', {
        type: 'boolean',
        description: 'Indicates that the HTTP endpoint is enabled.',
      })
      .option('worker-binding-enabled', {
        type: 'boolean',
        description: 'Indicates that the worker binding is enabled.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.streamId as string | undefined, 'streamId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pipelines streams update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pipelines/v1/streams/${argv.streamId ?? '<streamId>'}`,
          pathParams: { streamId: String(argv.streamId ?? '') },
          body: {
            httpAuthentication: argv.httpAuthentication,
            httpCorsOrigins: argv.httpCorsOrigins,
            httpEnabled: argv.httpEnabled,
            workerBindingEnabled: argv.workerBindingEnabled,
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/pipelines/v1/streams/${argv.streamId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.httpAuthentication !== undefined)
        setNestedValue(bodyData, ['http', 'authentication'], argv.httpAuthentication);
      if (argv.httpCorsOrigins !== undefined)
        setNestedValue(bodyData, ['http', 'cors', 'origins'], argv.httpCorsOrigins);
      if (argv.httpEnabled !== undefined) setNestedValue(bodyData, ['http', 'enabled'], argv.httpEnabled);
      if (argv.workerBindingEnabled !== undefined)
        setNestedValue(bodyData, ['worker_binding', 'enabled'], argv.workerBindingEnabled);
      const result = await client.patch<unknown>(`/accounts/${accountId}/pipelines/v1/streams/${argv.streamId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
