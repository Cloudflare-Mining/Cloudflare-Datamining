/**
 * scim-groups-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ScimGroupsListArgs {
  identityProviderId: string;
  'cf-resource-id'?: string;
  'idp-resource-id'?: string;
  name?: string;
  page?: number;
  'per-page'?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ScimGroupsListArgs> = {
  command: 'scim-groups-list <identityProviderId>',
  describe:
    'Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).',

  builder: (yargs: Argv): Argv<ScimGroupsListArgs> => {
    return yargs
      .positional('identityProviderId', {
        type: 'string',
        description: 'UUID.',
        demandOption: true,
      })
      .option('cf-resource-id', {
        type: 'string',
        description: 'The unique Cloudflare-generated Id of the SCIM Group resource; also known as the "Id".',
        default: undefined,
      })
      .option('idp-resource-id', {
        type: 'string',
        description: 'The IdP-generated Id of the SCIM Group resource; also known as the "external Id".',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The display name of the SCIM Group resource.',
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
      }) as Argv<ScimGroupsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ScimGroupsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identityProviderId as string | undefined, 'identityProviderId');

      const params: Record<string, unknown> = {};
      if (argv.cfResourceId !== undefined) params['cf_resource_id'] = argv.cfResourceId;
      if (argv.idpResourceId !== undefined) params['idp_resource_id'] = argv.idpResourceId;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.identityproviders.scimGroupsList(
        argv.identityProviderId,
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
