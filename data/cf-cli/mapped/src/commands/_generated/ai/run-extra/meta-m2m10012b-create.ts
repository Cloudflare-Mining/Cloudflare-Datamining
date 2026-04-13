/**
 * meta-m2m10012b-create command
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

interface MetaM2m10012bCreateArgs {
  'queue-request'?: string;
  tags?: string;
  'source-lang'?: string;
  'target-lang'?: string;
  text?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MetaM2m10012bCreateArgs> = {
  command: 'meta-m2m10012b-create',
  describe: 'Runs inference on the @cf/meta/m2m100-1.2b model.',

  builder: (yargs: Argv): Argv<MetaM2m10012bCreateArgs> => {
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
      .option('source-lang', {
        type: 'string',
        description: "The language code of the source text (e.g., 'en' for English). Defaults to 'en' if not specified",
        default: undefined,
      })
      .option('target-lang', {
        type: 'string',
        description: "The language code to translate the text into (e.g., 'es' for Spanish)",
        default: undefined,
      })
      .option('text', {
        type: 'string',
        description: 'The text to be translated',
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
      .implies('target-lang', ['text'])
      .implies('text', ['targetLang']) as Argv<MetaM2m10012bCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MetaM2m10012bCreateArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.queueRequest !== undefined) params['queueRequest'] = argv.queueRequest;
      if (argv.tags !== undefined) params['tags'] = argv.tags;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai run-extra meta-m2m10012b-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai/run/@cf/meta/m2m100-1.2b`,
          pathParams: {},
          body: { ...params, sourceLang: argv.sourceLang, targetLang: argv.targetLang, text: argv.text },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/m2m100-1.2b`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.sourceLang !== undefined) setNestedValue(bodyData, ['source_lang'], argv.sourceLang);
      if (argv.targetLang !== undefined) setNestedValue(bodyData, ['target_lang'], argv.targetLang);
      if (argv.text !== undefined) setNestedValue(bodyData, ['text'], argv.text);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai/run/@cf/meta/m2m100-1.2b${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
