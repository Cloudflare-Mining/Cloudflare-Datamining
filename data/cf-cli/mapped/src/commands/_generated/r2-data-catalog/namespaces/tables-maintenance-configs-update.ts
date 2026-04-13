/**
 * tables-maintenance-configs-update command
 * @generated from apis/r2-data-catalog/schema.ts
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

interface TablesMaintenanceConfigsUpdateArgs {
  bucketName: string;
  namespace: string;
  tableName: string;
  'snapshot-expiration-max-snapshot-age'?: string;
  'snapshot-expiration-min-snapshots-to-keep'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TablesMaintenanceConfigsUpdateArgs> = {
  command: 'tables-maintenance-configs-update <bucketName> <namespace> <tableName>',
  describe:
    'Update the maintenance configuration for a specific table. This allows you to enable or disable compaction and adjust target file sizes for optimization.',

  builder: (yargs: Argv): Argv<TablesMaintenanceConfigsUpdateArgs> => {
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
      .option('snapshot-expiration-max-snapshot-age', {
        type: 'string',
        description: 'Updates the maximum age for snapshots optionally.',
        default: undefined,
      })
      .option('snapshot-expiration-min-snapshots-to-keep', {
        type: 'number',
        description: 'Updates the minimum number of snapshots to retain optionally.',
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
      }) as Argv<TablesMaintenanceConfigsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TablesMaintenanceConfigsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      validateResourceId(argv.namespace as string | undefined, 'namespace');
      validateResourceId(argv.tableName as string | undefined, 'tableName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2-data-catalog namespaces tables-maintenance-configs-update',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2-catalog/${argv.bucketName ?? '<bucketName>'}/namespaces/${argv.namespace ?? '<namespace>'}/tables/${argv.tableName ?? '<tableName>'}/maintenance-configs`,
          pathParams: {
            bucketName: String(argv.bucketName ?? ''),
            namespace: String(argv.namespace ?? ''),
            tableName: String(argv.tableName ?? ''),
          },
          body: {
            snapshotExpirationMaxSnapshotAge: argv.snapshotExpirationMaxSnapshotAge,
            snapshotExpirationMinSnapshotsToKeep: argv.snapshotExpirationMinSnapshotsToKeep,
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
          `/accounts/${accountId}/r2-catalog/${argv.bucketName}/namespaces/${argv.namespace}/tables/${argv.tableName}/maintenance-configs`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.snapshotExpirationMaxSnapshotAge !== undefined)
        setNestedValue(bodyData, ['snapshot_expiration', 'max_snapshot_age'], argv.snapshotExpirationMaxSnapshotAge);
      if (argv.snapshotExpirationMinSnapshotsToKeep !== undefined)
        setNestedValue(
          bodyData,
          ['snapshot_expiration', 'min_snapshots_to_keep'],
          argv.snapshotExpirationMinSnapshotsToKeep,
        );
      const result = await client.post<unknown>(
        `/accounts/${accountId}/r2-catalog/${argv.bucketName}/namespaces/${argv.namespace}/tables/${argv.tableName}/maintenance-configs`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
