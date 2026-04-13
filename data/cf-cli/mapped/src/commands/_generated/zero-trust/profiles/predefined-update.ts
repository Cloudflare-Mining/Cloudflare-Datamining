/**
 * predefined-update command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface PredefinedUpdateArgs {
  profileId: string;
  'ai-context-enabled'?: boolean;
  'allowed-match-count'?: number;
  'confidence-threshold'?: string;
  'context-awareness-enabled': boolean;
  'context-awareness-skip-files': boolean;
  'ocr-enabled'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PredefinedUpdateArgs> = {
  command: 'predefined-update <profileId>',
  describe: 'Updates a DLP predefined profile. Only supports enabling/disabling entries.',

  builder: (yargs: Argv): Argv<PredefinedUpdateArgs> => {
    return yargs
      .positional('profileId', {
        type: 'string',
        description: 'Profile ID',
        demandOption: true,
      })
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
      }) as Argv<PredefinedUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PredefinedUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.profileId as string | undefined, 'profileId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust profiles predefined-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/profiles/predefined/${argv.profileId ?? '<profileId>'}`,
          pathParams: { profileId: String(argv.profileId ?? '') },
          body: {
            aiContextEnabled: argv.aiContextEnabled,
            allowedMatchCount: argv.allowedMatchCount,
            confidenceThreshold: argv.confidenceThreshold,
            contextAwarenessEnabled: argv.contextAwarenessEnabled,
            contextAwarenessSkipFiles: argv.contextAwarenessSkipFiles,
            ocrEnabled: argv.ocrEnabled,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${argv.profileId}`, {
          body: bodyData,
        });
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
      const result = await client.put<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${argv.profileId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
