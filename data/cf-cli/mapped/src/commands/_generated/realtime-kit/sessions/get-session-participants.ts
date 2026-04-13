/**
 * get-session-participants command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetSessionParticipantsArgs {
  appId: string;
  sessionId: string;
  search?: string;
  'page-no'?: number;
  'per-page'?: number;
  'sort-order'?: string;
  'sort-by'?: string;
  'include-peer-events'?: boolean;
  view?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetSessionParticipantsArgs> = {
  command: 'get-session-participants <appId> <sessionId>',
  describe: 'Returns a list of participants for the given session ID.',

  builder: (yargs: Argv): Argv<GetSessionParticipantsArgs> => {
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
      .option('search', {
        type: 'string',
        description: 'The search query string. You can search using the meeting ID or title.',
        default: undefined,
      })
      .option('page-no', {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page',
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort order',
        choices: ['ASC', 'DESC'] as const,
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description: 'Sort by',
        choices: ['joinedAt', 'duration'] as const,
        default: undefined,
      })
      .option('include-peer-events', {
        type: 'boolean',
        description: 'if true, response includes all the peer events of participants.',
        default: false,
      })
      .option('view', {
        type: 'string',
        description:
          'In breakout room sessions, the view parameter can be set to \`raw\` for session specific duration for participants or \`consolidated\` to accumulate breakout room durations.',
        choices: ['raw', 'consolidated'] as const,
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
      }) as Argv<GetSessionParticipantsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetSessionParticipantsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      const params: Record<string, unknown> = {};
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.includePeerEvents !== undefined) params['include_peer_events'] = argv.includePeerEvents;
      if (argv.view !== undefined) params['view'] = argv.view;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.sessions.getSessionParticipants(
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
