/**
 * delete command
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

interface DeleteArgs {
  ruleId: string;
  zoneId: string;
  'delete-filter-if-unused'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <ruleId> [zoneId]',
  describe: 'Deletes an existing firewall rule.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'The unique identifier of the firewall rule.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('delete-filter-if-unused', {
        type: 'boolean',
        description:
          'When true, indicates that Cloudflare should also delete the associated filter if there are no other firewall rules referencing the filter.',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall rules delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: { ruleId: String(argv.ruleId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { deleteFilterIfUnused: argv.deleteFilterIfUnused },
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
        const result = await client.delete<unknown>(`/zones/${argv.zoneId}/firewall/rules/${argv.ruleId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.deleteFilterIfUnused !== undefined)
        setNestedValue(bodyData, ['delete_filter_if_unused'], argv.deleteFilterIfUnused);
      const result = await client.delete<unknown>(`/zones/${argv.zoneId}/firewall/rules/${argv.ruleId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
