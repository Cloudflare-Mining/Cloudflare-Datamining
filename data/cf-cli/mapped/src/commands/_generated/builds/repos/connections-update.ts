/**
 * connections-update command
 * @generated from apis/builds/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface ConnectionsUpdateArgs {
  'provider-account-id': string;
  'provider-account-name': string;
  'provider-type': string;
  'repo-id': string;
  'repo-name': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ConnectionsUpdateArgs> = {
  command: 'connections-update',
  describe: 'Upsert a repository connection for CI/CD integration',

  builder: (yargs: Argv): Argv<ConnectionsUpdateArgs> => {
    return yargs
      .option('provider-account-id', {
        type: 'string',
        description: 'Provider account identifier.',
      })
      .option('provider-account-name', {
        type: 'string',
        description: 'The provider_account_name field',
      })
      .option('provider-type', {
        type: 'string',
        description: 'The provider_type field',
        choices: ['github'] as const,
      })
      .option('repo-id', {
        type: 'string',
        description: 'Repository identifier.',
      })
      .option('repo-name', {
        type: 'string',
        description: 'The repo_name field',
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
      .choices('provider-type', ['github'] as const) as Argv<ConnectionsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConnectionsUpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf builds repos connections-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/builds/repos/connections`,
          pathParams: {},
          body: {
            providerAccountId: argv.providerAccountId,
            providerAccountName: argv.providerAccountName,
            providerType: argv.providerType,
            repoId: argv.repoId,
            repoName: argv.repoName,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/builds/repos/connections`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.providerAccountId !== undefined)
        setNestedValue(bodyData, ['provider_account_id'], argv.providerAccountId);
      if (argv.providerAccountName !== undefined)
        setNestedValue(bodyData, ['provider_account_name'], argv.providerAccountName);
      if (argv.providerType !== undefined) setNestedValue(bodyData, ['provider_type'], argv.providerType);
      if (argv.repoId !== undefined) setNestedValue(bodyData, ['repo_id'], argv.repoId);
      if (argv.repoName !== undefined) setNestedValue(bodyData, ['repo_name'], argv.repoName);
      const result = await client.put<unknown>(`/accounts/${accountId}/builds/repos/connections`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
