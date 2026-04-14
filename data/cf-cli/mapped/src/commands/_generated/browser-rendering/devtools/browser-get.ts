/**
 * browser-get command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface BrowserGetArgs {
  sessionId: string;
  'keep-alive'?: number;
  lab?: boolean;
  recording?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BrowserGetArgs> = {
  command: 'browser-get <sessionId>',
  describe: 'Establishes a WebSocket connection to an existing browser session.',

  builder: (yargs: Argv): Argv<BrowserGetArgs> => {
    return yargs
      .positional('sessionId', {
        type: 'string',
        description: 'Browser session ID to connect to.',
        demandOption: true,
      })
      .option('keep-alive', {
        type: 'number',
        description: 'Keep-alive time in ms (only valid when acquiring new session).',
        default: undefined,
      })
      .option('lab', {
        type: 'boolean',
        description: 'Use experimental browser.',
        default: false,
      })
      .option('recording', {
        type: 'boolean',
        description: 'Recording',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<BrowserGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BrowserGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      const params: Record<string, unknown> = {};
      if (argv.keepAlive !== undefined) params['keep_alive'] = argv.keepAlive;
      if (argv.lab !== undefined) params['lab'] = argv.lab;
      if (argv.recording !== undefined) params['recording'] = argv.recording;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.browserRendering.devtools.browserGet(
        accountId,
        argv.sessionId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
