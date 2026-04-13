/**
 * issues-type command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface IssuesTypeArgs {
  dismissed?: string;
  'issue-class'?: string;
  'issue-type'?: string;
  product?: string;
  severity?: string;
  subject?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, IssuesTypeArgs> = {
  command: 'issues-type',
  describe: 'Retrieves Security Center issue counts aggregated by issue type.',

  builder: (yargs: Argv): Argv<IssuesTypeArgs> => {
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
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<IssuesTypeArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IssuesTypeArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.dismissed !== undefined) params['dismissed'] = argv.dismissed;
      if (argv.issueClass !== undefined) params['issue_class'] = argv.issueClass;
      if (argv.issueType !== undefined) params['issue_type'] = argv.issueType;
      if (argv.product !== undefined) params['product'] = argv.product;
      if (argv.severity !== undefined) params['severity'] = argv.severity;
      if (argv.subject !== undefined) params['subject'] = argv.subject;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.intel.attacksurfacereport.issuesType(
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
