/**
 * sippy-update command
 * @generated from apis/r2/schema.ts
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

interface SippyUpdateArgs {
  bucketName: string;
  'cf-r2-jurisdiction'?: string;
  'destination-access-key-id'?: string;
  'destination-provider'?: string;
  'destination-secret-access-key'?: string;
  'source-access-key-id'?: string;
  'source-bucket'?: string;
  'source-provider'?: string;
  'source-region'?: string;
  'source-secret-access-key'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SippyUpdateArgs> = {
  command: 'sippy-update <bucketName>',
  describe: 'Sets configuration for Sippy for an existing R2 bucket.',

  builder: (yargs: Argv): Argv<SippyUpdateArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
        demandOption: true,
      })
      .option('cf-r2-jurisdiction', {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        default: undefined,
      })
      .option('destination-access-key-id', {
        type: 'string',
        description:
          'ID of a Cloudflare API token. This is the value labelled "Access Key ID" when creating an API. token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).  Sippy will use this token when writing objects to R2, so it is best to scope this token to the bucket you\'re enabling Sippy for. ',
        default: undefined,
      })
      .option('destination-provider', {
        type: 'string',
        description: 'The destination.provider field',
        choices: ['r2'] as const,
        default: undefined,
      })
      .option('destination-secret-access-key', {
        type: 'string',
        description:
          'Value of a Cloudflare API token. This is the value labelled "Secret Access Key" when creating an API. token from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).  Sippy will use this token when writing objects to R2, so it is best to scope this token to the bucket you\'re enabling Sippy for. ',
        default: undefined,
      })
      .option('source-access-key-id', {
        type: 'string',
        description: 'Access Key ID of an IAM credential (ideally scoped to a single S3 bucket).',
        default: undefined,
      })
      .option('source-bucket', {
        type: 'string',
        description: 'Name of the AWS S3 bucket.',
        default: undefined,
      })
      .option('source-provider', {
        type: 'string',
        description: 'The source.provider field',
        choices: ['aws'] as const,
        default: undefined,
      })
      .option('source-region', {
        type: 'string',
        description: 'Name of the AWS availability zone.',
        default: undefined,
      })
      .option('source-secret-access-key', {
        type: 'string',
        description: 'Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket).',
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
      .choices('destination-provider', ['r2'] as const)
      .choices('source-provider', ['aws'] as const) as Argv<SippyUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SippyUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 buckets sippy-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2/buckets/${argv.bucketName ?? '<bucketName>'}/sippy`,
          pathParams: { bucketName: String(argv.bucketName ?? '') },
          body: {
            destinationAccessKeyId: argv.destinationAccessKeyId,
            destinationProvider: argv.destinationProvider,
            destinationSecretAccessKey: argv.destinationSecretAccessKey,
            sourceAccessKeyId: argv.sourceAccessKeyId,
            sourceBucket: argv.sourceBucket,
            sourceProvider: argv.sourceProvider,
            sourceRegion: argv.sourceRegion,
            sourceSecretAccessKey: argv.sourceSecretAccessKey,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/r2/buckets/${argv.bucketName}/sippy`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destinationAccessKeyId !== undefined)
        setNestedValue(bodyData, ['destination', 'accessKeyId'], argv.destinationAccessKeyId);
      if (argv.destinationProvider !== undefined)
        setNestedValue(bodyData, ['destination', 'provider'], argv.destinationProvider);
      if (argv.destinationSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['destination', 'secretAccessKey'], argv.destinationSecretAccessKey);
      if (argv.sourceAccessKeyId !== undefined)
        setNestedValue(bodyData, ['source', 'accessKeyId'], argv.sourceAccessKeyId);
      if (argv.sourceBucket !== undefined) setNestedValue(bodyData, ['source', 'bucket'], argv.sourceBucket);
      if (argv.sourceProvider !== undefined) setNestedValue(bodyData, ['source', 'provider'], argv.sourceProvider);
      if (argv.sourceRegion !== undefined) setNestedValue(bodyData, ['source', 'region'], argv.sourceRegion);
      if (argv.sourceSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['source', 'secretAccessKey'], argv.sourceSecretAccessKey);
      const result = await client.put<unknown>(`/accounts/${accountId}/r2/buckets/${argv.bucketName}/sippy`, {
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
