/**
 * domains-list command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface DomainsListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  search?: string;
  'allowed-delivery-mode'?: string;
  domain?: string;
  'active-delivery-mode'?: string;
  'integration-id'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DomainsListArgs> = {
  command: 'domains-list',
  describe: 'Lists, searches, and sorts an account’s email domains.',

  builder: (yargs: Argv): Argv<DomainsListArgs> => {
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
        choices: ['domain', 'created_at'] as const,
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
      .option('allowed-delivery-mode', {
        type: 'string',
        description: 'Filters response to domains with the provided delivery mode.',
        default: undefined,
      })
      .option('domain', {
        type: 'string',
        description: 'Filters results by the provided domains, allowing for multiple occurrences.',
        default: undefined,
      })
      .option('active-delivery-mode', {
        type: 'string',
        description: 'Filters response to domains with the currently active delivery mode.',
        default: undefined,
      })
      .option('integration-id', {
        type: 'string',
        description: 'Filters response to domains with the provided integration ID.',
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
      }) as Argv<DomainsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DomainsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.allowedDeliveryMode !== undefined) params['allowed_delivery_mode'] = argv.allowedDeliveryMode;
      if (argv.domain !== undefined) params['domain'] = argv.domain;
      if (argv.activeDeliveryMode !== undefined) params['active_delivery_mode'] = argv.activeDeliveryMode;
      if (argv.integrationId !== undefined) params['integration_id'] = argv.integrationId;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.settings.domainsList(
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
