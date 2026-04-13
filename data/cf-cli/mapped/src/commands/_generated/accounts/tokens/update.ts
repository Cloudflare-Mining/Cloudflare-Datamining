/**
 * update command
 * @generated from apis/accounts/schema.ts
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

interface UpdateArgs {
  tokenId: string;
  'condition-request-ip-in'?: string;
  'condition-request-ip-not-in'?: string;
  'expires-on'?: string;
  name: string;
  'not-before'?: string;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <tokenId>',
  describe: 'Update an existing token.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('tokenId', {
        type: 'string',
        description: 'Token identifier tag.',
        demandOption: true,
      })
      .option('condition-request-ip-in', {
        type: 'string',
        description: 'List of IPv4/IPv6 CIDR addresses.',
        default: undefined,
      })
      .option('condition-request-ip-not-in', {
        type: 'string',
        description: 'List of IPv4/IPv6 CIDR addresses.',
        default: undefined,
      })
      .option('expires-on', {
        type: 'string',
        description: 'The expiration time on or after which the JWT MUST NOT be accepted for processing.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Token name.',
      })
      .option('not-before', {
        type: 'string',
        description: 'The time before which the token MUST NOT be accepted for processing.',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Status of the token.',
        choices: ['active', 'disabled', 'expired'] as const,
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
      .choices('status', ['active', 'disabled', 'expired'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tokenId as string | undefined, 'tokenId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf accounts tokens update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/tokens/${argv.tokenId ?? '<tokenId>'}`,
          pathParams: { tokenId: String(argv.tokenId ?? '') },
          body: {
            conditionRequestIpIn: argv.conditionRequestIpIn,
            conditionRequestIpNotIn: argv.conditionRequestIpNotIn,
            expiresOn: argv.expiresOn,
            name: argv.name,
            notBefore: argv.notBefore,
            status: argv.status,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/tokens/${argv.tokenId}`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.conditionRequestIpIn !== undefined)
        setNestedValue(bodyData, ['condition', 'request_ip', 'in'], argv.conditionRequestIpIn);
      if (argv.conditionRequestIpNotIn !== undefined)
        setNestedValue(bodyData, ['condition', 'request_ip', 'not_in'], argv.conditionRequestIpNotIn);
      if (argv.expiresOn !== undefined) setNestedValue(bodyData, ['expires_on'], argv.expiresOn);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.notBefore !== undefined) setNestedValue(bodyData, ['not_before'], argv.notBefore);
      if (argv.status !== undefined) setNestedValue(bodyData, ['status'], argv.status);
      const result = await client.put<unknown>(`/accounts/${accountId}/tokens/${argv.tokenId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
