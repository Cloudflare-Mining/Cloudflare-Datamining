/**
 * list command
 * @generated from apis/ai-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  gatewayId: string;
  search?: string;
  page?: number;
  'per-page'?: number;
  'order-by'?: string;
  'order-by-direction'?: string;
  filters?: string;
  'meta-info'?: boolean;
  direction?: string;
  'start-date'?: string;
  'end-date'?: string;
  'min-cost'?: number;
  'max-cost'?: number;
  'min-tokens-in'?: number;
  'max-tokens-in'?: number;
  'min-tokens-out'?: number;
  'max-tokens-out'?: number;
  'min-total-tokens'?: number;
  'max-total-tokens'?: number;
  'min-duration'?: number;
  'max-duration'?: number;
  feedback?: string;
  success?: boolean;
  cached?: boolean;
  model?: string;
  'model-type'?: string;
  provider?: string;
  'request-content-type'?: string;
  'response-content-type'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <gatewayId>',
  describe: 'Lists request/response log entries for the AI gateway with filtering and pagination.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('gatewayId', {
        type: 'string',
        description: 'gateway id',
        demandOption: true,
      })
      .option('search', {
        type: 'string',
        description: 'Search',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Per page',
        default: undefined,
      })
      .option('order-by', {
        type: 'string',
        description: 'Order by',
        choices: ['created_at', 'provider', 'model', 'model_type', 'success', 'cached'] as const,
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
      .option('meta-info', {
        type: 'boolean',
        description: 'Meta info',
        default: false,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('start-date', {
        type: 'string',
        description: 'Start date',
        default: undefined,
      })
      .option('end-date', {
        type: 'string',
        description: 'End date',
        default: undefined,
      })
      .option('min-cost', {
        type: 'number',
        description: 'Min cost',
        default: undefined,
      })
      .option('max-cost', {
        type: 'number',
        description: 'Max cost',
        default: undefined,
      })
      .option('min-tokens-in', {
        type: 'number',
        description: 'Min tokens in',
        default: undefined,
      })
      .option('max-tokens-in', {
        type: 'number',
        description: 'Max tokens in',
        default: undefined,
      })
      .option('min-tokens-out', {
        type: 'number',
        description: 'Min tokens out',
        default: undefined,
      })
      .option('max-tokens-out', {
        type: 'number',
        description: 'Max tokens out',
        default: undefined,
      })
      .option('min-total-tokens', {
        type: 'number',
        description: 'Min total tokens',
        default: undefined,
      })
      .option('max-total-tokens', {
        type: 'number',
        description: 'Max total tokens',
        default: undefined,
      })
      .option('min-duration', {
        type: 'number',
        description: 'Min duration',
        default: undefined,
      })
      .option('max-duration', {
        type: 'number',
        description: 'Max duration',
        default: undefined,
      })
      .option('feedback', {
        type: 'string',
        description: 'Feedback',
        default: undefined,
      })
      .option('success', {
        type: 'boolean',
        description: 'Success',
        default: false,
      })
      .option('cached', {
        type: 'boolean',
        description: 'Cached',
        default: false,
      })
      .option('model', {
        type: 'string',
        description: 'Model',
        default: undefined,
      })
      .option('model-type', {
        type: 'string',
        description: 'Model type',
        default: undefined,
      })
      .option('provider', {
        type: 'string',
        description: 'Provider',
        default: undefined,
      })
      .option('request-content-type', {
        type: 'string',
        description: 'Request content type',
        default: undefined,
      })
      .option('response-content-type', {
        type: 'string',
        description: 'Response content type',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');

      const params: Record<string, unknown> = {};
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.orderBy !== undefined) params['order_by'] = argv.orderBy;
      if (argv.orderByDirection !== undefined) params['order_by_direction'] = argv.orderByDirection;
      if (argv.filters !== undefined) params['filters'] = argv.filters;
      if (argv.metaInfo !== undefined) params['meta_info'] = argv.metaInfo;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.startDate !== undefined) params['start_date'] = argv.startDate;
      if (argv.endDate !== undefined) params['end_date'] = argv.endDate;
      if (argv.minCost !== undefined) params['min_cost'] = argv.minCost;
      if (argv.maxCost !== undefined) params['max_cost'] = argv.maxCost;
      if (argv.minTokensIn !== undefined) params['min_tokens_in'] = argv.minTokensIn;
      if (argv.maxTokensIn !== undefined) params['max_tokens_in'] = argv.maxTokensIn;
      if (argv.minTokensOut !== undefined) params['min_tokens_out'] = argv.minTokensOut;
      if (argv.maxTokensOut !== undefined) params['max_tokens_out'] = argv.maxTokensOut;
      if (argv.minTotalTokens !== undefined) params['min_total_tokens'] = argv.minTotalTokens;
      if (argv.maxTotalTokens !== undefined) params['max_total_tokens'] = argv.maxTotalTokens;
      if (argv.minDuration !== undefined) params['min_duration'] = argv.minDuration;
      if (argv.maxDuration !== undefined) params['max_duration'] = argv.maxDuration;
      if (argv.feedback !== undefined) params['feedback'] = argv.feedback;
      if (argv.success !== undefined) params['success'] = argv.success;
      if (argv.cached !== undefined) params['cached'] = argv.cached;
      if (argv.model !== undefined) params['model'] = argv.model;
      if (argv.modelType !== undefined) params['model_type'] = argv.modelType;
      if (argv.provider !== undefined) params['provider'] = argv.provider;
      if (argv.requestContentType !== undefined) params['request_content_type'] = argv.requestContentType;
      if (argv.responseContentType !== undefined) params['response_content_type'] = argv.responseContentType;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiGateway.logs.list(
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
