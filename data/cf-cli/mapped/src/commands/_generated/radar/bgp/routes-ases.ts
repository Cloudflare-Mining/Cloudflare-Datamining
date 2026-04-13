/**
 * routes-ases command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RoutesAsesArgs {
  location?: string;
  limit?: number;
  'sort-by'?: string;
  'sort-order'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesAsesArgs> = {
  command: 'routes-ases',
  describe: 'Retrieves all ASes in the current global routing tables with routing statistics.',

  builder: (yargs: Argv): Argv<RoutesAsesArgs> => {
    return yargs
      .option('location', {
        type: 'string',
        description: 'Filters results by location. Specify an alpha-2 location code.',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description: 'Sorts results by the specified field.',
        choices: ['cone', 'pfxs', 'ipv4', 'ipv6', 'rpki_valid', 'rpki_invalid', 'rpki_unknown'] as const,
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
      }) as Argv<RoutesAsesArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesAsesArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.sortBy !== undefined) params['sortBy'] = argv.sortBy;
      if (argv.sortOrder !== undefined) params['sortOrder'] = argv.sortOrder;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.routesAses(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
