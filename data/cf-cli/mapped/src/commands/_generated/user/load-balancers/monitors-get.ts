/**
 * monitors-get command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MonitorsGetArgs {
  monitorId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MonitorsGetArgs> = {
  command: 'monitors-get <monitorId>',
  describe: 'List a single configured monitor for a user.',

  builder: (yargs: Argv): Argv<MonitorsGetArgs> => {
    return yargs
      .positional('monitorId', {
        type: 'string',
        description: 'Monitor ID',
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
      }) as Argv<MonitorsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MonitorsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.monitorId as string | undefined, 'monitorId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.loadbalancers.monitorsGet(argv.monitorId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
