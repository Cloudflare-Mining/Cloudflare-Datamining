/**
 * create command
 * @generated from apis/pipelines/schema.ts
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
  'format-decimal-encoding'?: string;
  'format-timestamp-format'?: string;
  'format-unstructured'?: boolean;
  'format-type': string;
  'format-compression'?: string;
  'format-row-group-bytes'?: number;
  'http-authentication': boolean;
  'http-cors-origins'?: string;
  'http-enabled': boolean;
  name: string;
  'schema-inferred'?: boolean;
  'worker-binding-enabled': boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new Stream.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('format-decimal-encoding', {
        type: 'string',
        description: 'The format.decimal_encoding field',
        choices: ['number', 'string', 'bytes'] as const,
        default: undefined,
      })
      .option('format-timestamp-format', {
        type: 'string',
        description: 'The format.timestamp_format field',
        choices: ['rfc3339', 'unix_millis'] as const,
        default: undefined,
      })
      .option('format-unstructured', {
        type: 'boolean',
        description: 'The format.unstructured field',
        default: false,
      })
      .option('format-type', {
        type: 'string',
        description: 'The format.type field',
        choices: ['json'] as const,
      })
      .option('format-compression', {
        type: 'string',
        description: 'The format.compression field',
        choices: ['uncompressed', 'snappy', 'gzip', 'zstd', 'lz4'] as const,
        default: undefined,
      })
      .option('format-row-group-bytes', {
        type: 'number',
        description: 'The format.row_group_bytes field',
        default: undefined,
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
      .option('name', {
        type: 'string',
        description: 'Specifies the name of the Stream.',
      })
      .option('schema-inferred', {
        type: 'boolean',
        description: 'The schema.inferred field',
        default: false,
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
      })
      .conflicts('format-decimal-encoding', ['formatCompression', 'formatRowGroupBytes'])
      .conflicts('format-timestamp-format', ['formatCompression', 'formatRowGroupBytes'])
      .conflicts('format-unstructured', ['formatCompression', 'formatRowGroupBytes'])
      .conflicts('format-compression', ['formatDecimalEncoding', 'formatTimestampFormat', 'formatUnstructured'])
      .conflicts('format-row-group-bytes', ['formatDecimalEncoding', 'formatTimestampFormat', 'formatUnstructured'])
      .choices('format-decimal-encoding', ['number', 'string', 'bytes'] as const)
      .choices('format-timestamp-format', ['rfc3339', 'unix_millis'] as const)
      .choices('format-type', ['json'] as const)
      .choices('format-compression', ['uncompressed', 'snappy', 'gzip', 'zstd', 'lz4'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pipelines streams create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pipelines/v1/streams`,
          pathParams: {},
          body: {
            formatDecimalEncoding: argv.formatDecimalEncoding,
            formatTimestampFormat: argv.formatTimestampFormat,
            formatUnstructured: argv.formatUnstructured,
            formatType: argv.formatType,
            formatCompression: argv.formatCompression,
            formatRowGroupBytes: argv.formatRowGroupBytes,
            httpAuthentication: argv.httpAuthentication,
            httpCorsOrigins: argv.httpCorsOrigins,
            httpEnabled: argv.httpEnabled,
            name: argv.name,
            schemaInferred: argv.schemaInferred,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/pipelines/v1/streams`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.formatDecimalEncoding !== undefined)
        setNestedValue(bodyData, ['format', 'decimal_encoding'], argv.formatDecimalEncoding);
      if (argv.formatTimestampFormat !== undefined)
        setNestedValue(bodyData, ['format', 'timestamp_format'], argv.formatTimestampFormat);
      if (argv.formatUnstructured !== undefined)
        setNestedValue(bodyData, ['format', 'unstructured'], argv.formatUnstructured);
      if (argv.formatType !== undefined) setNestedValue(bodyData, ['format', 'type'], argv.formatType);
      if (argv.formatCompression !== undefined)
        setNestedValue(bodyData, ['format', 'compression'], argv.formatCompression);
      if (argv.formatRowGroupBytes !== undefined)
        setNestedValue(bodyData, ['format', 'row_group_bytes'], argv.formatRowGroupBytes);
      if (argv.httpAuthentication !== undefined)
        setNestedValue(bodyData, ['http', 'authentication'], argv.httpAuthentication);
      if (argv.httpCorsOrigins !== undefined)
        setNestedValue(bodyData, ['http', 'cors', 'origins'], argv.httpCorsOrigins);
      if (argv.httpEnabled !== undefined) setNestedValue(bodyData, ['http', 'enabled'], argv.httpEnabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.schemaInferred !== undefined) setNestedValue(bodyData, ['schema', 'inferred'], argv.schemaInferred);
      if (argv.workerBindingEnabled !== undefined)
        setNestedValue(bodyData, ['worker_binding', 'enabled'], argv.workerBindingEnabled);
      const result = await client.post<unknown>(`/accounts/${accountId}/pipelines/v1/streams`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
