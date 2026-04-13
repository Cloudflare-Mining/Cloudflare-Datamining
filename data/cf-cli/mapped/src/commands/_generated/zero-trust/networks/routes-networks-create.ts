/**
 * routes-networks-create command
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

interface RoutesNetworksCreateArgs {
  ipNetworkEncoded: string;
  comment?: string;
  'virtual-network-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RoutesNetworksCreateArgs> = {
  command: 'routes-networks-create <ipNetworkEncoded>',
  describe:
    'Routes a private network through a Cloudflare Tunnel. The CIDR in \`ip_network_encoded\` must be written in URL-encoded format.',

  builder: (yargs: Argv): Argv<RoutesNetworksCreateArgs> => {
    return yargs
      .positional('ipNetworkEncoded', {
        type: 'string',
        description: 'IP/CIDR range in URL-encoded format',
        demandOption: true,
      })
      .option('comment', {
        type: 'string',
        description: 'Optional remark describing the route.',
        default: undefined,
      })
      .option('virtual-network-id', {
        type: 'string',
        description: 'UUID of the virtual network.',
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
      }) as Argv<RoutesNetworksCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesNetworksCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ipNetworkEncoded as string | undefined, 'ipNetworkEncoded');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks routes-networks-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/teamnet/routes/network/${argv.ipNetworkEncoded ?? '<ipNetworkEncoded>'}`,
          pathParams: { ipNetworkEncoded: String(argv.ipNetworkEncoded ?? '') },
          body: { comment: argv.comment, virtualNetworkId: argv.virtualNetworkId },
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/teamnet/routes/network/${argv.ipNetworkEncoded}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.virtualNetworkId !== undefined) setNestedValue(bodyData, ['virtual_network_id'], argv.virtualNetworkId);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/teamnet/routes/network/${argv.ipNetworkEncoded}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
