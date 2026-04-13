/**
 * logs-access-requests-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface LogsAccessRequestsListArgs {
  limit?: number;
  direction?: string;
  since?: string;
  until?: string;
  page?: number;
  'per-page'?: number;
  email?: string;
  'email-exact'?: boolean;
  'user-id'?: string;
  'allowed-op'?: string;
  'country-code-op'?: string;
  'app-type-op'?: string;
  'app-uid-op'?: string;
  'ray-id-op'?: string;
  'email-op'?: string;
  'idp-op'?: string;
  'non-identity-op'?: string;
  'user-id-op'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LogsAccessRequestsListArgs> = {
  command: 'logs-access-requests-list',
  describe: 'Gets a list of Access authentication audit logs for an account.',

  builder: (yargs: Argv): Argv<LogsAccessRequestsListArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'The maximum number of log entries to retrieve.',
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The chronological sorting order for the logs.',
        choices: ['desc', 'asc'] as const,
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description: 'The earliest event timestamp to query.',
        default: undefined,
      })
      .option('until', {
        type: 'string',
        description: 'The latest event timestamp to query.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page.',
        default: undefined,
      })
      .option('email', {
        type: 'string',
        description:
          'Filter by user email. Defaults to substring matching. To force exact matching, set \`email_exact=true\`. Example (default): \`email=@example.com\` returns all events with that domain. Example (exact): \`email=user@example.com&email_exact=true\` returns only that user.',
        default: undefined,
      })
      .option('email-exact', {
        type: 'boolean',
        description: 'When true, \`email\` is matched exactly instead of substring matching.',
        default: false,
      })
      .option('user-id', {
        type: 'string',
        description: 'Filter by user UUID.',
        default: undefined,
      })
      .option('allowed-op', {
        type: 'string',
        description: 'Operator for the \`allowed\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('country-code-op', {
        type: 'string',
        description: 'Operator for the \`country_code\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('app-type-op', {
        type: 'string',
        description: 'Operator for the \`app_type\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('app-uid-op', {
        type: 'string',
        description: 'Operator for the \`app_uid\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('ray-id-op', {
        type: 'string',
        description: 'Operator for the \`ray_id\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('email-op', {
        type: 'string',
        description: 'Operator for the \`email\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('idp-op', {
        type: 'string',
        description: 'Operator for the \`idp\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('non-identity-op', {
        type: 'string',
        description: 'Operator for the \`non_identity\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('user-id-op', {
        type: 'string',
        description: 'Operator for the \`user_id\` filter.',
        choices: ['eq', 'neq'] as const,
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description:
          'Comma-separated list of fields to include in the response. When omitted, all fields are returned.',
        default: undefined,
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<LogsAccessRequestsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LogsAccessRequestsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.until !== undefined) params['until'] = argv.until;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.email !== undefined) params['email'] = argv.email;
      if (argv.emailExact !== undefined) params['email_exact'] = argv.emailExact;
      if (argv.userId !== undefined) params['user_id'] = argv.userId;
      if (argv.allowedOp !== undefined) params['allowedOp'] = argv.allowedOp;
      if (argv.countryCodeop !== undefined) params['country_codeOp'] = argv.countryCodeop;
      if (argv.appTypeop !== undefined) params['app_typeOp'] = argv.appTypeop;
      if (argv.appUidop !== undefined) params['app_uidOp'] = argv.appUidop;
      if (argv.rayIdop !== undefined) params['ray_idOp'] = argv.rayIdop;
      if (argv.emailOp !== undefined) params['emailOp'] = argv.emailOp;
      if (argv.idpOp !== undefined) params['idpOp'] = argv.idpOp;
      if (argv.nonIdentityop !== undefined) params['non_identityOp'] = argv.nonIdentityop;
      if (argv.userIdop !== undefined) params['user_idOp'] = argv.userIdop;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.logsAccessRequestsList(
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
