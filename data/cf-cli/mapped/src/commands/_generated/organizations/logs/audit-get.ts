/**
 * audit-get command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface AuditGetArgs {
  organizationId: string;
  'action-result'?: string;
  'action-type'?: string;
  'actor-context'?: string;
  'actor-email'?: string;
  'actor-id'?: string;
  'actor-ip-address'?: string;
  'actor-token-id'?: string;
  'actor-token-name'?: string;
  'actor-type'?: string;
  id?: string;
  'raw-cf-ray-id'?: string;
  'raw-method'?: string;
  'raw-status-code'?: string;
  'raw-uri'?: string;
  'resource-id'?: string;
  'resource-product'?: string;
  'resource-type'?: string;
  'resource-scope'?: string;
  'action-result-not'?: string;
  'action-type-not'?: string;
  'actor-context-not'?: string;
  'actor-email-not'?: string;
  'actor-id-not'?: string;
  'actor-ip-address-not'?: string;
  'actor-token-id-not'?: string;
  'actor-token-name-not'?: string;
  'actor-type-not'?: string;
  'id-not'?: string;
  'raw-cf-ray-id-not'?: string;
  'raw-method-not'?: string;
  'raw-status-code-not'?: string;
  'raw-uri-not'?: string;
  'resource-id-not'?: string;
  'resource-product-not'?: string;
  'resource-type-not'?: string;
  'resource-scope-not'?: string;
  since: string;
  before: string;
  direction?: string;
  limit?: number;
  cursor?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AuditGetArgs> = {
  command: 'audit-get <organizationId>',
  describe: 'Gets a list of audit logs for an organization.',

  builder: (yargs: Argv): Argv<AuditGetArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'The unique id that identifies the organization.',
        demandOption: true,
      })
      .option('action-result', {
        type: 'string',
        description: 'Filters by whether the action was successful or not.',
        default: undefined,
      })
      .option('action-type', {
        type: 'string',
        description: 'Filters by the action type.',
        default: undefined,
      })
      .option('actor-context', {
        type: 'string',
        description: 'Filters by the actor context.',
        default: undefined,
      })
      .option('actor-email', {
        type: 'string',
        description: "Filters by the actor's email address.",
        default: undefined,
      })
      .option('actor-id', {
        type: 'string',
        description: "Filters by the actor's user ID.",
        default: undefined,
      })
      .option('actor-ip-address', {
        type: 'string',
        description: 'The IP address where the action was initiated.',
        default: undefined,
      })
      .option('actor-token-id', {
        type: 'string',
        description: 'Filters by the API token ID when the actor context is an api_token or oauth.',
        default: undefined,
      })
      .option('actor-token-name', {
        type: 'string',
        description: 'Filters by the API token name when the actor context is an api_token or oauth.',
        default: undefined,
      })
      .option('actor-type', {
        type: 'string',
        description: 'Filters by the actor type.',
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'Finds a specific log by its ID.',
        default: undefined,
      })
      .option('raw-cf-ray-id', {
        type: 'string',
        description: 'Filters by the response CF Ray ID.',
        default: undefined,
      })
      .option('raw-method', {
        type: 'string',
        description: 'The HTTP method for the API call.',
        default: undefined,
      })
      .option('raw-status-code', {
        type: 'string',
        description: 'The response status code that was returned.',
        default: undefined,
      })
      .option('raw-uri', {
        type: 'string',
        description: 'Filters by the request URI.',
        default: undefined,
      })
      .option('resource-id', {
        type: 'string',
        description: 'Filters by the resource ID.',
        default: undefined,
      })
      .option('resource-product', {
        type: 'string',
        description: 'Filters audit logs by the Cloudflare product associated with the changed resource.',
        default: undefined,
      })
      .option('resource-type', {
        type: 'string',
        description: 'Filters audit logs based on the unique type of resource changed by the action.',
        default: undefined,
      })
      .option('resource-scope', {
        type: 'string',
        description:
          'Filters by the resource scope, specifying whether the resource is associated with an organization.',
        default: undefined,
      })
      .option('action-result-not', {
        type: 'string',
        description: 'Filters out audit logs by whether the action was successful or not.',
        default: undefined,
      })
      .option('action-type-not', {
        type: 'string',
        description: 'Filters out audit logs by the action type.',
        default: undefined,
      })
      .option('actor-context-not', {
        type: 'string',
        description: 'Filters out audit logs by the actor context.',
        default: undefined,
      })
      .option('actor-email-not', {
        type: 'string',
        description: "Filters out audit logs by the actor's email address.",
        default: undefined,
      })
      .option('actor-id-not', {
        type: 'string',
        description: "Filters out audit logs by the actor's user ID.",
        default: undefined,
      })
      .option('actor-ip-address-not', {
        type: 'string',
        description: 'Filters out audit logs IP address where the action was initiated.',
        default: undefined,
      })
      .option('actor-token-id-not', {
        type: 'string',
        description: 'Filters out audit logs by the API token ID when the actor context is an api_token or oauth.',
        default: undefined,
      })
      .option('actor-token-name-not', {
        type: 'string',
        description: 'Filters out audit logs by the API token name when the actor context is an api_token or oauth.',
        default: undefined,
      })
      .option('actor-type-not', {
        type: 'string',
        description: 'Filters out audit logs by the actor type.',
        default: undefined,
      })
      .option('id-not', {
        type: 'string',
        description: 'Filters out audit logs by their IDs.',
        default: undefined,
      })
      .option('raw-cf-ray-id-not', {
        type: 'string',
        description: 'Filters out audit logs by the response CF Ray ID.',
        default: undefined,
      })
      .option('raw-method-not', {
        type: 'string',
        description: 'Filters out audit logs by the HTTP method for the API call.',
        default: undefined,
      })
      .option('raw-status-code-not', {
        type: 'string',
        description: 'Filters out audit logs by the response status code that was returned.',
        default: undefined,
      })
      .option('raw-uri-not', {
        type: 'string',
        description: 'Filters out audit logs by the request URI.',
        default: undefined,
      })
      .option('resource-id-not', {
        type: 'string',
        description: 'Filters out audit logs by the resource ID.',
        default: undefined,
      })
      .option('resource-product-not', {
        type: 'string',
        description: 'Filters out audit logs by the Cloudflare product associated with the changed resource.',
        default: undefined,
      })
      .option('resource-type-not', {
        type: 'string',
        description: 'Filters out audit logs based on the unique type of resource changed by the action.',
        default: undefined,
      })
      .option('resource-scope-not', {
        type: 'string',
        description:
          'Filters out audit logs by the resource scope, specifying whether the resource is associated with an organization.',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description:
          'Limits the returned results to logs newer than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339.',
      })
      .option('before', {
        type: 'string',
        description:
          'Limits the returned results to logs older than the specified date. This can be a date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that conforms to RFC3339.',
      })
      .option('direction', {
        type: 'string',
        description: 'Sets sorting order.',
        choices: ['desc', 'asc'] as const,
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description:
          'The number limits the objects to return. The cursor attribute may be used to iterate over the next batch of objects if there are more than the limit.',
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description:
          'The cursor is an opaque token used to paginate through large sets of records. It indicates the position from which to continue when requesting the next set of records. A valid cursor value can be obtained from the cursor object in the result_info structure of a previous response.',
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
      }) as Argv<AuditGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AuditGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      const params: Record<string, unknown> = {};
      if (argv.actionResult !== undefined) params['action_result'] = argv.actionResult;
      if (argv.actionType !== undefined) params['action_type'] = argv.actionType;
      if (argv.actorContext !== undefined) params['actor_context'] = argv.actorContext;
      if (argv.actorEmail !== undefined) params['actor_email'] = argv.actorEmail;
      if (argv.actorId !== undefined) params['actor_id'] = argv.actorId;
      if (argv.actorIpAddress !== undefined) params['actor_ip_address'] = argv.actorIpAddress;
      if (argv.actorTokenId !== undefined) params['actor_token_id'] = argv.actorTokenId;
      if (argv.actorTokenName !== undefined) params['actor_token_name'] = argv.actorTokenName;
      if (argv.actorType !== undefined) params['actor_type'] = argv.actorType;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.rawCfRayId !== undefined) params['raw_cf_ray_id'] = argv.rawCfRayId;
      if (argv.rawMethod !== undefined) params['raw_method'] = argv.rawMethod;
      if (argv.rawStatusCode !== undefined) params['raw_status_code'] = argv.rawStatusCode;
      if (argv.rawUri !== undefined) params['raw_uri'] = argv.rawUri;
      if (argv.resourceId !== undefined) params['resource_id'] = argv.resourceId;
      if (argv.resourceProduct !== undefined) params['resource_product'] = argv.resourceProduct;
      if (argv.resourceType !== undefined) params['resource_type'] = argv.resourceType;
      if (argv.resourceScope !== undefined) params['resource_scope'] = argv.resourceScope;
      if (argv.actionResultNot !== undefined) params['actionResultNot'] = argv.actionResultNot;
      if (argv.actionTypeNot !== undefined) params['actionTypeNot'] = argv.actionTypeNot;
      if (argv.actorContextNot !== undefined) params['actorContextNot'] = argv.actorContextNot;
      if (argv.actorEmailNot !== undefined) params['actorEmailNot'] = argv.actorEmailNot;
      if (argv.actorIdNot !== undefined) params['actorIdNot'] = argv.actorIdNot;
      if (argv.actorIpAddressNot !== undefined) params['actorIpAddressNot'] = argv.actorIpAddressNot;
      if (argv.actorTokenIdNot !== undefined) params['actorTokenIdNot'] = argv.actorTokenIdNot;
      if (argv.actorTokenNameNot !== undefined) params['actorTokenNameNot'] = argv.actorTokenNameNot;
      if (argv.actorTypeNot !== undefined) params['actorTypeNot'] = argv.actorTypeNot;
      if (argv.idNot !== undefined) params['idNot'] = argv.idNot;
      if (argv.rawCfRayIdNot !== undefined) params['rawCfRayIdNot'] = argv.rawCfRayIdNot;
      if (argv.rawMethodNot !== undefined) params['rawMethodNot'] = argv.rawMethodNot;
      if (argv.rawStatusCodeNot !== undefined) params['rawStatusCodeNot'] = argv.rawStatusCodeNot;
      if (argv.rawUriNot !== undefined) params['rawUriNot'] = argv.rawUriNot;
      if (argv.resourceIdNot !== undefined) params['resourceIdNot'] = argv.resourceIdNot;
      if (argv.resourceProductNot !== undefined) params['resourceProductNot'] = argv.resourceProductNot;
      if (argv.resourceTypeNot !== undefined) params['resourceTypeNot'] = argv.resourceTypeNot;
      if (argv.resourceScopeNot !== undefined) params['resourceScopeNot'] = argv.resourceScopeNot;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.before !== undefined) params['before'] = argv.before;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.organizations.logs.auditGet(
        argv.organizationId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
