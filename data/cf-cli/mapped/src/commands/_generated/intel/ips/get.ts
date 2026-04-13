/**
 * get command
 * @generated from apis/intel/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetArgs {
  ipv4?: string;
  ipv6?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get',
  describe:
    'Gets the geolocation, ASN, infrastructure type of the ASN, and any security threat categories of an IP address. **Must provide ip query parameters.** For example, \`/intel/ip?ipv4=1.1.1.1\` or \`/intel/ip?ipv6=2001:db8::1\`.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .option('ipv4', {
        type: 'string',
        description: 'Ipv4',
        default: undefined,
      })
      .option('ipv6', {
        type: 'string',
        description: 'Ipv6',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.ipv4 !== undefined) params['ipv4'] = argv.ipv4;
      if (argv.ipv6 !== undefined) params['ipv6'] = argv.ipv6;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.intel.ips.get(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
