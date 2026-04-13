/**
 * block-senders-edit command
 * @generated from apis/email-security/schema.ts
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

interface BlockSendersEditArgs {
  patternId: string;
  comments?: string;
  'is-regex'?: boolean;
  pattern?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, BlockSendersEditArgs> = {
  command: 'block-senders-edit <patternId>',
  describe: 'Modifies a blocked sender entry, updating its pattern or block reason.',

  builder: (yargs: Argv): Argv<BlockSendersEditArgs> => {
    return yargs
      .positional('patternId', {
        type: 'string',
        description: 'The unique identifier for the allow policy.',
        demandOption: true,
      })
      .option('comments', {
        type: 'string',
        description: 'The comments field',
        default: undefined,
      })
      .option('is-regex', {
        type: 'boolean',
        description: 'The is_regex field',
        default: false,
      })
      .option('pattern', {
        type: 'string',
        description: 'The pattern field',
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
      }) as Argv<BlockSendersEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BlockSendersEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.patternId as string | undefined, 'patternId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings block-senders-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/block_senders/${argv.patternId ?? '<patternId>'}`,
          pathParams: { patternId: String(argv.patternId ?? '') },
          body: { comments: argv.comments, isRegex: argv.isRegex, pattern: argv.pattern },
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/email-security/settings/block_senders/${argv.patternId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comments !== undefined) setNestedValue(bodyData, ['comments'], argv.comments);
      if (argv.isRegex !== undefined) setNestedValue(bodyData, ['is_regex'], argv.isRegex);
      if (argv.pattern !== undefined) setNestedValue(bodyData, ['pattern'], argv.pattern);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/email-security/settings/block_senders/${argv.patternId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
