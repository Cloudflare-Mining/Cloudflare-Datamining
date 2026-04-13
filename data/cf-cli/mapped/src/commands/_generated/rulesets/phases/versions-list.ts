/**
 * versions-list command
 * @generated from apis/rulesets/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface VersionsListArgs {
  rulesetPhase: string;
  zoneId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, VersionsListArgs> = {
  command: 'versions-list <rulesetPhase> [zoneId]',
  describe: 'Fetches the versions of a zone entry point ruleset.',

  builder: (yargs: Argv): Argv<VersionsListArgs> => {
    return yargs
      .positional('rulesetPhase', {
        type: 'string',
        description: 'The phase of the ruleset.',
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
      }) as Argv<VersionsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VersionsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.rulesetPhase as string | undefined, 'rulesetPhase');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      const result = await client.rulesets.phases.versionsList(argv.rulesetPhase, zoneId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
