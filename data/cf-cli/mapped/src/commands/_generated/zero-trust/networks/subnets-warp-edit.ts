/**
 * subnets-warp-edit command
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

interface SubnetsWarpEditArgs {
  subnetId: string;
  comment?: string;
  'is-default-network'?: boolean;
  name?: string;
  network?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SubnetsWarpEditArgs> = {
  command: 'subnets-warp-edit <subnetId>',
  describe:
    'Updates a WARP IP assignment subnet. **Update constraints:** - The \`network\` field cannot be modified for WARP subnets. Only \`name\`, \`comment\`, and \`is_default_network\` can be updated. - IPv6 subnets cannot be updated',

  builder: (yargs: Argv): Argv<SubnetsWarpEditArgs> => {
    return yargs
      .positional('subnetId', {
        type: 'string',
        description: 'The UUID of the subnet.',
        demandOption: true,
      })
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
        default: undefined,
      })
      .option('network', {
        type: 'string',
        description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.',
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
      }) as Argv<SubnetsWarpEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubnetsWarpEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.subnetId as string | undefined, 'subnetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks subnets-warp-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/subnets/warp/${argv.subnetId ?? '<subnetId>'}`,
          pathParams: { subnetId: String(argv.subnetId ?? '') },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp/${argv.subnetId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.isDefaultNetwork !== undefined) setNestedValue(bodyData, ['is_default_network'], argv.isDefaultNetwork);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.network !== undefined) setNestedValue(bodyData, ['network'], argv.network);
      const result = await client.patch<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp/${argv.subnetId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
