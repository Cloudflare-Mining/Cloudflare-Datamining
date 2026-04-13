/**
 * permission-groups-list command
 * @generated from apis/accounts/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PermissionGroupsListArgs {
  name?: string;
  scope?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PermissionGroupsListArgs> = {
  command: 'permission-groups-list',
  describe: 'Find all available permission groups for Account Owned API Tokens',

  builder: (yargs: Argv): Argv<PermissionGroupsListArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'Filter by the name of the permission group. The value must be URL-encoded.',
        default: undefined,
      })
      .option('scope', {
        type: 'string',
        description: 'Filter by the scope of the permission group. The value must be URL-encoded.',
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
      }) as Argv<PermissionGroupsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PermissionGroupsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.scope !== undefined) params['scope'] = argv.scope;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.accounts.tokens.permissionGroupsList(
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
