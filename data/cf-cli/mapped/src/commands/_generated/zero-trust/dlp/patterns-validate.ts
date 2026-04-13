/**
 * patterns-validate command
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

interface PatternsValidateArgs {
  'max-match-bytes'?: number;
  regex: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PatternsValidateArgs> = {
  command: 'patterns-validate',
  describe:
    'Validates whether this pattern is a valid regular expression. Rejects it if the regular expression is too complex or can match an unbounded-length string. The regex will be rejected if it uses \`*\` or \`+\`. Bound the maximum number of characters that can be matched using a range, e.g. \`{1,100}\`.',

  builder: (yargs: Argv): Argv<PatternsValidateArgs> => {
    return yargs
      .option('max-match-bytes', {
        type: 'number',
        description:
          'Maximum number of bytes that the regular expression can match.  If this is \`null\` then there is no limit on the length. Patterns can use \`*\` and \`+\`. Otherwise repeats should use a range \`{m,n}\` to restrict patterns to the length. If this field is missing, then a default length limit is used.  Note that the length is specified in bytes. Since regular expressions use UTF-8 the pattern \`.\` can match up to 4 bytes. Hence \`.{1,256}\` has a maximum length of 1024 bytes.',
        default: undefined,
      })
      .option('regex', {
        type: 'string',
        description: 'The regex field',
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
      }) as Argv<PatternsValidateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PatternsValidateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp patterns-validate',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/patterns/validate`,
          pathParams: {},
          body: { maxMatchBytes: argv.maxMatchBytes, regex: argv.regex },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/dlp/patterns/validate`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.maxMatchBytes !== undefined) setNestedValue(bodyData, ['max_match_bytes'], argv.maxMatchBytes);
      if (argv.regex !== undefined) setNestedValue(bodyData, ['regex'], argv.regex);
      const result = await client.post<unknown>(`/accounts/${accountId}/dlp/patterns/validate`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
