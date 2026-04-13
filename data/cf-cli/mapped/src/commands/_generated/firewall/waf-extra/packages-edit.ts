/**
 * packages-edit command
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

interface PackagesEditArgs {
  packageId: string;
  zoneId: string;
  'action-mode'?: string;
  sensitivity?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, PackagesEditArgs> = {
  command: 'packages-edit <packageId> [zoneId]',
  describe:
    'Updates a WAF package. You can update the sensitivity and the action of an anomaly detection WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',

  builder: (yargs: Argv): Argv<PackagesEditArgs> => {
    return yargs
      .positional('packageId', {
        type: 'string',
        description: 'Defines a package identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('action-mode', {
        type: 'string',
        description: 'The default action performed by the rules in the WAF package.',
        choices: ['simulate', 'block', 'challenge'] as const,
        default: undefined,
      })
      .option('sensitivity', {
        type: 'string',
        description: 'The sensitivity of the WAF package.',
        choices: ['high', 'medium', 'low', 'off'] as const,
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
      .choices('action-mode', ['simulate', 'block', 'challenge'] as const)
      .choices('sensitivity', ['high', 'medium', 'low', 'off'] as const) as Argv<PackagesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PackagesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.packageId as string | undefined, 'packageId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall waf-extra packages-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/waf/packages/${argv.packageId ?? '<packageId>'}`,
          pathParams: { packageId: String(argv.packageId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { actionMode: argv.actionMode, sensitivity: argv.sensitivity },
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
        const result = await client.patch<unknown>(`/zones/${argv.zoneId}/firewall/waf/packages/${argv.packageId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.actionMode !== undefined) setNestedValue(bodyData, ['action_mode'], argv.actionMode);
      if (argv.sensitivity !== undefined) setNestedValue(bodyData, ['sensitivity'], argv.sensitivity);
      const result = await client.patch<unknown>(`/zones/${argv.zoneId}/firewall/waf/packages/${argv.packageId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
