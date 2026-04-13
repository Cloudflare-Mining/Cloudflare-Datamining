/**
 * update command
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

interface UpdateArgs {
  uaRuleId: string;
  zoneId: string;
  'configuration-target'?: string;
  'configuration-value'?: string;
  description?: string;
  mode: string;
  paused?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <uaRuleId> [zoneId]',
  describe: 'Updates an existing User Agent Blocking rule.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('uaRuleId', {
        type: 'string',
        description: 'The unique identifier of the User Agent Blocking rule.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
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
      .option('description', {
        type: 'string',
        description: 'An informative summary of the rule. This value is sanitized and any tags will be removed.',
        default: undefined,
      })
      .option('mode', {
        type: 'string',
        description: 'The action to apply to a matched request.',
        choices: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'] as const,
      })
      .option('paused', {
        type: 'boolean',
        description: 'When true, indicates that the rule is currently paused.',
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
      })
      .choices('configuration-target', ['ip'] as const)
      .choices('mode', [
        'block',
        'challenge',
        'whitelist',
        'js_challenge',
        'managed_challenge',
      ] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.uaRuleId as string | undefined, 'uaRuleId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall ua-rules update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/ua_rules/${argv.uaRuleId ?? '<uaRuleId>'}`,
          pathParams: { uaRuleId: String(argv.uaRuleId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            configurationTarget: argv.configurationTarget,
            configurationValue: argv.configurationValue,
            description: argv.description,
            mode: argv.mode,
            paused: argv.paused,
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
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${argv.zoneId}/firewall/ua_rules/${argv.uaRuleId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.configurationTarget !== undefined)
        setNestedValue(bodyData, ['configuration', 'target'], argv.configurationTarget);
      if (argv.configurationValue !== undefined)
        setNestedValue(bodyData, ['configuration', 'value'], argv.configurationValue);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.mode !== undefined) setNestedValue(bodyData, ['mode'], argv.mode);
      if (argv.paused !== undefined) setNestedValue(bodyData, ['paused'], argv.paused);
      const result = await client.put<unknown>(`/zones/${argv.zoneId}/firewall/ua_rules/${argv.uaRuleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
