/**
 * packages-rules-list command
 * @generated from apis/firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface PackagesRulesListArgs {
  packageId: string;
  zoneId: string;
  mode?: string;
  'group-id'?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  match?: string;
  description?: string;
  priority?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PackagesRulesListArgs> = {
  command: 'packages-rules-list <packageId> [zoneId]',
  describe:
    'Fetches WAF rules in a WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',

  builder: (yargs: Argv): Argv<PackagesRulesListArgs> => {
    return yargs
      .positional('packageId', {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier of a schema. (or use --zone flag)',
      })
      .option('mode', {
        type: 'string',
        description: 'Defines the action/mode a rule has been overridden to perform.',
        choices: ['DIS', 'CHL', 'BLK', 'SIM'] as const,
        default: undefined,
      })
      .option('group-id', {
        type: 'string',
        description: 'Group ID',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Defines the page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Defines the number of rules per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Defines the field used to sort returned rules.',
        choices: ['priority', 'group_id', 'description'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Defines the direction used to sort returned rules.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description:
          'Defines the search requirements. When set to \`all\`, all the search requirements must match. When set to \`any\`, only one of the search requirements has to match.',
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'Defines the public description of the WAF rule.',
        default: undefined,
      })
      .option('priority', {
        type: 'string',
        description: 'Defines the order in which the individual WAF rule is executed within its rule group.',
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
      }) as Argv<PackagesRulesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PackagesRulesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.packageId as string | undefined, 'packageId');

      const params: Record<string, unknown> = {};
      if (argv.mode !== undefined) params['mode'] = argv.mode;
      if (argv.groupId !== undefined) params['group_id'] = argv.groupId;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.description !== undefined) params['description'] = argv.description;
      if (argv.priority !== undefined) params['priority'] = argv.priority;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.firewall.waf.packagesRulesList(
        argv.packageId,
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
