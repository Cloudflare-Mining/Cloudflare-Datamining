/**
 * create command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  'condition-request-ip-in'?: string;
  'condition-request-ip-not-in'?: string;
  'expires-on'?: string;
  name: string;
  'not-before'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new access token.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user tokens create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/user/tokens`,
          pathParams: {},
          body: {
            conditionRequestIpIn: argv.conditionRequestIpIn,
            conditionRequestIpNotIn: argv.conditionRequestIpNotIn,
            expiresOn: argv.expiresOn,
            name: argv.name,
            notBefore: argv.notBefore,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/user/tokens`, { body: bodyData });
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
      const result = await client.post<unknown>(`/user/tokens`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
