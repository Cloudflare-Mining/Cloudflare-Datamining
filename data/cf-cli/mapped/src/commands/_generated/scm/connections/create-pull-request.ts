/**
 * create-pull-request command
 * @generated from apis/scm/schema.ts
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

interface CreatePullRequestArgs {
  connectionId: string;
  owner: string;
  repo: string;
  'source-branch': string;
  title: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreatePullRequestArgs> = {
  command: 'create-pull-request <connectionId>',
  describe: 'Create a pull request on the SCM provider via the specified connection.',

  builder: (yargs: Argv): Argv<CreatePullRequestArgs> => {
    return yargs
      .positional('connectionId', {
        type: 'string',
        description: 'ConnectionId',
        demandOption: true,
      })
      .option('owner', {
        type: 'string',
        description: 'The owner field',
      })
      .option('repo', {
        type: 'string',
        description: 'The repo field',
      })
      .option('source-branch', {
        type: 'string',
        description: 'The sourceBranch field',
      })
      .option('title', {
        type: 'string',
        description: 'The title field',
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
      }) as Argv<CreatePullRequestArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreatePullRequestArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectionId as string | undefined, 'connectionId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf scm connections create-pull-request',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/scm/connections/${argv.connectionId ?? '<connectionId>'}/pulls`,
          pathParams: { connectionId: String(argv.connectionId ?? '') },
          body: { owner: argv.owner, repo: argv.repo, sourceBranch: argv.sourceBranch, title: argv.title },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/scm/connections/${argv.connectionId}/pulls`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.owner !== undefined) setNestedValue(bodyData, ['owner'], argv.owner);
      if (argv.repo !== undefined) setNestedValue(bodyData, ['repo'], argv.repo);
      if (argv.sourceBranch !== undefined) setNestedValue(bodyData, ['sourceBranch'], argv.sourceBranch);
      if (argv.title !== undefined) setNestedValue(bodyData, ['title'], argv.title);
      const result = await client.post<unknown>(`/accounts/${accountId}/scm/connections/${argv.connectionId}/pulls`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
