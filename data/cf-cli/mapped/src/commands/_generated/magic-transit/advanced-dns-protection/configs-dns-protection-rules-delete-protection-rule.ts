/**
 * configs-dns-protection-rules-delete-protection-rule command
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

interface ConfigsDNSProtectionRulesDeleteProtectionRuleArgs {
  ruleId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConfigsDNSProtectionRulesDeleteProtectionRuleArgs> = {
  command: 'configs-dns-protection-rules-delete-protection-rule <ruleId>',
  describe: 'Delete a DNS Protection rule specified by the given UUID.',

  builder: (yargs: Argv): Argv<ConfigsDNSProtectionRulesDeleteProtectionRuleArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'The UUID of the DNS Protection rule to delete.',
        demandOption: true,
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
      }) as Argv<ConfigsDNSProtectionRulesDeleteProtectionRuleArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsDNSProtectionRulesDeleteProtectionRuleArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit advanced-dns-protection configs-dns-protection-rules-delete-protection-rule',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/advanced_dns_protection/configs/dns_protection/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { ruleId: String(argv.ruleId ?? '') },
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

      const result = await client.magicTransit.advanceddnsprotection.configsDnsProtectionRulesDeleteProtectionRule(
        accountId,
        argv.ruleId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
