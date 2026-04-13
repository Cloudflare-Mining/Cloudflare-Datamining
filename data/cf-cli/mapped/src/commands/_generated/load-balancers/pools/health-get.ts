/**
 * health-get command
 * @generated from apis/load-balancers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface HealthGetArgs {
  poolId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, HealthGetArgs> = {
  command: 'health-get <poolId>',
  describe: 'Fetch the latest pool health status for a single pool.',

  builder: (yargs: Argv): Argv<HealthGetArgs> => {
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
      }) as Argv<HealthGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HealthGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.poolId as string | undefined, 'poolId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.loadBalancers.pools.healthGet(argv.poolId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
