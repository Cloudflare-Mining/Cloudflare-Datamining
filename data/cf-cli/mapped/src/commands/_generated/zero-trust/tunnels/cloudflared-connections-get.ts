/**
 * cloudflared-connections-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface CloudflaredConnectionsGetArgs {
  tunnelId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CloudflaredConnectionsGetArgs> = {
  command: 'cloudflared-connections-get <tunnelId>',
  describe: 'Fetches connection details for a Cloudflare Tunnel.',

  builder: (yargs: Argv): Argv<CloudflaredConnectionsGetArgs> => {
    return yargs
      .positional('tunnelId', {
        type: 'string',
        description: 'UUID of the tunnel.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<CloudflaredConnectionsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CloudflaredConnectionsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tunnelId as string | undefined, 'tunnelId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.tunnels.cloudflaredConnectionsGet(accountId, argv.tunnelId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
