/**
 * priority-create command
 * @generated from apis/cloudforce-one/schema.ts
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

interface PriorityCreateArgs {
  labels: string;
  priority: number;
  requirement: string;
  tlp: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PriorityCreateArgs> = {
  command: 'priority-create',
  describe: 'Creates a new priority intelligence request in Cloudforce One.',

  builder: (yargs: Argv): Argv<PriorityCreateArgs> => {
    return yargs
      .option('labels', {
        type: 'string',
        description: 'List of labels.',
      })
      .option('priority', {
        type: 'number',
        description: 'Priority.',
      })
      .option('requirement', {
        type: 'string',
        description: 'Requirement.',
      })
      .option('tlp', {
        type: 'string',
        description: 'The CISA defined Traffic Light Protocol (TLP).',
        choices: ['clear', 'amber', 'amber-strict', 'green', 'red'] as const,
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
      .choices('tlp', ['clear', 'amber', 'amber-strict', 'green', 'red'] as const) as Argv<PriorityCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PriorityCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one requests priority-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/requests/priority/new`,
          pathParams: {},
          body: { labels: argv.labels, priority: argv.priority, requirement: argv.requirement, tlp: argv.tlp },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/requests/priority/new`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.labels !== undefined) setNestedValue(bodyData, ['labels'], argv.labels);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      if (argv.requirement !== undefined) setNestedValue(bodyData, ['requirement'], argv.requirement);
      if (argv.tlp !== undefined) setNestedValue(bodyData, ['tlp'], argv.tlp);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/requests/priority/new`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
