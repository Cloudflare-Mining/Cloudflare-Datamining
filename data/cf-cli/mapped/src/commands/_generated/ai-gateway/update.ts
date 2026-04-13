/**
 * update command
 * @generated from apis/ai-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  id: string;
  authentication?: boolean;
  'cache-invalidate-on-update': boolean;
  'cache-ttl': number;
  'collect-logs': boolean;
  'log-management'?: number;
  'log-management-strategy'?: string;
  logpush?: boolean;
  'logpush-public-key'?: string;
  'rate-limiting-interval': number;
  'rate-limiting-limit': number;
  'rate-limiting-technique'?: string;
  'retry-backoff'?: string;
  'retry-delay'?: number;
  'retry-max-attempts'?: number;
  'store-id'?: string;
  'stripe-authorization': string;
  'workers-ai-billing-mode'?: string;
  zdr?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <id>',
  describe: 'Updates an existing AI Gateway dataset.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'gateway id',
        demandOption: true,
      })
      .option('authentication', {
        type: 'boolean',
        description: 'The authentication field',
        default: false,
      })
      .option('cache-invalidate-on-update', {
        type: 'boolean',
        description: 'The cache_invalidate_on_update field',
      })
      .option('cache-ttl', {
        type: 'number',
        description: 'The cache_ttl field',
      })
      .option('collect-logs', {
        type: 'boolean',
        description: 'The collect_logs field',
      })
      .option('log-management', {
        type: 'number',
        description: 'The log_management field',
        default: undefined,
      })
      .option('log-management-strategy', {
        type: 'string',
        description: 'The log_management_strategy field',
        choices: ['STOP_INSERTING', 'DELETE_OLDEST'] as const,
        default: undefined,
      })
      .option('logpush', {
        type: 'boolean',
        description: 'The logpush field',
        default: false,
      })
      .option('logpush-public-key', {
        type: 'string',
        description: 'The logpush_public_key field',
        default: undefined,
      })
      .option('rate-limiting-interval', {
        type: 'number',
        description: 'The rate_limiting_interval field',
      })
      .option('rate-limiting-limit', {
        type: 'number',
        description: 'The rate_limiting_limit field',
      })
      .option('rate-limiting-technique', {
        type: 'string',
        description: 'The rate_limiting_technique field',
        choices: ['fixed', 'sliding'] as const,
        default: undefined,
      })
      .option('retry-backoff', {
        type: 'string',
        description: 'Backoff strategy for retry delays',
        choices: ['constant', 'linear', 'exponential'] as const,
        default: undefined,
      })
      .option('retry-delay', {
        type: 'number',
        description: 'Delay between retry attempts in milliseconds (0-5000)',
        default: undefined,
      })
      .option('retry-max-attempts', {
        type: 'number',
        description: 'Maximum number of retry attempts for failed requests (1-5)',
        default: undefined,
      })
      .option('store-id', {
        type: 'string',
        description: 'The store_id field',
        default: undefined,
      })
      .option('stripe-authorization', {
        type: 'string',
        description: 'The stripe.authorization field',
      })
      .option('workers-ai-billing-mode', {
        type: 'string',
        description:
          "Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.",
        choices: ['postpaid'] as const,
        default: undefined,
      })
      .option('zdr', {
        type: 'boolean',
        description: 'The zdr field',
        default: false,
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
      })
      .choices('log-management-strategy', ['STOP_INSERTING', 'DELETE_OLDEST'] as const)
      .choices('rate-limiting-technique', ['fixed', 'sliding'] as const)
      .choices('retry-backoff', ['constant', 'linear', 'exponential'] as const)
      .choices('workers-ai-billing-mode', ['postpaid'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-gateway update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-gateway/gateways/${argv.id ?? '<id>'}`,
          pathParams: { id: String(argv.id ?? '') },
          body: {
            authentication: argv.authentication,
            cacheInvalidateOnUpdate: argv.cacheInvalidateOnUpdate,
            cacheTtl: argv.cacheTtl,
            collectLogs: argv.collectLogs,
            logManagement: argv.logManagement,
            logManagementStrategy: argv.logManagementStrategy,
            logpush: argv.logpush,
            logpushPublicKey: argv.logpushPublicKey,
            rateLimitingInterval: argv.rateLimitingInterval,
            rateLimitingLimit: argv.rateLimitingLimit,
            rateLimitingTechnique: argv.rateLimitingTechnique,
            retryBackoff: argv.retryBackoff,
            retryDelay: argv.retryDelay,
            retryMaxAttempts: argv.retryMaxAttempts,
            storeId: argv.storeId,
            stripeAuthorization: argv.stripeAuthorization,
            workersAiBillingMode: argv.workersAiBillingMode,
            zdr: argv.zdr,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${argv.id}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.authentication !== undefined) setNestedValue(bodyData, ['authentication'], argv.authentication);
      if (argv.cacheInvalidateOnUpdate !== undefined)
        setNestedValue(bodyData, ['cache_invalidate_on_update'], argv.cacheInvalidateOnUpdate);
      if (argv.cacheTtl !== undefined) setNestedValue(bodyData, ['cache_ttl'], argv.cacheTtl);
      if (argv.collectLogs !== undefined) setNestedValue(bodyData, ['collect_logs'], argv.collectLogs);
      if (argv.logManagement !== undefined) setNestedValue(bodyData, ['log_management'], argv.logManagement);
      if (argv.logManagementStrategy !== undefined)
        setNestedValue(bodyData, ['log_management_strategy'], argv.logManagementStrategy);
      if (argv.logpush !== undefined) setNestedValue(bodyData, ['logpush'], argv.logpush);
      if (argv.logpushPublicKey !== undefined) setNestedValue(bodyData, ['logpush_public_key'], argv.logpushPublicKey);
      if (argv.rateLimitingInterval !== undefined)
        setNestedValue(bodyData, ['rate_limiting_interval'], argv.rateLimitingInterval);
      if (argv.rateLimitingLimit !== undefined)
        setNestedValue(bodyData, ['rate_limiting_limit'], argv.rateLimitingLimit);
      if (argv.rateLimitingTechnique !== undefined)
        setNestedValue(bodyData, ['rate_limiting_technique'], argv.rateLimitingTechnique);
      if (argv.retryBackoff !== undefined) setNestedValue(bodyData, ['retry_backoff'], argv.retryBackoff);
      if (argv.retryDelay !== undefined) setNestedValue(bodyData, ['retry_delay'], argv.retryDelay);
      if (argv.retryMaxAttempts !== undefined) setNestedValue(bodyData, ['retry_max_attempts'], argv.retryMaxAttempts);
      if (argv.storeId !== undefined) setNestedValue(bodyData, ['store_id'], argv.storeId);
      if (argv.stripeAuthorization !== undefined)
        setNestedValue(bodyData, ['stripe', 'authorization'], argv.stripeAuthorization);
      if (argv.workersAiBillingMode !== undefined)
        setNestedValue(bodyData, ['workers_ai_billing_mode'], argv.workersAiBillingMode);
      if (argv.zdr !== undefined) setNestedValue(bodyData, ['zdr'], argv.zdr);
      const result = await client.put<unknown>(`/accounts/${accountId}/ai-gateway/gateways/${argv.id}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
