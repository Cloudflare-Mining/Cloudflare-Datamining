/**
 * accounts-list command
 * @generated from apis/logpush/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface AccountsListArgs {
  'include-zones'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AccountsListArgs> = {
  command: 'accounts-list',
  describe:
    'Returns all Log Explorer datasets configured for the account. Pass \`include_zones=true\` to also include zone-level datasets that belong to this account. List responses omit the \`fields\` property; use the single-dataset endpoint to retrieve field configuration.',

  builder: (yargs: Argv): Argv<AccountsListArgs> => {
    return yargs
      .option('include-zones', {
        type: 'boolean',
        description: 'Set to true to include zone-scoped datasets belonging to this account.',
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
      }) as Argv<AccountsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AccountsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.includeZones !== undefined) params['include_zones'] = argv.includeZones;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.logpush.logexplorerdatasets.accountsList(
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
