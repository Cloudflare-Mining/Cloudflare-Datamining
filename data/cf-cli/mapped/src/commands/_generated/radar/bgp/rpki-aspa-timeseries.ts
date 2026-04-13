/**
 * rpki-aspa-timeseries command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RpkiAspaTimeseriesArgs {
  'date-start'?: string;
  'date-end'?: string;
  name?: string;
  rir?: string;
  location?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RpkiAspaTimeseriesArgs> = {
  command: 'rpki-aspa-timeseries',
  describe:
    'Retrieves ASPA (Autonomous System Provider Authorization) object count over time. Supports filtering by RIR or location (country code) to generate multiple named series. If no RIR or location filter is specified, returns total count.',

  builder: (yargs: Argv): Argv<RpkiAspaTimeseriesArgs> => {
    return yargs
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
      .option('name', {
        type: 'string',
        description: 'Array of names used to label the series in the response.',
        default: undefined,
      })
      .option('rir', {
        type: 'string',
        description: 'Filter by Regional Internet Registry (RIR). Multiple RIRs generate multiple series.',
        default: undefined,
      })
      .option('location', {
        type: 'string',
        description: 'Filters results by location. Specify a comma-separated list of alpha-2 location codes.',
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
      }) as Argv<RpkiAspaTimeseriesArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RpkiAspaTimeseriesArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.rir !== undefined) params['rir'] = argv.rir;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.rpkiAspaTimeseries(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
