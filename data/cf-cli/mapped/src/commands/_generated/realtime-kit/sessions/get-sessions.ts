/**
 * get-sessions command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetSessionsArgs {
  appId: string;
  'page-no'?: number;
  'per-page'?: number;
  'sort-by'?: string;
  'sort-order'?: string;
  'start-time'?: string;
  'end-time'?: string;
  participants?: string;
  status?: string;
  search?: string;
  'associated-id'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetSessionsArgs> = {
  command: 'get-sessions <appId>',
  describe: 'Returns details of all sessions of an App.',

  builder: (yargs: Argv): Argv<GetSessionsArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
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
      .option('sort-by', {
        type: 'string',
        description: 'Sort by',
        choices: ['minutesConsumed', 'createdAt'] as const,
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort order',
        choices: ['ASC', 'DESC'] as const,
        default: undefined,
      })
      .option('start-time', {
        type: 'string',
        description:
          'The start time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        default: undefined,
      })
      .option('end-time', {
        type: 'string',
        description:
          'The end time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        default: undefined,
      })
      .option('participants', {
        type: 'string',
        description: 'Participants',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Status',
        choices: ['LIVE', 'ENDED'] as const,
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search string that matches sessions based on meeting title, meeting ID, and session ID',
        default: undefined,
      })
      .option('associated-id', {
        type: 'string',
        description: 'ID of the meeting that sessions should be associated with',
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
      }) as Argv<GetSessionsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetSessionsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      const params: Record<string, unknown> = {};
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.startTime !== undefined) params['start_time'] = argv.startTime;
      if (argv.endTime !== undefined) params['end_time'] = argv.endTime;
      if (argv.participants !== undefined) params['participants'] = argv.participants;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.associatedId !== undefined) params['associated_id'] = argv.associatedId;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.sessions.getSessions(
        accountId,
        argv.appId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
