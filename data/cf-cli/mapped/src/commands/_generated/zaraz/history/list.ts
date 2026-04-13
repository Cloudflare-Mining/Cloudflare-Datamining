/**
 * list command
 * @generated from apis/zaraz/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  offset?: number;
  limit?: number;
  'sort-field'?: string;
  'sort-order'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Lists a history of published Zaraz configuration records for a zone.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('offset', {
        type: 'number',
        description: 'Ordinal number to start listing the results with. Default value is 0.',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Maximum amount of results to list. Default value is 10.',
        default: undefined,
      })
      .option('sort-field', {
        type: 'string',
        description: 'The field to sort by. Default is updated_at.',
        choices: ['id', 'user_id', 'description', 'created_at', 'updated_at'] as const,
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sorting order. Default is DESC.',
        choices: ['DESC', 'ASC'] as const,
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
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.sortField !== undefined) params['sortField'] = argv.sortField;
      if (argv.sortOrder !== undefined) params['sortOrder'] = argv.sortOrder;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.zaraz.history.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
