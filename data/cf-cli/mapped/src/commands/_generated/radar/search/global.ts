/**
 * global command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GlobalArgs {
  limit?: number;
  'limit-per-group'?: number;
  query: string;
  include?: string;
  exclude?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GlobalArgs> = {
  command: 'global',
  describe:
    'Searches for locations, autonomous systems, reports, bots, certificate logs, certificate authorities, industries and verticals. Location names can be localized by sending an \`Accept-Language\` HTTP header with a BCP 47 language tag (e.g., \`Accept-Language: pt-PT\`). The full quality-value chain is supported (e.g., \`pt-PT,pt;q=0.9,en;q=0.8\`).',

  builder: (yargs: Argv): Argv<GlobalArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('limit-per-group', {
        type: 'number',
        description: 'Limits the number of objects per search category.',
        default: undefined,
      })
      .option('query', {
        type: 'string',
        description: 'String used to perform the search operation.',
      })
      .option('include', {
        type: 'string',
        description: 'Search types included in results.',
        default: undefined,
      })
      .option('exclude', {
        type: 'string',
        description: 'Search types excluded from results.',
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
      }) as Argv<GlobalArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GlobalArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.limitPerGroup !== undefined) params['limitPerGroup'] = argv.limitPerGroup;
      if (argv.query !== undefined) params['query'] = argv.query;
      if (argv.include !== undefined) params['include'] = argv.include;
      if (argv.exclude !== undefined) params['exclude'] = argv.exclude;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.search.global(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
