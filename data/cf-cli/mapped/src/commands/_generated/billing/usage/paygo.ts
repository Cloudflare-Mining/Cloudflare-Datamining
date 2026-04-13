/**
 * paygo command
 * @generated from apis/billing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface PaygoArgs {
  from?: string;
  to?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PaygoArgs> = {
  command: 'paygo',
  describe:
    'Returns billable usage data for PayGo (self-serve) accounts. When no query parameters are provided, returns usage for the current billing period. This endpoint is currently in beta and access is restricted to select accounts.',

  builder: (yargs: Argv): Argv<PaygoArgs> => {
    return yargs
      .option('from', {
        type: 'string',
        description: 'Defines the start date for the usage query (e.g., 2025-02-01).',
        default: undefined,
      })
      .option('to', {
        type: 'string',
        description: 'Defines the end date for the usage query (e.g., 2025-03-01).',
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
      }) as Argv<PaygoArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PaygoArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.billing.usage.paygo(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
