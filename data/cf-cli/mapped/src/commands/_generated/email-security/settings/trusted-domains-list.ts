/**
 * trusted-domains-list command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TrustedDomainsListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  search?: string;
  'is-recent'?: boolean;
  'is-similarity'?: boolean;
  pattern?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TrustedDomainsListArgs> = {
  command: 'trusted-domains-list',
  describe: 'Lists, searches, and sorts an account’s trusted email domains.',

  builder: (yargs: Argv): Argv<TrustedDomainsListArgs> => {
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
      .option('is-recent', {
        type: 'boolean',
        description: 'Is recent',
        default: false,
      })
      .option('is-similarity', {
        type: 'boolean',
        description: 'Is similarity',
        default: false,
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
      }) as Argv<TrustedDomainsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TrustedDomainsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.isRecent !== undefined) params['is_recent'] = argv.isRecent;
      if (argv.isSimilarity !== undefined) params['is_similarity'] = argv.isSimilarity;
      if (argv.pattern !== undefined) params['pattern'] = argv.pattern;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.settings.trustedDomainsList(
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
