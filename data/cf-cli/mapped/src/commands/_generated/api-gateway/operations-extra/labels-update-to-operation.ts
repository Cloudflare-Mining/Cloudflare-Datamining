/**
 * labels-update-to-operation command
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

interface LabelsUpdateToOperationArgs {
  managed?: string;
  user?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, LabelsUpdateToOperationArgs> = {
  command: 'labels-update-to-operation',
  describe: 'Replace label(s) on an operation in endpoint management',

  builder: (yargs: Argv): Argv<LabelsUpdateToOperationArgs> => {
    return yargs
      .option('managed', {
        type: 'string',
        description:
          'List of managed label names. Omitting this property or passing an empty array will result in all managed labels being removed from the operation',
        default: undefined,
      })
      .option('user', {
        type: 'string',
        description:
          'List of user label names. Omitting this property or passing an empty array will result in all user labels being removed from the operation',
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
      }) as Argv<LabelsUpdateToOperationArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LabelsUpdateToOperationArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf api-gateway operations-extra labels-update-to-operation',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/api_gateway/operations/${argv.operationId ?? '<operationId>'}/labels`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), operationId: String(argv.operationId ?? '') },
          body: { managed: argv.managed, user: argv.user },
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
        const result = await client.put<unknown>(
          `/zones/${argv.zoneId}/api_gateway/operations/${argv.operationId}/labels`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.managed !== undefined) setNestedValue(bodyData, ['managed'], argv.managed);
      if (argv.user !== undefined) setNestedValue(bodyData, ['user'], argv.user);
      const result = await client.put<unknown>(
        `/zones/${argv.zoneId}/api_gateway/operations/${argv.operationId}/labels`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
