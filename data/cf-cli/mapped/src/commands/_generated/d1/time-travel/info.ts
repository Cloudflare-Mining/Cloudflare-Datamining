/**
 * info command
 * @generated from apis/d1/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface InfoArgs {
  databaseId: string;
  timestamp?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InfoArgs> = {
  command: 'info <databaseId>',
  describe:
    'Retrieves the current bookmark, or the nearest bookmark at or before a provided timestamp. Bookmarks can be used with the restore endpoint to revert the database to a previous point in time.',

  builder: (yargs: Argv): Argv<InfoArgs> => {
    return yargs
      .positional('databaseId', {
        type: 'string',
        description: 'D1 database identifier (UUID).',
        demandOption: true,
      })
      .option('timestamp', {
        type: 'string',
        description:
          'An optional ISO 8601 timestamp. If provided, returns the nearest available bookmark at or before this timestamp. If omitted, returns the current bookmark.',
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
      }) as Argv<InfoArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InfoArgs>): Promise<void> => {
    try {
      validateResourceId(argv.databaseId as string | undefined, 'databaseId');

      const params: Record<string, unknown> = {};
      if (argv.timestamp !== undefined) params['timestamp'] = argv.timestamp;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.d1.timetravel.info(
        accountId,
        argv.databaseId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
