/**
 * jobs-list command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface JobsListArgs {
  limit?: number;
  offset?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, JobsListArgs> = {
  command: 'jobs-list',
  describe: 'Lists all R2 Super Slurper migration jobs for the account with their status.',

  builder: (yargs: Argv): Argv<JobsListArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limit',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Offset',
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
      }) as Argv<JobsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<JobsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.r2.superslurper.jobsList(
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
