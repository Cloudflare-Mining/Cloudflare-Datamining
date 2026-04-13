/**
 * timeseries-groups-get command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface TimeseriesGroupsGetArgs {
  dimension: string;
  'agg-interval'?: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  'limit-per-group'?: number;
  origin: string;
  metric: string;
  region?: string;
  normalization?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TimeseriesGroupsGetArgs> = {
  command: 'timeseries-groups-get <dimension>',
  describe: 'Retrieves the distribution of origin metrics grouped by the specified dimension over time.',

  builder: (yargs: Argv): Argv<TimeseriesGroupsGetArgs> => {
    return yargs
      .positional('dimension', {
        type: 'string',
        description: 'Specifies the origin attribute by which to group the results.',
        demandOption: true,
      })
      .option('agg-interval', {
        type: 'string',
        description:
          'Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        choices: ['15m', '1h', '1d', '1w'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Array of names used to label the series in the response.',
        default: undefined,
      })
      .option('date-range', {
        type: 'string',
        description:
          'Filters results by date range. For example, use \`7d\` and \`7dcontrol\` to compare this week with the previous week. Use this parameter or set specific start and end dates (\`dateStart\` and \`dateEnd\` parameters).',
        default: undefined,
      })
      .option('date-start', {
        type: 'string',
        description: 'Start of the date range.',
        default: undefined,
      })
      .option('date-end', {
        type: 'string',
        description: 'End of the date range (inclusive).',
        default: undefined,
      })
      .option('limit-per-group', {
        type: 'number',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
        default: undefined,
      })
      .option('origin', {
        type: 'string',
        description: 'Filters results by origin.',
      })
      .option('metric', {
        type: 'string',
        description: 'Specifies the metric to retrieve.',
        choices: [
          'CONNECTION_FAILURES',
          'REQUESTS',
          'RESPONSE_HEADER_RECEIVE_DURATION',
          'TCP_HANDSHAKE_DURATION',
          'TCP_RTT',
          'TLS_HANDSHAKE_DURATION',
        ] as const,
      })
      .option('region', {
        type: 'string',
        description: 'Filters results by origin region.',
        default: undefined,
      })
      .option('normalization', {
        type: 'string',
        description:
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        choices: ['PERCENTAGE', 'MIN0_MAX'] as const,
        default: undefined,
      })
      .option('format', {
        type: 'string',
        description: 'Format in which results will be returned.',
        choices: ['JSON', 'CSV'] as const,
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
      }) as Argv<TimeseriesGroupsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TimeseriesGroupsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dimension as string | undefined, 'dimension');

      const params: Record<string, unknown> = {};
      if (argv.aggInterval !== undefined) params['aggInterval'] = argv.aggInterval;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.limitPerGroup !== undefined) params['limitPerGroup'] = argv.limitPerGroup;
      if (argv.origin !== undefined) params['origin'] = argv.origin;
      if (argv.metric !== undefined) params['metric'] = argv.metric;
      if (argv.region !== undefined) params['region'] = argv.region;
      if (argv.normalization !== undefined) params['normalization'] = argv.normalization;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.origins.timeseriesGroupsGet(
        argv.dimension,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
