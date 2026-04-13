/**
 * configs-dns-protection-rules-update command
 * @generated from apis/magic-transit/schema.ts
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

interface ConfigsDNSProtectionRulesUpdateArgs {
  ruleId: string;
  'burst-sensitivity'?: string;
  mode?: string;
  'profile-sensitivity'?: string;
  'rate-sensitivity'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConfigsDNSProtectionRulesUpdateArgs> = {
  command: 'configs-dns-protection-rules-update <ruleId>',
  describe: 'Update a DNS Protection rule specified by the given UUID.',

  builder: (yargs: Argv): Argv<ConfigsDNSProtectionRulesUpdateArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'The UUID of the DNS Protection rule to update.',
        demandOption: true,
      })
      .option('burst-sensitivity', {
        type: 'string',
        description: "The new burst sensitivity. Optional. Must be one of 'low', 'medium', 'high'.",
        default: undefined,
      })
      .option('mode', {
        type: 'string',
        description: "The new mode for DNS Protection. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.",
        default: undefined,
      })
      .option('profile-sensitivity', {
        type: 'string',
        description:
          "The new profile sensitivity. Optional. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.",
        default: undefined,
      })
      .option('rate-sensitivity', {
        type: 'string',
        description: "The new rate sensitivity. Optional. Must be one of 'low', 'medium', 'high'.",
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
      }) as Argv<ConfigsDNSProtectionRulesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsDNSProtectionRulesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit advanced-dns-protection configs-dns-protection-rules-update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/advanced_dns_protection/configs/dns_protection/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { ruleId: String(argv.ruleId ?? '') },
          body: {
            burstSensitivity: argv.burstSensitivity,
            mode: argv.mode,
            profileSensitivity: argv.profileSensitivity,
            rateSensitivity: argv.rateSensitivity,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules/${argv.ruleId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.burstSensitivity !== undefined) setNestedValue(bodyData, ['burst_sensitivity'], argv.burstSensitivity);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      if (argv.profileSensitivity !== undefined)
        setNestedValue(bodyData, ['profile_sensitivity'], argv.profileSensitivity);
      if (argv.rateSensitivity !== undefined) setNestedValue(bodyData, ['rate_sensitivity'], argv.rateSensitivity);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules/${argv.ruleId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
