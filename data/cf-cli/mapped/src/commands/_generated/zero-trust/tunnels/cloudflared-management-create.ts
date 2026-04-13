/**
 * cloudflared-management-create command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CloudflaredManagementCreateArgs {
  tunnelId: string;
  resources: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CloudflaredManagementCreateArgs> = {
  command: 'cloudflared-management-create <tunnelId>',
  describe: 'Gets a management token used to access the management resources (i.e. Streaming Logs) of a tunnel.',

  builder: (yargs: Argv): Argv<CloudflaredManagementCreateArgs> => {
    return yargs
      .positional('tunnelId', {
        type: 'string',
        description: 'UUID of the tunnel.',
        demandOption: true,
      })
      .option('resources', {
        type: 'string',
        description: 'The resources field',
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
      }) as Argv<CloudflaredManagementCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CloudflaredManagementCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tunnelId as string | undefined, 'tunnelId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust tunnels cloudflared-management-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cfd_tunnel/${argv.tunnelId ?? '<tunnelId>'}/management`,
          pathParams: { tunnelId: String(argv.tunnelId ?? '') },
          body: { resources: argv.resources },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cfd_tunnel/${argv.tunnelId}/management`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.resources !== undefined) setNestedValue(bodyData, ['resources'], argv.resources);
      const result = await client.post<unknown>(`/accounts/${accountId}/cfd_tunnel/${argv.tunnelId}/management`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
