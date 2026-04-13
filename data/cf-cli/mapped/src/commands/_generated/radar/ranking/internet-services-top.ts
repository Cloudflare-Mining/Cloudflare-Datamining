/**
 * internet-services-top command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface InternetServicesTopArgs {
  'service-category'?: string;
  limit?: number;
  name?: string;
  date?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, InternetServicesTopArgs> = {
  command: 'internet-services-top',
  describe: 'Retrieves top Internet services based on their rank.',

  builder: (yargs: Argv): Argv<InternetServicesTopArgs> => {
    return yargs
      .option('service-category', {
        type: 'string',
        description: 'Filters results by Internet service category.',
        default: undefined,
      })
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
      }) as Argv<InternetServicesTopArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InternetServicesTopArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.serviceCategory !== undefined) params['serviceCategory'] = argv.serviceCategory;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.ranking.internetServicesTop(
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
