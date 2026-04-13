/**
 * list command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  start?: string;
  end?: string;
  type?: string;
  'submission-id'?: string;
  'original-disposition'?: string;
  'requested-disposition'?: string;
  'outcome-disposition'?: string;
  status?: string;
  query?: string;
  'customer-status'?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'This endpoint returns information for submissions to made to reclassify emails.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('start', {
        type: 'string',
        description: 'The beginning of the search date range. Defaults to \`now - 30 days\` if not provided.',
        default: undefined,
      })
      .option('end', {
        type: 'string',
        description: 'The end of the search date range. Defaults to \`now\` if not provided.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Type',
        default: undefined,
      })
      .option('submission-id', {
        type: 'string',
        description: 'Submission ID',
        default: undefined,
      })
      .option('original-disposition', {
        type: 'string',
        description: 'Original disposition',
        default: undefined,
      })
      .option('requested-disposition', {
        type: 'string',
        description: 'Requested disposition',
        default: undefined,
      })
      .option('outcome-disposition', {
        type: 'string',
        description: 'Outcome disposition',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Status',
        default: undefined,
      })
      .option('query', {
        type: 'string',
        description: 'Query',
        default: undefined,
      })
      .option('customer-status', {
        type: 'string',
        description: 'Customer status',
        default: undefined,
      })
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
      if (argv.start !== undefined) params['start'] = argv.start;
      if (argv.end !== undefined) params['end'] = argv.end;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.submissionId !== undefined) params['submission_id'] = argv.submissionId;
      if (argv.originalDisposition !== undefined) params['original_disposition'] = argv.originalDisposition;
      if (argv.requestedDisposition !== undefined) params['requested_disposition'] = argv.requestedDisposition;
      if (argv.outcomeDisposition !== undefined) params['outcome_disposition'] = argv.outcomeDisposition;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.query !== undefined) params['query'] = argv.query;
      if (argv.customerStatus !== undefined) params['customer_status'] = argv.customerStatus;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.submissions.list(
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
