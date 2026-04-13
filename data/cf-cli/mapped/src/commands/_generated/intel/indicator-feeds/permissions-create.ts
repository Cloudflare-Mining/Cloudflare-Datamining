/**
 * permissions-create command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface PermissionsCreateArgs {
  'account-tag'?: string;
  'feed-id'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PermissionsCreateArgs> = {
  command: 'permissions-create',
  describe: 'Grants access permissions for a custom threat indicator feed to other accounts.',

  builder: (yargs: Argv): Argv<PermissionsCreateArgs> => {
    return yargs
      .option('account-tag', {
        type: 'string',
        description: 'The Cloudflare account tag of the account to change permissions on',
        default: undefined,
      })
      .option('feed-id', {
        type: 'number',
        description: 'The ID of the feed to add/remove permissions on',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<PermissionsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PermissionsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf intel indicator-feeds permissions-create',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/intel/indicator-feeds/permissions/add`,
          pathParams: {},
          body: { accountTag: argv.accountTag, feedId: argv.feedId },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/permissions/add`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.accountTag !== undefined) setNestedValue(bodyData, ['account_tag'], argv.accountTag);
      if (argv.feedId !== undefined) setNestedValue(bodyData, ['feed_id'], argv.feedId);
      const result = await client.put<unknown>(`/accounts/${accountId}/intel/indicator-feeds/permissions/add`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
