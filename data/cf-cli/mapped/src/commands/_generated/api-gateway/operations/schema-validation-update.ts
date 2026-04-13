/**
 * schema-validation-update command
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

interface SchemaValidationUpdateArgs {
  'mitigation-action'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, SchemaValidationUpdateArgs> = {
  command: 'schema-validation-update',
  describe: 'Updates operation-level schema validation settings on the zone',

  builder: (yargs: Argv): Argv<SchemaValidationUpdateArgs> => {
    return yargs
      .option('mitigation-action', {
        type: 'string',
        description:
          'When set, this applies a mitigation action to this operation    - \`log\` log request when request does not conform to schema for this operation   - \`block\` deny access to the site when request does not conform to schema for this operation   - \`none\` will skip mitigation for this operation   - \`null\` indicates that no operation level mitigation is in place, see Zone Level Schema Validation Settings for mitigation action that will be applied ',
        choices: ['log', 'block', 'none'] as const,
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
      })
      .choices('mitigation-action', ['log', 'block', 'none'] as const) as Argv<SchemaValidationUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SchemaValidationUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf api-gateway operations schema-validation-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/api_gateway/operations/${argv.operationId ?? '<operationId>'}/schema_validation`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), operationId: String(argv.operationId ?? '') },
          body: { mitigationAction: argv.mitigationAction },
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
          `/zones/${argv.zoneId}/api_gateway/operations/${argv.operationId}/schema_validation`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.mitigationAction !== undefined) setNestedValue(bodyData, ['mitigation_action'], argv.mitigationAction);
      const result = await client.put<unknown>(
        `/zones/${argv.zoneId}/api_gateway/operations/${argv.operationId}/schema_validation`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
