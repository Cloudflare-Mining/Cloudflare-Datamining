/**
 * downloads-get command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DownloadsGetArgs {
  feedId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DownloadsGetArgs> = {
  command: 'downloads-get <feedId>',
  describe: 'Downloads the content of a custom threat indicator feed.',

  builder: (yargs: Argv): Argv<DownloadsGetArgs> => {
    return yargs
      .positional('feedId', {
        type: 'string',
        description: 'Indicator feed ID',
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
      }) as Argv<DownloadsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DownloadsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.feedId as string | undefined, 'feedId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.intel.indicatorfeeds.downloadsGet(accountId, argv.feedId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
