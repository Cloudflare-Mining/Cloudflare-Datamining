/**
 * queries-get-v2 command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface QueriesGetV2Args {
  queryId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, QueriesGetV2Args> = {
  command: 'queries-get-v2 <queryId>',
  describe: 'Retrieve a saved event query by its ID',

  builder: (yargs: Argv): Argv<QueriesGetV2Args> => {
    return yargs
      .positional('queryId', {
        type: 'string',
        description: 'Event query ID',
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
      }) as Argv<QueriesGetV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<QueriesGetV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.queryId as string | undefined, 'queryId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.cloudforceOne.events.queriesGetV2(accountId, argv.queryId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
