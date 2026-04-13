/**
 * get-version-ids command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface GetVersionIdsArgs {
  'version-ids': string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetVersionIdsArgs> = {
  command: 'get-version-ids',
  describe: 'Retrieve builds for specific version IDs',

  builder: (yargs: Argv): Argv<GetVersionIdsArgs> => {
    return yargs
      .option('version-ids', {
        type: 'string',
        description: 'Comma-separated list of version UUIDs (max 20).',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetVersionIdsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetVersionIdsArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.versionIds !== undefined) params['version_ids'] = argv.versionIds;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.jobs.getVersionIds(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
