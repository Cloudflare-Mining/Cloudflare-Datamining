/**
 * access-rules-rules-create command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface AccessRulesRulesCreateArgs {
  'configuration-target'?: string;
  'configuration-value'?: string;
  mode: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AccessRulesRulesCreateArgs> = {
  command: 'access-rules-rules-create',
  describe:
    'Creates a new IP Access rule for all zones owned by the current user. Note: To create an IP Access rule that applies to a specific zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.',

  builder: (yargs: Argv): Argv<AccessRulesRulesCreateArgs> => {
    return yargs
      .option('configuration-target', {
        type: 'string',
        description:
          'The configuration target. You must set the target to \`ip\` when specifying an IP address in the rule.',
        choices: ['ip'] as const,
        default: undefined,
      })
      .option('configuration-value', {
        type: 'string',
        description: 'The IP address to match. This address will be compared to the IP address of incoming requests.',
        default: undefined,
      })
      .option('mode', {
        type: 'string',
        description: 'The action to apply to a matched request.',
        choices: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'] as const,
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
      .choices('configuration-target', ['ip'] as const)
      .choices('mode', [
        'block',
        'challenge',
        'whitelist',
        'js_challenge',
        'managed_challenge',
      ] as const) as Argv<AccessRulesRulesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AccessRulesRulesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user firewall access-rules-rules-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/user/firewall/access_rules/rules`,
          pathParams: {},
          body: {
            configurationTarget: argv.configurationTarget,
            configurationValue: argv.configurationValue,
            mode: argv.mode,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/user/firewall/access_rules/rules`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configurationTarget !== undefined)
        setNestedValue(bodyData, ['configuration', 'target'], argv.configurationTarget);
      if (argv.configurationValue !== undefined)
        setNestedValue(bodyData, ['configuration', 'value'], argv.configurationValue);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      const result = await client.post<unknown>(`/user/firewall/access_rules/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
