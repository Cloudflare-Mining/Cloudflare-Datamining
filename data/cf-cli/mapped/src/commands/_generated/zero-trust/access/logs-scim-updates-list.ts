/**
 * logs-scim-updates-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface LogsScimUpdatesListArgs {
  limit?: string;
  direction?: string;
  since?: string;
  until?: string;
  'idp-id': string;
  status?: string;
  'resource-type'?: string;
  'request-method'?: string;
  'resource-user-email'?: string;
  'resource-group-name'?: string;
  'cf-resource-id'?: string;
  'idp-resource-id'?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LogsScimUpdatesListArgs> = {
  command: 'logs-scim-updates-list',
  describe:
    'Lists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).',

  builder: (yargs: Argv): Argv<LogsScimUpdatesListArgs> => {
    return yargs
      .option('limit', {
        type: 'string',
        description: 'The maximum number of update logs to retrieve.',
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'The chronological order used to sort the logs.',
        choices: ['desc', 'asc'] as const,
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description: 'the timestamp of the earliest update log.',
        default: undefined,
      })
      .option('until', {
        type: 'string',
        description: 'the timestamp of the most-recent update log.',
        default: undefined,
      })
      .option('idp-id', {
        type: 'string',
        description: 'The unique Id of the IdP that has SCIM enabled.',
      })
      .option('status', {
        type: 'string',
        description: 'The status of the SCIM request.',
        default: undefined,
      })
      .option('resource-type', {
        type: 'string',
        description: 'The resource type of the SCIM request.',
        default: undefined,
      })
      .option('request-method', {
        type: 'string',
        description: 'The request method of the SCIM request.',
        default: undefined,
      })
      .option('resource-user-email', {
        type: 'string',
        description: 'The email address of the SCIM User resource.',
        default: undefined,
      })
      .option('resource-group-name', {
        type: 'string',
        description: 'The display name of the SCIM Group resource.',
        default: undefined,
      })
      .option('cf-resource-id', {
        type: 'string',
        description: 'The unique Cloudflare-generated Id of the SCIM resource.',
        default: undefined,
      })
      .option('idp-resource-id', {
        type: 'string',
        description: 'The IdP-generated Id of the SCIM resource.',
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
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<LogsScimUpdatesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LogsScimUpdatesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.until !== undefined) params['until'] = argv.until;
      if (argv.idpId !== undefined) params['idp_id'] = argv.idpId;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.resourceType !== undefined) params['resource_type'] = argv.resourceType;
      if (argv.requestMethod !== undefined) params['request_method'] = argv.requestMethod;
      if (argv.resourceUserEmail !== undefined) params['resource_user_email'] = argv.resourceUserEmail;
      if (argv.resourceGroupName !== undefined) params['resource_group_name'] = argv.resourceGroupName;
      if (argv.cfResourceId !== undefined) params['cf_resource_id'] = argv.cfResourceId;
      if (argv.idpResourceId !== undefined) params['idp_resource_id'] = argv.idpResourceId;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.access.logsScimUpdatesList(
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
