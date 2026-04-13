/**
 * deepgram-flux-create command
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

interface DeepgramFluxCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'eager-eot-threshold'?: string;
  encoding: string;
  'eot-threshold'?: string;
  'eot-timeout-ms'?: string;
  keyterm?: string;
  'mip-opt-out'?: string;
  'sample-rate': string;
  tag?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DeepgramFluxCreateArgs> = {
  command: 'deepgram-flux-create',
  describe: 'Runs inference on the @cf/deepgram/flux model.',

  builder: (yargs: Argv): Argv<DeepgramFluxCreateArgs> => {
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
      .option('eager-eot-threshold', {
        type: 'string',
        description:
          'End-of-turn confidence required to fire an eager end-of-turn event. When set, enables EagerEndOfTurn and TurnResumed events. Valid Values 0.3 - 0.9.',
        default: undefined,
      })
      .option('encoding', {
        type: 'string',
        description: 'Encoding of the audio stream. Currently only supports raw signed little-endian 16-bit PCM.',
        choices: ['linear16'] as const,
      })
      .option('eot-threshold', {
        type: 'string',
        description: 'End-of-turn confidence required to finish a turn. Valid Values 0.5 - 0.9.',
        default: undefined,
      })
      .option('eot-timeout-ms', {
        type: 'string',
        description:
          'A turn will be finished when this much time has passed after speech, regardless of EOT confidence.',
        default: undefined,
      })
      .option('keyterm', {
        type: 'string',
        description:
          'Keyterm prompting can improve recognition of specialized terminology. Pass multiple keyterm query parameters to boost multiple keyterms.',
        default: undefined,
      })
      .option('mip-opt-out', {
        type: 'string',
        description:
          'Opts out requests from the Deepgram Model Improvement Program. Refer to Deepgram Docs for pricing impacts before setting this to true. https://dpgr.am/deepgram-mip',
        choices: ['true', 'false'] as const,
        default: undefined,
      })
      .option('sample-rate', {
        type: 'string',
        description: 'Sample rate of the audio stream in Hz.',
      })
      .option('tag', {
        type: 'string',
        description: 'Label your requests for the purpose of identification during usage reporting',
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
      .choices('encoding', ['linear16'] as const)
      .choices('mip-opt-out', ['true', 'false'] as const) as Argv<DeepgramFluxCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeepgramFluxCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra deepgram-flux-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/deepgram/flux`,
          pathParams: {},
          body: {
            ...params,
            eagerEotThreshold: argv.eagerEotThreshold,
            encoding: argv.encoding,
            eotThreshold: argv.eotThreshold,
            eotTimeoutMs: argv.eotTimeoutMs,
            keyterm: argv.keyterm,
            mipOptOut: argv.mipOptOut,
            sampleRate: argv.sampleRate,
            tag: argv.tag,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/flux`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.eagerEotThreshold !== undefined)
        setNestedValue(bodyData, ['eager_eot_threshold'], argv.eagerEotThreshold);
      if (argv.encoding !== undefined) setNestedValue(bodyData, ['encoding'], argv.encoding);
      if (argv.eotThreshold !== undefined) setNestedValue(bodyData, ['eot_threshold'], argv.eotThreshold);
      if (argv.eotTimeoutMs !== undefined) setNestedValue(bodyData, ['eot_timeout_ms'], argv.eotTimeoutMs);
      if (argv.keyterm !== undefined) setNestedValue(bodyData, ['keyterm'], argv.keyterm);
      if (argv.mipOptOut !== undefined) setNestedValue(bodyData, ['mip_opt_out'], argv.mipOptOut);
      if (argv.sampleRate !== undefined) setNestedValue(bodyData, ['sample_rate'], argv.sampleRate);
      if (argv.tag !== undefined) setNestedValue(bodyData, ['tag'], argv.tag);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/deepgram/flux${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
