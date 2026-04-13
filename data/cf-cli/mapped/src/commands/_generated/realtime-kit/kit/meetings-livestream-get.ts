/**
 * meetings-livestream-get command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface MeetingsLivestreamGetArgs {
  meetingId: string;
  'page-no'?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, MeetingsLivestreamGetArgs> = {
  command: 'meetings-livestream-get <meetingId>',
  describe:
    'Returns livestream session details for the given meeting ID. Retreive the meeting ID using the \`Create a meeting\` API.',

  builder: (yargs: Argv): Argv<MeetingsLivestreamGetArgs> => {
    return yargs
      .positional('meetingId', {
        type: 'string',
        description: 'ID of the meeting',
        demandOption: true,
      })
      .option('page-no', {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page.',
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
      }) as Argv<MeetingsLivestreamGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MeetingsLivestreamGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.meetingId as string | undefined, 'meetingId');

      const params: Record<string, unknown> = {};
      if (argv.pageNo !== undefined) params['page_no'] = argv.pageNo;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.kit.meetingsLivestreamGet(
        argv.meetingId,
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
