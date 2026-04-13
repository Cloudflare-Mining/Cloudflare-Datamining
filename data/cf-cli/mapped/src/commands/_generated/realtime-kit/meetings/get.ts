/**
 * get command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  appId: string;
  'page-no'?: number;
  'per-page'?: number;
  'start-time'?: string;
  'end-time'?: string;
  search?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <appId>',
  describe: 'Returns all meetings for the given App ID.',

  builder: (yargs: Argv): Argv<GetArgs> => {
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
      .option('search', {
        type: 'string',
        description: 'The search query string. You can search using the meeting ID or title.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      const params: Record<string, unknown> = {};
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.startTime !== undefined) params['start_time'] = argv.startTime;
      if (argv.endTime !== undefined) params['end_time'] = argv.endTime;
      if (argv.search !== undefined) params['search'] = argv.search;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.meetings.get(
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
