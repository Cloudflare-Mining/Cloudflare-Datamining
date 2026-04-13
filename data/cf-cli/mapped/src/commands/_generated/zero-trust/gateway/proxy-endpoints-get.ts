/**
 * proxy-endpoints-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ProxyEndpointsGetArgs {
  proxyEndpointId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ProxyEndpointsGetArgs> = {
  command: 'proxy-endpoints-get <proxyEndpointId>',
  describe: 'Get a single Zero Trust Gateway proxy endpoint.',

  builder: (yargs: Argv): Argv<ProxyEndpointsGetArgs> => {
    return yargs
      .positional('proxyEndpointId', {
        type: 'string',
        description: 'Proxy endpoint ID',
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
      }) as Argv<ProxyEndpointsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ProxyEndpointsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.proxyEndpointId as string | undefined, 'proxyEndpointId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.gateway.proxyEndpointsGet(argv.proxyEndpointId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
