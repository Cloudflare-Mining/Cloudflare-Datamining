/**
 * pools-list command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PoolsListArgs {
  monitor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PoolsListArgs> = {
  command: 'pools-list',
  describe: 'List configured pools.',

  builder: (yargs: Argv): Argv<PoolsListArgs> => {
    return yargs
      .option('monitor', {
        type: 'string',
        description: 'The ID of the Monitor to use for checking the health of origins within this pool.',
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
      }) as Argv<PoolsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoolsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.monitor !== undefined) params['monitor'] = argv.monitor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.loadbalancers.poolsList(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
