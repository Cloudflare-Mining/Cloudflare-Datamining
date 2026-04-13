/**
 * get command
 * @generated from apis/analytics/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  zoneIdentifier: string;
  until?: string;
  since?: string;
  continuous?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <zoneIdentifier>',
  describe:
    'The dashboard view provides both totals and timeseries data for the given zone and time period across the entire Cloudflare network.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('zoneIdentifier', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('until', {
        type: 'string',
        description:
          'The (exclusive) end of the requested time frame. This value can be a negative integer representing the number of minutes in the past relative to time the request is made, or can be an absolute timestamp that conforms to RFC 3339. If omitted, the time of the request is used.',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description:
          'The (inclusive) beginning of the requested time frame. This value can be a negative integer representing the number of minutes in the past relative to time the request is made, or can be an absolute timestamp that conforms to RFC 3339. At this point in time, it cannot exceed a time in the past greater than one year.  Ranges that the Cloudflare web application provides will provide the following period length for each point: - Last 60 minutes (from -59 to -1): 1 minute resolution - Last 7 hours (from -419 to -60): 15 minutes resolution - Last 15 hours (from -899 to -420): 30 minutes resolution - Last 72 hours (from -4320 to -900): 1 hour resolution - Older than 3 days (-525600 to -4320): 1 day resolution.',
        default: undefined,
      })
      .option('continuous', {
        type: 'boolean',
        description:
          'When set to true, the API will move the requested time window backward, until it finds a region with completely aggregated data.  The API response _may not represent the requested time window_.',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.zoneIdentifier as string | undefined, 'zoneIdentifier');

      const params: Record<string, unknown> = {};
      if (argv.until !== undefined) params['until'] = argv.until;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.continuous !== undefined) params['continuous'] = argv.continuous;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.analytics.dashboard.get(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
