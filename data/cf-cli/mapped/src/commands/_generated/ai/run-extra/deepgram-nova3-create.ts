/**
 * deepgram-nova3-create command
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

interface DeepgramNova3CreateArgs {
  'queue-request'?: string;
  tags?: string;
  'audio-content-type': string;
  channels?: number;
  'custom-intent'?: string;
  'custom-intent-mode'?: string;
  'custom-topic'?: string;
  'custom-topic-mode'?: string;
  'detect-entities'?: boolean;
  'detect-language'?: boolean;
  diarize?: boolean;
  dictation?: boolean;
  encoding?: string;
  endpointing?: string;
  extra?: string;
  'filler-words'?: boolean;
  'interim-results'?: boolean;
  keyterm?: string;
  keywords?: string;
  language?: string;
  measurements?: boolean;
  'mip-opt-out'?: boolean;
  mode?: string;
  multichannel?: boolean;
  numerals?: boolean;
  paragraphs?: boolean;
  'profanity-filter'?: boolean;
  punctuate?: boolean;
  redact?: string;
  replace?: string;
  search?: string;
  sentiment?: boolean;
  'smart-format'?: boolean;
  topics?: boolean;
  'utt-split'?: number;
  'utterance-end-ms'?: boolean;
  utterances?: boolean;
  'vad-events'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DeepgramNova3CreateArgs> = {
  command: 'deepgram-nova3-create',
  describe: 'Runs inference on the @cf/deepgram/nova-3 model.',

  builder: (yargs: Argv): Argv<DeepgramNova3CreateArgs> => {
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
      .option('audio-content-type', {
        type: 'string',
        description: 'The audio.contentType field',
      })
      .option('channels', {
        type: 'number',
        description: 'The number of channels in the submitted audio',
        default: undefined,
      })
      .option('custom-intent', {
        type: 'string',
        description: 'Custom intents you want the model to detect within your input audio if present',
        default: undefined,
      })
      .option('custom-intent-mode', {
        type: 'string',
        description:
          'Sets how the model will interpret intents submitted to the custom_intent param. When strict, the model will only return intents submitted using the custom_intent param. When extended, the model will return its own detected intents in addition those submitted using the custom_intents param',
        choices: ['extended', 'strict'] as const,
        default: undefined,
      })
      .option('custom-topic', {
        type: 'string',
        description:
          'Custom topics you want the model to detect within your input audio or text if present Submit up to 100',
        default: undefined,
      })
      .option('custom-topic-mode', {
        type: 'string',
        description:
          'Sets how the model will interpret strings submitted to the custom_topic param. When strict, the model will only return topics submitted using the custom_topic param. When extended, the model will return its own detected topics in addition to those submitted using the custom_topic param.',
        choices: ['extended', 'strict'] as const,
        default: undefined,
      })
      .option('detect-entities', {
        type: 'boolean',
        description: 'Identifies and extracts key entities from content in submitted audio',
        default: false,
      })
      .option('detect-language', {
        type: 'boolean',
        description: 'Identifies the dominant language spoken in submitted audio',
        default: false,
      })
      .option('diarize', {
        type: 'boolean',
        description:
          'Recognize speaker changes. Each word in the transcript will be assigned a speaker number starting at 0',
        default: false,
      })
      .option('dictation', {
        type: 'boolean',
        description: 'Identify and extract key entities from content in submitted audio',
        default: false,
      })
      .option('encoding', {
        type: 'string',
        description: 'Specify the expected encoding of your submitted audio',
        choices: ['linear16', 'flac', 'mulaw', 'amr-nb', 'amr-wb', 'opus', 'speex', 'g729'] as const,
        default: undefined,
      })
      .option('endpointing', {
        type: 'string',
        description:
          'Indicates how long model will wait to detect whether a speaker has finished speaking or pauses for a significant period of time. When set to a value, the streaming endpoint immediately finalizes the transcription for the processed time range and returns the transcript with a speech_final parameter set to true. Can also be set to false to disable endpointing',
        default: undefined,
      })
      .option('extra', {
        type: 'string',
        description:
          'Arbitrary key-value pairs that are attached to the API response for usage in downstream processing',
        default: undefined,
      })
      .option('filler-words', {
        type: 'boolean',
        description: "Filler Words can help transcribe interruptions in your audio, like 'uh' and 'um'",
        default: false,
      })
      .option('interim-results', {
        type: 'boolean',
        description:
          'Specifies whether the streaming endpoint should provide ongoing transcription updates as more audio is received. When set to true, the endpoint sends continuous updates, meaning transcription results may evolve over time. Note: Supported only for webosockets.',
        default: false,
      })
      .option('keyterm', {
        type: 'string',
        description: 'Key term prompting can boost or suppress specialized terminology and brands.',
        default: undefined,
      })
      .option('keywords', {
        type: 'string',
        description: 'Keywords can boost or suppress specialized terminology and brands.',
        default: undefined,
      })
      .option('language', {
        type: 'string',
        description:
          'The BCP-47 language tag that hints at the primary spoken language. Depending on the Model and API endpoint you choose only certain languages are available.',
        default: undefined,
      })
      .option('measurements', {
        type: 'boolean',
        description: 'Spoken measurements will be converted to their corresponding abbreviations.',
        default: false,
      })
      .option('mip-opt-out', {
        type: 'boolean',
        description:
          'Opts out requests from the Deepgram Model Improvement Program. Refer to our Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip.',
        default: false,
      })
      .option('mode', {
        type: 'string',
        description:
          'Mode of operation for the model representing broad area of topic that will be talked about in the supplied audio',
        choices: ['general', 'medical', 'finance'] as const,
        default: undefined,
      })
      .option('multichannel', {
        type: 'boolean',
        description: 'Transcribe each audio channel independently.',
        default: false,
      })
      .option('numerals', {
        type: 'boolean',
        description: 'Numerals converts numbers from written format to numerical format.',
        default: false,
      })
      .option('paragraphs', {
        type: 'boolean',
        description: 'Splits audio into paragraphs to improve transcript readability.',
        default: false,
      })
      .option('profanity-filter', {
        type: 'boolean',
        description:
          'Profanity Filter looks for recognized profanity and converts it to the nearest recognized non-profane word or removes it from the transcript completely.',
        default: false,
      })
      .option('punctuate', {
        type: 'boolean',
        description: 'Add punctuation and capitalization to the transcript.',
        default: false,
      })
      .option('redact', {
        type: 'string',
        description: 'Redaction removes sensitive information from your transcripts.',
        default: undefined,
      })
      .option('replace', {
        type: 'string',
        description: 'Search for terms or phrases in submitted audio and replaces them.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search for terms or phrases in submitted audio.',
        default: undefined,
      })
      .option('sentiment', {
        type: 'boolean',
        description: 'Recognizes the sentiment throughout a transcript or text.',
        default: false,
      })
      .option('smart-format', {
        type: 'boolean',
        description:
          'Apply formatting to transcript output. When set to true, additional formatting will be applied to transcripts to improve readability.',
        default: false,
      })
      .option('topics', {
        type: 'boolean',
        description: 'Detect topics throughout a transcript or text.',
        default: false,
      })
      .option('utt-split', {
        type: 'number',
        description: 'Seconds to wait before detecting a pause between words in submitted audio.',
        default: undefined,
      })
      .option('utterance-end-ms', {
        type: 'boolean',
        description:
          'Indicates how long model will wait to send an UtteranceEnd message after a word has been transcribed. Use with interim_results. Note: Supported only for webosockets.',
        default: false,
      })
      .option('utterances', {
        type: 'boolean',
        description: 'Segments speech into meaningful semantic units.',
        default: false,
      })
      .option('vad-events', {
        type: 'boolean',
        description:
          "Indicates that speech has started. You'll begin receiving Speech Started messages upon speech starting. Note: Supported only for webosockets.",
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
      })
      .choices('custom-intent-mode', ['extended', 'strict'] as const)
      .choices('custom-topic-mode', ['extended', 'strict'] as const)
      .choices('encoding', ['linear16', 'flac', 'mulaw', 'amr-nb', 'amr-wb', 'opus', 'speex', 'g729'] as const)
      .choices('mode', ['general', 'medical', 'finance'] as const) as Argv<DeepgramNova3CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeepgramNova3CreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra deepgram-nova3-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/deepgram/nova-3`,
          pathParams: {},
          body: {
            ...params,
            audioContentType: argv.audioContentType,
            channels: argv.channels,
            customIntent: argv.customIntent,
            customIntentMode: argv.customIntentMode,
            customTopic: argv.customTopic,
            customTopicMode: argv.customTopicMode,
            detectEntities: argv.detectEntities,
            detectLanguage: argv.detectLanguage,
            diarize: argv.diarize,
            dictation: argv.dictation,
            encoding: argv.encoding,
            endpointing: argv.endpointing,
            extra: argv.extra,
            fillerWords: argv.fillerWords,
            interimResults: argv.interimResults,
            keyterm: argv.keyterm,
            keywords: argv.keywords,
            language: argv.language,
            measurements: argv.measurements,
            mipOptOut: argv.mipOptOut,
            mode: argv.mode,
            multichannel: argv.multichannel,
            numerals: argv.numerals,
            paragraphs: argv.paragraphs,
            profanityFilter: argv.profanityFilter,
            punctuate: argv.punctuate,
            redact: argv.redact,
            replace: argv.replace,
            search: argv.search,
            sentiment: argv.sentiment,
            smartFormat: argv.smartFormat,
            topics: argv.topics,
            uttSplit: argv.uttSplit,
            utteranceEndMs: argv.utteranceEndMs,
            utterances: argv.utterances,
            vadEvents: argv.vadEvents,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/nova-3`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.audioContentType !== undefined)
        setNestedValue(bodyData, ['audio', 'contentType'], argv.audioContentType);
      if (argv.channels !== undefined) setNestedValue(bodyData, ['channels'], argv.channels);
      if (argv.customIntent !== undefined) setNestedValue(bodyData, ['custom_intent'], argv.customIntent);
      if (argv.customIntentMode !== undefined) setNestedValue(bodyData, ['custom_intent_mode'], argv.customIntentMode);
      if (argv.customTopic !== undefined) setNestedValue(bodyData, ['custom_topic'], argv.customTopic);
      if (argv.customTopicMode !== undefined) setNestedValue(bodyData, ['custom_topic_mode'], argv.customTopicMode);
      if (argv.detectEntities !== undefined) setNestedValue(bodyData, ['detect_entities'], argv.detectEntities);
      if (argv.detectLanguage !== undefined) setNestedValue(bodyData, ['detect_language'], argv.detectLanguage);
      if (argv.diarize !== undefined) setNestedValue(bodyData, ['diarize'], argv.diarize);
      if (argv.dictation !== undefined) setNestedValue(bodyData, ['dictation'], argv.dictation);
      if (argv.encoding !== undefined) setNestedValue(bodyData, ['encoding'], argv.encoding);
      if (argv.endpointing !== undefined) setNestedValue(bodyData, ['endpointing'], argv.endpointing);
      if (argv.extra !== undefined) setNestedValue(bodyData, ['extra'], argv.extra);
      if (argv.fillerWords !== undefined) setNestedValue(bodyData, ['filler_words'], argv.fillerWords);
      if (argv.interimResults !== undefined) setNestedValue(bodyData, ['interim_results'], argv.interimResults);
      if (argv.keyterm !== undefined) setNestedValue(bodyData, ['keyterm'], argv.keyterm);
      if (argv.keywords !== undefined) setNestedValue(bodyData, ['keywords'], argv.keywords);
      if (argv.language !== undefined) setNestedValue(bodyData, ['language'], argv.language);
      if (argv.measurements !== undefined) setNestedValue(bodyData, ['measurements'], argv.measurements);
      if (argv.mipOptOut !== undefined) setNestedValue(bodyData, ['mip_opt_out'], argv.mipOptOut);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      if (argv.multichannel !== undefined) setNestedValue(bodyData, ['multichannel'], argv.multichannel);
      if (argv.numerals !== undefined) setNestedValue(bodyData, ['numerals'], argv.numerals);
      if (argv.paragraphs !== undefined) setNestedValue(bodyData, ['paragraphs'], argv.paragraphs);
      if (argv.profanityFilter !== undefined) setNestedValue(bodyData, ['profanity_filter'], argv.profanityFilter);
      if (argv.punctuate !== undefined) setNestedValue(bodyData, ['punctuate'], argv.punctuate);
      if (argv.redact !== undefined) setNestedValue(bodyData, ['redact'], argv.redact);
      if (argv.replace !== undefined) setNestedValue(bodyData, ['replace'], argv.replace);
      if (argv.search !== undefined) setNestedValue(bodyData, ['search'], argv.search);
      if (argv.sentiment !== undefined) setNestedValue(bodyData, ['sentiment'], argv.sentiment);
      if (argv.smartFormat !== undefined) setNestedValue(bodyData, ['smart_format'], argv.smartFormat);
      if (argv.topics !== undefined) setNestedValue(bodyData, ['topics'], argv.topics);
      if (argv.uttSplit !== undefined) setNestedValue(bodyData, ['utt_split'], argv.uttSplit);
      if (argv.utteranceEndMs !== undefined) setNestedValue(bodyData, ['utterance_end_ms'], argv.utteranceEndMs);
      if (argv.utterances !== undefined) setNestedValue(bodyData, ['utterances'], argv.utterances);
      if (argv.vadEvents !== undefined) setNestedValue(bodyData, ['vad_events'], argv.vadEvents);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/deepgram/nova-3${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
