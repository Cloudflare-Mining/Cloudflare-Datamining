/**
 * dataset-permissions-update command
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

interface DatasetPermissionsUpdateArgs {
  datasetId: string;
  grantId: string;
  role: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetPermissionsUpdateArgs> = {
  command: 'dataset-permissions-update <datasetId> <grantId>',
  describe: 'Update a permission',

  builder: (yargs: Argv): Argv<DatasetPermissionsUpdateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset UUID.',
        demandOption: true,
      })
      .positional('grantId', {
        type: 'string',
        description: 'Grant ID',
        demandOption: true,
      })
      .option('role', {
        type: 'string',
        description: 'The role field',
        choices: ['read', 'write'] as const,
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
      .choices('role', ['read', 'write'] as const) as Argv<DatasetPermissionsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetPermissionsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');
      validateResourceId(argv.grantId as string | undefined, 'grantId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-permissions-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/permissions/${argv.grantId ?? '<grantId>'}`,
          pathParams: { datasetId: String(argv.datasetId ?? ''), grantId: String(argv.grantId ?? '') },
          body: { role: argv.role },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/permissions/${argv.grantId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.role !== undefined) setNestedValue(bodyData, ['role'], argv.role);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/permissions/${argv.grantId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
