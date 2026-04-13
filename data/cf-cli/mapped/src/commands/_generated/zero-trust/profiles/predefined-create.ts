/**
 * predefined-create command
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

interface PredefinedCreateArgs {
  'ai-context-enabled'?: boolean;
  'allowed-match-count'?: number;
  'confidence-threshold'?: string;
  'context-awareness-enabled': boolean;
  'context-awareness-skip-files': boolean;
  'ocr-enabled'?: boolean;
  'profile-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PredefinedCreateArgs> = {
  command: 'predefined-create',
  describe: 'Creates a DLP predefined profile. Only supports enabling/disabling entries.',

  builder: (yargs: Argv): Argv<PredefinedCreateArgs> => {
    return yargs
      .option('ai-context-enabled', {
        type: 'boolean',
        description: 'The ai_context_enabled field',
        default: false,
      })
      .option('allowed-match-count', {
        type: 'number',
        description: 'The allowed_match_count field',
        default: undefined,
      })
      .option('confidence-threshold', {
        type: 'string',
        description: 'The confidence_threshold field',
        default: undefined,
      })
      .option('context-awareness-enabled', {
        type: 'boolean',
        description: 'If true, scan the context of predefined entries to only return matches surrounded by keywords.',
      })
      .option('context-awareness-skip-files', {
        type: 'boolean',
        description: 'If the content type is a file, skip context analysis and return all matches.',
      })
      .option('ocr-enabled', {
        type: 'boolean',
        description: 'The ocr_enabled field',
        default: false,
      })
      .option('profile-id', {
        type: 'string',
        description: 'The profile_id field',
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
      }) as Argv<PredefinedCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PredefinedCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust profiles predefined-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/profiles/predefined`,
          pathParams: {},
          body: {
            aiContextEnabled: argv.aiContextEnabled,
            allowedMatchCount: argv.allowedMatchCount,
            confidenceThreshold: argv.confidenceThreshold,
            contextAwarenessEnabled: argv.contextAwarenessEnabled,
            contextAwarenessSkipFiles: argv.contextAwarenessSkipFiles,
            ocrEnabled: argv.ocrEnabled,
            profileId: argv.profileId,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dlp/profiles/predefined`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.aiContextEnabled !== undefined) setNestedValue(bodyData, ['ai_context_enabled'], argv.aiContextEnabled);
      if (argv.allowedMatchCount !== undefined)
        setNestedValue(bodyData, ['allowed_match_count'], argv.allowedMatchCount);
      if (argv.confidenceThreshold !== undefined)
        setNestedValue(bodyData, ['confidence_threshold'], argv.confidenceThreshold);
      if (argv.contextAwarenessEnabled !== undefined)
        setNestedValue(bodyData, ['context_awareness', 'enabled'], argv.contextAwarenessEnabled);
      if (argv.contextAwarenessSkipFiles !== undefined)
        setNestedValue(bodyData, ['context_awareness', 'skip', 'files'], argv.contextAwarenessSkipFiles);
      if (argv.ocrEnabled !== undefined) setNestedValue(bodyData, ['ocr_enabled'], argv.ocrEnabled);
      if (argv.profileId !== undefined) setNestedValue(bodyData, ['profile_id'], argv.profileId);
      const result = await client.post<unknown>(`/accounts/${accountId}/dlp/profiles/predefined`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
