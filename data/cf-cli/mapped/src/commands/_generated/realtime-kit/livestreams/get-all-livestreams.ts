/**
 * get-all-livestreams command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetAllLivestreamsArgs {
  'exclude-meetings'?: boolean;
  'per-page'?: number;
  'page-no'?: number;
  status?: string;
  'start-time'?: string;
  'end-time'?: string;
  'sort-order'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetAllLivestreamsArgs> = {
  command: 'get-all-livestreams',
  describe:
    'Returns details of livestreams associated with the given App ID. It includes livestreams created by your App and RealtimeKit meetings that are livestreamed by your App. If you only want details of livestreams created by your App and not RealtimeKit meetings, you can use the \`exclude_meetings\` query parameter.',

  builder: (yargs: Argv): Argv<GetAllLivestreamsArgs> => {
    return yargs
      .option('exclude-meetings', {
        type: 'boolean',
        description: 'Exclude the RealtimeKit meetings that are livestreamed.',
        default: false,
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
      .option('status', {
        type: 'string',
        description: 'Specifies the status of the operation.',
        choices: ['LIVE', 'IDLE', 'ERRORED', 'INVOKED'] as const,
        default: undefined,
      })
      .option('start-time', {
        type: 'string',
        description: 'Specify the start time range in ISO format to access the live stream.',
        default: undefined,
      })
      .option('end-time', {
        type: 'string',
        description: 'Specify the end time range in ISO format to access the live stream.',
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Specifies the sorting order for the results.',
        choices: ['ASC', 'DSC'] as const,
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
      }) as Argv<GetAllLivestreamsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetAllLivestreamsArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.excludeMeetings !== undefined) params['exclude_meetings'] = argv.excludeMeetings;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.startTime !== undefined) params['start_time'] = argv.startTime;
      if (argv.endTime !== undefined) params['end_time'] = argv.endTime;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.livestreams.getAllLivestreams(
        accountId,
        argv.appId as string,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
