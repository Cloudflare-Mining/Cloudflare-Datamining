/**
 * leaks-events-list command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface LeaksEventsListArgs {
  page?: number;
  'per-page'?: number;
  'event-id'?: number;
  'leak-asn'?: number;
  'involved-asn'?: number;
  'involved-country'?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  'sort-by'?: string;
  'sort-order'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LeaksEventsListArgs> = {
  command: 'leaks-events-list',
  describe: 'Retrieves the BGP route leak events.',

  builder: (yargs: Argv): Argv<LeaksEventsListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Current page number, starting from 1.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of entries per page.',
        default: undefined,
      })
      .option('event-id', {
        type: 'number',
        description: 'The unique identifier of a event.',
        default: undefined,
      })
      .option('leak-asn', {
        type: 'number',
        description: 'The leaking AS of a route leak event.',
        default: undefined,
      })
      .option('involved-asn', {
        type: 'number',
        description: 'ASN that is causing or affected by a route leak event.',
        default: undefined,
      })
      .option('involved-country', {
        type: 'string',
        description: 'Country code of a involved ASN in a route leak event.',
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
      .option('sort-by', {
        type: 'string',
        description: 'Sorts results by the specified field.',
        choices: ['ID', 'LEAKS', 'PEERS', 'PREFIXES', 'ORIGINS', 'TIME'] as const,
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
      }) as Argv<LeaksEventsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LeaksEventsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.eventId !== undefined) params['eventId'] = argv.eventId;
      if (argv.leakAsn !== undefined) params['leakAsn'] = argv.leakAsn;
      if (argv.involvedAsn !== undefined) params['involvedAsn'] = argv.involvedAsn;
      if (argv.involvedCountry !== undefined) params['involvedCountry'] = argv.involvedCountry;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.sortBy !== undefined) params['sortBy'] = argv.sortBy;
      if (argv.sortOrder !== undefined) params['sortOrder'] = argv.sortOrder;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.leaksEventsList(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
