/**
 * update command
 * @generated from apis/stream/schema.ts
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

interface UpdateArgs {
  liveInputIdentifier: string;
  'default-creator'?: string;
  'delete-recording-after-days'?: number;
  enabled?: boolean;
  'recording-allowed-origins'?: string;
  'recording-hide-live-viewer-count'?: boolean;
  'recording-mode'?: string;
  'recording-require-signed-urls'?: boolean;
  'recording-timeout-seconds'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <liveInputIdentifier>',
  describe: 'Updates a specified live input.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('liveInputIdentifier', {
        type: 'string',
        description: 'A unique identifier for a live input.',
        demandOption: true,
      })
      .option('default-creator', {
        type: 'string',
        description: 'Sets the creator ID asssociated with this live input.',
        default: undefined,
      })
      .option('delete-recording-after-days', {
        type: 'number',
        description:
          'Indicates the number of days after which the live inputs recordings will be deleted. When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a \`null\` value to remove an existing scheduled deletion.',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Indicates whether the live input is enabled and can accept streams.',
        default: false,
      })
      .option('recording-allowed-origins', {
        type: 'string',
        description:
          'Lists the origins allowed to display videos created with this input. Enter allowed origin domains in an array and use \`*\` for wildcard subdomains. An empty array allows videos to be viewed on any origin.',
        default: undefined,
      })
      .option('recording-hide-live-viewer-count', {
        type: 'boolean',
        description: 'Disables reporting the number of live viewers when this property is set to \`true\`.',
        default: false,
      })
      .option('recording-mode', {
        type: 'string',
        description:
          'Specifies the recording behavior for the live input. Set this value to \`off\` to prevent a recording. Set the value to \`automatic\` to begin a recording and transition to on-demand after Stream Live stops receiving input.',
        choices: ['off', 'automatic'] as const,
        default: undefined,
      })
      .option('recording-require-signed-urls', {
        type: 'boolean',
        description:
          'Indicates if a video using the live input has the \`requireSignedURLs\` property set. Also enforces access controls on any video recording of the livestream with the live input.',
        default: false,
      })
      .option('recording-timeout-seconds', {
        type: 'number',
        description:
          'Determines the amount of time a live input configured in \`automatic\` mode should wait before a recording transitions from live to on-demand. \`0\` is recommended for most use cases and indicates the platform default should be used.',
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
      })
      .choices('recording-mode', ['off', 'automatic'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.liveInputIdentifier as string | undefined, 'liveInputIdentifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream live-inputs update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/live_inputs/${argv.liveInputIdentifier ?? '<liveInputIdentifier>'}`,
          pathParams: { liveInputIdentifier: String(argv.liveInputIdentifier ?? '') },
          body: {
            defaultCreator: argv.defaultCreator,
            deleteRecordingAfterDays: argv.deleteRecordingAfterDays,
            enabled: argv.enabled,
            recordingAllowedOrigins: argv.recordingAllowedOrigins,
            recordingHideLiveViewerCount: argv.recordingHideLiveViewerCount,
            recordingMode: argv.recordingMode,
            recordingRequireSignedUrls: argv.recordingRequireSignedUrls,
            recordingTimeoutSeconds: argv.recordingTimeoutSeconds,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(
          `/accounts/${accountId}/stream/live_inputs/${argv.liveInputIdentifier}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.defaultCreator !== undefined) setNestedValue(bodyData, ['defaultCreator'], argv.defaultCreator);
      if (argv.deleteRecordingAfterDays !== undefined)
        setNestedValue(bodyData, ['deleteRecordingAfterDays'], argv.deleteRecordingAfterDays);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.recordingAllowedOrigins !== undefined)
        setNestedValue(bodyData, ['recording', 'allowedOrigins'], argv.recordingAllowedOrigins);
      if (argv.recordingHideLiveViewerCount !== undefined)
        setNestedValue(bodyData, ['recording', 'hideLiveViewerCount'], argv.recordingHideLiveViewerCount);
      if (argv.recordingMode !== undefined) setNestedValue(bodyData, ['recording', 'mode'], argv.recordingMode);
      if (argv.recordingRequireSignedUrls !== undefined)
        setNestedValue(bodyData, ['recording', 'requireSignedURLs'], argv.recordingRequireSignedUrls);
      if (argv.recordingTimeoutSeconds !== undefined)
        setNestedValue(bodyData, ['recording', 'timeoutSeconds'], argv.recordingTimeoutSeconds);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/stream/live_inputs/${argv.liveInputIdentifier}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
