/**
 * tables-maintenance-configs-get command
 * @generated from apis/r2-data-catalog/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TablesMaintenanceConfigsGetArgs {
  bucketName: string;
  namespace: string;
  tableName: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TablesMaintenanceConfigsGetArgs> = {
  command: 'tables-maintenance-configs-get <bucketName> <namespace> <tableName>',
  describe: 'Retrieve the maintenance configuration for a specific table, including compaction settings.',

  builder: (yargs: Argv): Argv<TablesMaintenanceConfigsGetArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Specifies the R2 bucket name.',
        demandOption: true,
      })
      .positional('namespace', {
        type: 'string',
        description: 'The namespace identifier (use %1F as separator for nested namespaces).',
        demandOption: true,
      })
      .positional('tableName', {
        type: 'string',
        description: 'The table name.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<TablesMaintenanceConfigsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TablesMaintenanceConfigsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      validateResourceId(argv.namespace as string | undefined, 'namespace');
      validateResourceId(argv.tableName as string | undefined, 'tableName');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.r2DataCatalog.namespaces.tablesMaintenanceConfigsGet(
        accountId,
        argv.bucketName,
        argv.namespace,
        argv.tableName,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
