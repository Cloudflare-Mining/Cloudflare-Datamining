/**
 * dataset-permissions-create command
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

interface DatasetPermissionsCreateArgs {
  datasetId: string;
  role: string;
  'subject-id': string;
  'subject-type': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DatasetPermissionsCreateArgs> = {
  command: 'dataset-permissions-create <datasetId>',
  describe: 'Create a permission',

  builder: (yargs: Argv): Argv<DatasetPermissionsCreateArgs> => {
    return yargs
      .positional('datasetId', {
        type: 'string',
        description: 'Dataset UUID.',
        demandOption: true,
      })
      .option('role', {
        type: 'string',
        description: 'The role field',
        choices: ['read', 'write'] as const,
      })
      .option('subject-id', {
        type: 'string',
        description: 'The subjectId field',
      })
      .option('subject-type', {
        type: 'string',
        description: 'The subjectType field',
        choices: ['account', 'group'] as const,
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
      .choices('role', ['read', 'write'] as const)
      .choices('subject-type', ['account', 'group'] as const) as Argv<DatasetPermissionsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DatasetPermissionsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.datasetId as string | undefined, 'datasetId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one events dataset-permissions-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/dataset/${argv.datasetId ?? '<datasetId>'}/permissions`,
          pathParams: { datasetId: String(argv.datasetId ?? '') },
          body: { role: argv.role, subjectId: argv.subjectId, subjectType: argv.subjectType },
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
          `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/permissions`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.role !== undefined) setNestedValue(bodyData, ['role'], argv.role);
      if (argv.subjectId !== undefined) setNestedValue(bodyData, ['subjectId'], argv.subjectId);
      if (argv.subjectType !== undefined) setNestedValue(bodyData, ['subjectType'], argv.subjectType);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/cloudforce-one/events/dataset/${argv.datasetId}/permissions`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
