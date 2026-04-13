/**
 * access-rules-rules-edit command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface AccessRulesRulesEditArgs {
  ruleId: string;
  mode?: string;
  notes?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AccessRulesRulesEditArgs> = {
  command: 'access-rules-rules-edit <ruleId>',
  describe:
    'Updates an IP Access rule defined at the user level. You can only update the rule action (\`mode\` parameter) and notes.',

  builder: (yargs: Argv): Argv<AccessRulesRulesEditArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'Unique identifier for a rule.',
        demandOption: true,
      })
      .option('mode', {
        type: 'string',
        description: 'The action to apply to a matched request.',
        choices: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'] as const,
        default: undefined,
      })
      .option('notes', {
        type: 'string',
        description: 'An informative summary of the rule, typically used as a reminder or explanation.',
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
        'block',
        'challenge',
        'whitelist',
        'js_challenge',
        'managed_challenge',
      ] as const) as Argv<AccessRulesRulesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AccessRulesRulesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user firewall access-rules-rules-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/user/firewall/access_rules/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { ruleId: String(argv.ruleId ?? '') },
          body: { mode: argv.mode, notes: argv.notes },
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
        const result = await client.patch<unknown>(`/user/firewall/access_rules/rules/${argv.ruleId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      if (argv.notes !== undefined) setNestedValue(bodyData, ['notes'], argv.notes);
      const result = await client.patch<unknown>(`/user/firewall/access_rules/rules/${argv.ruleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
