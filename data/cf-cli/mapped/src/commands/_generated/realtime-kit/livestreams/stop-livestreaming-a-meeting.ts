/**
 * stop-livestreaming-a-meeting command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface StopLivestreamingAMeetingArgs {
  meetingId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, StopLivestreamingAMeetingArgs> = {
  command: 'stop-livestreaming-a-meeting <meetingId>',
  describe:
    'Stops the active livestream of a meeting associated with the given meeting ID. Retreive the meeting ID using the \`Create a meeting\` API.',

  builder: (yargs: Argv): Argv<StopLivestreamingAMeetingArgs> => {
    return yargs
      .positional('meetingId', {
        type: 'string',
        description: 'ID of the meeting',
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<StopLivestreamingAMeetingArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<StopLivestreamingAMeetingArgs>): Promise<void> => {
    try {
      validateResourceId(argv.meetingId as string | undefined, 'meetingId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf realtime-kit livestreams stop-livestreaming-a-meeting',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/realtime/kit/${argv.appId ?? '<appId>'}/meetings/${argv.meetingId ?? '<meetingId>'}/active-livestream/stop`,
          pathParams: { meetingId: String(argv.meetingId ?? ''), appId: String(argv.appId ?? '') },
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(
          `/accounts/${accountId}/realtime/kit/${argv.appId}/meetings/${argv.meetingId}/active-livestream/stop`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.realtimeKit.livestreams.stopLivestreamingAMeeting(
        argv.meetingId,
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
