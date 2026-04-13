/**
 * packages-rules-edit command
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

interface PackagesRulesEditArgs {
  ruleId: string;
  packageId: string;
  zoneId: string;
  mode?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PackagesRulesEditArgs> = {
  command: 'packages-rules-edit <ruleId> <packageId> [zoneId]',
  describe:
    'Updates a WAF rule. You can only update the mode/action of the rule. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',

  builder: (yargs: Argv): Argv<PackagesRulesEditArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
        demandOption: true,
      })
      .positional('packageId', {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier of a schema. (or use --zone flag)',
      })
      .option('mode', {
        type: 'string',
        description:
          'Defines the mode/action of the rule when triggered. You must use a value from the \`allowed_modes\` array of the current rule.',
        choices: ['default', 'disable', 'simulate', 'block', 'challenge', 'on', 'off'] as const,
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
      .choices('mode', [
        'default',
        'disable',
        'simulate',
        'block',
        'challenge',
        'on',
        'off',
      ] as const) as Argv<PackagesRulesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PackagesRulesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');
      validateResourceId(argv.packageId as string | undefined, 'packageId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall waf packages-rules-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/waf/packages/${argv.packageId ?? '<packageId>'}/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: {
            ruleId: String(argv.ruleId ?? ''),
            packageId: String(argv.packageId ?? ''),
            zoneId: String(argv.zoneId ?? ''),
          },
          body: { mode: argv.mode },
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
        const result = await client.patch<unknown>(
          `/zones/${argv.zoneId}/firewall/waf/packages/${argv.packageId}/rules/${argv.ruleId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      const result = await client.patch<unknown>(
        `/zones/${argv.zoneId}/firewall/waf/packages/${argv.packageId}/rules/${argv.ruleId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
