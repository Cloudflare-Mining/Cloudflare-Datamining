/**
 * meta-llama-guard38b-create command
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

interface MetaLlamaGuard38bCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'max-tokens'?: number;
  'response-format-type'?: string;
  temperature?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MetaLlamaGuard38bCreateArgs> = {
  command: 'meta-llama-guard38b-create',
  describe: 'Runs inference on the @cf/meta/llama-guard-3-8b model.',

  builder: (yargs: Argv): Argv<MetaLlamaGuard38bCreateArgs> => {
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
      .option('max-tokens', {
        type: 'number',
        description: 'The maximum number of tokens to generate in the response.',
        default: undefined,
      })
      .option('response-format-type', {
        type: 'string',
        description: 'Set to json_object to process and output generated text as JSON.',
        default: undefined,
      })
      .option('temperature', {
        type: 'number',
        description: 'Controls the randomness of the output; higher values produce more random results.',
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
      }) as Argv<MetaLlamaGuard38bCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MetaLlamaGuard38bCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra meta-llama-guard38b-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/meta/llama-guard-3-8b`,
          pathParams: {},
          body: {
            ...params,
            maxTokens: argv.maxTokens,
            responseFormatType: argv.responseFormatType,
            temperature: argv.temperature,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-guard-3-8b`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.maxTokens !== undefined) setNestedValue(bodyData, ['max_tokens'], argv.maxTokens);
      if (argv.responseFormatType !== undefined)
        setNestedValue(bodyData, ['response_format', 'type'], argv.responseFormatType);
      if (argv.temperature !== undefined) setNestedValue(bodyData, ['temperature'], argv.temperature);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/meta/llama-guard-3-8b${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
