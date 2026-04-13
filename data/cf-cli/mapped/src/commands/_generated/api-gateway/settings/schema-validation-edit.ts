/**
 * schema-validation-edit command
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

interface SchemaValidationEditArgs {
  'validation-default-mitigation-action'?: string;
  'validation-override-mitigation-action'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, SchemaValidationEditArgs> = {
  command: 'schema-validation-edit',
  describe: 'Updates zone level schema validation settings on the zone',

  builder: (yargs: Argv): Argv<SchemaValidationEditArgs> => {
    return yargs
      .option('validation-default-mitigation-action', {
        type: 'string',
        description:
          'The default mitigation action used when there is no mitigation action defined on the operation Mitigation actions are as follows:    * \`log\` - log request when request does not conform to schema   * \`block\` - deny access to the site when request does not conform to schema  A special value of of \`none\` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation  \`null\` will have no effect. ',
        choices: ['none', 'log', 'block'] as const,
        default: undefined,
      })
      .option('validation-override-mitigation-action', {
        type: 'string',
        description:
          'When set, this overrides both zone level and operation level mitigation actions.    - \`none\` will skip running schema validation entirely for the request  To clear any override, use the special value \`disable_override\`  \`null\` will have no effect. ',
        choices: ['none', 'disable_override'] as const,
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
      .choices('validation-default-mitigation-action', ['none', 'log', 'block'] as const)
      .choices('validation-override-mitigation-action', [
        'none',
        'disable_override',
      ] as const) as Argv<SchemaValidationEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SchemaValidationEditArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf api-gateway settings schema-validation-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/api_gateway/settings/schema_validation`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            validationDefaultMitigationAction: argv.validationDefaultMitigationAction,
            validationOverrideMitigationAction: argv.validationOverrideMitigationAction,
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
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/zones/${argv.zoneId}/api_gateway/settings/schema_validation`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.validationDefaultMitigationAction !== undefined)
        setNestedValue(bodyData, ['validation_default_mitigation_action'], argv.validationDefaultMitigationAction);
      if (argv.validationOverrideMitigationAction !== undefined)
        setNestedValue(bodyData, ['validation_override_mitigation_action'], argv.validationOverrideMitigationAction);
      const result = await client.patch<unknown>(`/zones/${argv.zoneId}/api_gateway/settings/schema_validation`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
