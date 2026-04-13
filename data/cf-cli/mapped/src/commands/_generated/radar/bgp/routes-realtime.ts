/**
 * routes-realtime command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RoutesRealtimeArgs {
  prefix?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesRealtimeArgs> = {
  command: 'routes-realtime',
  describe:
    'Retrieves real-time BGP routes for a prefix, using public real-time data collectors (RouteViews and RIPE RIS).',

  builder: (yargs: Argv): Argv<RoutesRealtimeArgs> => {
    return yargs
      .option('prefix', {
        type: 'string',
        description: 'Prefix',
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
      }) as Argv<RoutesRealtimeArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesRealtimeArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.prefix !== undefined) params['prefix'] = argv.prefix;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.routesRealtime(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
