/**
 * get-meeting-participant command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetMeetingParticipantArgs {
  meetingId: string;
  participantId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetMeetingParticipantArgs> = {
  command: 'get-meeting-participant <meetingId> <participantId>',
  describe: 'Returns a participant details for the given meeting and participant ID.',

  builder: (yargs: Argv): Argv<GetMeetingParticipantArgs> => {
    return yargs
      .positional('meetingId', {
        type: 'string',
        description: 'ID of the meeting. You can fetch the meeting ID using the create a meeting API.',
        demandOption: true,
      })
      .positional('participantId', {
        type: 'string',
        description: 'ID of the participant. You can fetch the participant ID using the add a participant API.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetMeetingParticipantArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetMeetingParticipantArgs>): Promise<void> => {
    try {
      validateResourceId(argv.meetingId as string | undefined, 'meetingId');
      validateResourceId(argv.participantId as string | undefined, 'participantId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.meetings.getMeetingParticipant(
        argv.meetingId,
        argv.participantId,
        accountId,
        argv.appId as string,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
