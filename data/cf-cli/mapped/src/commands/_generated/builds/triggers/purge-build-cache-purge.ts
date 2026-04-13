/**
 * purge-build-cache-purge command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface PurgeBuildCachePurgeArgs {
  triggerUuid: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PurgeBuildCachePurgeArgs> = {
  command: 'purge-build-cache-purge <triggerUuid>',
  describe: 'Clear the build cache for a specific trigger',

  builder: (yargs: Argv): Argv<PurgeBuildCachePurgeArgs> => {
    return yargs
      .positional('triggerUuid', {
        type: 'string',
        description: 'Trigger UUID.',
        demandOption: true,
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
      }) as Argv<PurgeBuildCachePurgeArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PurgeBuildCachePurgeArgs>): Promise<void> => {
    try {
      validateResourceId(argv.triggerUuid as string | undefined, 'triggerUuid');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf builds triggers purge-build-cache-purge',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/builds/triggers/${argv.triggerUuid ?? '<triggerUuid>'}/purge_build_cache`,
          pathParams: { triggerUuid: String(argv.triggerUuid ?? '') },
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

      const result = await client.builds.triggers.purgeBuildCachePurge(accountId, argv.triggerUuid);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
