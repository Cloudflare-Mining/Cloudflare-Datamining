/**
 * update command
 * @generated from apis/zero-trust/schema.ts
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

interface UpdateArgs {
  'ai-context-analysis'?: boolean;
  ocr?: boolean;
  'payload-logging-public-key'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update',
  describe: 'Missing fields are reset to initial (unconfigured) values.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .option('ai-context-analysis', {
        type: 'boolean',
        description: 'Whether AI context analysis is enabled at the account level.',
        default: false,
      })
      .option('ocr', {
        type: 'boolean',
        description: 'Whether OCR is enabled at the account level.',
        default: false,
      })
      .option('payload-logging-public-key', {
        type: 'string',
        description:
          'Base64-encoded public key for encrypting payload logs.  - Set to a non-empty base64 string to enable payload logging with the given key. - Set to an empty string to disable payload logging. - Omit or set to null to leave unchanged (PATCH) or reset to disabled (PUT).',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust settings update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/settings`,
          pathParams: {},
          body: {
            aiContextAnalysis: argv.aiContextAnalysis,
            ocr: argv.ocr,
            payloadLoggingPublicKey: argv.payloadLoggingPublicKey,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/dlp/settings`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.aiContextAnalysis !== undefined)
        setNestedValue(bodyData, ['ai_context_analysis'], argv.aiContextAnalysis);
      if (argv.ocr !== undefined) setNestedValue(bodyData, ['ocr'], argv.ocr);
      if (argv.payloadLoggingPublicKey !== undefined)
        setNestedValue(bodyData, ['payload_logging', 'public_key'], argv.payloadLoggingPublicKey);
      const result = await client.put<unknown>(`/accounts/${accountId}/dlp/settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
