/**
 * edit command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface EditArgs {
  ruleId: string;
  rulesetId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <ruleId> <rulesetId> [zoneId]',
  describe: 'Updates an existing rule in a zone ruleset.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'The unique ID of the rule.',
        demandOption: true,
      })
      .positional('rulesetId', {
        type: 'string',
        description: 'The unique ID of the ruleset.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'The unique ID of the zone. (or use --zone flag)',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf rulesets rules edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/rulesets/${argv.rulesetId ?? '<rulesetId>'}/rules/${argv.ruleId ?? '<ruleId>'}`,
          pathParams: {
            ruleId: String(argv.ruleId ?? ''),
            rulesetId: String(argv.rulesetId ?? ''),
            zoneId: String(argv.zoneId ?? ''),
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
        const result = await client.patch<unknown>(
          `/zones/${argv.zoneId}/rulesets/${argv.rulesetId}/rules/${argv.ruleId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.rulesets.rules.edit(argv.ruleId, argv.rulesetId, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
