/**
 * purge-build-cache command
 * @generated from apis/pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface PurgeBuildCacheArgs {
  projectName: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, PurgeBuildCacheArgs> = {
  command: 'purge-build-cache <projectName>',
  describe: 'Purge all cached build artifacts for a Pages project',

  builder: (yargs: Argv): Argv<PurgeBuildCacheArgs> => {
    return yargs
      .positional('projectName', {
        type: 'string',
        description: 'Name of the project.',
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
      }) as Argv<PurgeBuildCacheArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PurgeBuildCacheArgs>): Promise<void> => {
    try {
      validateResourceId(argv.projectName as string | undefined, 'projectName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pages projects purge-build-cache',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pages/projects/${argv.projectName ?? '<projectName>'}/purge_build_cache`,
          pathParams: { projectName: String(argv.projectName ?? '') },
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

      const result = await client.pages.projects.purgeBuildCache(argv.projectName, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
