/**
 * list command
 * @generated from apis/token-validation/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'per-page'?: number;
  page?: number;
  'token-configuration'?: string;
  action?: string;
  enabled?: string;
  id?: string;
  'rule-id'?: string;
  host?: string;
  hostname?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'List token validation rules',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('per-page', {
        type: 'number',
        description: 'Maximum number of results per page.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('token-configuration', {
        type: 'string',
        description: 'Select rules using any of these token configurations.',
        default: undefined,
      })
      .option('action', {
        type: 'string',
        description:
          'Action to take on requests that match operations included in \`selector\` and fail \`expression\`.',
        choices: ['log', 'block'] as const,
        default: undefined,
      })
      .option('enabled', {
        type: 'string',
        description: 'Toggle rule on or off.',
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'Select rules with these IDs.',
        default: undefined,
      })
      .option('rule-id', {
        type: 'string',
        description: 'Select rules with these IDs.',
        default: undefined,
      })
      .option('host', {
        type: 'string',
        description: 'Select rules with this host in \`include\`.',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'Select rules with this host in \`include\`.',
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
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.tokenConfiguration !== undefined) params['token_configuration'] = argv.tokenConfiguration;
      if (argv.action !== undefined) params['action'] = argv.action;
      if (argv.enabled !== undefined) params['enabled'] = argv.enabled;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.ruleId !== undefined) params['rule_id'] = argv.ruleId;
      if (argv.host !== undefined) params['host'] = argv.host;
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.tokenValidation.rules.list(
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
