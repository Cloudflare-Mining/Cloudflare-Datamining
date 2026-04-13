/**
 * get-session-details command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetSessionDetailsArgs {
  appId: string;
  sessionId: string;
  'include-breakout-rooms'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetSessionDetailsArgs> = {
  command: 'get-session-details <appId> <sessionId>',
  describe: 'Returns data of the given session ID including recording details.',

  builder: (yargs: Argv): Argv<GetSessionDetailsArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('sessionId', {
        type: 'string',
        description: 'ID of the session',
        demandOption: true,
      })
      .option('include-breakout-rooms', {
        type: 'boolean',
        description: 'List all breakout rooms',
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
      }) as Argv<GetSessionDetailsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetSessionDetailsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      const params: Record<string, unknown> = {};
      if (argv.includeBreakoutRooms !== undefined) params['include_breakout_rooms'] = argv.includeBreakoutRooms;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.sessions.getSessionDetails(
        accountId,
        argv.appId,
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
