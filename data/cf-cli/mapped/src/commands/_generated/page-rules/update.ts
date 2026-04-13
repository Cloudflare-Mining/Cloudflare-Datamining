/**
 * update command
 * @generated from apis/page-rules/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  pageruleId: string;
  zoneId: string;
  priority?: number;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <pageruleId> [zoneId]',
  describe:
    'Replaces the configuration of an existing Page Rule. The configuration of the updated Page Rule will exactly match the data passed in the API request.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('pageruleId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('priority', {
        type: 'number',
        description:
          'The priority of the rule, used to define which Page Rule is processed over another. A higher number indicates a higher priority. For example, if you have a catch-all Page Rule (rule A: \`/images/*\`) but want a more specific Page Rule to take precedence (rule B: \`/images/special/*\`), specify a higher priority for rule B so it overrides rule A. ',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'The status of the Page Rule.',
        choices: ['active', 'disabled'] as const,
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
      .choices('status', ['active', 'disabled'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.pageruleId as string | undefined, 'pageruleId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf page-rules update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/pagerules/${argv.pageruleId ?? '<pageruleId>'}`,
          pathParams: { pageruleId: String(argv.pageruleId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { priority: argv.priority, status: argv.status },
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
        const result = await client.put<unknown>(`/zones/${argv.zoneId}/pagerules/${argv.pageruleId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      if (argv.status !== undefined) setNestedValue(bodyData, ['status'], argv.status);
      const result = await client.put<unknown>(`/zones/${argv.zoneId}/pagerules/${argv.pageruleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
