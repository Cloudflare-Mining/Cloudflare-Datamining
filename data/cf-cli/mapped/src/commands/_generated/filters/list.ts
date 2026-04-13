/**
 * list command
 * @generated from apis/filters/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  paused?: string;
  expression?: string;
  description?: string;
  ref?: string;
  page?: number;
  'per-page'?: number;
  id?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Fetches filters in a zone. You can filter the results using several optional parameters.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('paused', {
        type: 'string',
        description: 'Paused',
        default: undefined,
      })
      .option('expression', {
        type: 'string',
        description: 'A case-insensitive string to find in the expression.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'A case-insensitive string to find in the description.',
        default: undefined,
      })
      .option('ref', {
        type: 'string',
        description: 'The filter ref (a short reference tag) to search for. Must be an exact match.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of filters per page.',
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'The unique identifier of the filter.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.paused !== undefined) params['paused'] = argv.paused;
      if (argv.expression !== undefined) params['expression'] = argv.expression;
      if (argv.description !== undefined) params['description'] = argv.description;
      if (argv.ref !== undefined) params['ref'] = argv.ref;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.id !== undefined) params['id'] = argv.id;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.filters.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
