/**
 * routes-create command
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

interface RoutesCreateArgs {
  comment?: string;
  network: string;
  'virtual-network-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RoutesCreateArgs> = {
  command: 'routes-create',
  describe: 'Routes a private network through a Cloudflare Tunnel.',

  builder: (yargs: Argv): Argv<RoutesCreateArgs> => {
    return yargs
      .option('comment', {
        type: 'string',
        description: 'Optional remark describing the route.',
        default: undefined,
      })
      .option('network', {
        type: 'string',
        description: 'The private IPv4 or IPv6 range connected by the route, in CIDR notation.',
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
      }) as Argv<RoutesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks routes-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/teamnet/routes`,
          pathParams: {},
          body: { comment: argv.comment, network: argv.network, virtualNetworkId: argv.virtualNetworkId },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/teamnet/routes`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.network !== undefined) setNestedValue(bodyData, ['network'], argv.network);
      if (argv.virtualNetworkId !== undefined) setNestedValue(bodyData, ['virtual_network_id'], argv.virtualNetworkId);
      const result = await client.post<unknown>(`/accounts/${accountId}/teamnet/routes`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
