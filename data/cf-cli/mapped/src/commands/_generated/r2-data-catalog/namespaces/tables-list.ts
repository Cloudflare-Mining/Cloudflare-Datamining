/**
 * tables-list command
 * @generated from apis/r2-data-catalog/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TablesListArgs {
  bucketName: string;
  namespace: string;
  'page-token'?: string;
  'page-size'?: number;
  'return-uuids'?: boolean;
  'return-details'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TablesListArgs> = {
  command: 'tables-list <bucketName> <namespace>',
  describe:
    'Returns a list of tables in the specified namespace within an R2 catalog. Supports pagination for efficient traversal of large table collections.',

  builder: (yargs: Argv): Argv<TablesListArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Specifies the R2 bucket name.',
        demandOption: true,
      })
      .positional('namespace', {
        type: 'string',
        description:
          'The namespace identifier. For nested namespaces, use %1F as separator (e.g., "bronze%1Fanalytics").',
        demandOption: true,
      })
      .option('page-token', {
        type: 'string',
        description: 'Opaque pagination token from a previous response. Use this to fetch the next page of results.',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'Maximum number of tables to return per page. Defaults to 100, maximum 1000.',
        default: undefined,
      })
      .option('return-uuids', {
        type: 'boolean',
        description: 'Whether to include table UUIDs in the response. Set to true to receive the table_uuids array.',
        default: false,
      })
      .option('return-details', {
        type: 'boolean',
        description:
          'Whether to include additional metadata (timestamps, locations). When true, response includes created_at, updated_at, metadata_locations, and locations arrays.',
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
      }) as Argv<TablesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TablesListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      validateResourceId(argv.namespace as string | undefined, 'namespace');

      const params: Record<string, unknown> = {};
      if (argv.pageToken !== undefined) params['page_token'] = argv.pageToken;
      if (argv.pageSize !== undefined) params['page_size'] = argv.pageSize;
      if (argv.returnUuids !== undefined) params['return_uuids'] = argv.returnUuids;
      if (argv.returnDetails !== undefined) params['return_details'] = argv.returnDetails;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.r2DataCatalog.namespaces.tablesList(
        accountId,
        argv.bucketName,
        argv.namespace,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
