/**
 * create command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  gatewayId: string;
  alias: string;
  'default-config': boolean;
  'provider-slug': string;
  'rate-limit'?: number;
  'rate-limit-period'?: number;
  secret: string;
  'secret-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <gatewayId>',
  describe: 'Creates a new AI Gateway.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('gatewayId', {
        type: 'string',
        description: 'gateway id',
        demandOption: true,
      })
      .option('alias', {
        type: 'string',
        description: 'The alias field',
      })
      .option('default-config', {
        type: 'boolean',
        description: 'The default_config field',
      })
      .option('provider-slug', {
        type: 'string',
        description: 'The provider_slug field',
      })
      .option('rate-limit', {
        type: 'number',
        description: 'The rate_limit field',
        default: undefined,
      })
      .option('rate-limit-period', {
        type: 'number',
        description: 'The rate_limit_period field',
        default: undefined,
      })
      .option('secret', {
        type: 'string',
        description: 'The secret field',
      })
      .option('secret-id', {
        type: 'string',
        description: 'The secret_id field',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-gateway provider-configs create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-gateway/gateways/${argv.gatewayId ?? '<gatewayId>'}/provider_configs`,
          pathParams: { gatewayId: String(argv.gatewayId ?? '') },
          body: {
            alias: argv.alias,
            defaultConfig: argv.defaultConfig,
            providerSlug: argv.providerSlug,
            rateLimit: argv.rateLimit,
            rateLimitPeriod: argv.rateLimitPeriod,
            secret: argv.secret,
            secretId: argv.secretId,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/ai-gateway/gateways/${argv.gatewayId}/provider_configs`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.alias !== undefined) setNestedValue(bodyData, ['alias'], argv.alias);
      if (argv.defaultConfig !== undefined) setNestedValue(bodyData, ['default_config'], argv.defaultConfig);
      if (argv.providerSlug !== undefined) setNestedValue(bodyData, ['provider_slug'], argv.providerSlug);
      if (argv.rateLimit !== undefined) setNestedValue(bodyData, ['rate_limit'], argv.rateLimit);
      if (argv.rateLimitPeriod !== undefined) setNestedValue(bodyData, ['rate_limit_period'], argv.rateLimitPeriod);
      if (argv.secret !== undefined) setNestedValue(bodyData, ['secret'], argv.secret);
      if (argv.secretId !== undefined) setNestedValue(bodyData, ['secret_id'], argv.secretId);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/ai-gateway/gateways/${argv.gatewayId}/provider_configs`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
