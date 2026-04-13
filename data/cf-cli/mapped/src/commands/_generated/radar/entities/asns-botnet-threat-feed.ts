/**
 * asns-botnet-threat-feed command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface AsnsBotnetThreatFeedArgs {
  limit?: number;
  offset?: number;
  metric?: string;
  date?: string;
  'compare-date-range'?: string;
  location?: string;
  asn?: string;
  'sort-order'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AsnsBotnetThreatFeedArgs> = {
  command: 'asns-botnet-threat-feed',
  describe:
    'Retrieves a ranked list of Autonomous Systems based on their presence in the Cloudflare Botnet Threat Feed. Rankings can be sorted by offense count or number of bad IPs. Optionally compare to a previous date to see rank changes.',

  builder: (yargs: Argv): Argv<AsnsBotnetThreatFeedArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Skips the specified number of objects before fetching the results.',
        default: undefined,
      })
      .option('metric', {
        type: 'string',
        description: 'Metric to rank ASNs by.',
        choices: ['OFFENSE_COUNT', 'NUMBER_OF_OFFENDING_IPS'] as const,
        default: undefined,
      })
      .option('date', {
        type: 'string',
        description:
          'The date to retrieve (YYYY-MM-DD format). If not specified, returns the most recent available data. Note: This is the date the report was generated. The report is generated from information collected from the previous day (e.g., the 2026-02-23 entry contains data from 2026-02-22).',
        default: undefined,
      })
      .option('compare-date-range', {
        type: 'string',
        description: 'Relative date range for rank change comparison (e.g., "1d", "7d", "30d").',
        default: undefined,
      })
      .option('location', {
        type: 'string',
        description: 'Filters results by location. Specify an alpha-2 location code.',
        default: undefined,
      })
      .option('asn', {
        type: 'string',
        description:
          'Filters results by Autonomous System. Specify one or more Autonomous System Numbers (ASNs) as a comma-separated list. Prefix with \`-\` to exclude ASNs from results. For example, \`-174, 3356\` excludes results from AS174, but includes results from AS3356.',
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort order.',
        choices: ['ASC', 'DESC'] as const,
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
      }) as Argv<AsnsBotnetThreatFeedArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AsnsBotnetThreatFeedArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.metric !== undefined) params['metric'] = argv.metric;
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.compareDateRange !== undefined) params['compareDateRange'] = argv.compareDateRange;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.sortOrder !== undefined) params['sortOrder'] = argv.sortOrder;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.entities.asnsBotnetThreatFeed(
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
