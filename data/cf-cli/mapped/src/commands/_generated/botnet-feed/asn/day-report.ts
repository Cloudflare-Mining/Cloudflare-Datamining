/**
 * day-report command
 * @generated from apis/botnet-feed/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DayReportArgs {
  asnId: string;
  date?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DayReportArgs> = {
  command: 'day-report <asnId>',
  describe:
    'Gets all the data the botnet tracking database has for a given ASN registered to user account for given date. If no date is given, it will return results for the previous day.',

  builder: (yargs: Argv): Argv<DayReportArgs> => {
    return yargs
      .positional('asnId', {
        type: 'string',
        description: 'Asn ID',
        demandOption: true,
      })
      .option('date', {
        type: 'string',
        description: 'Date',
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
      }) as Argv<DayReportArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DayReportArgs>): Promise<void> => {
    try {
      validateResourceId(argv.asnId as string | undefined, 'asnId');

      const params: Record<string, unknown> = {};
      if (argv.date !== undefined) params['date'] = argv.date;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.botnetFeed.asn.dayReport(
        accountId,
        argv.asnId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
