/**
 * email-rules-update command
 * @generated from apis/zero-trust/schema.ts
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

interface EmailRulesUpdateArgs {
  ruleId: string;
  'action-action': string;
  'action-message'?: string;
  description?: string;
  enabled: boolean;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EmailRulesUpdateArgs> = {
  command: 'email-rules-update <ruleId>',
  describe: 'Modifies an existing DLP email scanning rule, updating detection patterns, conditions, or actions.',

  builder: (yargs: Argv): Argv<EmailRulesUpdateArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'Rule ID',
        demandOption: true,
      })
      .option('action-action', {
        type: 'string',
        description: 'The action.action field',
        choices: ['Block'] as const,
      })
      .option('action-message', {
        type: 'string',
        description: 'The action.message field',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('enabled', {
        type: 'boolean',
        description: 'The enabled field',
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
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
      .choices('action-action', ['Block'] as const) as Argv<EmailRulesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EmailRulesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust dlp email-rules-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dlp/email/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { ruleId: String(argv.ruleId ?? '') },
          body: {
            actionAction: argv.actionAction,
            actionMessage: argv.actionMessage,
            description: argv.description,
            enabled: argv.enabled,
            name: argv.name,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/dlp/email/rules/${argv.ruleId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.actionAction !== undefined) setNestedValue(bodyData, ['action', 'action'], argv.actionAction);
      if (argv.actionMessage !== undefined) setNestedValue(bodyData, ['action', 'message'], argv.actionMessage);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.put<unknown>(`/accounts/${accountId}/dlp/email/rules/${argv.ruleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
