/**
 * routes-pfx2as command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RoutesPfx2asArgs {
  prefix?: string;
  origin?: number;
  'rpki-status'?: string;
  'longest-prefix-match'?: boolean;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesPfx2asArgs> = {
  command: 'routes-pfx2as',
  describe: 'Retrieves the prefix-to-ASN mapping from global routing tables.',

  builder: (yargs: Argv): Argv<RoutesPfx2asArgs> => {
    return yargs
      .option('prefix', {
        type: 'string',
        description: 'Prefix',
        default: undefined,
      })
      .option('origin', {
        type: 'number',
        description: 'Lookup prefixes originated by the given ASN.',
        default: undefined,
      })
      .option('rpki-status', {
        type: 'string',
        description: 'Return only results with matching rpki status: valid, invalid or unknown.',
        choices: ['VALID', 'INVALID', 'UNKNOWN'] as const,
        default: undefined,
      })
      .option('longest-prefix-match', {
        type: 'boolean',
        description:
          'Return only results with the longest prefix match for the given prefix. For example, specify a /32 prefix to lookup the origin ASN for an IPv4 address.',
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
      }) as Argv<RoutesPfx2asArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesPfx2asArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.prefix !== undefined) params['prefix'] = argv.prefix;
      if (argv.origin !== undefined) params['origin'] = argv.origin;
      if (argv.rpkiStatus !== undefined) params['rpkiStatus'] = argv.rpkiStatus;
      if (argv.longestPrefixMatch !== undefined) params['longestPrefixMatch'] = argv.longestPrefixMatch;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.routesPfx2as(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
