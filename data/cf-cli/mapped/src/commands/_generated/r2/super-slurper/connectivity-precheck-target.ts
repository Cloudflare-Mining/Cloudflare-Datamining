/**
 * connectivity-precheck-target command
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

interface ConnectivityPrecheckTargetArgs {
  bucket: string;
  jurisdiction?: string;
  'secret-access-key-id': string;
  'secret-secret-access-key': string;
  vendor: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConnectivityPrecheckTargetArgs> = {
  command: 'connectivity-precheck-target',
  describe: 'Check whether tokens are valid against the target bucket',

  builder: (yargs: Argv): Argv<ConnectivityPrecheckTargetArgs> => {
    return yargs
      .option('bucket', {
        type: 'string',
        description: 'The bucket field',
      })
      .option('jurisdiction', {
        type: 'string',
        description: 'The jurisdiction field',
        choices: ['default', 'eu', 'fedramp'] as const,
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
      .choices('jurisdiction', ['default', 'eu', 'fedramp'] as const)
      .choices('vendor', ['r2'] as const) as Argv<ConnectivityPrecheckTargetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConnectivityPrecheckTargetArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 super-slurper connectivity-precheck-target',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/slurper/target/connectivity-precheck`,
          pathParams: {},
          body: {
            bucket: argv.bucket,
            jurisdiction: argv.jurisdiction,
            secretAccessKeyId: argv.secretAccessKeyId,
            secretSecretAccessKey: argv.secretSecretAccessKey,
            vendor: argv.vendor,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/slurper/target/connectivity-precheck`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bucket !== undefined) setNestedValue(bodyData, ['bucket'], argv.bucket);
      if (argv.jurisdiction !== undefined) setNestedValue(bodyData, ['jurisdiction'], argv.jurisdiction);
      if (argv.secretAccessKeyId !== undefined)
        setNestedValue(bodyData, ['secret', 'accessKeyId'], argv.secretAccessKeyId);
      if (argv.secretSecretAccessKey !== undefined)
        setNestedValue(bodyData, ['secret', 'secretAccessKey'], argv.secretSecretAccessKey);
      if (argv.vendor !== undefined) setNestedValue(bodyData, ['vendor'], argv.vendor);
      const result = await client.put<unknown>(`/accounts/${accountId}/slurper/target/connectivity-precheck`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
