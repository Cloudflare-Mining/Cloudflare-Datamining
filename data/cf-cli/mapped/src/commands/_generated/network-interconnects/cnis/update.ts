/**
 * update command
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

interface UpdateArgs {
  cni: string;
  account: string;
  'bgp-customer-asn': number;
  'bgp-extra-prefixes': string;
  'bgp-md5-key'?: string;
  'cust-ip': string;
  id: string;
  interconnect: string;
  'magic-conduit-name': string;
  'magic-description': string;
  'magic-mtu': number;
  'p2p-ip': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <cni>',
  describe:
    'Updates the configuration of an existing Cloud Network Interconnect (CNI), including connection parameters and routing settings.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('cni', {
        type: 'string',
        description: 'CNI ID to retrieve information about',
        demandOption: true,
      })
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
      .option('cust-ip', {
        type: 'string',
        description:
          'Customer end of the point-to-point link  This should always be inside the same prefix as \`p2p_ip\`.',
      })
      .option('id', {
        type: 'string',
        description: 'The id field',
      })
      .option('interconnect', {
        type: 'string',
        description: 'Interconnect identifier hosting this CNI',
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
      .option('p2p-ip', {
        type: 'string',
        description: 'Cloudflare end of the point-to-point link',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.cni as string | undefined, 'cni');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf network-interconnects cnis update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cni/cnis/${argv.cni ?? '<cni>'}`,
          pathParams: { cni: String(argv.cni ?? '') },
          body: {
            account: argv.account,
            bgpCustomerAsn: argv.bgpCustomerAsn,
            bgpExtraPrefixes: argv.bgpExtraPrefixes,
            bgpMd5Key: argv.bgpMd5Key,
            custIp: argv.custIp,
            id: argv.id,
            interconnect: argv.interconnect,
            magicConduitName: argv.magicConduitName,
            magicDescription: argv.magicDescription,
            magicMtu: argv.magicMtu,
            p2pIp: argv.p2pIp,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/cni/cnis/${argv.cni}`, { body: bodyData });
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
      if (argv.custIp !== undefined) setNestedValue(bodyData, ['cust_ip'], argv.custIp);
      if (argv.id !== undefined) setNestedValue(bodyData, ['id'], argv.id);
      if (argv.interconnect !== undefined) setNestedValue(bodyData, ['interconnect'], argv.interconnect);
      if (argv.magicConduitName !== undefined)
        setNestedValue(bodyData, ['magic', 'conduit_name'], argv.magicConduitName);
      if (argv.magicDescription !== undefined)
        setNestedValue(bodyData, ['magic', 'description'], argv.magicDescription);
      if (argv.magicMtu !== undefined) setNestedValue(bodyData, ['magic', 'mtu'], argv.magicMtu);
      if (argv.p2pIp !== undefined) setNestedValue(bodyData, ['p2p_ip'], argv.p2pIp);
      const result = await client.put<unknown>(`/accounts/${accountId}/cni/cnis/${argv.cni}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
