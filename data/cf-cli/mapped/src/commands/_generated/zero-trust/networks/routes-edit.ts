/**
 * routes-edit command
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

interface RoutesEditArgs {
  routeId: string;
  comment?: string;
  network?: string;
  'virtual-network-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RoutesEditArgs> = {
  command: 'routes-edit <routeId>',
  describe:
    'Updates an existing private network route in an account. The fields that are meant to be updated should be provided in the body of the request.',

  builder: (yargs: Argv): Argv<RoutesEditArgs> => {
    return yargs
      .positional('routeId', {
        type: 'string',
        description: 'UUID of the route.',
        demandOption: true,
      })
      .option('comment', {
        type: 'string',
        description: 'Optional remark describing the route.',
        default: undefined,
      })
      .option('network', {
        type: 'string',
        description: 'The private IPv4 or IPv6 range connected by the route, in CIDR notation.',
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
      }) as Argv<RoutesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.routeId as string | undefined, 'routeId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks routes-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/teamnet/routes/${argv.routeId ?? '<routeId>'}`,
          pathParams: { routeId: String(argv.routeId ?? '') },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/teamnet/routes/${argv.routeId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.network !== undefined) setNestedValue(bodyData, ['network'], argv.network);
      if (argv.virtualNetworkId !== undefined) setNestedValue(bodyData, ['virtual_network_id'], argv.virtualNetworkId);
      const result = await client.patch<unknown>(`/accounts/${accountId}/teamnet/routes/${argv.routeId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
