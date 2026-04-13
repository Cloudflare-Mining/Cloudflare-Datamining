/**
 * zai-org-glm47-flash-create command
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

interface ZaiOrgGlm47FlashCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'chat-template-kwargs-clear-thinking'?: boolean;
  'chat-template-kwargs-enable-thinking'?: boolean;
  'frequency-penalty'?: number;
  logprobs?: boolean;
  'max-completion-tokens'?: number;
  'max-tokens'?: number;
  modalities?: string;
  model?: string;
  n?: number;
  'parallel-tool-calls'?: boolean;
  'presence-penalty'?: number;
  prompt?: string;
  'reasoning-effort'?: string;
  seed?: number;
  'service-tier'?: string;
  store?: boolean;
  stream?: boolean;
  temperature?: number;
  'top-logprobs'?: number;
  'top-p'?: number;
  user?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ZaiOrgGlm47FlashCreateArgs> = {
  command: 'zai-org-glm47-flash-create',
  describe: 'Runs inference on the @cf/zai-org/glm-4.7-flash model.',

  builder: (yargs: Argv): Argv<ZaiOrgGlm47FlashCreateArgs> => {
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
      .option('chat-template-kwargs-clear-thinking', {
        type: 'boolean',
        description: 'If false, preserves reasoning context between turns.',
        default: false,
      })
      .option('chat-template-kwargs-enable-thinking', {
        type: 'boolean',
        description: 'Whether to enable reasoning, enabled by default.',
        default: false,
      })
      .option('frequency-penalty', {
        type: 'number',
        description: 'The frequency_penalty field',
        default: undefined,
      })
      .option('logprobs', {
        type: 'boolean',
        description: 'The logprobs field',
        default: false,
      })
      .option('max-completion-tokens', {
        type: 'number',
        description: 'The max_completion_tokens field',
        default: undefined,
      })
      .option('max-tokens', {
        type: 'number',
        description: 'The max_tokens field',
        default: undefined,
      })
      .option('modalities', {
        type: 'string',
        description: 'The modalities field',
        default: undefined,
      })
      .option('model', {
        type: 'string',
        description: "ID of the model to use (e.g. '@cf/zai-org/glm-4.7-flash, etc').",
        default: undefined,
      })
      .option('n', {
        type: 'number',
        description: 'The n field',
        default: undefined,
      })
      .option('parallel-tool-calls', {
        type: 'boolean',
        description: 'Whether to enable parallel function calling during tool use.',
        default: false,
      })
      .option('presence-penalty', {
        type: 'number',
        description: 'The presence_penalty field',
        default: undefined,
      })
      .option('prompt', {
        type: 'string',
        description: 'The input text prompt for the model to generate a response.',
        default: undefined,
      })
      .option('reasoning-effort', {
        type: 'string',
        description: 'The reasoning_effort field',
        choices: ['low', 'medium', 'high'] as const,
        default: undefined,
      })
      .option('seed', {
        type: 'number',
        description: 'The seed field',
        default: undefined,
      })
      .option('service-tier', {
        type: 'string',
        description: 'The service_tier field',
        choices: ['auto', 'default', 'flex', 'scale', 'priority'] as const,
        default: undefined,
      })
      .option('store', {
        type: 'boolean',
        description: 'The store field',
        default: false,
      })
      .option('stream', {
        type: 'boolean',
        description: 'The stream field',
        default: false,
      })
      .option('temperature', {
        type: 'number',
        description: 'The temperature field',
        default: undefined,
      })
      .option('top-logprobs', {
        type: 'number',
        description: 'The top_logprobs field',
        default: undefined,
      })
      .option('top-p', {
        type: 'number',
        description: 'The top_p field',
        default: undefined,
      })
      .option('user', {
        type: 'string',
        description: 'A unique identifier representing your end-user, for abuse monitoring.',
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
      .choices('reasoning-effort', ['low', 'medium', 'high'] as const)
      .choices('service-tier', [
        'auto',
        'default',
        'flex',
        'scale',
        'priority',
      ] as const) as Argv<ZaiOrgGlm47FlashCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ZaiOrgGlm47FlashCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra zai-org-glm47-flash-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/zai-org/glm-4.7-flash`,
          pathParams: {},
          body: {
            ...params,
            chatTemplateKwargsClearThinking: argv.chatTemplateKwargsClearThinking,
            chatTemplateKwargsEnableThinking: argv.chatTemplateKwargsEnableThinking,
            frequencyPenalty: argv.frequencyPenalty,
            logprobs: argv.logprobs,
            maxCompletionTokens: argv.maxCompletionTokens,
            maxTokens: argv.maxTokens,
            modalities: argv.modalities,
            model: argv.model,
            n: argv.n,
            parallelToolCalls: argv.parallelToolCalls,
            presencePenalty: argv.presencePenalty,
            prompt: argv.prompt,
            reasoningEffort: argv.reasoningEffort,
            seed: argv.seed,
            serviceTier: argv.serviceTier,
            store: argv.store,
            stream: argv.stream,
            temperature: argv.temperature,
            topLogprobs: argv.topLogprobs,
            topP: argv.topP,
            user: argv.user,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/zai-org/glm-4.7-flash`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.chatTemplateKwargsClearThinking !== undefined)
        setNestedValue(bodyData, ['chat_template_kwargs', 'clear_thinking'], argv.chatTemplateKwargsClearThinking);
      if (argv.chatTemplateKwargsEnableThinking !== undefined)
        setNestedValue(bodyData, ['chat_template_kwargs', 'enable_thinking'], argv.chatTemplateKwargsEnableThinking);
      if (argv.frequencyPenalty !== undefined) setNestedValue(bodyData, ['frequency_penalty'], argv.frequencyPenalty);
      if (argv.logprobs !== undefined) setNestedValue(bodyData, ['logprobs'], argv.logprobs);
      if (argv.maxCompletionTokens !== undefined)
        setNestedValue(bodyData, ['max_completion_tokens'], argv.maxCompletionTokens);
      if (argv.maxTokens !== undefined) setNestedValue(bodyData, ['max_tokens'], argv.maxTokens);
      if (argv.modalities !== undefined) setNestedValue(bodyData, ['modalities'], argv.modalities);
      if (argv.model !== undefined) setNestedValue(bodyData, ['model'], argv.model);
      if (argv.n !== undefined) setNestedValue(bodyData, ['n'], argv.n);
      if (argv.parallelToolCalls !== undefined)
        setNestedValue(bodyData, ['parallel_tool_calls'], argv.parallelToolCalls);
      if (argv.presencePenalty !== undefined) setNestedValue(bodyData, ['presence_penalty'], argv.presencePenalty);
      if (argv.prompt !== undefined) setNestedValue(bodyData, ['prompt'], argv.prompt);
      if (argv.reasoningEffort !== undefined) setNestedValue(bodyData, ['reasoning_effort'], argv.reasoningEffort);
      if (argv.seed !== undefined) setNestedValue(bodyData, ['seed'], argv.seed);
      if (argv.serviceTier !== undefined) setNestedValue(bodyData, ['service_tier'], argv.serviceTier);
      if (argv.store !== undefined) setNestedValue(bodyData, ['store'], argv.store);
      if (argv.stream !== undefined) setNestedValue(bodyData, ['stream'], argv.stream);
      if (argv.temperature !== undefined) setNestedValue(bodyData, ['temperature'], argv.temperature);
      if (argv.topLogprobs !== undefined) setNestedValue(bodyData, ['top_logprobs'], argv.topLogprobs);
      if (argv.topP !== undefined) setNestedValue(bodyData, ['top_p'], argv.topP);
      if (argv.user !== undefined) setNestedValue(bodyData, ['user'], argv.user);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/zai-org/glm-4.7-flash${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
