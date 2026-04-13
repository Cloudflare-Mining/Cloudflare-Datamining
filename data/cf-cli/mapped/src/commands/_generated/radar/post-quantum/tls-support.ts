/**
 * tls-support command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TLSSupportArgs {
  host: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TLSSupportArgs> = {
  command: 'tls-support',
  describe:
    'Tests whether a hostname or IP address supports Post-Quantum (PQ) TLS key exchange. Returns information about the negotiated key exchange algorithm and whether it uses PQ cryptography.',

  builder: (yargs: Argv): Argv<TLSSupportArgs> => {
    return yargs
      .option('host', {
        type: 'string',
        description:
          'Hostname or IP address to test for Post-Quantum TLS support, optionally with port (defaults to 443).',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<TLSSupportArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TLSSupportArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.host !== undefined) params['host'] = argv.host;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.postquantum.tlsSupport(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
