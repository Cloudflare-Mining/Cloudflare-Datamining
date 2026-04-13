/**
 * get-org-analytics command
 * @generated from apis/realtime-kit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetOrgAnalyticsArgs {
  appId: string;
  'start-date'?: string;
  'end-date'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetOrgAnalyticsArgs> = {
  command: 'get-org-analytics <appId>',
  describe:
    'Returns day-wise session and recording analytics data of an App for the specified time range start_date to end_date. If start_date and end_date are not provided, the default time range is set from 30 days ago to the current date.',

  builder: (yargs: Argv): Argv<GetOrgAnalyticsArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'The app identifier tag.',
        demandOption: true,
      })
      .option('start-date', {
        type: 'string',
        description: 'start date in YYYY-MM-DD format',
        default: undefined,
      })
      .option('end-date', {
        type: 'string',
        description: 'end date in YYYY-MM-DD format',
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
      }) as Argv<GetOrgAnalyticsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetOrgAnalyticsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      const params: Record<string, unknown> = {};
      if (argv.startDate !== undefined) params['start_date'] = argv.startDate;
      if (argv.endDate !== undefined) params['end_date'] = argv.endDate;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.realtimeKit.analytics.getOrgAnalytics(
        accountId,
        argv.appId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
