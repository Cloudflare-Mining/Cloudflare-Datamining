/**
 * revoke-users command
 * @generated from apis/zero-trust/schema.ts
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

interface RevokeUsersArgs {
  devices?: boolean;
  email: string;
  'user-uid'?: string;
  'warp-session-reauth'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RevokeUsersArgs> = {
  command: 'revoke-users',
  describe: "Revokes a user's access across all applications.",

  builder: (yargs: Argv): Argv<RevokeUsersArgs> => {
    return yargs
      .option('devices', {
        type: 'boolean',
        description: 'When set to \`true\`, all devices associated with the user will be revoked.',
        default: false,
      })
      .option('email', {
        type: 'string',
        description: 'The email of the user to revoke.',
      })
      .option('user-uid', {
        type: 'string',
        description: 'The uuid of the user to revoke.',
        default: undefined,
      })
      .option('warp-session-reauth', {
        type: 'boolean',
        description:
          'When set to \`true\`, the user will be required to re-authenticate to WARP for all Gateway policies that enforce a WARP client session duration. When \`false\`, the user’s WARP session will remain active',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<RevokeUsersArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RevokeUsersArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.devices !== undefined) params['devices'] = argv.devices;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust organizations revoke-users',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/organizations/revoke_user`,
          pathParams: {},
          body: { ...params, email: argv.email, userUid: argv.userUid, warpSessionReauth: argv.warpSessionReauth },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/access/organizations/revoke_user`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.email !== undefined) setNestedValue(bodyData, ['email'], argv.email);
      if (argv.userUid !== undefined) setNestedValue(bodyData, ['user_uid'], argv.userUid);
      if (argv.warpSessionReauth !== undefined)
        setNestedValue(bodyData, ['warp_session_reauth'], argv.warpSessionReauth);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/access/organizations/revoke_user${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
