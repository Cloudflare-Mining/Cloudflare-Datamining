/**
 * get-token command
 * @generated from apis/scm/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface GetTokenArgs {
  connectionId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetTokenArgs> = {
  command: 'get-token <connectionId>',
  describe: 'Retrieve a fresh access token for the specified SCM connection.',

  builder: (yargs: Argv): Argv<GetTokenArgs> => {
    return yargs
      .positional('connectionId', {
        type: 'string',
        description: 'ConnectionId',
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
      }) as Argv<GetTokenArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetTokenArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectionId as string | undefined, 'connectionId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.scm.connections.getToken(accountId, argv.connectionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
