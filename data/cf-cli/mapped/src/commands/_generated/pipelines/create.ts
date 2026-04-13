/**
 * create command
 * @generated from apis/pipelines/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  'destination-batch-max-bytes'?: number;
  'destination-batch-max-duration-s'?: number;
  'destination-batch-max-rows'?: number;
  'destination-compression-type'?: string;
  'destination-credentials-access-key-id': string;
  'destination-credentials-endpoint': string;
  'destination-credentials-secret-access-key': string;
  'destination-format': string;
  'destination-path-bucket': string;
  'destination-path-filepath'?: string;
  'destination-path-prefix'?: string;
  'destination-type': string;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: '[DEPRECATED] Create a new pipeline. Use the new /pipelines/v1/pipelines endpoint instead.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('destination-batch-max-bytes', {
        type: 'number',
        description: 'Specifies rough maximum size of files.',
        default: undefined,
      })
      .option('destination-batch-max-duration-s', {
        type: 'number',
        description: 'Specifies duration to wait to aggregate batches files.',
        default: undefined,
      })
      .option('destination-batch-max-rows', {
        type: 'number',
        description: 'Specifies rough maximum number of rows per file.',
        default: undefined,
      })
      .option('destination-compression-type', {
        type: 'string',
        description: 'Specifies the desired compression algorithm and format.',
        choices: ['none', 'gzip', 'deflate'] as const,
        default: undefined,
      })
      .option('destination-credentials-access-key-id', {
        type: 'string',
        description: 'Specifies the R2 Bucket Access Key Id.',
      })
      .option('destination-credentials-endpoint', {
        type: 'string',
        description: 'Specifies the R2 Endpoint.',
      })
      .option('destination-credentials-secret-access-key', {
        type: 'string',
        description: 'Specifies the R2 Bucket Secret Access Key.',
      })
      .option('destination-format', {
        type: 'string',
        description: 'Specifies the format of data to deliver.',
        choices: ['json'] as const,
      })
      .option('destination-path-bucket', {
        type: 'string',
        description: 'Specifies the R2 Bucket to store files.',
      })
      .option('destination-path-filepath', {
        type: 'string',
        description: 'Specifies the name pattern for directory.',
        default: undefined,
      })
      .option('destination-path-prefix', {
        type: 'string',
        description: 'Specifies the base directory within the bucket.',
        default: undefined,
      })
      .option('destination-type', {
        type: 'string',
        description: 'Specifies the type of destination.',
        choices: ['r2'] as const,
      })
      .option('name', {
        type: 'string',
        description: 'Defines the name of the pipeline.',
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
      .choices('destination-compression-type', ['none', 'gzip', 'deflate'] as const)
      .choices('destination-format', ['json'] as const)
      .choices('destination-type', ['r2'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pipelines create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pipelines`,
          pathParams: {},
          body: {
            destinationBatchMaxBytes: argv.destinationBatchMaxBytes,
            destinationBatchMaxDurationS: argv.destinationBatchMaxDurationS,
            destinationBatchMaxRows: argv.destinationBatchMaxRows,
            destinationCompressionType: argv.destinationCompressionType,
            destinationCredentialsAccessKeyId: argv.destinationCredentialsAccessKeyId,
            destinationCredentialsEndpoint: argv.destinationCredentialsEndpoint,
            destinationCredentialsSecretAccessKey: argv.destinationCredentialsSecretAccessKey,
            destinationFormat: argv.destinationFormat,
            destinationPathBucket: argv.destinationPathBucket,
            destinationPathFilepath: argv.destinationPathFilepath,
            destinationPathPrefix: argv.destinationPathPrefix,
            destinationType: argv.destinationType,
            name: argv.name,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/pipelines`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationBatchMaxBytes !== undefined)
        setNestedValue(bodyData, ['destination', 'batch', 'max_bytes'], argv.destinationBatchMaxBytes);
      if (argv.destinationBatchMaxDurationS !== undefined)
        setNestedValue(bodyData, ['destination', 'batch', 'max_duration_s'], argv.destinationBatchMaxDurationS);
      if (argv.destinationBatchMaxRows !== undefined)
        setNestedValue(bodyData, ['destination', 'batch', 'max_rows'], argv.destinationBatchMaxRows);
      if (argv.destinationCompressionType !== undefined)
        setNestedValue(bodyData, ['destination', 'compression', 'type'], argv.destinationCompressionType);
      if (argv.destinationCredentialsAccessKeyId !== undefined)
        setNestedValue(
          bodyData,
          ['destination', 'credentials', 'access_key_id'],
          argv.destinationCredentialsAccessKeyId,
        );
      if (argv.destinationCredentialsEndpoint !== undefined)
        setNestedValue(bodyData, ['destination', 'credentials', 'endpoint'], argv.destinationCredentialsEndpoint);
      if (argv.destinationCredentialsSecretAccessKey !== undefined)
        setNestedValue(
          bodyData,
          ['destination', 'credentials', 'secret_access_key'],
          argv.destinationCredentialsSecretAccessKey,
        );
      if (argv.destinationFormat !== undefined)
        setNestedValue(bodyData, ['destination', 'format'], argv.destinationFormat);
      if (argv.destinationPathBucket !== undefined)
        setNestedValue(bodyData, ['destination', 'path', 'bucket'], argv.destinationPathBucket);
      if (argv.destinationPathFilepath !== undefined)
        setNestedValue(bodyData, ['destination', 'path', 'filepath'], argv.destinationPathFilepath);
      if (argv.destinationPathPrefix !== undefined)
        setNestedValue(bodyData, ['destination', 'path', 'prefix'], argv.destinationPathPrefix);
      if (argv.destinationType !== undefined) setNestedValue(bodyData, ['destination', 'type'], argv.destinationType);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/pipelines`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
