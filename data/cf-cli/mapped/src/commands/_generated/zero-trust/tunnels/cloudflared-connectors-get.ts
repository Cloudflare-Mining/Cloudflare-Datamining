/**
 * cloudflared-connectors-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface CloudflaredConnectorsGetArgs {
  tunnelId: string;
  connectorId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CloudflaredConnectorsGetArgs> = {
  command: 'cloudflared-connectors-get <tunnelId> <connectorId>',
  describe: 'Fetches connector and connection details for a Cloudflare Tunnel.',

  builder: (yargs: Argv): Argv<CloudflaredConnectorsGetArgs> => {
    return yargs
      .positional('tunnelId', {
        type: 'string',
        description: 'UUID of the tunnel.',
        demandOption: true,
      })
      .positional('connectorId', {
        type: 'string',
        description: 'UUID of the Cloudflare Tunnel connector.',
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
      }) as Argv<CloudflaredConnectorsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CloudflaredConnectorsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tunnelId as string | undefined, 'tunnelId');
      validateResourceId(argv.connectorId as string | undefined, 'connectorId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.tunnels.cloudflaredConnectorsGet(
        accountId,
        argv.tunnelId,
        argv.connectorId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
