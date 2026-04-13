/**
 * create command
 * @generated from apis/api-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  endpoint: string;
  host: string;
  method: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Add one operation to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('endpoint', {
        type: 'string',
        description:
          'The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-normalized upon insertion. See: https://developers.cloudflare.com/rules/normalization/how-it-works/.',
      })
      .option('host', {
        type: 'string',
        description: 'RFC3986-compliant host.',
      })
      .option('method', {
        type: 'string',
        description: 'The HTTP method used to access the endpoint.',
        choices: ['GET', 'POST', 'HEAD', 'OPTIONS', 'PUT', 'DELETE', 'CONNECT', 'PATCH', 'TRACE'] as const,
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
      .choices('method', [
        'GET',
        'POST',
        'HEAD',
        'OPTIONS',
        'PUT',
        'DELETE',
        'CONNECT',
        'PATCH',
        'TRACE',
      ] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf api-gateway operations create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/api_gateway/operations/item`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { endpoint: argv.endpoint, host: argv.host, method: argv.method },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${argv.zoneId}/api_gateway/operations/item`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.endpoint !== undefined) setNestedValue(bodyData, ['endpoint'], argv.endpoint);
      if (argv.host !== undefined) setNestedValue(bodyData, ['host'], argv.host);
      if (argv.method !== undefined) setNestedValue(bodyData, ['method'], argv.method);
      const result = await client.post<unknown>(`/zones/${argv.zoneId}/api_gateway/operations/item`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
