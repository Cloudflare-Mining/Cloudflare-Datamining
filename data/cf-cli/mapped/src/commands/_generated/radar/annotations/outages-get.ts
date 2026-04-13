/**
 * outages-get command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface OutagesGetArgs {
  limit?: number;
  offset?: number;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  asn?: number;
  location?: string;
  origin?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, OutagesGetArgs> = {
  command: 'outages-get',
  describe: 'Retrieves the latest Internet outages and anomalies.',

  builder: (yargs: Argv): Argv<OutagesGetArgs> => {
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
      .option('date-range', {
        type: 'string',
        description: 'Filters results by date range.',
        default: undefined,
      })
      .option('date-start', {
        type: 'string',
        description: 'Start of the date range (inclusive).',
        default: undefined,
      })
      .option('date-end', {
        type: 'string',
        description: 'End of the date range (inclusive).',
        default: undefined,
      })
      .option('asn', {
        type: 'number',
        description:
          'Filters results by Autonomous System. Specify a single Autonomous System Number (ASN) as integer.',
        default: undefined,
      })
      .option('location', {
        type: 'string',
        description: 'Filters results by location. Specify an alpha-2 location code.',
        default: undefined,
      })
      .option('origin', {
        type: 'string',
        description: 'Filters results by origin.',
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
      }) as Argv<OutagesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OutagesGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.origin !== undefined) params['origin'] = argv.origin;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.annotations.outagesGet(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
