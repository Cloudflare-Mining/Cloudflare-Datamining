/**
 * list command
 * @generated from apis/firewall/schema.ts
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
  description?: string;
  'per-page'?: number;
  'user-agent'?: string;
  paused?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe:
    'Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'Description',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description:
          'The maximum number of results per page. You can only set the value to \`1\` or to a multiple of 5 such as \`5\`, \`10\`, \`15\`, or \`20\`.',
        default: undefined,
      })
      .option('user-agent', {
        type: 'string',
        description: 'A string to search for in the user agent values of existing rules.',
        default: undefined,
      })
      .option('paused', {
        type: 'boolean',
        description: 'When true, indicates that the rule is currently paused.',
        default: false,
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
      if (argv.description !== undefined) params['description'] = argv.description;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.userAgent !== undefined) params['user_agent'] = argv.userAgent;
      if (argv.paused !== undefined) params['paused'] = argv.paused;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.firewall.uarules.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
