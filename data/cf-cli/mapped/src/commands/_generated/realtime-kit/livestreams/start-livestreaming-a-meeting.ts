/**
 * start-livestreaming-a-meeting command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface StartLivestreamingAMeetingArgs {
  meetingId: string;
  name?: string;
  'video-config-height'?: number;
  'video-config-width'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, StartLivestreamingAMeetingArgs> = {
  command: 'start-livestreaming-a-meeting <meetingId>',
  describe:
    'Starts livestream of a meeting associated with the given meeting ID. Retreive the meeting ID using the \`Create a meeting\` API.',

  builder: (yargs: Argv): Argv<StartLivestreamingAMeetingArgs> => {
    return yargs
      .positional('meetingId', {
        type: 'string',
        description: 'ID of the meeting',
        demandOption: true,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
        default: undefined,
      })
      .option('video-config-height', {
        type: 'number',
        description: 'Height of the livestreaming video in pixels',
        default: undefined,
      })
      .option('video-config-width', {
        type: 'number',
        description: 'Width of the livestreaming video in pixels',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<StartLivestreamingAMeetingArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<StartLivestreamingAMeetingArgs>): Promise<void> => {
    try {
      validateResourceId(argv.meetingId as string | undefined, 'meetingId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf realtime-kit livestreams start-livestreaming-a-meeting',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/realtime/kit/${argv.appId ?? '<appId>'}/meetings/${argv.meetingId ?? '<meetingId>'}/livestreams`,
          pathParams: { meetingId: String(argv.meetingId ?? ''), appId: String(argv.appId ?? '') },
          body: { name: argv.name, videoConfigHeight: argv.videoConfigHeight, videoConfigWidth: argv.videoConfigWidth },
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
          `/accounts/${accountId}/realtime/kit/${argv.appId}/meetings/${argv.meetingId}/livestreams`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.videoConfigHeight !== undefined)
        setNestedValue(bodyData, ['video_config', 'height'], argv.videoConfigHeight);
      if (argv.videoConfigWidth !== undefined)
        setNestedValue(bodyData, ['video_config', 'width'], argv.videoConfigWidth);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/realtime/kit/${argv.appId}/meetings/${argv.meetingId}/livestreams`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
