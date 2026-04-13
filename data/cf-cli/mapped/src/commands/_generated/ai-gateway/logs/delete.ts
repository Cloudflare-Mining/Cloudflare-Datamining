/**
 * delete command
 * @generated from apis/ai-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DeleteArgs {
  gatewayId: string;
  'order-by'?: string;
  'order-by-direction'?: string;
  filters?: string;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <gatewayId>',
  describe: 'Deletes gateway log entries matching the specified criteria.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('gatewayId', {
        type: 'string',
        description: 'gateway id',
        demandOption: true,
      })
      .option('order-by', {
        type: 'string',
        description: 'Order by',
        choices: [
          'created_at',
          'provider',
          'model',
          'model_type',
          'success',
          'cached',
          'cost',
          'tokens_in',
          'tokens_out',
          'duration',
          'feedback',
        ] as const,
        default: undefined,
      })
      .option('order-by-direction', {
        type: 'string',
        description: 'Order by direction',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('filters', {
        type: 'string',
        description: 'Filters',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');

      const params: Record<string, unknown> = {};
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.orderByDirection !== undefined) params['order_by_direction'] = argv.orderByDirection;
      if (argv.filters !== undefined) params['filters'] = argv.filters;
      if (argv.limit !== undefined) params['limit'] = argv.limit;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-gateway logs delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-gateway/gateways/${argv.gatewayId ?? '<gatewayId>'}/logs`,
          pathParams: { gatewayId: String(argv.gatewayId ?? '') },
          body: { ...params },
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

      const result = await client.aiGateway.logs.delete(
        accountId,
        argv.gatewayId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
