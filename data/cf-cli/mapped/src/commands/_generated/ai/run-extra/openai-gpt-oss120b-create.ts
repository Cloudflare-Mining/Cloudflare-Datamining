/**
 * openai-gpt-oss120b-create command
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

interface OpenaiGptOss120bCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'reasoning-effort'?: string;
  'reasoning-summary'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, OpenaiGptOss120bCreateArgs> = {
  command: 'openai-gpt-oss120b-create',
  describe: 'Runs inference on the @cf/openai/gpt-oss-120b model.',

  builder: (yargs: Argv): Argv<OpenaiGptOss120bCreateArgs> => {
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
      .option('reasoning-effort', {
        type: 'string',
        description:
          'Constrains effort on reasoning for reasoning models. Currently supported values are low, medium, and high. Reducing reasoning effort can result in faster responses and fewer tokens used on reasoning in a response.',
        choices: ['low', 'medium', 'high'] as const,
        default: undefined,
      })
      .option('reasoning-summary', {
        type: 'string',
        description:
          "A summary of the reasoning performed by the model. This can be useful for debugging and understanding the model's reasoning process. One of auto, concise, or detailed.",
        choices: ['auto', 'concise', 'detailed'] as const,
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
      .choices('reasoning-summary', ['auto', 'concise', 'detailed'] as const) as Argv<OpenaiGptOss120bCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OpenaiGptOss120bCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra openai-gpt-oss120b-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/openai/gpt-oss-120b`,
          pathParams: {},
          body: { ...params, reasoningEffort: argv.reasoningEffort, reasoningSummary: argv.reasoningSummary },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/gpt-oss-120b`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.reasoningEffort !== undefined) setNestedValue(bodyData, ['reasoning', 'effort'], argv.reasoningEffort);
      if (argv.reasoningSummary !== undefined)
        setNestedValue(bodyData, ['reasoning', 'summary'], argv.reasoningSummary);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/openai/gpt-oss-120b${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
