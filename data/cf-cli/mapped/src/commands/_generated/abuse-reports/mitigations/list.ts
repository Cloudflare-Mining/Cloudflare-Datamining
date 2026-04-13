/**
 * list command
 * @generated from apis/abuse-reports/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  reportId: string;
  page?: number;
  'per-page'?: number;
  sort?: string;
  type?: string;
  'effective-before'?: string;
  'effective-after'?: string;
  status?: string;
  'entity-type'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <reportId>',
  describe: 'List mitigations done to remediate the abuse report.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('reportId', {
        type: 'string',
        description: 'Abuse Report ID',
        demandOption: true,
      })
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
        description: 'A property to sort by, followed by the order',
        choices: [
          'type,asc',
          'type,desc',
          'effective_date,asc',
          'effective_date,desc',
          'status,asc',
          'status,desc',
          'entity_type,asc',
          'entity_type,desc',
        ] as const,
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description:
          'Filter by the type of mitigation. This filter parameter can be specified multiple times to include multiple types of mitigations in the result set, e.g. ?type=rate_limit_cache&type=legal_block.',
        choices: [
          'legal_block',
          'misleading_interstitial',
          'phishing_interstitial',
          'network_block',
          'rate_limit_cache',
          'account_suspend',
          'redirect_video_stream',
        ] as const,
        default: undefined,
      })
      .option('effective-before', {
        type: 'string',
        description: 'Returns mitigations that were dispatched before the given date',
        default: undefined,
      })
      .option('effective-after', {
        type: 'string',
        description: 'Returns mitigation that were dispatched after the given date',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Filter by the status of the mitigation.',
        choices: ['pending', 'active', 'in_review', 'cancelled', 'removed'] as const,
        default: undefined,
      })
      .option('entity-type', {
        type: 'string',
        description: 'Filter by the type of entity the mitigation impacts.',
        choices: ['url_pattern', 'account', 'zone'] as const,
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
      validateResourceId(argv.reportId as string | undefined, 'reportId');

      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sort !== undefined) params['sort'] = argv.sort;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.effectiveBefore !== undefined) params['effective_before'] = argv.effectiveBefore;
      if (argv.effectiveAfter !== undefined) params['effective_after'] = argv.effectiveAfter;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.entityType !== undefined) params['entity_type'] = argv.entityType;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.abuseReports.mitigations.list(
        accountId,
        argv.reportId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
