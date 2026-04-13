/**
 * message-get command
 * @generated from apis/cloudforce-one/schema.ts
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

interface MessageGetArgs {
  requestId: string;
  page: number;
  'per-page': number;
  'sort-by'?: string;
  'sort-order'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MessageGetArgs> = {
  command: 'message-get <requestId>',
  describe: 'Lists messages in a Cloudforce One intelligence request conversation.',

  builder: (yargs: Argv): Argv<MessageGetArgs> => {
    return yargs
      .positional('requestId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of results.',
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page.',
      })
      .option('sort-by', {
        type: 'string',
        description: 'Field to sort results by.',
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort order (asc or desc).',
        choices: ['asc', 'desc'] as const,
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
      })
      .choices('sort-order', ['asc', 'desc'] as const) as Argv<MessageGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MessageGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.requestId as string | undefined, 'requestId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one requests message-get',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/requests/${argv.requestId ?? '<requestId>'}/message`,
          pathParams: { requestId: String(argv.requestId ?? '') },
          body: { page: argv.page, perPage: argv.perPage, sortBy: argv.sortBy, sortOrder: argv.sortOrder },
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
          `/accounts/${accountId}/cloudforce-one/requests/${argv.requestId}/message`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.page !== undefined) setNestedValue(bodyData, ['page'], argv.page);
      if (argv.perPage !== undefined) setNestedValue(bodyData, ['per_page'], argv.perPage);
      if (argv.sortBy !== undefined) setNestedValue(bodyData, ['sort_by'], argv.sortBy);
      if (argv.sortOrder !== undefined) setNestedValue(bodyData, ['sort_order'], argv.sortOrder);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/requests/${argv.requestId}/message`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
