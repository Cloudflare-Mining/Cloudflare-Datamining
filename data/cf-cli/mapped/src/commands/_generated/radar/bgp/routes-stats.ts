/**
 * routes-stats command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RoutesStatsArgs {
  asn?: number;
  location?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesStatsArgs> = {
  command: 'routes-stats',
  describe: 'Retrieves the BGP routing table stats.',

  builder: (yargs: Argv): Argv<RoutesStatsArgs> => {
    return yargs
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
      }) as Argv<RoutesStatsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesStatsArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.routesStats(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
