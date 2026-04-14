/**
 * page-get command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PageGetArgs {
  sessionId: string;
  targetId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PageGetArgs> = {
  command: 'page-get <sessionId> <targetId>',
  describe: 'Establishes a WebSocket connection to a specific Chrome DevTools target or page.',

  builder: (yargs: Argv): Argv<PageGetArgs> => {
    return yargs
      .positional('sessionId', {
        type: 'string',
        description: 'Browser session ID.',
        demandOption: true,
      })
      .positional('targetId', {
        type: 'string',
        description: 'Target ID, e.g. page ID.',
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
      }) as Argv<PageGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PageGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');
      validateResourceId(argv.targetId as string | undefined, 'targetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.browserRendering.devtools.pageGet(accountId, argv.sessionId, argv.targetId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
