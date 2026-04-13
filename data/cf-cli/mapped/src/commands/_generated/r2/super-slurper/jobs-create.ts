/**
 * jobs-create command
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

interface JobsCreateArgs {
  overwrite?: boolean;
  'source-bucket': string;
  'source-endpoint'?: string;
  'source-keys'?: string;
  'source-path-prefix'?: string;
  'source-region'?: string;
  'source-secret-access-key-id': string;
  'source-secret-secret-access-key': string;
  'source-vendor': string;
  'source-jurisdiction'?: string;
  'target-bucket': string;
  'target-jurisdiction'?: string;
  'target-secret-access-key-id': string;
  'target-secret-secret-access-key': string;
  'target-vendor': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, JobsCreateArgs> = {
  command: 'jobs-create',
  describe:
    'Creates a new R2 Super Slurper migration job to transfer objects from a source bucket (e.g. S3, GCS, R2) to R2.',

  builder: (yargs: Argv): Argv<JobsCreateArgs> => {
    return yargs
      .option('overwrite', {
        type: 'boolean',
        description: 'The overwrite field',
        default: false,
      })
      .option('source-bucket', {
        type: 'string',
        description: 'The source.bucket field',
      })
      .option('source-endpoint', {
        type: 'string',
        description: 'The source.endpoint field',
        default: undefined,
      })
      .option('source-keys', {
        type: 'string',
        description: 'The source.keys field',
        default: undefined,
      })
      .option('source-path-prefix', {
        type: 'string',
        description: 'The source.pathPrefix field',
        default: undefined,
      })
      .option('source-region', {
        type: 'string',
        description: 'The source.region field',
        default: undefined,
      })
      .option('source-secret-access-key-id', {
        type: 'string',
        description: 'The source.secret.accessKeyId field',
      })
      .option('source-secret-secret-access-key', {
        type: 'string',
        description: 'The source.secret.secretAccessKey field',
      })
      .option('source-vendor', {
        type: 'string',
        description: 'The source.vendor field',
        choices: ['s3'] as const,
      })
      .option('source-jurisdiction', {
        type: 'string',
        description: 'The source.jurisdiction field',
        choices: ['default', 'eu', 'fedramp'] as const,
        default: undefined,
      })
      .option('target-bucket', {
        type: 'string',
        description: 'The target.bucket field',
      })
      .option('target-jurisdiction', {
        type: 'string',
        description: 'The target.jurisdiction field',
        choices: ['default', 'eu', 'fedramp'] as const,
        default: undefined,
      })
      .option('target-secret-access-key-id', {
        type: 'string',
        description: 'The target.secret.accessKeyId field',
      })
      .option('target-secret-secret-access-key', {
        type: 'string',
        description: 'The target.secret.secretAccessKey field',
      })
      .option('target-vendor', {
        type: 'string',
        description: 'The target.vendor field',
        choices: ['r2'] as const,
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
      .conflicts('source-endpoint', ['sourceJurisdiction'])
      .conflicts('source-region', ['sourceJurisdiction'])
      .conflicts('source-jurisdiction', ['sourceEndpoint', 'sourceRegion'])
      .choices('source-vendor', ['s3'] as const)
      .choices('source-jurisdiction', ['default', 'eu', 'fedramp'] as const)
      .choices('target-jurisdiction', ['default', 'eu', 'fedramp'] as const)
      .choices('target-vendor', ['r2'] as const) as Argv<JobsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<JobsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 super-slurper jobs-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/slurper/jobs`,
          pathParams: {},
          body: {
            overwrite: argv.overwrite,
            sourceBucket: argv.sourceBucket,
            sourceEndpoint: argv.sourceEndpoint,
            sourceKeys: argv.sourceKeys,
            sourcePathPrefix: argv.sourcePathPrefix,
            sourceRegion: argv.sourceRegion,
            sourceSecretAccessKeyId: argv.sourceSecretAccessKeyId,
            sourceSecretSecretAccessKey: argv.sourceSecretSecretAccessKey,
            sourceVendor: argv.sourceVendor,
            sourceJurisdiction: argv.sourceJurisdiction,
            targetBucket: argv.targetBucket,
            targetJurisdiction: argv.targetJurisdiction,
            targetSecretAccessKeyId: argv.targetSecretAccessKeyId,
            targetSecretSecretAccessKey: argv.targetSecretSecretAccessKey,
            targetVendor: argv.targetVendor,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/slurper/jobs`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.overwrite !== undefined) setNestedValue(bodyData, ['overwrite'], argv.overwrite);
      if (argv.sourceBucket !== undefined) setNestedValue(bodyData, ['source', 'bucket'], argv.sourceBucket);
      if (argv.sourceEndpoint !== undefined) setNestedValue(bodyData, ['source', 'endpoint'], argv.sourceEndpoint);
      if (argv.sourceKeys !== undefined) setNestedValue(bodyData, ['source', 'keys'], argv.sourceKeys);
      if (argv.sourcePathPrefix !== undefined)
        setNestedValue(bodyData, ['source', 'pathPrefix'], argv.sourcePathPrefix);
      if (argv.sourceRegion !== undefined) setNestedValue(bodyData, ['source', 'region'], argv.sourceRegion);
      if (argv.sourceSecretAccessKeyId !== undefined)
        setNestedValue(bodyData, ['source', 'secret', 'accessKeyId'], argv.sourceSecretAccessKeyId);
      if (argv.sourceSecretSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['source', 'secret', 'secretAccessKey'], argv.sourceSecretSecretAccessKey);
      if (argv.sourceVendor !== undefined) setNestedValue(bodyData, ['source', 'vendor'], argv.sourceVendor);
      if (argv.sourceJurisdiction !== undefined)
        setNestedValue(bodyData, ['source', 'jurisdiction'], argv.sourceJurisdiction);
      if (argv.targetBucket !== undefined) setNestedValue(bodyData, ['target', 'bucket'], argv.targetBucket);
      if (argv.targetJurisdiction !== undefined)
        setNestedValue(bodyData, ['target', 'jurisdiction'], argv.targetJurisdiction);
      if (argv.targetSecretAccessKeyId !== undefined)
        setNestedValue(bodyData, ['target', 'secret', 'accessKeyId'], argv.targetSecretAccessKeyId);
      if (argv.targetSecretSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['target', 'secret', 'secretAccessKey'], argv.targetSecretSecretAccessKey);
      if (argv.targetVendor !== undefined) setNestedValue(bodyData, ['target', 'vendor'], argv.targetVendor);
      const result = await client.post<unknown>(`/accounts/${accountId}/slurper/jobs`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
