/**
 * get-livestream-analytics-complete command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetLivestreamAnalyticsCompleteArgs {
  appId: string;
  'start-time'?: string;
  'end-time'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetLivestreamAnalyticsCompleteArgs> = {
  command: 'get-livestream-analytics-complete <appId>',
  describe: 'Returns livestream analytics for the specified time range.',

  builder: (yargs: Argv): Argv<GetLivestreamAnalyticsCompleteArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .option('start-time', {
        type: 'string',
        description: 'Specify the start time range in ISO format to access the livestream analytics.',
        default: undefined,
      })
      .option('end-time', {
        type: 'string',
        description: 'Specify the end time range in ISO format to access the livestream analytics.',
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
      }) as Argv<GetLivestreamAnalyticsCompleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetLivestreamAnalyticsCompleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      const params: Record<string, unknown> = {};
      if (argv.startTime !== undefined) params['start_time'] = argv.startTime;
      if (argv.endTime !== undefined) params['end_time'] = argv.endTime;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.livestreams.getLivestreamAnalyticsComplete(
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
