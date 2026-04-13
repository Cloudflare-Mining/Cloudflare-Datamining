/**
 * builds-create command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface BuildsCreateArgs {
  triggerUuid: string;
  'seed-repo-branch': string;
  'seed-repo-owner': string;
  'seed-repo-path': string;
  'seed-repo-provider': string;
  'seed-repo-repository': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, BuildsCreateArgs> = {
  command: 'builds-create <triggerUuid>',
  describe: 'Trigger a manual build for a specific trigger',

  builder: (yargs: Argv): Argv<BuildsCreateArgs> => {
    return yargs
      .positional('triggerUuid', {
        type: 'string',
        description: 'Trigger UUID.',
        demandOption: true,
      })
      .option('seed-repo-branch', {
        type: 'string',
        description: 'Git branch name.',
      })
      .option('seed-repo-owner', {
        type: 'string',
        description: 'The seed_repo.owner field',
      })
      .option('seed-repo-path', {
        type: 'string',
        description: 'The seed_repo.path field',
      })
      .option('seed-repo-provider', {
        type: 'string',
        description: 'The seed_repo.provider field',
        choices: ['github'] as const,
      })
      .option('seed-repo-repository', {
        type: 'string',
        description: 'The seed_repo.repository field',
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
      })
      .choices('seed-repo-provider', ['github'] as const) as Argv<BuildsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BuildsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.triggerUuid as string | undefined, 'triggerUuid');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf builds triggers builds-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/builds/triggers/${argv.triggerUuid ?? '<triggerUuid>'}/builds`,
          pathParams: { triggerUuid: String(argv.triggerUuid ?? '') },
          body: {
            seedRepoBranch: argv.seedRepoBranch,
            seedRepoOwner: argv.seedRepoOwner,
            seedRepoPath: argv.seedRepoPath,
            seedRepoProvider: argv.seedRepoProvider,
            seedRepoRepository: argv.seedRepoRepository,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/builds/triggers/${argv.triggerUuid}/builds`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.seedRepoBranch !== undefined) setNestedValue(bodyData, ['seed_repo', 'branch'], argv.seedRepoBranch);
      if (argv.seedRepoOwner !== undefined) setNestedValue(bodyData, ['seed_repo', 'owner'], argv.seedRepoOwner);
      if (argv.seedRepoPath !== undefined) setNestedValue(bodyData, ['seed_repo', 'path'], argv.seedRepoPath);
      if (argv.seedRepoProvider !== undefined)
        setNestedValue(bodyData, ['seed_repo', 'provider'], argv.seedRepoProvider);
      if (argv.seedRepoRepository !== undefined)
        setNestedValue(bodyData, ['seed_repo', 'repository'], argv.seedRepoRepository);
      const result = await client.post<unknown>(`/accounts/${accountId}/builds/triggers/${argv.triggerUuid}/builds`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
