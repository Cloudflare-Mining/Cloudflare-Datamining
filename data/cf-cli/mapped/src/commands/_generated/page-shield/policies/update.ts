/**
 * update command
 * @generated from apis/page-shield/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  zoneId?: string;
  policyId: string;
  action?: string;
  description?: string;
  enabled?: boolean;
  expression?: string;
  value?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update [zoneId] <policyId>',
  describe: 'Update a Page Shield policy by ID.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier (or use --zone flag)',
      })
      .positional('policyId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('action', {
        type: 'string',
        description: 'The action to take if the expression matches',
        choices: ['allow', 'log', 'add_reporting_directives'] as const,
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'A description for the policy',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether the policy is enabled',
        default: false,
      })
      .option('expression', {
        type: 'string',
        description:
          'The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax',
        default: undefined,
      })
      .option('value', {
        type: 'string',
        description: 'The policy which will be applied',
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
      .choices('action', ['allow', 'log', 'add_reporting_directives'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.policyId as string | undefined, 'policyId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf page-shield policies update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/page_shield/policies/${argv.policyId ?? '<policyId>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), policyId: String(argv.policyId ?? '') },
          body: {
            action: argv.action,
            description: argv.description,
            enabled: argv.enabled,
            expression: argv.expression,
            value: argv.value,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${zoneId}/page_shield/policies/${argv.policyId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.expression !== undefined) setNestedValue(bodyData, ['expression'], argv.expression);
      if (argv.value !== undefined) setNestedValue(bodyData, ['value'], argv.value);
      const result = await client.put<unknown>(`/zones/${zoneId}/page_shield/policies/${argv.policyId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
