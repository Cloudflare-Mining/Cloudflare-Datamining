/**
 * rpki-aspa-changes command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RpkiAspaChangesArgs {
  'date-start'?: string;
  'date-end'?: string;
  asn?: number;
  'include-asn-info'?: boolean;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RpkiAspaChangesArgs> = {
  command: 'rpki-aspa-changes',
  describe:
    'Retrieves ASPA (Autonomous System Provider Authorization) changes over time. Returns daily aggregated changes including additions, removals, and modifications of ASPA objects.',

  builder: (yargs: Argv): Argv<RpkiAspaChangesArgs> => {
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
      .option('asn', {
        type: 'number',
        description: 'Filter changes involving this ASN (as customer or provider).',
        default: undefined,
      })
      .option('include-asn-info', {
        type: 'boolean',
        description: 'Include ASN metadata (name, country) in response.',
        default: false,
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
      }) as Argv<RpkiAspaChangesArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RpkiAspaChangesArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.asn !== undefined) params['asn'] = argv.asn;
      if (argv.includeAsnInfo !== undefined) params['includeAsnInfo'] = argv.includeAsnInfo;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.rpkiAspaChanges(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
