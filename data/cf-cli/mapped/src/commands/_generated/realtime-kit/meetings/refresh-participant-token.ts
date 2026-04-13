/**
 * refresh-participant-token command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface RefreshParticipantTokenArgs {
  appId: string;
  meetingId: string;
  participantId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RefreshParticipantTokenArgs> = {
  command: 'refresh-participant-token <appId> <meetingId> <participantId>',
  describe: "Regenerates participant's authentication token for the given meeting and participant ID.",

  builder: (yargs: Argv): Argv<RefreshParticipantTokenArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('meetingId', {
        type: 'string',
        description: 'ID of the meeting. You can fetch the meeting ID using the create a meeting API.',
        demandOption: true,
      })
      .positional('participantId', {
        type: 'string',
        description: 'ID of the participant. You can fetch the participant ID using the add a  participant API.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      }) as Argv<RefreshParticipantTokenArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RefreshParticipantTokenArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.meetingId as string | undefined, 'meetingId');
      validateResourceId(argv.participantId as string | undefined, 'participantId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf realtime-kit meetings refresh-participant-token',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/realtime/kit/${argv.appId ?? '<appId>'}/meetings/${argv.meetingId ?? '<meetingId>'}/participants/${argv.participantId ?? '<participantId>'}/token`,
          pathParams: {
            appId: String(argv.appId ?? ''),
            meetingId: String(argv.meetingId ?? ''),
            participantId: String(argv.participantId ?? ''),
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.meetings.refreshParticipantToken(
        accountId,
        argv.appId,
        argv.meetingId,
        argv.participantId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
