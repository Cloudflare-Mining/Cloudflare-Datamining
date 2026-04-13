/**
 * rpki-aspa-snapshot command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RpkiAspaSnapshotArgs {
  'customer-asn'?: number;
  'provider-asn'?: number;
  date?: string;
  'include-asn-info'?: boolean;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RpkiAspaSnapshotArgs> = {
  command: 'rpki-aspa-snapshot',
  describe:
    'Retrieves current or historical ASPA (Autonomous System Provider Authorization) objects. ASPA objects define which ASNs are authorized upstream providers for a customer ASN.',

  builder: (yargs: Argv): Argv<RpkiAspaSnapshotArgs> => {
    return yargs
      .option('customer-asn', {
        type: 'number',
        description: 'Filter by customer ASN (the ASN publishing the ASPA object).',
        default: undefined,
      })
      .option('provider-asn', {
        type: 'number',
        description: 'Filter by provider ASN (an authorized upstream provider in ASPA objects).',
        default: undefined,
      })
      .option('date', {
        type: 'string',
        description: 'Filters results by the specified datetime (ISO 8601).',
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
      }) as Argv<RpkiAspaSnapshotArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RpkiAspaSnapshotArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.customerAsn !== undefined) params['customerAsn'] = argv.customerAsn;
      if (argv.providerAsn !== undefined) params['providerAsn'] = argv.providerAsn;
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.includeAsnInfo !== undefined) params['includeAsnInfo'] = argv.includeAsnInfo;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.rpkiAspaSnapshot(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
