/**
 * timeseries-groups-v2 command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface TimeseriesGroupsV2Args {
  dimension: string;
  'agg-interval'?: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  asn?: string;
  location?: string;
  continent?: string;
  'cache-hit'?: string;
  nodata?: string;
  protocol?: string;
  'query-type'?: string;
  'response-code'?: string;
  'response-ttl'?: string;
  dnssec?: string;
  'dnssec-aware'?: string;
  'dnssec-e2e'?: string;
  'ip-version'?: string;
  'limit-per-group'?: number;
  'matching-answer'?: string;
  tld?: string;
  normalization?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TimeseriesGroupsV2Args> = {
  command: 'timeseries-groups-v2 <dimension>',
  describe: 'Retrieves the distribution of DNS queries grouped by dimension over time.',

  builder: (yargs: Argv): Argv<TimeseriesGroupsV2Args> => {
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
      .option('cache-hit', {
        type: 'string',
        description: 'Filters results based on cache status.',
        default: undefined,
      })
      .option('nodata', {
        type: 'string',
        description: 'Specifies whether the response includes empty DNS responses (NODATA).',
        default: undefined,
      })
      .option('protocol', {
        type: 'string',
        description: 'Filters results by DNS transport protocol.',
        default: undefined,
      })
      .option('query-type', {
        type: 'string',
        description: 'Filters results by DNS query type.',
        default: undefined,
      })
      .option('response-code', {
        type: 'string',
        description: 'Filters results by DNS response code.',
        default: undefined,
      })
      .option('response-ttl', {
        type: 'string',
        description: 'Filters results by DNS response TTL.',
        default: undefined,
      })
      .option('dnssec', {
        type: 'string',
        description: 'Filters results based on DNSSEC (DNS Security Extensions) support.',
        default: undefined,
      })
      .option('dnssec-aware', {
        type: 'string',
        description: 'Filters results based on DNSSEC (DNS Security Extensions) client awareness.',
        default: undefined,
      })
      .option('dnssec-e2e', {
        type: 'string',
        description: 'Filters results based on DNSSEC-validated answers by end-to-end security status.',
        default: undefined,
      })
      .option('ip-version', {
        type: 'string',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        default: undefined,
      })
      .option('limit-per-group', {
        type: 'number',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
        default: undefined,
      })
      .option('matching-answer', {
        type: 'string',
        description: 'Filters results based on whether the queries have a matching answer.',
        default: undefined,
      })
      .option('tld', {
        type: 'string',
        description: 'Filters results by top-level domain.',
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
      }) as Argv<TimeseriesGroupsV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<TimeseriesGroupsV2Args>): Promise<void> => {
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
      if (argv.cacheHit !== undefined) params['cacheHit'] = argv.cacheHit;
      if (argv.nodata !== undefined) params['nodata'] = argv.nodata;
      if (argv.protocol !== undefined) params['protocol'] = argv.protocol;
      if (argv.queryType !== undefined) params['queryType'] = argv.queryType;
      if (argv.responseCode !== undefined) params['responseCode'] = argv.responseCode;
      if (argv.responseTtl !== undefined) params['responseTtl'] = argv.responseTtl;
      if (argv.dnssec !== undefined) params['dnssec'] = argv.dnssec;
      if (argv.dnssecAware !== undefined) params['dnssecAware'] = argv.dnssecAware;
      if (argv.dnssecE2e !== undefined) params['dnssecE2e'] = argv.dnssecE2e;
      if (argv.ipVersion !== undefined) params['ipVersion'] = argv.ipVersion;
      if (argv.limitPerGroup !== undefined) params['limitPerGroup'] = argv.limitPerGroup;
      if (argv.matchingAnswer !== undefined) params['matchingAnswer'] = argv.matchingAnswer;
      if (argv.tld !== undefined) params['tld'] = argv.tld;
      if (argv.normalization !== undefined) params['normalization'] = argv.normalization;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.dns.timeseriesGroupsV2(
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
