/**
 * top-browser command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TopBrowserArgs {
  limit?: number;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  asn?: string;
  location?: string;
  continent?: string;
  'geo-id'?: string;
  'bot-class'?: string;
  'device-type'?: string;
  'http-protocol'?: string;
  'http-version'?: string;
  'ip-version'?: string;
  os?: string;
  'tls-version'?: string;
  'browser-family'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TopBrowserArgs> = {
  command: 'top-browser',
  describe: 'Retrieves the top user agents by HTTP requests.',

  builder: (yargs: Argv): Argv<TopBrowserArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
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
      .option('geo-id', {
        type: 'string',
        description:
          'Filters results by Geolocation. Specify a comma-separated list of GeoNames IDs. Prefix with \`-\` to exclude geoIds from results. For example, \`-2267056,360689\` excludes results from the 2267056 (Lisbon), but includes results from 5128638 (New York).',
        default: undefined,
      })
      .option('bot-class', {
        type: 'string',
        description:
          'Filters results by bot class. Refer to [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).',
        default: undefined,
      })
      .option('device-type', {
        type: 'string',
        description: 'Filters results by device type.',
        default: undefined,
      })
      .option('http-protocol', {
        type: 'string',
        description: 'Filters results by HTTP protocol (HTTP vs. HTTPS).',
        default: undefined,
      })
      .option('http-version', {
        type: 'string',
        description: 'Filters results by HTTP version.',
        default: undefined,
      })
      .option('ip-version', {
        type: 'string',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        default: undefined,
      })
      .option('os', {
        type: 'string',
        description: 'Filters results by operating system.',
        default: undefined,
      })
      .option('tls-version', {
        type: 'string',
        description: 'Filters results by TLS version.',
        default: undefined,
      })
      .option('browser-family', {
        type: 'string',
        description: 'Filters results by browser family.',
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
      }) as Argv<TopBrowserArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TopBrowserArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.continent !== undefined) params['continent'] = argv.continent;
      if (argv.geoId !== undefined) params['geoId'] = argv.geoId;
      if (argv.botClass !== undefined) params['botClass'] = argv.botClass;
      if (argv.deviceType !== undefined) params['deviceType'] = argv.deviceType;
      if (argv.httpProtocol !== undefined) params['httpProtocol'] = argv.httpProtocol;
      if (argv.httpVersion !== undefined) params['httpVersion'] = argv.httpVersion;
      if (argv.ipVersion !== undefined) params['ipVersion'] = argv.ipVersion;
      if (argv.os !== undefined) params['os'] = argv.os;
      if (argv.tlsVersion !== undefined) params['tlsVersion'] = argv.tlsVersion;
      if (argv.browserFamily !== undefined) params['browserFamily'] = argv.browserFamily;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.http.topBrowser(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
