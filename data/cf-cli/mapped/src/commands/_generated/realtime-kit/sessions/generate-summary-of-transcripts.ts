/**
 * generate-summary-of-transcripts command
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

interface GenerateSummaryOfTranscriptsArgs {
  appId: string;
  sessionId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GenerateSummaryOfTranscriptsArgs> = {
  command: 'generate-summary-of-transcripts <appId> <sessionId>',
  describe: 'Trigger Summary generation of Transcripts for the session ID.',

  builder: (yargs: Argv): Argv<GenerateSummaryOfTranscriptsArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .positional('sessionId', {
        type: 'string',
        description: 'Session ID',
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
      }) as Argv<GenerateSummaryOfTranscriptsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GenerateSummaryOfTranscriptsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf realtime-kit sessions generate-summary-of-transcripts',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/realtime/kit/${argv.appId ?? '<appId>'}/sessions/${argv.sessionId ?? '<sessionId>'}/summary`,
          pathParams: { appId: String(argv.appId ?? ''), sessionId: String(argv.sessionId ?? '') },
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

      const result = await client.realtimeKit.sessions.generateSummaryOfTranscripts(
        accountId,
        argv.appId,
        argv.sessionId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
