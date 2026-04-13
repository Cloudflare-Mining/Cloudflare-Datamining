/**
 * list command
 * @generated from apis/scm/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'provider-type'?: string;
  'connection-status'?: string;
  'api-version'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Returns all SCM provider connections for the authenticated user. Response shape varies by api-version header.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('provider-type', {
        type: 'string',
        description: 'Provider type',
        choices: ['github', 'gitlab', 'gitlab_internal'] as const,
        default: undefined,
      })
      .option('connection-status', {
        type: 'string',
        description: 'Connection status',
        choices: ['active', 'token_expired', 'refresh_failed', 'provider_revoked', 'user_disconnected'] as const,
        default: undefined,
      })
      .option('api-version', {
        type: 'string',
        description: 'API version date. Defaults to latest.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.providerType !== undefined) params['provider_type'] = argv.providerType;
      if (argv.connectionStatus !== undefined) params['connection_status'] = argv.connectionStatus;

      const headers: Record<string, string> = {};
      if (argv.apiVersion !== undefined) headers['api-version'] = String(argv.apiVersion);
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.get<unknown>(`/accounts/${accountId}/scm/connections`, {
        query: Object.keys(params).length > 0 ? params : undefined,
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
