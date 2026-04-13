/**
 * logging-update command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface LoggingUpdateArgs {
  'redact-pii'?: boolean;
  'settings-by-rule-type-dns-log-all'?: boolean;
  'settings-by-rule-type-dns-log-blocks'?: boolean;
  'settings-by-rule-type-http-log-all'?: boolean;
  'settings-by-rule-type-http-log-blocks'?: boolean;
  'settings-by-rule-type-l4-log-all'?: boolean;
  'settings-by-rule-type-l4-log-blocks'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, LoggingUpdateArgs> = {
  command: 'logging-update',
  describe: 'Update logging settings for the current Zero Trust account.',

  builder: (yargs: Argv): Argv<LoggingUpdateArgs> => {
    return yargs
      .option('redact-pii', {
        type: 'boolean',
        description:
          'Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).',
        default: false,
      })
      .option('settings-by-rule-type-dns-log-all', {
        type: 'boolean',
        description: 'Specify whether to log all requests to this service.',
        default: false,
      })
      .option('settings-by-rule-type-dns-log-blocks', {
        type: 'boolean',
        description: 'Specify whether to log only blocking requests to this service.',
        default: false,
      })
      .option('settings-by-rule-type-http-log-all', {
        type: 'boolean',
        description: 'Specify whether to log all requests to this service.',
        default: false,
      })
      .option('settings-by-rule-type-http-log-blocks', {
        type: 'boolean',
        description: 'Specify whether to log only blocking requests to this service.',
        default: false,
      })
      .option('settings-by-rule-type-l4-log-all', {
        type: 'boolean',
        description: 'Specify whether to log all requests to this service.',
        default: false,
      })
      .option('settings-by-rule-type-l4-log-blocks', {
        type: 'boolean',
        description: 'Specify whether to log only blocking requests to this service.',
        default: false,
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
      }) as Argv<LoggingUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LoggingUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust gateway logging-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/logging`,
          pathParams: {},
          body: {
            redactPii: argv.redactPii,
            settingsByRuleTypeDnsLogAll: argv.settingsByRuleTypeDnsLogAll,
            settingsByRuleTypeDnsLogBlocks: argv.settingsByRuleTypeDnsLogBlocks,
            settingsByRuleTypeHttpLogAll: argv.settingsByRuleTypeHttpLogAll,
            settingsByRuleTypeHttpLogBlocks: argv.settingsByRuleTypeHttpLogBlocks,
            settingsByRuleTypeL4LogAll: argv.settingsByRuleTypeL4LogAll,
            settingsByRuleTypeL4LogBlocks: argv.settingsByRuleTypeL4LogBlocks,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/gateway/logging`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.redactPii !== undefined) setNestedValue(bodyData, ['redact_pii'], argv.redactPii);
      if (argv.settingsByRuleTypeDnsLogAll !== undefined)
        setNestedValue(bodyData, ['settings_by_rule_type', 'dns', 'log_all'], argv.settingsByRuleTypeDnsLogAll);
      if (argv.settingsByRuleTypeDnsLogBlocks !== undefined)
        setNestedValue(bodyData, ['settings_by_rule_type', 'dns', 'log_blocks'], argv.settingsByRuleTypeDnsLogBlocks);
      if (argv.settingsByRuleTypeHttpLogAll !== undefined)
        setNestedValue(bodyData, ['settings_by_rule_type', 'http', 'log_all'], argv.settingsByRuleTypeHttpLogAll);
      if (argv.settingsByRuleTypeHttpLogBlocks !== undefined)
        setNestedValue(bodyData, ['settings_by_rule_type', 'http', 'log_blocks'], argv.settingsByRuleTypeHttpLogBlocks);
      if (argv.settingsByRuleTypeL4LogAll !== undefined)
        setNestedValue(bodyData, ['settings_by_rule_type', 'l4', 'log_all'], argv.settingsByRuleTypeL4LogAll);
      if (argv.settingsByRuleTypeL4LogBlocks !== undefined)
        setNestedValue(bodyData, ['settings_by_rule_type', 'l4', 'log_blocks'], argv.settingsByRuleTypeL4LogBlocks);
      const result = await client.put<unknown>(`/accounts/${accountId}/gateway/logging`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
