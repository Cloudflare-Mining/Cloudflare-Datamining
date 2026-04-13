/**
 * list command
 * @generated from apis/spectrum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  page?: number;
  'per-page'?: number;
  direction?: string;
  order?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Retrieves a list of currently existing Spectrum applications inside a zone.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('page', {
        type: 'number',
        description:
          'Page number of paginated results. This parameter is required in order to use other pagination parameters. If included in the query, \`result_info\` will be present in the response.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Sets the maximum number of results per page.',
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Sets the direction by which results are ordered.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Application field by which results are ordered.',
        choices: ['protocol', 'app_id', 'created_on', 'modified_on', 'dns'] as const,
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
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.order !== undefined) params['order'] = argv.order;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.spectrum.apps.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
