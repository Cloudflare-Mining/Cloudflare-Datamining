/**
 * raw-create command
 * @generated from apis/d1/schema.ts
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

interface RawCreateArgs {
  databaseId: string;
  params?: string;
  sql?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, RawCreateArgs> = {
  command: 'raw-create <databaseId>',
  describe:
    'Returns the query result rows as arrays rather than objects. This is a performance-optimized version of the /query endpoint.',

  builder: (yargs: Argv): Argv<RawCreateArgs> => {
    return yargs
      .positional('databaseId', {
        type: 'string',
        description: 'D1 database identifier (UUID).',
        demandOption: true,
      })
      .option('params', {
        type: 'string',
        description: 'The params field',
        default: undefined,
      })
      .option('sql', {
        type: 'string',
        description:
          'Your SQL query. Supports multiple statements, joined by semicolons, which will be executed as a batch.',
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
      }) as Argv<RawCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RawCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.databaseId as string | undefined, 'databaseId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf d1 database raw-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/d1/database/${argv.databaseId ?? '<databaseId>'}/raw`,
          pathParams: { databaseId: String(argv.databaseId ?? '') },
          body: { params: argv.params, sql: argv.sql },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/d1/database/${argv.databaseId}/raw`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.params !== undefined) setNestedValue(bodyData, ['params'], argv.params);
      if (argv.sql !== undefined) setNestedValue(bodyData, ['sql'], argv.sql);
      const result = await client.post<unknown>(`/accounts/${accountId}/d1/database/${argv.databaseId}/raw`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
