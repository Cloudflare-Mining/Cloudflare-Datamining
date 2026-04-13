/**
 * get-recordings command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetRecordingsArgs {
  appId: string;
  'meeting-id'?: string;
  'page-no'?: number;
  'per-page'?: number;
  expired?: boolean;
  search?: string;
  'sort-by'?: string;
  'sort-order'?: string;
  'start-time'?: string;
  'end-time'?: string;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetRecordingsArgs> = {
  command: 'get-recordings <appId>',
  describe:
    'Returns all recordings for an App. If the \`meeting_id\` parameter is passed, returns all recordings for the given meeting ID.',

  builder: (yargs: Argv): Argv<GetRecordingsArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .option('meeting-id', {
        type: 'string',
        description: 'ID of a meeting. Optional. Will limit results to only this meeting if passed.',
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
      .option('expired', {
        type: 'boolean',
        description: "If passed, only shows expired/non-expired recordings on RealtimeKit's bucket",
        default: false,
      })
      .option('search', {
        type: 'string',
        description: 'The search query string. You can search using the meeting ID or title.',
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description: 'Sort by',
        choices: ['invokedTime'] as const,
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
      .option('status', {
        type: 'string',
        description: 'Filter by one or more recording status',
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
      }) as Argv<GetRecordingsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetRecordingsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      const params: Record<string, unknown> = {};
      if (argv.meetingId !== undefined) params['meeting_id'] = argv.meetingId;
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.expired !== undefined) params['expired'] = argv.expired;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.startTime !== undefined) params['start_time'] = argv.startTime;
      if (argv.endTime !== undefined) params['end_time'] = argv.endTime;
      if (argv.status !== undefined) params['status'] = argv.status;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.recordings.getRecordings(
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
