/**
 * list command
 * @generated from apis/r2-data-catalog/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ListArgs {
  bucketName: string;
  'page-token'?: string;
  'page-size'?: number;
  parent?: string;
  'return-uuids'?: boolean;
  'return-details'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list <bucketName>',
  describe:
    'Returns a list of namespaces in the specified R2 catalog. Supports hierarchical filtering and pagination for efficient traversal of large namespace hierarchies.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Specifies the R2 bucket name.',
        demandOption: true,
      })
      .option('page-token', {
        type: 'string',
        description: 'Opaque pagination token from a previous response. Use this to fetch the next page of results.',
        default: undefined,
      })
      .option('page-size', {
        type: 'number',
        description: 'Maximum number of namespaces to return per page. Defaults to 100, maximum 1000.',
        default: undefined,
      })
      .option('parent', {
        type: 'string',
        description:
          'Parent namespace to filter by. Only returns direct children of this namespace. For nested namespaces, use %1F as separator (e.g., "bronze%1Fanalytics"). Omit this parameter to list top-level namespaces.',
        default: undefined,
      })
      .option('return-uuids', {
        type: 'boolean',
        description:
          'Whether to include namespace UUIDs in the response. Set to true to receive the namespace_uuids array.',
        default: false,
      })
      .option('return-details', {
        type: 'boolean',
        description:
          'Whether to include additional metadata (timestamps). When true, response includes created_at and updated_at arrays.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');

      const params: Record<string, unknown> = {};
      if (argv.pageToken !== undefined) params['page_token'] = argv.pageToken;
      if (argv.pageSize !== undefined) params['page_size'] = argv.pageSize;
      if (argv.parent !== undefined) params['parent'] = argv.parent;
      if (argv.returnUuids !== undefined) params['return_uuids'] = argv.returnUuids;
      if (argv.returnDetails !== undefined) params['return_details'] = argv.returnDetails;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.r2DataCatalog.namespaces.list(
        accountId,
        argv.bucketName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
