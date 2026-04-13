/**
 * rules-list command
 * @generated from apis/firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RulesListArgs {
  zoneId?: string;
  mode?: string;
  'configuration-target'?: string;
  'configuration-value'?: string;
  notes?: string;
  match?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, RulesListArgs> = {
  command: 'rules-list [zoneId]',
  describe: 'Fetches IP Access rules of a zone. You can filter the results using several optional parameters.',

  builder: (yargs: Argv): Argv<RulesListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('mode', {
        type: 'string',
        description: 'The action to apply to a matched request.',
        choices: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'] as const,
        default: undefined,
      })
      .option('configuration-target', {
        type: 'string',
        description: 'The target to search in existing rules.',
        choices: ['ip', 'ip_range', 'asn', 'country'] as const,
        default: undefined,
      })
      .option('configuration-value', {
        type: 'string',
        description:
          "The target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided \`configuration.target\`. Notes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.",
        default: undefined,
      })
      .option('notes', {
        type: 'string',
        description:
          "The string to search for in the notes of existing IP Access rules. Notes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.",
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description:
          'When set to \`all\`, all the search requirements must match. When set to \`any\`, only one of the search requirements has to match.',
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Requested page within paginated list of results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of results requested.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'The field used to sort returned rules.',
        choices: ['configuration.target', 'configuration.value', 'mode'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The direction used to sort returned rules.',
        choices: ['asc', 'desc'] as const,
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
      }) as Argv<RulesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RulesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.mode !== undefined) params['mode'] = argv.mode;
      if (argv.configurationTarget !== undefined) params['configurationTarget'] = argv.configurationTarget;
      if (argv.configurationValue !== undefined) params['configurationValue'] = argv.configurationValue;
      if (argv.notes !== undefined) params['notes'] = argv.notes;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.firewall.accessrulesextra.rulesList(
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
