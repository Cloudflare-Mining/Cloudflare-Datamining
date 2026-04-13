/**
 * logs-get command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface LogsGetArgs {
  buildUuid: string;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LogsGetArgs> = {
  command: 'logs-get <buildUuid>',
  describe: 'Retrieve logs for a specific build with cursor-based pagination',

  builder: (yargs: Argv): Argv<LogsGetArgs> => {
    return yargs
      .positional('buildUuid', {
        type: 'string',
        description: 'Build UUID.',
        demandOption: true,
      })
      .option('cursor', {
        type: 'string',
        description: 'Pagination cursor for log retrieval.',
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
      }) as Argv<LogsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LogsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.buildUuid as string | undefined, 'buildUuid');

      const params: Record<string, unknown> = {};
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.jobs.logsGet(
        accountId,
        argv.buildUuid,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
