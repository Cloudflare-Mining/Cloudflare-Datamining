/**
 * config-autofill-get command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ConfigAutofillGetArgs {
  providerType: string;
  providerAccountId: string;
  repoId: string;
  branch: string;
  'root-directory'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConfigAutofillGetArgs> = {
  command: 'config-autofill-get <providerType> <providerAccountId> <repoId>',
  describe: 'Analyze repository for automatic configuration detection',

  builder: (yargs: Argv): Argv<ConfigAutofillGetArgs> => {
    return yargs
      .positional('providerType', {
        type: 'string',
        description: 'SCM provider type',
        demandOption: true,
      })
      .positional('providerAccountId', {
        type: 'string',
        description: 'Provider account identifier.',
        demandOption: true,
      })
      .positional('repoId', {
        type: 'string',
        description: 'Repository identifier.',
        demandOption: true,
      })
      .option('branch', {
        type: 'string',
        description: 'Git branch name.',
      })
      .option('root-directory', {
        type: 'string',
        description: 'Root directory path.',
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
      }) as Argv<ConfigAutofillGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigAutofillGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.providerType as string | undefined, 'providerType');
      validateResourceId(argv.providerAccountId as string | undefined, 'providerAccountId');
      validateResourceId(argv.repoId as string | undefined, 'repoId');

      const params: Record<string, unknown> = {};
      if (argv.branch !== undefined) params['branch'] = argv.branch;
      if (argv.rootDirectory !== undefined) params['root_directory'] = argv.rootDirectory;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.builds.repos.configAutofillGet(
        accountId,
        argv.providerType,
        argv.providerAccountId,
        argv.repoId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
