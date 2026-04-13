/**
 * connectivity-precheck-source command
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

interface ConnectivityPrecheckSourceArgs {
  bucket: string;
  endpoint?: string;
  keys?: string;
  'path-prefix'?: string;
  region?: string;
  'secret-access-key-id': string;
  'secret-secret-access-key': string;
  vendor: string;
  jurisdiction?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConnectivityPrecheckSourceArgs> = {
  command: 'connectivity-precheck-source',
  describe: 'Check whether tokens are valid against the source bucket',

  builder: (yargs: Argv): Argv<ConnectivityPrecheckSourceArgs> => {
    return yargs
      .option('bucket', {
        type: 'string',
        description: 'The bucket field',
      })
      .option('endpoint', {
        type: 'string',
        description: 'The endpoint field',
        default: undefined,
      })
      .option('keys', {
        type: 'string',
        description: 'The keys field',
        default: undefined,
      })
      .option('path-prefix', {
        type: 'string',
        description: 'The pathPrefix field',
        default: undefined,
      })
      .option('region', {
        type: 'string',
        description: 'The region field',
        default: undefined,
      })
      .option('secret-access-key-id', {
        type: 'string',
        description: 'The secret.accessKeyId field',
      })
      .option('secret-secret-access-key', {
        type: 'string',
        description: 'The secret.secretAccessKey field',
      })
      .option('vendor', {
        type: 'string',
        description: 'The vendor field',
        choices: ['s3'] as const,
      })
      .option('jurisdiction', {
        type: 'string',
        description: 'The jurisdiction field',
        choices: ['default', 'eu', 'fedramp'] as const,
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
      .conflicts('endpoint', ['jurisdiction'])
      .conflicts('region', ['jurisdiction'])
      .conflicts('jurisdiction', ['endpoint', 'region'])
      .choices('vendor', ['s3'] as const)
      .choices('jurisdiction', ['default', 'eu', 'fedramp'] as const) as Argv<ConnectivityPrecheckSourceArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConnectivityPrecheckSourceArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 super-slurper connectivity-precheck-source',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/slurper/source/connectivity-precheck`,
          pathParams: {},
          body: {
            bucket: argv.bucket,
            endpoint: argv.endpoint,
            keys: argv.keys,
            pathPrefix: argv.pathPrefix,
            region: argv.region,
            secretAccessKeyId: argv.secretAccessKeyId,
            secretSecretAccessKey: argv.secretSecretAccessKey,
            vendor: argv.vendor,
            jurisdiction: argv.jurisdiction,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/slurper/source/connectivity-precheck`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bucket !== undefined) setNestedValue(bodyData, ['bucket'], argv.bucket);
      if (argv.endpoint !== undefined) setNestedValue(bodyData, ['endpoint'], argv.endpoint);
      if (argv.keys !== undefined) setNestedValue(bodyData, ['keys'], argv.keys);
      if (argv.pathPrefix !== undefined) setNestedValue(bodyData, ['pathPrefix'], argv.pathPrefix);
      if (argv.region !== undefined) setNestedValue(bodyData, ['region'], argv.region);
      if (argv.secretAccessKeyId !== undefined)
        setNestedValue(bodyData, ['secret', 'accessKeyId'], argv.secretAccessKeyId);
      if (argv.secretSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['secret', 'secretAccessKey'], argv.secretSecretAccessKey);
      if (argv.vendor !== undefined) setNestedValue(bodyData, ['vendor'], argv.vendor);
      if (argv.jurisdiction !== undefined) setNestedValue(bodyData, ['jurisdiction'], argv.jurisdiction);
      const result = await client.put<unknown>(`/accounts/${accountId}/slurper/source/connectivity-precheck`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
