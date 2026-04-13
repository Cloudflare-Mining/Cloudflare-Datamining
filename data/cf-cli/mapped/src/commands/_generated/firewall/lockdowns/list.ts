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
  'modified-on'?: string;
  ip?: string;
  priority?: string;
  'uri-search'?: string;
  'ip-range-search'?: string;
  'per-page'?: number;
  'created-on'?: string;
  'description-search'?: string;
  'ip-search'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'Fetches Zone Lockdown rules. You can filter the results using several optional parameters.',

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
      .option('modified-on', {
        type: 'string',
        description: 'Modified on',
        default: undefined,
      })
      .option('ip', {
        type: 'string',
        description: 'Ip',
        default: undefined,
      })
      .option('priority', {
        type: 'string',
        description: 'Priority',
        default: undefined,
      })
      .option('uri-search', {
        type: 'string',
        description: 'Uri search',
        default: undefined,
      })
      .option('ip-range-search', {
        type: 'string',
        description: 'Ip range search',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description:
          'The maximum number of results per page. You can only set the value to \`1\` or to a multiple of 5 such as \`5\`, \`10\`, \`15\`, or \`20\`.',
        default: undefined,
      })
      .option('created-on', {
        type: 'string',
        description: 'The timestamp of when the rule was created.',
        default: undefined,
      })
      .option('description-search', {
        type: 'string',
        description: 'A string to search for in the description of existing rules.',
        default: undefined,
      })
      .option('ip-search', {
        type: 'string',
        description: 'A single IP address to search for in existing rules.',
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
      if (argv.description !== undefined) params['description'] = argv.description;
      if (argv.modifiedOn !== undefined) params['modified_on'] = argv.modifiedOn;
      if (argv.ip !== undefined) params['ip'] = argv.ip;
      if (argv.priority !== undefined) params['priority'] = argv.priority;
      if (argv.uriSearch !== undefined) params['uri_search'] = argv.uriSearch;
      if (argv.ipRangeSearch !== undefined) params['ip_range_search'] = argv.ipRangeSearch;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.createdOn !== undefined) params['created_on'] = argv.createdOn;
      if (argv.descriptionSearch !== undefined) params['description_search'] = argv.descriptionSearch;
      if (argv.ipSearch !== undefined) params['ip_search'] = argv.ipSearch;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.firewall.lockdowns.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
