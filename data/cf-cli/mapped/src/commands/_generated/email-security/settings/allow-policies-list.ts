/**
 * allow-policies-list command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface AllowPoliciesListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  search?: string;
  'is-sender'?: boolean;
  'is-trusted-sender'?: boolean;
  'is-recipient'?: boolean;
  'is-exempt-recipient'?: boolean;
  'is-spoof'?: boolean;
  'is-acceptable-sender'?: boolean;
  'verify-sender'?: boolean;
  'pattern-type'?: string;
  pattern?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AllowPoliciesListArgs> = {
  command: 'allow-policies-list',
  describe: 'Lists, searches, and sorts an account’s email allow policies.',

  builder: (yargs: Argv): Argv<AllowPoliciesListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'The page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The number of results per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'The field to sort by.',
        choices: ['pattern', 'created_at'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The sorting direction.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description:
          'Allows searching in multiple properties of a record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future.',
        default: undefined,
      })
      .option('is-sender', {
        type: 'boolean',
        description: 'Is sender',
        default: false,
      })
      .option('is-trusted-sender', {
        type: 'boolean',
        description: 'Is trusted sender',
        default: false,
      })
      .option('is-recipient', {
        type: 'boolean',
        description: 'Is recipient',
        default: false,
      })
      .option('is-exempt-recipient', {
        type: 'boolean',
        description: 'Is exempt recipient',
        default: false,
      })
      .option('is-spoof', {
        type: 'boolean',
        description: 'Is spoof',
        default: false,
      })
      .option('is-acceptable-sender', {
        type: 'boolean',
        description: 'Is acceptable sender',
        default: false,
      })
      .option('verify-sender', {
        type: 'boolean',
        description: 'Verify sender',
        default: false,
      })
      .option('pattern-type', {
        type: 'string',
        description: 'Pattern type',
        default: undefined,
      })
      .option('pattern', {
        type: 'string',
        description: 'Pattern',
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
      }) as Argv<AllowPoliciesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AllowPoliciesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.isSender !== undefined) params['is_sender'] = argv.isSender;
      if (argv.isTrustedSender !== undefined) params['is_trusted_sender'] = argv.isTrustedSender;
      if (argv.isRecipient !== undefined) params['is_recipient'] = argv.isRecipient;
      if (argv.isExemptRecipient !== undefined) params['is_exempt_recipient'] = argv.isExemptRecipient;
      if (argv.isSpoof !== undefined) params['is_spoof'] = argv.isSpoof;
      if (argv.isAcceptableSender !== undefined) params['is_acceptable_sender'] = argv.isAcceptableSender;
      if (argv.verifySender !== undefined) params['verify_sender'] = argv.verifySender;
      if (argv.patternType !== undefined) params['pattern_type'] = argv.patternType;
      if (argv.pattern !== undefined) params['pattern'] = argv.pattern;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.settings.allowPoliciesList(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
