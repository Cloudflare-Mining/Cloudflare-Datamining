/**
 * reports-list command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ReportsListArgs {
  'from-date'?: string;
  'to-date'?: string;
  start?: string;
  end?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ReportsListArgs> = {
  command: 'reports-list',
  describe: 'Retrieves \`PhishGuard\` reports showing phishing attempts and suspicious email patterns detected.',

  builder: (yargs: Argv): Argv<ReportsListArgs> => {
    return yargs
      .option('from-date', {
        type: 'string',
        description: 'From date',
        default: undefined,
      })
      .option('to-date', {
        type: 'string',
        description: 'To date',
        default: undefined,
      })
      .option('start', {
        type: 'string',
        description: 'The beginning of the search date range (RFC3339 format).',
        default: undefined,
      })
      .option('end', {
        type: 'string',
        description: 'The end of the search date range (RFC3339 format).',
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
      }) as Argv<ReportsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ReportsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.fromDate !== undefined) params['from_date'] = argv.fromDate;
      if (argv.toDate !== undefined) params['to_date'] = argv.toDate;
      if (argv.start !== undefined) params['start'] = argv.start;
      if (argv.end !== undefined) params['end'] = argv.end;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.phishguard.reportsList(
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
