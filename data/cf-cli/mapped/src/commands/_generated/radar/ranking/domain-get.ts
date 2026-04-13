/**
 * domain-get command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface DomainGetArgs {
  domain: string;
  limit?: number;
  'ranking-type'?: string;
  name?: string;
  'include-top-locations'?: boolean;
  date?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DomainGetArgs> = {
  command: 'domain-get <domain>',
  describe:
    'Retrieves domain rank details. Cloudflare provides an ordered rank for the top 100 domains, but for the remainder it only provides ranking buckets like top 200 thousand, top one million, etc.. These are available through Radar datasets endpoints.',

  builder: (yargs: Argv): Argv<DomainGetArgs> => {
    return yargs
      .positional('domain', {
        type: 'string',
        description: 'Domain name.',
        demandOption: true,
      })
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
      .option('include-top-locations', {
        type: 'boolean',
        description: 'Includes top locations in the response.',
        default: false,
      })
      .option('date', {
        type: 'string',
        description: 'Filters results by the specified array of dates.',
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
      }) as Argv<DomainGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DomainGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.domain as string | undefined, 'domain');

      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.rankingType !== undefined) params['rankingType'] = argv.rankingType;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.includeTopLocations !== undefined) params['includeTopLocations'] = argv.includeTopLocations;
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.ranking.domainGet(
        argv.domain,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
