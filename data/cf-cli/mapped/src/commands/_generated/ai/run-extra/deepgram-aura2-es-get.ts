/**
 * deepgram-aura2-es-get command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface DeepgramAura2EsGetArgs {
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeepgramAura2EsGetArgs> = {
  command: 'deepgram-aura2-es-get',
  describe: 'Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura-2-es model.',

  builder: (yargs: Argv): Argv<DeepgramAura2EsGetArgs> => {
    return yargs
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<DeepgramAura2EsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeepgramAura2EsGetArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.ai.runextra.deepgramAura2EsGet(accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
