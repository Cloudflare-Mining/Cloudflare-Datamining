/**
 * create command
 * @generated from apis/network-interconnects/schema.ts
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

interface CreateArgs {
  account: string;
  'bgp-customer-asn': number;
  'bgp-extra-prefixes': string;
  'bgp-md5-key'?: string;
  interconnect: string;
  'magic-conduit-name': string;
  'magic-description': string;
  'magic-mtu': number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Creates a new Cloud Network Interconnect (CNI) for private network connectivity between Cloudflare and your infrastructure. CNIs enable dedicated, high-performance network links.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('account', {
        type: 'string',
        description: 'Customer account tag',
      })
      .option('bgp-customer-asn', {
        type: 'number',
        description: 'ASN used on the customer end of the BGP session',
      })
      .option('bgp-extra-prefixes', {
        type: 'string',
        description: "Extra set of static prefixes to advertise to the customer's end of the session",
      })
      .option('bgp-md5-key', {
        type: 'string',
        description:
          'MD5 key to use for session authentication.  Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the key is not treated as a secret value. This is *only* supported for preventing misconfiguration, not for defending against malicious attacks.  The MD5 key, if set, must be of non-zero length and consist only of the following types of character:  * ASCII alphanumerics: \`[a-zA-Z0-9]\` * Special characters in the set \`\'!@#$%^&*()+[]{}<>/.,;:_-~\`= \\|\`  In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A), quotation mark (\`"\`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed (0x0C), and the question mark (\`?\`). Requests specifying an MD5 key with one or more of these disallowed characters will be rejected.',
        default: undefined,
      })
      .option('interconnect', {
        type: 'string',
        description: 'The interconnect field',
      })
      .option('magic-conduit-name', {
        type: 'string',
        description: 'The magic.conduit_name field',
      })
      .option('magic-description', {
        type: 'string',
        description: 'The magic.description field',
      })
      .option('magic-mtu', {
        type: 'number',
        description: 'The magic.mtu field',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf network-interconnects cnis create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cni/cnis`,
          pathParams: {},
          body: {
            account: argv.account,
            bgpCustomerAsn: argv.bgpCustomerAsn,
            bgpExtraPrefixes: argv.bgpExtraPrefixes,
            bgpMd5Key: argv.bgpMd5Key,
            interconnect: argv.interconnect,
            magicConduitName: argv.magicConduitName,
            magicDescription: argv.magicDescription,
            magicMtu: argv.magicMtu,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cni/cnis`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.account !== undefined) setNestedValue(bodyData, ['account'], argv.account);
      if (argv.bgpCustomerAsn !== undefined) setNestedValue(bodyData, ['bgp', 'customer_asn'], argv.bgpCustomerAsn);
      if (argv.bgpExtraPrefixes !== undefined)
        setNestedValue(bodyData, ['bgp', 'extra_prefixes'], argv.bgpExtraPrefixes);
      if (argv.bgpMd5Key !== undefined) setNestedValue(bodyData, ['bgp', 'md5_key'], argv.bgpMd5Key);
      if (argv.interconnect !== undefined) setNestedValue(bodyData, ['interconnect'], argv.interconnect);
      if (argv.magicConduitName !== undefined)
        setNestedValue(bodyData, ['magic', 'conduit_name'], argv.magicConduitName);
      if (argv.magicDescription !== undefined)
        setNestedValue(bodyData, ['magic', 'description'], argv.magicDescription);
      if (argv.magicMtu !== undefined) setNestedValue(bodyData, ['magic', 'mtu'], argv.magicMtu);
      const result = await client.post<unknown>(`/accounts/${accountId}/cni/cnis`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
