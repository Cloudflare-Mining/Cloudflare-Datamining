/**
 * configs-dns-protection-rules-list command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ConfigsDNSProtectionRulesListArgs {
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConfigsDNSProtectionRulesListArgs> = {
  command: 'configs-dns-protection-rules-list',
  describe: 'List all DNS Protection rules for an account.',

  builder: (yargs: Argv): Argv<ConfigsDNSProtectionRulesListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'The page number for pagination. Defaults to 1.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The number of items per page. Must be between 10 and 1000. Defaults to 25.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: "The field to order by. Defaults to 'prefix'.",
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: "The direction of ordering (ASC or DESC). Defaults to 'ASC'.",
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
      }) as Argv<ConfigsDNSProtectionRulesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsDNSProtectionRulesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.advanceddnsprotection.configsDnsProtectionRulesList(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
