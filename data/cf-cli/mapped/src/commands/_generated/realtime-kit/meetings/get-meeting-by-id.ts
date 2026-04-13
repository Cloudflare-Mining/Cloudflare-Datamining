/**
 * get-meeting-by-id command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetMeetingByIdArgs {
  meetingId: string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetMeetingByIdArgs> = {
  command: 'get-meeting-by-id <meetingId>',
  describe: 'Returns a meeting details in an App for the given meeting ID.',

  builder: (yargs: Argv): Argv<GetMeetingByIdArgs> => {
    return yargs
      .positional('meetingId', {
        type: 'string',
        description: 'ID of the meeting. Fetch the meeting ID using the create a meeting API.',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'Name',
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
      }) as Argv<GetMeetingByIdArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetMeetingByIdArgs>): Promise<void> => {
    try {
      validateResourceId(argv.meetingId as string | undefined, 'meetingId');

      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.meetings.getMeetingById(
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
