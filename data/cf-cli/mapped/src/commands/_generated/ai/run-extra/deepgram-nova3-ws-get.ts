/**
 * deepgram-nova3-ws-get command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface DeepgramNova3WsGetArgs {
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeepgramNova3WsGetArgs> = {
  command: 'deepgram-nova3-ws-get',
  describe: 'Opens a WebSocket connection to stream inference results from the @cf/deepgram/nova-3-ws model.',

  builder: (yargs: Argv): Argv<DeepgramNova3WsGetArgs> => {
    return yargs
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<DeepgramNova3WsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeepgramNova3WsGetArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.ai.runextra.deepgramNova3WsGet(accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
