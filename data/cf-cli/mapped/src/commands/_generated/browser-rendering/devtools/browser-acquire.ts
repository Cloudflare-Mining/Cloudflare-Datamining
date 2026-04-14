/**
 * browser-acquire command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface BrowserAcquireArgs {
  'keep-alive'?: number;
  lab?: boolean;
  recording?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BrowserAcquireArgs> = {
  command: 'browser-acquire',
  describe: 'Acquires and establishes a WebSocket connection to a browser session.',

  builder: (yargs: Argv): Argv<BrowserAcquireArgs> => {
    return yargs
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
      }) as Argv<BrowserAcquireArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BrowserAcquireArgs>): Promise<void> => {
    try {
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

      const result = await client.browserRendering.devtools.browserAcquire(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
