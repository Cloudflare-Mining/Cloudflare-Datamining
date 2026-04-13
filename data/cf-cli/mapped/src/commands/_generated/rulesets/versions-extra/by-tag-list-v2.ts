/**
 * by-tag-list-v2 command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ByTagListV2Args {
  ruleTag: string;
  rulesetVersion: string;
  rulesetId: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ByTagListV2Args> = {
  command: 'by-tag-list-v2 <ruleTag> <rulesetVersion> <rulesetId> [zoneId]',
  describe: 'Fetches the rules of a managed zone ruleset version for a given tag.',

  builder: (yargs: Argv): Argv<ByTagListV2Args> => {
    return yargs
      .positional('ruleTag', {
        type: 'string',
        description: 'The category of a rule.',
        demandOption: true,
      })
      .positional('rulesetVersion', {
        type: 'string',
        description: 'The version of the ruleset.',
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
      }) as Argv<ByTagListV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<ByTagListV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.ruleTag as string | undefined, 'ruleTag');
      validateResourceId(argv.rulesetVersion as string | undefined, 'rulesetVersion');
      validateResourceId(argv.rulesetId as string | undefined, 'rulesetId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.rulesets.versionsextra.byTagListV2(
        argv.ruleTag,
        argv.rulesetVersion,
        argv.rulesetId,
        zoneId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
