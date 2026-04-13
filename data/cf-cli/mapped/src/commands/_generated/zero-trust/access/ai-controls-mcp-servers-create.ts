/**
 * ai-controls-mcp-servers-create command
 * @generated from apis/zero-trust/schema.ts
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

interface AIControlsMcpServersCreateArgs {
  'auth-credentials'?: string;
  'auth-type': string;
  description?: string;
  hostname: string;
  id: string;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AIControlsMcpServersCreateArgs> = {
  command: 'ai-controls-mcp-servers-create',
  describe: 'Creates a new MCP portal for managing AI tool access through Cloudflare Access.',

  builder: (yargs: Argv): Argv<AIControlsMcpServersCreateArgs> => {
    return yargs
      .option('auth-credentials', {
        type: 'string',
        description: 'The auth_credentials field',
        default: undefined,
      })
      .option('auth-type', {
        type: 'string',
        description: 'The auth_type field',
        choices: ['oauth', 'bearer', 'unauthenticated'] as const,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'The hostname field',
      })
      .option('id', {
        type: 'string',
        description: 'server id',
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
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
      .choices('auth-type', ['oauth', 'bearer', 'unauthenticated'] as const) as Argv<AIControlsMcpServersCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AIControlsMcpServersCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access ai-controls-mcp-servers-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/ai-controls/mcp/servers`,
          pathParams: {},
          body: {
            authCredentials: argv.authCredentials,
            authType: argv.authType,
            description: argv.description,
            hostname: argv.hostname,
            id: argv.id,
            name: argv.name,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.authCredentials !== undefined) setNestedValue(bodyData, ['auth_credentials'], argv.authCredentials);
      if (argv.authType !== undefined) setNestedValue(bodyData, ['auth_type'], argv.authType);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.hostname !== undefined) setNestedValue(bodyData, ['hostname'], argv.hostname);
      if (argv.id !== undefined) setNestedValue(bodyData, ['id'], argv.id);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.post<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
