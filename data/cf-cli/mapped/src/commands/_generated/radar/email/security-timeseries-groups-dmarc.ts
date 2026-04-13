/**
 * security-timeseries-groups-dmarc command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface SecurityTimeseriesGroupsDmarcArgs {
  'agg-interval'?: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  arc?: string;
  dkim?: string;
  spf?: string;
  'tls-version'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecurityTimeseriesGroupsDmarcArgs> = {
  command: 'security-timeseries-groups-dmarc',
  describe:
    'Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation over time.',

  builder: (yargs: Argv): Argv<SecurityTimeseriesGroupsDmarcArgs> => {
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
      .option('arc', {
        type: 'string',
        description: 'Filters results by ARC (Authenticated Received Chain) validation.',
        default: undefined,
      })
      .option('dkim', {
        type: 'string',
        description: 'Filters results by DKIM (DomainKeys Identified Mail) validation status.',
        default: undefined,
      })
      .option('spf', {
        type: 'string',
        description: 'Filters results by SPF (Sender Policy Framework) validation status.',
        default: undefined,
      })
      .option('tls-version', {
        type: 'string',
        description: 'Filters results by TLS version.',
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
      }) as Argv<SecurityTimeseriesGroupsDmarcArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecurityTimeseriesGroupsDmarcArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.aggInterval !== undefined) params['aggInterval'] = argv.aggInterval;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.arc !== undefined) params['arc'] = argv.arc;
      if (argv.dkim !== undefined) params['dkim'] = argv.dkim;
      if (argv.spf !== undefined) params['spf'] = argv.spf;
      if (argv.tlsVersion !== undefined) params['tlsVersion'] = argv.tlsVersion;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.email.securityTimeseriesGroupsDmarc(
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
