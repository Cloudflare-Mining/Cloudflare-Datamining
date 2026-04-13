/**
 * rules-delete command
 * @generated from apis/firewall/schema.ts
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

interface RulesDeleteArgs {
  zoneId?: string;
  ruleId: string;
  cascade?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, RulesDeleteArgs> = {
  command: 'rules-delete [zoneId] <ruleId>',
  describe:
    'Deletes an IP Access rule defined at the zone level. Optionally, you can use the \`cascade\` property to specify that you wish to delete similar rules in other zones managed by the same zone owner.',

  builder: (yargs: Argv): Argv<RulesDeleteArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .positional('ruleId', {
        type: 'string',
        description: 'Unique identifier for a rule.',
        demandOption: true,
      })
      .option('cascade', {
        type: 'string',
        description:
          'The level to attempt to delete similar rules defined for other zones with the same owner. The default value is \`none\`, which will only delete the current rule. Using \`basic\` will delete rules that match the same action (mode) and configuration, while using \`aggressive\` will delete rules that match the same configuration.',
        choices: ['none', 'basic', 'aggressive'] as const,
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
      .choices('cascade', ['none', 'basic', 'aggressive'] as const) as Argv<RulesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RulesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall access-rules-extra rules-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/access_rules/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { zoneId: String(argv.zoneId ?? ''), ruleId: String(argv.ruleId ?? '') },
          body: { cascade: argv.cascade },
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
        const result = await client.delete<unknown>(`/zones/${zoneId}/firewall/access_rules/rules/${argv.ruleId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.cascade !== undefined) setNestedValue(bodyData, ['cascade'], argv.cascade);
      const result = await client.delete<unknown>(`/zones/${zoneId}/firewall/access_rules/rules/${argv.ruleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
