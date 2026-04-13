/**
 * edit command
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

interface EditArgs {
  'icmp-proxy-enabled'?: boolean;
  'offramp-warp-enabled'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit',
  describe: 'Updates the Zero Trust Connectivity Settings for the given account.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .option('icmp-proxy-enabled', {
        type: 'boolean',
        description: 'A flag to enable the ICMP proxy for the account network.',
        default: false,
      })
      .option('offramp-warp-enabled', {
        type: 'boolean',
        description: 'A flag to enable WARP to WARP traffic.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust connectivity-settings edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/connectivity_settings`,
          pathParams: {},
          body: { icmpProxyEnabled: argv.icmpProxyEnabled, offrampWarpEnabled: argv.offrampWarpEnabled },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/zerotrust/connectivity_settings`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.icmpProxyEnabled !== undefined) setNestedValue(bodyData, ['icmp_proxy_enabled'], argv.icmpProxyEnabled);
      if (argv.offrampWarpEnabled !== undefined)
        setNestedValue(bodyData, ['offramp_warp_enabled'], argv.offrampWarpEnabled);
      const result = await client.patch<unknown>(`/accounts/${accountId}/zerotrust/connectivity_settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
