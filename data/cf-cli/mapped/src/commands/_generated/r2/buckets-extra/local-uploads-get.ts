/**
 * local-uploads-get command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface LocalUploadsGetArgs {
  bucketName: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LocalUploadsGetArgs> = {
  command: 'local-uploads-get <bucketName>',
  describe:
    "Get the local uploads configuration for a bucket. When enabled, object's data is written to the nearest region first, then asynchronously replicated to the bucket's primary region.",

  builder: (yargs: Argv): Argv<LocalUploadsGetArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
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
      }) as Argv<LocalUploadsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LocalUploadsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.r2.bucketsextra.localUploadsGet(argv.bucketName, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
