/**
 * pause-resume-stop-recording command
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

interface PauseResumeStopRecordingArgs {
  appId: string;
  recordingId: string;
  action: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PauseResumeStopRecordingArgs> = {
  command: 'pause-resume-stop-recording <appId> <recordingId>',
  describe: 'Pause/Resume/Stop a given recording ID.',

  builder: (yargs: Argv): Argv<PauseResumeStopRecordingArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for an item.',
        demandOption: true,
      })
      .positional('recordingId', {
        type: 'string',
        description: 'ID of the recording',
        demandOption: true,
      })
      .option('action', {
        type: 'string',
        description: 'The action field',
        choices: ['stop', 'pause', 'resume'] as const,
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
      })
      .choices('action', ['stop', 'pause', 'resume'] as const) as Argv<PauseResumeStopRecordingArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PauseResumeStopRecordingArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.recordingId as string | undefined, 'recordingId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf realtime-kit recordings pause-resume-stop-recording',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/realtime/kit/${argv.appId ?? '<appId>'}/recordings/${argv.recordingId ?? '<recordingId>'}`,
          pathParams: { appId: String(argv.appId ?? ''), recordingId: String(argv.recordingId ?? '') },
          body: { action: argv.action },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/realtime/kit/${argv.appId}/recordings/${argv.recordingId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/realtime/kit/${argv.appId}/recordings/${argv.recordingId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
