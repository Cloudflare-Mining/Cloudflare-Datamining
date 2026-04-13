/**
 * enable command
 * @generated from apis/r2-data-catalog/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';

interface EnableArgs {
  bucketName: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, EnableArgs> = {
  command: 'enable <bucketName>',
  describe:
    'Enable an R2 bucket as an Apache Iceberg catalog. This operation creates the necessary catalog infrastructure and activates the bucket for storing Iceberg metadata and data files.',

  builder: (yargs: Argv): Argv<EnableArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Specifies the R2 bucket name to enable as catalog.',
        demandOption: true,
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
      }) as Argv<EnableArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EnableArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2-data-catalog enable',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2-catalog/${argv.bucketName ?? '<bucketName>'}/enable`,
          pathParams: { bucketName: String(argv.bucketName ?? '') },
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

      const result = await client.r2DataCatalog.enable(accountId, argv.bucketName);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
