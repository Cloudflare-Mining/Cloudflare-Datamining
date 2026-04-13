/**
 * storage-usage command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface StorageUsageArgs {
  creator?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, StorageUsageArgs> = {
  command: 'storage-usage',
  describe: "Returns information about an account's storage use.",

  builder: (yargs: Argv): Argv<StorageUsageArgs> => {
    return yargs
      .option('creator', {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
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
      }) as Argv<StorageUsageArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<StorageUsageArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.creator !== undefined) params['creator'] = argv.creator;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.stream.videos.storageUsage(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
