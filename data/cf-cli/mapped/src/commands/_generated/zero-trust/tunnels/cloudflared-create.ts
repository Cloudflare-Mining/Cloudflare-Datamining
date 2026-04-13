/**
 * cloudflared-create command
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

interface CloudflaredCreateArgs {
  'config-src'?: string;
  name: string;
  'tunnel-secret'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CloudflaredCreateArgs> = {
  command: 'cloudflared-create',
  describe: 'Creates a new Cloudflare Tunnel in an account.',

  builder: (yargs: Argv): Argv<CloudflaredCreateArgs> => {
    return yargs
      .option('config-src', {
        type: 'string',
        description:
          'Indicates if this is a locally or remotely configured tunnel. If \`local\`, manage the tunnel using a YAML file on the origin machine. If \`cloudflare\`, manage the tunnel on the Zero Trust dashboard.',
        choices: ['local', 'cloudflare'] as const,
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for a tunnel.',
      })
      .option('tunnel-secret', {
        type: 'string',
        description:
          'Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.',
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
      })
      .choices('config-src', ['local', 'cloudflare'] as const) as Argv<CloudflaredCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CloudflaredCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust tunnels cloudflared-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cfd_tunnel`,
          pathParams: {},
          body: { configSrc: argv.configSrc, name: argv.name, tunnelSecret: argv.tunnelSecret },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cfd_tunnel`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configSrc !== undefined) setNestedValue(bodyData, ['config_src'], argv.configSrc);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.tunnelSecret !== undefined) setNestedValue(bodyData, ['tunnel_secret'], argv.tunnelSecret);
      const result = await client.post<unknown>(`/accounts/${accountId}/cfd_tunnel`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
