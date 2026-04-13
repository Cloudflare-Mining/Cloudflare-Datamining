/**
 * defog-sqlcoder7b2-create command
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

interface DefogSqlcoder7b2CreateArgs {
  'queue-request'?: string;
  tags?: string;
  'frequency-penalty'?: number;
  lora?: string;
  'max-tokens'?: number;
  'presence-penalty'?: number;
  prompt?: string;
  raw?: boolean;
  'repetition-penalty'?: number;
  'response-format-type'?: string;
  seed?: number;
  stream?: boolean;
  temperature?: number;
  'top-k'?: number;
  'top-p'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DefogSqlcoder7b2CreateArgs> = {
  command: 'defog-sqlcoder7b2-create',
  describe: 'Runs inference on the @cf/defog/sqlcoder-7b-2 model.',

  builder: (yargs: Argv): Argv<DefogSqlcoder7b2CreateArgs> => {
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
      .option('frequency-penalty', {
        type: 'number',
        description: 'Decreases the likelihood of the model repeating the same lines verbatim.',
        default: undefined,
      })
      .option('lora', {
        type: 'string',
        description: 'Name of the LoRA (Low-Rank Adaptation) model to fine-tune the base model.',
        default: undefined,
      })
      .option('max-tokens', {
        type: 'number',
        description: 'The maximum number of tokens to generate in the response.',
        default: undefined,
      })
      .option('presence-penalty', {
        type: 'number',
        description: 'Increases the likelihood of the model introducing new topics.',
        default: undefined,
      })
      .option('prompt', {
        type: 'string',
        description: 'The input text prompt for the model to generate a response.',
        default: undefined,
      })
      .option('raw', {
        type: 'boolean',
        description:
          "If true, a chat template is not applied and you must adhere to the specific model's expected formatting.",
        default: false,
      })
      .option('repetition-penalty', {
        type: 'number',
        description: 'Penalty for repeated tokens; higher values discourage repetition.',
        default: undefined,
      })
      .option('response-format-type', {
        type: 'string',
        description: 'The response_format.type field',
        choices: ['json_object', 'json_schema'] as const,
        default: undefined,
      })
      .option('seed', {
        type: 'number',
        description: 'Random seed for reproducibility of the generation.',
        default: undefined,
      })
      .option('stream', {
        type: 'boolean',
        description: 'If true, the response will be streamed back incrementally using SSE, Server Sent Events.',
        default: false,
      })
      .option('temperature', {
        type: 'number',
        description: 'Controls the randomness of the output; higher values produce more random results.',
        default: undefined,
      })
      .option('top-k', {
        type: 'number',
        description:
          "Limits the AI to choose from the top 'k' most probable words. Lower values make responses more focused; higher values introduce more variety and potential surprises.",
        default: undefined,
      })
      .option('top-p', {
        type: 'number',
        description:
          "Adjusts the creativity of the AI's responses by controlling how many possible words it considers. Lower values make outputs more predictable; higher values allow for more varied and creative responses.",
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
      .choices('response-format-type', ['json_object', 'json_schema'] as const) as Argv<DefogSqlcoder7b2CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DefogSqlcoder7b2CreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra defog-sqlcoder7b2-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/defog/sqlcoder-7b-2`,
          pathParams: {},
          body: {
            ...params,
            frequencyPenalty: argv.frequencyPenalty,
            lora: argv.lora,
            maxTokens: argv.maxTokens,
            presencePenalty: argv.presencePenalty,
            prompt: argv.prompt,
            raw: argv.raw,
            repetitionPenalty: argv.repetitionPenalty,
            responseFormatType: argv.responseFormatType,
            seed: argv.seed,
            stream: argv.stream,
            temperature: argv.temperature,
            topK: argv.topK,
            topP: argv.topP,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/defog/sqlcoder-7b-2`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.frequencyPenalty !== undefined) setNestedValue(bodyData, ['frequency_penalty'], argv.frequencyPenalty);
      if (argv.lora !== undefined) setNestedValue(bodyData, ['lora'], argv.lora);
      if (argv.maxTokens !== undefined) setNestedValue(bodyData, ['max_tokens'], argv.maxTokens);
      if (argv.presencePenalty !== undefined) setNestedValue(bodyData, ['presence_penalty'], argv.presencePenalty);
      if (argv.prompt !== undefined) setNestedValue(bodyData, ['prompt'], argv.prompt);
      if (argv.raw !== undefined) setNestedValue(bodyData, ['raw'], argv.raw);
      if (argv.repetitionPenalty !== undefined)
        setNestedValue(bodyData, ['repetition_penalty'], argv.repetitionPenalty);
      if (argv.responseFormatType !== undefined)
        setNestedValue(bodyData, ['response_format', 'type'], argv.responseFormatType);
      if (argv.seed !== undefined) setNestedValue(bodyData, ['seed'], argv.seed);
      if (argv.stream !== undefined) setNestedValue(bodyData, ['stream'], argv.stream);
      if (argv.temperature !== undefined) setNestedValue(bodyData, ['temperature'], argv.temperature);
      if (argv.topK !== undefined) setNestedValue(bodyData, ['top_k'], argv.topK);
      if (argv.topP !== undefined) setNestedValue(bodyData, ['top_p'], argv.topP);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/defog/sqlcoder-7b-2${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
