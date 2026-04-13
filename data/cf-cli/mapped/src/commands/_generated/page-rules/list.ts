/**
 * list command
 * @generated from apis/page-rules/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  order?: string;
  direction?: string;
  match?: string;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Fetches Page Rules in a zone.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('order', {
        type: 'string',
        description: 'The field used to sort returned Page Rules.',
        choices: ['status', 'priority'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The direction used to sort returned Page Rules.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description:
          'When set to \`all\`, all the search requirements must match. When set to \`any\`, only one of the search requirements has to match.',
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'The status of the Page Rule.',
        choices: ['active', 'disabled'] as const,
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
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.status !== undefined) params['status'] = argv.status;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.pageRules.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
