/**
 * routes-moas command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RoutesMoasArgs {
  origin?: number;
  prefix?: string;
  'invalid-only'?: boolean;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutesMoasArgs> = {
  command: 'routes-moas',
  describe: 'Retrieves all Multi-Origin AS (MOAS) prefixes in the global routing tables.',

  builder: (yargs: Argv): Argv<RoutesMoasArgs> => {
    return yargs
      .option('origin', {
        type: 'number',
        description: 'Lookup MOASes originated by the given ASN.',
        default: undefined,
      })
      .option('prefix', {
        type: 'string',
        description: 'Prefix',
        default: undefined,
      })
      .option('invalid-only', {
        type: 'boolean',
        description: 'Lookup only RPKI invalid MOASes.',
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
      }) as Argv<RoutesMoasArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesMoasArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.origin !== undefined) params['origin'] = argv.origin;
      if (argv.prefix !== undefined) params['prefix'] = argv.prefix;
      if (argv.invalidOnly !== undefined) params['invalid_only'] = argv.invalidOnly;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.routesMoas(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
