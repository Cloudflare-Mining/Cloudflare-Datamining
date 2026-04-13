/**
 * openai-whisper-large-v3-turbo-create command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface OpenaiWhisperLargeV3TurboCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'beam-size'?: number;
  'compression-ratio-threshold'?: number;
  'condition-on-previous-text'?: boolean;
  'hallucination-silence-threshold'?: number;
  'initial-prompt'?: string;
  language?: string;
  'log-prob-threshold'?: number;
  'no-speech-threshold'?: number;
  prefix?: string;
  task?: string;
  'vad-filter'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, OpenaiWhisperLargeV3TurboCreateArgs> = {
  command: 'openai-whisper-large-v3-turbo-create',
  describe: 'Runs inference on the @cf/openai/whisper-large-v3-turbo model.',

  builder: (yargs: Argv): Argv<OpenaiWhisperLargeV3TurboCreateArgs> => {
    return yargs
      .option('queue-request', {
        type: 'string',
        description: 'QueueRequest',
        default: undefined,
      })
      .option('tags', {
        type: 'string',
        description: 'Tags',
        default: undefined,
      })
      .option('beam-size', {
        type: 'number',
        description:
          'The number of beams to use in beam search decoding. Higher values may improve accuracy at the cost of speed.',
        default: undefined,
      })
      .option('compression-ratio-threshold', {
        type: 'number',
        description:
          'Threshold for filtering out segments with high compression ratio, which often indicate repetitive or hallucinated text.',
        default: undefined,
      })
      .option('condition-on-previous-text', {
        type: 'boolean',
        description:
          'Whether to condition on previous text during transcription. Setting to false may help prevent hallucination loops.',
        default: false,
      })
      .option('hallucination-silence-threshold', {
        type: 'number',
        description: 'Optional threshold (in seconds) to skip silent periods that may cause hallucinations.',
        default: undefined,
      })
      .option('initial-prompt', {
        type: 'string',
        description: 'A text prompt to help provide context to the model on the contents of the audio.',
        default: undefined,
      })
      .option('language', {
        type: 'string',
        description: 'The language of the audio being transcribed or translated.',
        default: undefined,
      })
      .option('log-prob-threshold', {
        type: 'number',
        description:
          'Threshold for filtering out segments with low average log probability, indicating low confidence.',
        default: undefined,
      })
      .option('no-speech-threshold', {
        type: 'number',
        description:
          'Threshold for detecting no-speech segments. Segments with no-speech probability above this value are skipped.',
        default: undefined,
      })
      .option('prefix', {
        type: 'string',
        description:
          'The prefix appended to the beginning of the output of the transcription and can guide the transcription result.',
        default: undefined,
      })
      .option('task', {
        type: 'string',
        description: "Supported tasks are 'translate' or 'transcribe'.",
        default: undefined,
      })
      .option('vad-filter', {
        type: 'boolean',
        description: 'Preprocess the audio with a voice activity detection model.',
        default: false,
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
      }) as Argv<OpenaiWhisperLargeV3TurboCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OpenaiWhisperLargeV3TurboCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra openai-whisper-large-v3-turbo-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/openai/whisper-large-v3-turbo`,
          pathParams: {},
          body: {
            ...params,
            beamSize: argv.beamSize,
            compressionRatioThreshold: argv.compressionRatioThreshold,
            conditionOnPreviousText: argv.conditionOnPreviousText,
            hallucinationSilenceThreshold: argv.hallucinationSilenceThreshold,
            initialPrompt: argv.initialPrompt,
            language: argv.language,
            logProbThreshold: argv.logProbThreshold,
            noSpeechThreshold: argv.noSpeechThreshold,
            prefix: argv.prefix,
            task: argv.task,
            vadFilter: argv.vadFilter,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/whisper-large-v3-turbo`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.beamSize !== undefined) setNestedValue(bodyData, ['beam_size'], argv.beamSize);
      if (argv.compressionRatioThreshold !== undefined)
        setNestedValue(bodyData, ['compression_ratio_threshold'], argv.compressionRatioThreshold);
      if (argv.conditionOnPreviousText !== undefined)
        setNestedValue(bodyData, ['condition_on_previous_text'], argv.conditionOnPreviousText);
      if (argv.hallucinationSilenceThreshold !== undefined)
        setNestedValue(bodyData, ['hallucination_silence_threshold'], argv.hallucinationSilenceThreshold);
      if (argv.initialPrompt !== undefined) setNestedValue(bodyData, ['initial_prompt'], argv.initialPrompt);
      if (argv.language !== undefined) setNestedValue(bodyData, ['language'], argv.language);
      if (argv.logProbThreshold !== undefined) setNestedValue(bodyData, ['log_prob_threshold'], argv.logProbThreshold);
      if (argv.noSpeechThreshold !== undefined)
        setNestedValue(bodyData, ['no_speech_threshold'], argv.noSpeechThreshold);
      if (argv.prefix !== undefined) setNestedValue(bodyData, ['prefix'], argv.prefix);
      if (argv.task !== undefined) setNestedValue(bodyData, ['task'], argv.task);
      if (argv.vadFilter !== undefined) setNestedValue(bodyData, ['vad_filter'], argv.vadFilter);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/openai/whisper-large-v3-turbo${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
