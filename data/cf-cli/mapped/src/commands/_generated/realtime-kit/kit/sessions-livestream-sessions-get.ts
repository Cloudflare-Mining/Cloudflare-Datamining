/**
 * sessions-livestream-sessions-get command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SessionsLivestreamSessionsGetArgs {
  appId: string;
  sessionId: string;
  'per-page'?: number;
  'page-no'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SessionsLivestreamSessionsGetArgs> = {
  command: 'sessions-livestream-sessions-get <appId> <sessionId>',
  describe:
    'Returns livestream session details for the given session ID. Retreive the session ID using the \`Fetch all sessions of an App\` API.',

  builder: (yargs: Argv): Argv<SessionsLivestreamSessionsGetArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('sessionId', {
        type: 'string',
        description: 'Session ID',
        demandOption: true,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page.',
        default: undefined,
      })
      .option('page-no', {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<SessionsLivestreamSessionsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SessionsLivestreamSessionsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      const params: Record<string, unknown> = {};
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.kit.sessionsLivestreamSessionsGet(
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
