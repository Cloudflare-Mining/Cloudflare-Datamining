/**
 * deepgram-aura2-es-create command
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

interface DeepgramAura2EsCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'bit-rate'?: number;
  container?: string;
  encoding?: string;
  'sample-rate'?: number;
  speaker?: string;
  text: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DeepgramAura2EsCreateArgs> = {
  command: 'deepgram-aura2-es-create',
  describe: 'Runs inference on the @cf/deepgram/aura-2-es model.',

  builder: (yargs: Argv): Argv<DeepgramAura2EsCreateArgs> => {
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
      .option('bit-rate', {
        type: 'number',
        description:
          'The bitrate of the audio in bits per second. Choose from predefined ranges or specific values based on the encoding type.',
        default: undefined,
      })
      .option('container', {
        type: 'string',
        description:
          'Container specifies the file format wrapper for the output audio. The available options depend on the encoding type..',
        choices: ['none', 'wav', 'ogg'] as const,
        default: undefined,
      })
      .option('encoding', {
        type: 'string',
        description: 'Encoding of the output audio.',
        choices: ['linear16', 'flac', 'mulaw', 'alaw', 'mp3', 'opus', 'aac'] as const,
        default: undefined,
      })
      .option('sample-rate', {
        type: 'number',
        description:
          'Sample Rate specifies the sample rate for the output audio. Based on the encoding, different sample rates are supported. For some encodings, the sample rate is not configurable',
        default: undefined,
      })
      .option('speaker', {
        type: 'string',
        description: 'Speaker used to produce the audio.',
        choices: [
          'sirio',
          'nestor',
          'carina',
          'celeste',
          'alvaro',
          'diana',
          'aquila',
          'selena',
          'estrella',
          'javier',
        ] as const,
        default: undefined,
      })
      .option('text', {
        type: 'string',
        description: 'The text content to be converted to speech',
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
      .choices('container', ['none', 'wav', 'ogg'] as const)
      .choices('encoding', ['linear16', 'flac', 'mulaw', 'alaw', 'mp3', 'opus', 'aac'] as const)
      .choices('speaker', [
        'sirio',
        'nestor',
        'carina',
        'celeste',
        'alvaro',
        'diana',
        'aquila',
        'selena',
        'estrella',
        'javier',
      ] as const) as Argv<DeepgramAura2EsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeepgramAura2EsCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra deepgram-aura2-es-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/deepgram/aura-2-es`,
          pathParams: {},
          body: {
            ...params,
            bitRate: argv.bitRate,
            container: argv.container,
            encoding: argv.encoding,
            sampleRate: argv.sampleRate,
            speaker: argv.speaker,
            text: argv.text,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-2-es`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bitRate !== undefined) setNestedValue(bodyData, ['bit_rate'], argv.bitRate);
      if (argv.container !== undefined) setNestedValue(bodyData, ['container'], argv.container);
      if (argv.encoding !== undefined) setNestedValue(bodyData, ['encoding'], argv.encoding);
      if (argv.sampleRate !== undefined) setNestedValue(bodyData, ['sample_rate'], argv.sampleRate);
      if (argv.speaker !== undefined) setNestedValue(bodyData, ['speaker'], argv.speaker);
      if (argv.text !== undefined) setNestedValue(bodyData, ['text'], argv.text);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/deepgram/aura-2-es${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
