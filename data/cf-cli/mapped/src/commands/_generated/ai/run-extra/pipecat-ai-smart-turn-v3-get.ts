/**
 * pipecat-ai-smart-turn-v3-get command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PipecatAISmartTurnV3GetArgs {
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PipecatAISmartTurnV3GetArgs> = {
  command: 'pipecat-ai-smart-turn-v3-get',
  describe: 'Opens a WebSocket connection to stream inference results from the @cf/pipecat-ai/smart-turn-v3 model.',

  builder: (yargs: Argv): Argv<PipecatAISmartTurnV3GetArgs> => {
    return yargs
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<PipecatAISmartTurnV3GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PipecatAISmartTurnV3GetArgs>): Promise<void> => {
    try {
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.ai.runextra.pipecatAiSmartTurnV3Get(accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
