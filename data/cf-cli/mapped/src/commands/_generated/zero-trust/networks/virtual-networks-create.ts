/**
 * virtual-networks-create command
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

interface VirtualNetworksCreateArgs {
  comment?: string;
  'is-default'?: boolean;
  'is-default-network'?: boolean;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, VirtualNetworksCreateArgs> = {
  command: 'virtual-networks-create',
  describe: 'Adds a new virtual network to an account.',

  builder: (yargs: Argv): Argv<VirtualNetworksCreateArgs> => {
    return yargs
      .option('comment', {
        type: 'string',
        description: 'Optional remark describing the virtual network.',
        default: undefined,
      })
      .option('is-default', {
        type: 'boolean',
        description: 'If \`true\`, this virtual network is the default for the account.',
        default: false,
      })
      .option('is-default-network', {
        type: 'boolean',
        description: 'If \`true\`, this virtual network is the default for the account.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
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
      }) as Argv<VirtualNetworksCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VirtualNetworksCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks virtual-networks-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/teamnet/virtual_networks`,
          pathParams: {},
          body: {
            comment: argv.comment,
            isDefault: argv.isDefault,
            isDefaultNetwork: argv.isDefaultNetwork,
            name: argv.name,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/teamnet/virtual_networks`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.isDefault !== undefined) setNestedValue(bodyData, ['is_default'], argv.isDefault);
      if (argv.isDefaultNetwork !== undefined) setNestedValue(bodyData, ['is_default_network'], argv.isDefaultNetwork);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/teamnet/virtual_networks`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
