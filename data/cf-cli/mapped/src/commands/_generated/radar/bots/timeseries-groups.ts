/**
 * timeseries-groups command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface TimeseriesGroupsArgs {
  dimension: string;
  'agg-interval'?: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  asn?: string;
  location?: string;
  continent?: string;
  'limit-per-group'?: number;
  bot?: string;
  'bot-operator'?: string;
  'bot-category'?: string;
  'bot-kind'?: string;
  'bot-verification-status'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TimeseriesGroupsArgs> = {
  command: 'timeseries-groups <dimension>',
  describe: 'Retrieves the distribution of HTTP requests from bots, grouped by the specified dimension over time.',

  builder: (yargs: Argv): Argv<TimeseriesGroupsArgs> => {
    return yargs
      .positional('dimension', {
        type: 'string',
        description: 'Specifies the attribute by which to group the results.',
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
      .option('asn', {
        type: 'string',
        description:
          'Filters results by Autonomous System. Specify one or more Autonomous System Numbers (ASNs) as a comma-separated list. Prefix with \`-\` to exclude ASNs from results. For example, \`-174, 3356\` excludes results from AS174, but includes results from AS3356.',
        default: undefined,
      })
      .option('location', {
        type: 'string',
        description:
          'Filters results by location. Specify a comma-separated list of alpha-2 codes. Prefix with \`-\` to exclude locations from results. For example, \`-US,PT\` excludes results from the US, but includes results from PT.',
        default: undefined,
      })
      .option('continent', {
        type: 'string',
        description:
          'Filters results by continent. Specify a comma-separated list of alpha-2 codes. Prefix with \`-\` to exclude continents from results. For example, \`-EU,NA\` excludes results from EU, but includes results from NA.',
        default: undefined,
      })
      .option('limit-per-group', {
        type: 'number',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
        default: undefined,
      })
      .option('bot', {
        type: 'string',
        description: 'Filters results by bot name.',
        default: undefined,
      })
      .option('bot-operator', {
        type: 'string',
        description: 'Filters results by bot operator.',
        default: undefined,
      })
      .option('bot-category', {
        type: 'string',
        description: 'Filters results by bot category.',
        default: undefined,
      })
      .option('bot-kind', {
        type: 'string',
        description: 'Filters results by bot kind.',
        default: undefined,
      })
      .option('bot-verification-status', {
        type: 'string',
        description: 'Filters results by bot verification status (Verified vs. Unverified).',
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
      }) as Argv<TimeseriesGroupsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TimeseriesGroupsArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dimension as string | undefined, 'dimension');

      const params: Record<string, unknown> = {};
      if (argv.aggInterval !== undefined) params['aggInterval'] = argv.aggInterval;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.continent !== undefined) params['continent'] = argv.continent;
      if (argv.limitPerGroup !== undefined) params['limitPerGroup'] = argv.limitPerGroup;
      if (argv.bot !== undefined) params['bot'] = argv.bot;
      if (argv.botOperator !== undefined) params['botOperator'] = argv.botOperator;
      if (argv.botCategory !== undefined) params['botCategory'] = argv.botCategory;
      if (argv.botKind !== undefined) params['botKind'] = argv.botKind;
      if (argv.botVerificationStatus !== undefined) params['botVerificationStatus'] = argv.botVerificationStatus;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bots.timeseriesGroups(
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
