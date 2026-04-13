/**
 * layer7-timeseries-groups-industry command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface Layer7TimeseriesGroupsIndustryArgs {
  'agg-interval'?: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  asn?: string;
  location?: string;
  continent?: string;
  'ip-version'?: string;
  'http-version'?: string;
  'http-method'?: string;
  'mitigation-product'?: string;
  normalization?: string;
  'limit-per-group'?: number;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, Layer7TimeseriesGroupsIndustryArgs> = {
  command: 'layer7-timeseries-groups-industry',
  describe: 'Retrieves the distribution of layer 7 attacks by targeted industry over time.',

  builder: (yargs: Argv): Argv<Layer7TimeseriesGroupsIndustryArgs> => {
    return yargs
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
      .option('ip-version', {
        type: 'string',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        default: undefined,
      })
      .option('http-version', {
        type: 'string',
        description: 'Filters results by HTTP version.',
        default: undefined,
      })
      .option('http-method', {
        type: 'string',
        description: 'Filters results by HTTP method.',
        default: undefined,
      })
      .option('mitigation-product', {
        type: 'string',
        description: 'Filters the results by layer 7 mitigation product.',
        default: undefined,
      })
      .option('normalization', {
        type: 'string',
        description:
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        choices: ['PERCENTAGE', 'MIN0_MAX'] as const,
        default: undefined,
      })
      .option('limit-per-group', {
        type: 'number',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
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
      }) as Argv<Layer7TimeseriesGroupsIndustryArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<Layer7TimeseriesGroupsIndustryArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.aggInterval !== undefined) params['aggInterval'] = argv.aggInterval;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.continent !== undefined) params['continent'] = argv.continent;
      if (argv.ipVersion !== undefined) params['ipVersion'] = argv.ipVersion;
      if (argv.httpVersion !== undefined) params['httpVersion'] = argv.httpVersion;
      if (argv.httpMethod !== undefined) params['httpMethod'] = argv.httpMethod;
      if (argv.mitigationProduct !== undefined) params['mitigationProduct'] = argv.mitigationProduct;
      if (argv.normalization !== undefined) params['normalization'] = argv.normalization;
      if (argv.limitPerGroup !== undefined) params['limitPerGroup'] = argv.limitPerGroup;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.attacks.layer7TimeseriesGroupsIndustry(
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
