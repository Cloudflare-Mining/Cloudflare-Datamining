/**
 * create command
 * @generated from apis/firewall/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  zoneId?: string;
  'filter-description'?: string;
  'filter-expression'?: string;
  'filter-paused'?: boolean;
  'filter-ref'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe: 'Create one or more firewall rules.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('filter-description', {
        type: 'string',
        description: 'An informative summary of the filter.',
        default: undefined,
      })
      .option('filter-expression', {
        type: 'string',
        description:
          'The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).',
        default: undefined,
      })
      .option('filter-paused', {
        type: 'boolean',
        description: 'When true, indicates that the filter is currently paused.',
        default: false,
      })
      .option('filter-ref', {
        type: 'string',
        description: 'A short reference tag. Allows you to select related filters.',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf firewall rules create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/firewall/rules`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            filterDescription: argv.filterDescription,
            filterExpression: argv.filterExpression,
            filterPaused: argv.filterPaused,
            filterRef: argv.filterRef,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/firewall/rules`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.filterDescription !== undefined)
        setNestedValue(bodyData, ['filter', 'description'], argv.filterDescription);
      if (argv.filterExpression !== undefined)
        setNestedValue(bodyData, ['filter', 'expression'], argv.filterExpression);
      if (argv.filterPaused !== undefined) setNestedValue(bodyData, ['filter', 'paused'], argv.filterPaused);
      if (argv.filterRef !== undefined) setNestedValue(bodyData, ['filter', 'ref'], argv.filterRef);
      const result = await client.post<unknown>(`/zones/${zoneId}/firewall/rules`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
