/**
 * labels-delete-to-operations command
 * @generated from apis/api-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface LabelsDeleteToOperationsArgs {
  'managed-labels'?: string;
  'user-labels'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, LabelsDeleteToOperationsArgs> = {
  command: 'labels-delete-to-operations',
  describe: 'Bulk remove label(s) on operation(s) in endpoint management',

  builder: (yargs: Argv): Argv<LabelsDeleteToOperationsArgs> => {
    return yargs
      .option('managed-labels', {
        type: 'string',
        description: 'List of managed label names.',
        default: undefined,
      })
      .option('user-labels', {
        type: 'string',
        description: 'List of user label names.',
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
      }) as Argv<LabelsDeleteToOperationsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LabelsDeleteToOperationsArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf api-gateway operations-extra labels-delete-to-operations',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/api_gateway/operations/labels`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: { managedLabels: argv.managedLabels, userLabels: argv.userLabels },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.delete<unknown>(`/zones/${argv.zoneId}/api_gateway/operations/labels`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.managedLabels !== undefined) setNestedValue(bodyData, ['managed', 'labels'], argv.managedLabels);
      if (argv.userLabels !== undefined) setNestedValue(bodyData, ['user', 'labels'], argv.userLabels);
      const result = await client.delete<unknown>(`/zones/${argv.zoneId}/api_gateway/operations/labels`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
