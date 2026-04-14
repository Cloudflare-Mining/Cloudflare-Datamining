/**
 * create command
 * @generated from apis/workers/schema.ts
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

interface CreateArgs {
  workflowName: string;
  'class-name': string;
  'limits-steps'?: number;
  'script-name': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create <workflowName>',
  describe: 'Creates a new workflow or updates an existing workflow definition.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('workflowName', {
        type: 'string',
        description: 'Workflow name',
        demandOption: true,
      })
      .option('class-name', {
        type: 'string',
        description: 'The class_name field',
      })
      .option('limits-steps', {
        type: 'number',
        description: 'The limits.steps field',
        default: undefined,
      })
      .option('script-name', {
        type: 'string',
        description: 'The script_name field',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workflowName as string | undefined, 'workflowName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers workflows create',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workflows/${argv.workflowName ?? '<workflowName>'}`,
          pathParams: { workflowName: String(argv.workflowName ?? '') },
          body: { className: argv.className, limitsSteps: argv.limitsSteps, scriptName: argv.scriptName },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/workflows/${argv.workflowName}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.className !== undefined) setNestedValue(bodyData, ['class_name'], argv.className);
      if (argv.limitsSteps !== undefined) setNestedValue(bodyData, ['limits', 'steps'], argv.limitsSteps);
      if (argv.scriptName !== undefined) setNestedValue(bodyData, ['script_name'], argv.scriptName);
      const result = await client.put<unknown>(`/accounts/${accountId}/workflows/${argv.workflowName}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
