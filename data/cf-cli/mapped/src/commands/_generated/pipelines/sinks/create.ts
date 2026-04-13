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
  'config-account-id': string;
  'config-bucket': string;
  'config-credentials-access-key-id': string;
  'config-credentials-secret-access-key': string;
  'config-file-naming-prefix'?: string;
  'config-file-naming-strategy'?: string;
  'config-file-naming-suffix'?: string;
  'config-jurisdiction'?: string;
  'config-partitioning-time-pattern'?: string;
  'config-path'?: string;
  'config-rolling-policy-file-size-bytes'?: number;
  'config-rolling-policy-inactivity-seconds'?: number;
  'config-rolling-policy-interval-seconds'?: number;
  'config-namespace'?: string;
  'config-table-name'?: string;
  'config-token'?: string;
  'format-decimal-encoding'?: string;
  'format-timestamp-format'?: string;
  'format-unstructured'?: boolean;
  'format-type': string;
  'format-compression'?: string;
  'format-row-group-bytes'?: number;
  name: string;
  'schema-inferred'?: boolean;
  type: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new Sink.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('config-account-id', {
        type: 'string',
        description: 'Cloudflare Account ID for the bucket',
      })
      .option('config-bucket', {
        type: 'string',
        description: 'R2 Bucket to write to',
      })
      .option('config-credentials-access-key-id', {
        type: 'string',
        description: 'Cloudflare Account ID for the bucket',
      })
      .option('config-credentials-secret-access-key', {
        type: 'string',
        description: 'Cloudflare Account ID for the bucket',
      })
      .option('config-file-naming-prefix', {
        type: 'string',
        description: 'The prefix to use in file name. i.e prefix-<uuid>.parquet',
        default: undefined,
      })
      .option('config-file-naming-strategy', {
        type: 'string',
        description: 'Filename generation strategy.',
        choices: ['serial', 'uuid', 'uuid_v7', 'ulid'] as const,
        default: undefined,
      })
      .option('config-file-naming-suffix', {
        type: 'string',
        description: 'This will overwrite the default file suffix. i.e .parquet, use with caution',
        default: undefined,
      })
      .option('config-jurisdiction', {
        type: 'string',
        description: 'Jurisdiction this bucket is hosted in',
        default: undefined,
      })
      .option('config-partitioning-time-pattern', {
        type: 'string',
        description: 'The pattern of the date string',
        default: undefined,
      })
      .option('config-path', {
        type: 'string',
        description: 'Subpath within the bucket to write to',
        default: undefined,
      })
      .option('config-rolling-policy-file-size-bytes', {
        type: 'number',
        description: 'Files will be rolled after reaching this number of bytes',
        default: undefined,
      })
      .option('config-rolling-policy-inactivity-seconds', {
        type: 'number',
        description: 'Number of seconds of inactivity to wait before rolling over to a new file',
        default: undefined,
      })
      .option('config-rolling-policy-interval-seconds', {
        type: 'number',
        description: 'Number of seconds to wait before rolling over to a new file',
        default: undefined,
      })
      .option('config-namespace', {
        type: 'string',
        description: 'Table namespace',
        default: undefined,
      })
      .option('config-table-name', {
        type: 'string',
        description: 'Table name',
        default: undefined,
      })
      .option('config-token', {
        type: 'string',
        description: 'Authentication token',
        default: undefined,
      })
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
      .option('name', {
        type: 'string',
        description: 'Defines the name of the Sink.',
      })
      .option('schema-inferred', {
        type: 'boolean',
        description: 'The schema.inferred field',
        default: false,
      })
      .option('type', {
        type: 'string',
        description: 'Specifies the type of sink.',
        choices: ['r2', 'r2_data_catalog'] as const,
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
      .conflicts('config-jurisdiction', ['configNamespace', 'configTableName', 'configToken'])
      .conflicts('config-path', ['configNamespace', 'configTableName', 'configToken'])
      .conflicts('config-namespace', ['configJurisdiction', 'configPath'])
      .conflicts('config-table-name', ['configJurisdiction', 'configPath'])
      .implies('config-table-name', ['configToken'])
      .conflicts('config-token', ['configJurisdiction', 'configPath'])
      .implies('config-token', ['configTableName'])
      .conflicts('format-decimal-encoding', ['formatCompression', 'formatRowGroupBytes'])
      .conflicts('format-timestamp-format', ['formatCompression', 'formatRowGroupBytes'])
      .conflicts('format-unstructured', ['formatCompression', 'formatRowGroupBytes'])
      .conflicts('format-compression', ['formatDecimalEncoding', 'formatTimestampFormat', 'formatUnstructured'])
      .conflicts('format-row-group-bytes', ['formatDecimalEncoding', 'formatTimestampFormat', 'formatUnstructured'])
      .choices('config-file-naming-strategy', ['serial', 'uuid', 'uuid_v7', 'ulid'] as const)
      .choices('format-decimal-encoding', ['number', 'string', 'bytes'] as const)
      .choices('format-timestamp-format', ['rfc3339', 'unix_millis'] as const)
      .choices('format-type', ['json'] as const)
      .choices('format-compression', ['uncompressed', 'snappy', 'gzip', 'zstd', 'lz4'] as const)
      .choices('type', ['r2', 'r2_data_catalog'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pipelines sinks create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pipelines/v1/sinks`,
          pathParams: {},
          body: {
            configAccountId: argv.configAccountId,
            configBucket: argv.configBucket,
            configCredentialsAccessKeyId: argv.configCredentialsAccessKeyId,
            configCredentialsSecretAccessKey: argv.configCredentialsSecretAccessKey,
            configFileNamingPrefix: argv.configFileNamingPrefix,
            configFileNamingStrategy: argv.configFileNamingStrategy,
            configFileNamingSuffix: argv.configFileNamingSuffix,
            configJurisdiction: argv.configJurisdiction,
            configPartitioningTimePattern: argv.configPartitioningTimePattern,
            configPath: argv.configPath,
            configRollingPolicyFileSizeBytes: argv.configRollingPolicyFileSizeBytes,
            configRollingPolicyInactivitySeconds: argv.configRollingPolicyInactivitySeconds,
            configRollingPolicyIntervalSeconds: argv.configRollingPolicyIntervalSeconds,
            configNamespace: argv.configNamespace,
            configTableName: argv.configTableName,
            configToken: argv.configToken,
            formatDecimalEncoding: argv.formatDecimalEncoding,
            formatTimestampFormat: argv.formatTimestampFormat,
            formatUnstructured: argv.formatUnstructured,
            formatType: argv.formatType,
            formatCompression: argv.formatCompression,
            formatRowGroupBytes: argv.formatRowGroupBytes,
            name: argv.name,
            schemaInferred: argv.schemaInferred,
            type: argv.type,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/pipelines/v1/sinks`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configAccountId !== undefined) setNestedValue(bodyData, ['config', 'account_id'], argv.configAccountId);
      if (argv.configBucket !== undefined) setNestedValue(bodyData, ['config', 'bucket'], argv.configBucket);
      if (argv.configCredentialsAccessKeyId !== undefined)
        setNestedValue(bodyData, ['config', 'credentials', 'access_key_id'], argv.configCredentialsAccessKeyId);
      if (argv.configCredentialsSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['config', 'credentials', 'secret_access_key'], argv.configCredentialsSecretAccessKey);
      if (argv.configFileNamingPrefix !== undefined)
        setNestedValue(bodyData, ['config', 'file_naming', 'prefix'], argv.configFileNamingPrefix);
      if (argv.configFileNamingStrategy !== undefined)
        setNestedValue(bodyData, ['config', 'file_naming', 'strategy'], argv.configFileNamingStrategy);
      if (argv.configFileNamingSuffix !== undefined)
        setNestedValue(bodyData, ['config', 'file_naming', 'suffix'], argv.configFileNamingSuffix);
      if (argv.configJurisdiction !== undefined)
        setNestedValue(bodyData, ['config', 'jurisdiction'], argv.configJurisdiction);
      if (argv.configPartitioningTimePattern !== undefined)
        setNestedValue(bodyData, ['config', 'partitioning', 'time_pattern'], argv.configPartitioningTimePattern);
      if (argv.configPath !== undefined) setNestedValue(bodyData, ['config', 'path'], argv.configPath);
      if (argv.configRollingPolicyFileSizeBytes !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'rolling_policy', 'file_size_bytes'],
          argv.configRollingPolicyFileSizeBytes,
        );
      if (argv.configRollingPolicyInactivitySeconds !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'rolling_policy', 'inactivity_seconds'],
          argv.configRollingPolicyInactivitySeconds,
        );
      if (argv.configRollingPolicyIntervalSeconds !== undefined)
        setNestedValue(
          bodyData,
          ['config', 'rolling_policy', 'interval_seconds'],
          argv.configRollingPolicyIntervalSeconds,
        );
      if (argv.configNamespace !== undefined) setNestedValue(bodyData, ['config', 'namespace'], argv.configNamespace);
      if (argv.configTableName !== undefined) setNestedValue(bodyData, ['config', 'table_name'], argv.configTableName);
      if (argv.configToken !== undefined) setNestedValue(bodyData, ['config', 'token'], argv.configToken);
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
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.schemaInferred !== undefined) setNestedValue(bodyData, ['schema', 'inferred'], argv.schemaInferred);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/accounts/${accountId}/pipelines/v1/sinks`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
