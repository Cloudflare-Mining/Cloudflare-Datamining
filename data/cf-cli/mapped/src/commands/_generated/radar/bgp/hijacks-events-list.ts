/**
 * hijacks-events-list command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface HijacksEventsListArgs {
  page?: number;
  'per-page'?: number;
  'event-id'?: number;
  'hijacker-asn'?: number;
  'victim-asn'?: number;
  'involved-asn'?: number;
  'involved-country'?: string;
  prefix?: string;
  'min-confidence'?: number;
  'max-confidence'?: number;
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

const command: CommandModule<object, HijacksEventsListArgs> = {
  command: 'hijacks-events-list',
  describe: 'Retrieves the BGP hijack events.',

  builder: (yargs: Argv): Argv<HijacksEventsListArgs> => {
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
      .option('hijacker-asn', {
        type: 'number',
        description: 'The potential hijacker AS of a BGP hijack event.',
        default: undefined,
      })
      .option('victim-asn', {
        type: 'number',
        description: 'The potential victim AS of a BGP hijack event.',
        default: undefined,
      })
      .option('involved-asn', {
        type: 'number',
        description: 'The potential hijacker or victim AS of a BGP hijack event.',
        default: undefined,
      })
      .option('involved-country', {
        type: 'string',
        description: 'The country code of the potential hijacker or victim AS of a BGP hijack event.',
        default: undefined,
      })
      .option('prefix', {
        type: 'string',
        description: 'Prefix',
        default: undefined,
      })
      .option('min-confidence', {
        type: 'number',
        description: 'Filters events by minimum confidence score (1-4 low, 5-7 mid, 8+ high).',
        default: undefined,
      })
      .option('max-confidence', {
        type: 'number',
        description: 'Filters events by maximum confidence score (1-4 low, 5-7 mid, 8+ high).',
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
        choices: ['ID', 'TIME', 'CONFIDENCE'] as const,
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
      }) as Argv<HijacksEventsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HijacksEventsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.eventId !== undefined) params['eventId'] = argv.eventId;
      if (argv.hijackerAsn !== undefined) params['hijackerAsn'] = argv.hijackerAsn;
      if (argv.victimAsn !== undefined) params['victimAsn'] = argv.victimAsn;
      if (argv.involvedAsn !== undefined) params['involvedAsn'] = argv.involvedAsn;
      if (argv.involvedCountry !== undefined) params['involvedCountry'] = argv.involvedCountry;
      if (argv.prefix !== undefined) params['prefix'] = argv.prefix;
      if (argv.minConfidence !== undefined) params['minConfidence'] = argv.minConfidence;
      if (argv.maxConfidence !== undefined) params['maxConfidence'] = argv.maxConfidence;
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

      const result = await client.radar.bgp.hijacksEventsList(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
