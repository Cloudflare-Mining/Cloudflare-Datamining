/**
 * top-ases-prefixes command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TopAsesPrefixesArgs {
  country?: string;
  limit?: number;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TopAsesPrefixesArgs> = {
  command: 'top-ases-prefixes',
  describe:
    'Retrieves the full list of autonomous systems on the global routing table ordered by announced prefixes count. The data comes from public BGP MRT data archives and updates every 2 hours.',

  builder: (yargs: Argv): Argv<TopAsesPrefixesArgs> => {
    return yargs
      .option('country', {
        type: 'string',
        description: 'Alpha-2 country code.',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Maximum number of ASes to return.',
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
      }) as Argv<TopAsesPrefixesArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TopAsesPrefixesArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.country !== undefined) params['country'] = argv.country;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bgp.topAsesPrefixes(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
