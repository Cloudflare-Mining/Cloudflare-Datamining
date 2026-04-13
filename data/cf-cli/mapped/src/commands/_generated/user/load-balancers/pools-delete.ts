/**
 * pools-delete command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface PoolsDeleteArgs {
  poolId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PoolsDeleteArgs> = {
  command: 'pools-delete <poolId>',
  describe: 'Delete a configured pool.',

  builder: (yargs: Argv): Argv<PoolsDeleteArgs> => {
    return yargs
      .positional('poolId', {
        type: 'string',
        description: 'Pool ID',
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<PoolsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PoolsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.poolId as string | undefined, 'poolId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user load-balancers pools-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/user/load_balancers/pools/${argv.poolId ?? '<poolId>'}`,
          pathParams: { poolId: String(argv.poolId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.delete<unknown>(`/user/load_balancers/pools/${argv.poolId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.user.loadbalancers.poolsDelete(argv.poolId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
