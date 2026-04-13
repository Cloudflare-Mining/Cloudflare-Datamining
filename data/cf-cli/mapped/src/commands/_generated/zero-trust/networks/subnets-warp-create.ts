/**
 * subnets-warp-create command
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

interface SubnetsWarpCreateArgs {
  comment?: string;
  'is-default-network'?: boolean;
  name: string;
  network: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SubnetsWarpCreateArgs> = {
  command: 'subnets-warp-create',
  describe:
    'Create a WARP IP assignment subnet. Currently, only IPv4 subnets can be created. **Network constraints:** - The network must be within one of the following private IP ranges: - \`10.0.0.0/8\` (RFC 1918) - \`172.16.0.0/12\` (RFC 1918) - \`192.168.0.0/16\` (RFC 1918) - \`100.64.0.0/10\` (RFC 6598 - CGNAT) - The subnet must have a prefix length of \`/24\` or larger (e.g., \`/16\`, \`/20\`, \`/24\` are valid; \`/25\`, \`/28\` are not)',

  builder: (yargs: Argv): Argv<SubnetsWarpCreateArgs> => {
    return yargs
      .option('comment', {
        type: 'string',
        description: 'An optional description of the subnet.',
        default: undefined,
      })
      .option('is-default-network', {
        type: 'boolean',
        description:
          'If \`true\`, this is the default subnet for the account. There can only be one default subnet per account.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the subnet.',
      })
      .option('network', {
        type: 'string',
        description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.',
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
      }) as Argv<SubnetsWarpCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubnetsWarpCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks subnets-warp-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/subnets/warp`,
          pathParams: {},
          body: {
            comment: argv.comment,
            isDefaultNetwork: argv.isDefaultNetwork,
            name: argv.name,
            network: argv.network,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.isDefaultNetwork !== undefined) setNestedValue(bodyData, ['is_default_network'], argv.isDefaultNetwork);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.network !== undefined) setNestedValue(bodyData, ['network'], argv.network);
      const result = await client.post<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
