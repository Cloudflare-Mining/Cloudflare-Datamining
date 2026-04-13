/**
 * packages-list command
 * @generated from apis/firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PackagesListArgs {
  zoneId?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  match?: string;
  name?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PackagesListArgs> = {
  command: 'packages-list [zoneId]',
  describe:
    'Fetches WAF packages for a zone. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',

  builder: (yargs: Argv): Argv<PackagesListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('page', {
        type: 'number',
        description: 'The page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The number of packages per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'The field used to sort returned packages.',
        choices: ['name'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The direction used to sort returned packages.',
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
      .option('name', {
        type: 'string',
        description: 'The name of the WAF package.',
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
      }) as Argv<PackagesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PackagesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.name !== undefined) params['name'] = argv.name;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.firewall.waf.packagesList(
        zoneId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
