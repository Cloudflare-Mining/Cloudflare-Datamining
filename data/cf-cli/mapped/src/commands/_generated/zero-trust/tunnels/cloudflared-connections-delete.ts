/**
 * cloudflared-connections-delete command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface CloudflaredConnectionsDeleteArgs {
  tunnelId: string;
  'client-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CloudflaredConnectionsDeleteArgs> = {
  command: 'cloudflared-connections-delete <tunnelId>',
  describe:
    'Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel independently of its current state. If no connector id (client_id) is provided all connectors will be removed. We recommend running this command after rotating tokens.',

  builder: (yargs: Argv): Argv<CloudflaredConnectionsDeleteArgs> => {
    return yargs
      .positional('tunnelId', {
        type: 'string',
        description: 'UUID of the tunnel.',
        demandOption: true,
      })
      .option('client-id', {
        type: 'string',
        description: 'UUID of the Cloudflare Tunnel connector.',
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
      }) as Argv<CloudflaredConnectionsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CloudflaredConnectionsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tunnelId as string | undefined, 'tunnelId');

      const params: Record<string, unknown> = {};
      if (argv.clientId !== undefined) params['client_id'] = argv.clientId;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust tunnels cloudflared-connections-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cfd_tunnel/${argv.tunnelId ?? '<tunnelId>'}/connections`,
          pathParams: { tunnelId: String(argv.tunnelId ?? '') },
          body: { ...params },
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
        const result = await client.delete<unknown>(`/accounts/${accountId}/cfd_tunnel/${argv.tunnelId}/connections`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.zeroTrust.tunnels.cloudflaredConnectionsDelete(
        accountId,
        argv.tunnelId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
