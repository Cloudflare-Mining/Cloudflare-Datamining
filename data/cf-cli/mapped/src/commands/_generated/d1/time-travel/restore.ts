/**
 * restore command
 * @generated from apis/d1/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface RestoreArgs {
  databaseId: string;
  bookmark?: string;
  timestamp?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RestoreArgs> = {
  command: 'restore <databaseId>',
  describe: 'Restores a D1 database to a previous point in time either via a bookmark or a timestamp.',

  builder: (yargs: Argv): Argv<RestoreArgs> => {
    return yargs
      .positional('databaseId', {
        type: 'string',
        description: 'D1 database identifier (UUID).',
        demandOption: true,
      })
      .option('bookmark', {
        type: 'string',
        description: 'A bookmark to restore the database to. Required if \`timestamp\` is not provided.',
        default: undefined,
      })
      .option('timestamp', {
        type: 'string',
        description: 'An ISO 8601 timestamp to restore the database to. Required if \`bookmark\` is not provided.',
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
      }) as Argv<RestoreArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RestoreArgs>): Promise<void> => {
    try {
      validateResourceId(argv.databaseId as string | undefined, 'databaseId');

      const params: Record<string, unknown> = {};
      if (argv.bookmark !== undefined) params['bookmark'] = argv.bookmark;
      if (argv.timestamp !== undefined) params['timestamp'] = argv.timestamp;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf d1 time-travel restore',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/d1/database/${argv.databaseId ?? '<databaseId>'}/time_travel/restore`,
          pathParams: { databaseId: String(argv.databaseId ?? '') },
          body: { ...params },
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

      const result = await client.d1.timetravel.restore(
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
