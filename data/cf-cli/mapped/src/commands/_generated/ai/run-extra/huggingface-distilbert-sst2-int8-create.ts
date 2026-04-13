/**
 * huggingface-distilbert-sst2-int8-create command
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

interface HuggingfaceDistilbertSst2Int8CreateArgs {
  'queue-request'?: string;
  tags?: string;
  text: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, HuggingfaceDistilbertSst2Int8CreateArgs> = {
  command: 'huggingface-distilbert-sst2-int8-create',
  describe: 'Runs inference on the @cf/huggingface/distilbert-sst-2-int8 model.',

  builder: (yargs: Argv): Argv<HuggingfaceDistilbertSst2Int8CreateArgs> => {
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
      .option('text', {
        type: 'string',
        description: 'The text that you want to classify',
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
      }) as Argv<HuggingfaceDistilbertSst2Int8CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HuggingfaceDistilbertSst2Int8CreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra huggingface-distilbert-sst2-int8-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/huggingface/distilbert-sst-2-int8`,
          pathParams: {},
          body: { ...params, text: argv.text },
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/ai/run/@cf/huggingface/distilbert-sst-2-int8`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.text !== undefined) setNestedValue(bodyData, ['text'], argv.text);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/huggingface/distilbert-sst-2-int8${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
