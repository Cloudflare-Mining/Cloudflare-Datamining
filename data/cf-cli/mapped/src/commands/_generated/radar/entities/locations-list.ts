/**
 * locations-list command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface LocationsListArgs {
  limit?: number;
  offset?: number;
  location?: string;
  region?: string;
  subregion?: string;
  continent?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LocationsListArgs> = {
  command: 'locations-list',
  describe: 'Retrieves a list of locations.',

  builder: (yargs: Argv): Argv<LocationsListArgs> => {
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
      .option('location', {
        type: 'string',
        description: 'Filters results by location. Specify a comma-separated list of alpha-2 location codes.',
        default: undefined,
      })
      .option('region', {
        type: 'string',
        description: 'Filters results by region.',
        default: undefined,
      })
      .option('subregion', {
        type: 'string',
        description: 'Filters results by subregion.',
        default: undefined,
      })
      .option('continent', {
        type: 'string',
        description: 'Filters results by continent code.',
        choices: ['AF', 'AS', 'EU', 'NA', 'OC', 'SA'] as const,
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
      }) as Argv<LocationsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LocationsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.region !== undefined) params['region'] = argv.region;
      if (argv.subregion !== undefined) params['subregion'] = argv.subregion;
      if (argv.continent !== undefined) params['continent'] = argv.continent;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.entities.locationsList(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
