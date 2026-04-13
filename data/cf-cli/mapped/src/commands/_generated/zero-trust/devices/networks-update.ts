/**
 * networks-update command
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

interface NetworksUpdateArgs {
  networkId: string;
  'config-sha256'?: string;
  'config-tls-sockaddr': string;
  name?: string;
  type?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, NetworksUpdateArgs> = {
  command: 'networks-update <networkId>',
  describe: 'Updates a configured device managed network.',

  builder: (yargs: Argv): Argv<NetworksUpdateArgs> => {
    return yargs
      .positional('networkId', {
        type: 'string',
        description: 'API UUID.',
        demandOption: true,
      })
      .option('config-sha256', {
        type: 'string',
        description:
          'The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.',
        default: undefined,
      })
      .option('config-tls-sockaddr', {
        type: 'string',
        description:
          'A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.',
      })
      .option('name', {
        type: 'string',
        description: 'The name of the device managed network. This name must be unique.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'The type of device managed network.',
        choices: ['tls'] as const,
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
      .choices('type', ['tls'] as const) as Argv<NetworksUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NetworksUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.networkId as string | undefined, 'networkId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust devices networks-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/devices/networks/${argv.networkId ?? '<networkId>'}`,
          pathParams: { networkId: String(argv.networkId ?? '') },
          body: {
            configSha256: argv.configSha256,
            configTlsSockaddr: argv.configTlsSockaddr,
            name: argv.name,
            type: argv.type,
          },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/devices/networks/${argv.networkId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configSha256 !== undefined) setNestedValue(bodyData, ['config', 'sha256'], argv.configSha256);
      if (argv.configTlsSockaddr !== undefined)
        setNestedValue(bodyData, ['config', 'tls_sockaddr'], argv.configTlsSockaddr);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.put<unknown>(`/accounts/${accountId}/devices/networks/${argv.networkId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
