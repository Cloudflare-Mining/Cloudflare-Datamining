/**
 * timeseries-groups command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TimeseriesGroupsArgs {
  limit?: number;
  'ranking-type'?: string;
  name?: string;
  location?: string;
  domains?: string;
  'domain-category'?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TimeseriesGroupsArgs> = {
  command: 'timeseries-groups',
  describe: 'Retrieves domains rank over time.',

  builder: (yargs: Argv): Argv<TimeseriesGroupsArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('ranking-type', {
        type: 'string',
        description: 'The ranking type.',
        choices: ['POPULAR', 'TRENDING_RISE', 'TRENDING_STEADY'] as const,
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
      .option('domains', {
        type: 'string',
        description: 'Filters results by domain name. Specify a comma-separated list of domain names.',
        default: undefined,
      })
      .option('domain-category', {
        type: 'string',
        description: 'Filters results by domain category.',
        default: undefined,
      })
      .option('date-range', {
        type: 'string',
        description:
          'Filters results by date range. For example, use \`7d\` and \`7dcontrol\` to compare this week with the previous week. Use this parameter or set specific start and end dates (\`dateStart\` and \`dateEnd\` parameters).',
        default: undefined,
      })
      .option('date-start', {
        type: 'string',
        description: 'Start of the date range.',
        default: undefined,
      })
      .option('date-end', {
        type: 'string',
        description: 'End of the date range (inclusive).',
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
      }) as Argv<TimeseriesGroupsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TimeseriesGroupsArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.rankingType !== undefined) params['rankingType'] = argv.rankingType;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.domains !== undefined) params['domains'] = argv.domains;
      if (argv.domainCategory !== undefined) params['domainCategory'] = argv.domainCategory;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.ranking.timeseriesGroups(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
