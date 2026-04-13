/**
 * configs-tcp-flow-protection-rules-create command
 * @generated from apis/magic-transit/schema.ts
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

interface ConfigsTCPFlowProtectionRulesCreateArgs {
  'burst-sensitivity': string;
  mode: string;
  name: string;
  'rate-sensitivity': string;
  scope: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConfigsTCPFlowProtectionRulesCreateArgs> = {
  command: 'configs-tcp-flow-protection-rules-create',
  describe: 'Create a TCP Flow Protection rule for an account.',

  builder: (yargs: Argv): Argv<ConfigsTCPFlowProtectionRulesCreateArgs> => {
    return yargs
      .option('burst-sensitivity', {
        type: 'string',
        description: "The burst sensitivity. Must be one of 'low', 'medium', 'high'.",
      })
      .option('mode', {
        type: 'string',
        description: "The mode for the TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'.",
      })
      .option('name', {
        type: 'string',
        description:
          "The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the 'region' or 'datacenter' scope, name should be the actual name of the region or datacenter, e.g., 'wnam' or 'lax'.",
      })
      .option('rate-sensitivity', {
        type: 'string',
        description: "The rate sensitivity. Must be one of 'low', 'medium', 'high'.",
      })
      .option('scope', {
        type: 'string',
        description: 'The scope for the TCP Flow Protection rule.',
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
      }) as Argv<ConfigsTCPFlowProtectionRulesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsTCPFlowProtectionRulesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit advanced-tcp-protection configs-tcp-flow-protection-rules-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
          pathParams: {},
          body: {
            burstSensitivity: argv.burstSensitivity,
            mode: argv.mode,
            name: argv.name,
            rateSensitivity: argv.rateSensitivity,
            scope: argv.scope,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.burstSensitivity !== undefined) setNestedValue(bodyData, ['burst_sensitivity'], argv.burstSensitivity);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.rateSensitivity !== undefined) setNestedValue(bodyData, ['rate_sensitivity'], argv.rateSensitivity);
      if (argv.scope !== undefined) setNestedValue(bodyData, ['scope'], argv.scope);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
