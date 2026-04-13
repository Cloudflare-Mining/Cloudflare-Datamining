/**
 * update command
 * @generated from apis/filters/schema.ts
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
  filterId: string;
  zoneId: string;
  description?: string;
  expression?: string;
  paused?: boolean;
  ref?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <filterId> [zoneId]',
  describe: 'Updates an existing filter.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('filterId', {
        type: 'string',
        description: 'The unique identifier of the filter.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Defines an identifier. (or use --zone flag)',
      })
      .option('description', {
        type: 'string',
        description: 'An informative summary of the filter.',
        default: undefined,
      })
      .option('expression', {
        type: 'string',
        description:
          'The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).',
        default: undefined,
      })
      .option('paused', {
        type: 'boolean',
        description: 'When true, indicates that the filter is currently paused.',
        default: false,
      })
      .option('ref', {
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.filterId as string | undefined, 'filterId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf filters update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/filters/${argv.filterId ?? '<filterId>'}`,
          pathParams: { filterId: String(argv.filterId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { description: argv.description, expression: argv.expression, paused: argv.paused, ref: argv.ref },
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
        const result = await client.put<unknown>(`/zones/${argv.zoneId}/filters/${argv.filterId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.expression !== undefined) setNestedValue(bodyData, ['expression'], argv.expression);
      if (argv.paused !== undefined) setNestedValue(bodyData, ['paused'], argv.paused);
      if (argv.ref !== undefined) setNestedValue(bodyData, ['ref'], argv.ref);
      const result = await client.put<unknown>(`/zones/${argv.zoneId}/filters/${argv.filterId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
