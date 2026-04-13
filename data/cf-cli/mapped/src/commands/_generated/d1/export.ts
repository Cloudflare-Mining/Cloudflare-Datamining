/**
 * export command
 * @generated from apis/d1/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface ExportArgs {
  databaseId: string;
  'current-bookmark'?: string;
  'dump-options-no-data'?: boolean;
  'dump-options-no-schema'?: boolean;
  'dump-options-tables'?: string;
  'output-format': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ExportArgs> = {
  command: 'export <databaseId>',
  describe:
    'Returns a URL where the SQL contents of your D1 can be downloaded. Note: this process may take some time for larger DBs, during which your D1 will be unavailable to serve queries. To avoid blocking your DB unnecessarily, an in-progress export must be continually polled or will automatically cancel.',

  builder: (yargs: Argv): Argv<ExportArgs> => {
    return yargs
      .positional('databaseId', {
        type: 'string',
        description: 'D1 database identifier (UUID).',
        demandOption: true,
      })
      .option('current-bookmark', {
        type: 'string',
        description:
          'To poll an in-progress export, provide the current bookmark (returned by your first polling response)',
        default: undefined,
      })
      .option('dump-options-no-data', {
        type: 'boolean',
        description: 'Export only the table definitions, not their contents',
        default: false,
      })
      .option('dump-options-no-schema', {
        type: 'boolean',
        description: "Export only each table's contents, not its definition",
        default: false,
      })
      .option('dump-options-tables', {
        type: 'string',
        description:
          'Filter the export to just one or more tables. Passing an empty array is the same as not passing anything and means: export all tables.',
        default: undefined,
      })
      .option('output-format', {
        type: 'string',
        description: 'Specifies that you will poll this endpoint until the export completes',
        choices: ['polling'] as const,
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
      .choices('output-format', ['polling'] as const) as Argv<ExportArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ExportArgs>): Promise<void> => {
    try {
      validateResourceId(argv.databaseId as string | undefined, 'databaseId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf d1 export',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/d1/database/${argv.databaseId ?? '<databaseId>'}/export`,
          pathParams: { databaseId: String(argv.databaseId ?? '') },
          body: {
            currentBookmark: argv.currentBookmark,
            dumpOptionsNoData: argv.dumpOptionsNoData,
            dumpOptionsNoSchema: argv.dumpOptionsNoSchema,
            dumpOptionsTables: argv.dumpOptionsTables,
            outputFormat: argv.outputFormat,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/d1/database/${argv.databaseId}/export`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.currentBookmark !== undefined) setNestedValue(bodyData, ['current_bookmark'], argv.currentBookmark);
      if (argv.dumpOptionsNoData !== undefined)
        setNestedValue(bodyData, ['dump_options', 'no_data'], argv.dumpOptionsNoData);
      if (argv.dumpOptionsNoSchema !== undefined)
        setNestedValue(bodyData, ['dump_options', 'no_schema'], argv.dumpOptionsNoSchema);
      if (argv.dumpOptionsTables !== undefined)
        setNestedValue(bodyData, ['dump_options', 'tables'], argv.dumpOptionsTables);
      if (argv.outputFormat !== undefined) setNestedValue(bodyData, ['output_format'], argv.outputFormat);
      const result = await client.post<unknown>(`/accounts/${accountId}/d1/database/${argv.databaseId}/export`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
