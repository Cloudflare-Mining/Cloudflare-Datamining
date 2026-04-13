/**
 * list command
 * @generated from apis/abuse-reports/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  page?: number;
  'per-page'?: number;
  sort?: string;
  domain?: string;
  'created-before'?: string;
  'created-after'?: string;
  status?: string;
  type?: string;
  'mitigation-status'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List the abuse reports for a given account',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Where in pagination to start listing abuse reports',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'How many abuse reports per page to list',
        default: undefined,
      })
      .option('sort', {
        type: 'string',
        description: 'A property to sort by, followed by the order (id, cdate, domain, type, status)',
        default: undefined,
      })
      .option('domain', {
        type: 'string',
        description: 'Filter by domain name related to the abuse report',
        default: undefined,
      })
      .option('created-before', {
        type: 'string',
        description: 'Returns reports created before the specified date',
        default: undefined,
      })
      .option('created-after', {
        type: 'string',
        description: 'Returns reports created after the specified date',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Filter by the status of the report.',
        choices: ['accepted', 'in_review'] as const,
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Filter by the type of the report.',
        choices: ['PHISH', 'GEN', 'THREAT', 'DMCA', 'EMER', 'TM', 'REG_WHO', 'NCSEI', 'NETWORK'] as const,
        default: undefined,
      })
      .option('mitigation-status', {
        type: 'string',
        description: 'Filter reports that have any mitigations in the given status.',
        choices: ['pending', 'active', 'in_review', 'cancelled', 'removed'] as const,
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sort !== undefined) params['sort'] = argv.sort;
      if (argv.domain !== undefined) params['domain'] = argv.domain;
      if (argv.createdBefore !== undefined) params['created_before'] = argv.createdBefore;
      if (argv.createdAfter !== undefined) params['created_after'] = argv.createdAfter;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.mitigationStatus !== undefined) params['mitigation_status'] = argv.mitigationStatus;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.abuseReports.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
