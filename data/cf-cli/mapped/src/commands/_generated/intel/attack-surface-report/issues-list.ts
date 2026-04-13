/**
 * issues-list command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface IssuesListArgs {
  dismissed?: string;
  'issue-class'?: string;
  'issue-type'?: string;
  product?: string;
  severity?: string;
  subject?: string;
  page?: string;
  'per-page'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IssuesListArgs> = {
  command: 'issues-list',
  describe: 'Lists all Security Center issues for the account, showing active security problems requiring attention.',

  builder: (yargs: Argv): Argv<IssuesListArgs> => {
    return yargs
      .option('dismissed', {
        type: 'string',
        description: 'Dismissed',
        default: undefined,
      })
      .option('issue-class', {
        type: 'string',
        description: 'Issue class',
        default: undefined,
      })
      .option('issue-type', {
        type: 'string',
        description: 'Issue type',
        default: undefined,
      })
      .option('product', {
        type: 'string',
        description: 'Product',
        default: undefined,
      })
      .option('severity', {
        type: 'string',
        description: 'Severity',
        default: undefined,
      })
      .option('subject', {
        type: 'string',
        description: 'Subject',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Page',
        default: undefined,
      })
      .option('per-page', {
        type: 'string',
        description: 'Per page',
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
      }) as Argv<IssuesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IssuesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.dismissed !== undefined) params['dismissed'] = argv.dismissed;
      if (argv.issueClass !== undefined) params['issue_class'] = argv.issueClass;
      if (argv.issueType !== undefined) params['issue_type'] = argv.issueType;
      if (argv.product !== undefined) params['product'] = argv.product;
      if (argv.severity !== undefined) params['severity'] = argv.severity;
      if (argv.subject !== undefined) params['subject'] = argv.subject;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.intel.attacksurfacereport.issuesList(
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
