/**
 * top command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TopArgs {
  limit?: number;
  name?: string;
  location?: string;
  'domain-category'?: string;
  date?: string;
  'ranking-type'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TopArgs> = {
  command: 'top',
  describe:
    'Retrieves the top or trending domains based on their rank. Popular domains are domains of broad appeal based on how people use the Internet. Trending domains are domains that are generating a surge in interest. For more information on top domains, see https://blog.cloudflare.com/radar-domain-rankings/.',

  builder: (yargs: Argv): Argv<TopArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Array of names used to label the series in the response.',
        default: undefined,
      })
      .option('location', {
        type: 'string',
        description: 'Filters results by location. Specify a comma-separated list of alpha-2 location codes.',
        default: undefined,
      })
      .option('domain-category', {
        type: 'string',
        description: 'Filters results by domain category.',
        default: undefined,
      })
      .option('date', {
        type: 'string',
        description: 'Filters results by the specified array of dates.',
        default: undefined,
      })
      .option('ranking-type', {
        type: 'string',
        description: 'The ranking type.',
        choices: ['POPULAR', 'TRENDING_RISE', 'TRENDING_STEADY'] as const,
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
      }) as Argv<TopArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TopArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.domainCategory !== undefined) params['domainCategory'] = argv.domainCategory;
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.rankingType !== undefined) params['rankingType'] = argv.rankingType;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.ranking.top(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
