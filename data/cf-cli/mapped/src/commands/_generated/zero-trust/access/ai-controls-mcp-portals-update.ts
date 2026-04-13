/**
 * ai-controls-mcp-portals-update command
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

interface AIControlsMcpPortalsUpdateArgs {
  id: string;
  'allow-code-mode'?: boolean;
  description?: string;
  hostname?: string;
  name?: string;
  'secure-web-gateway'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AIControlsMcpPortalsUpdateArgs> = {
  command: 'ai-controls-mcp-portals-update <id>',
  describe: 'Updates an MCP portal configuration.',

  builder: (yargs: Argv): Argv<AIControlsMcpPortalsUpdateArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'portal id',
        demandOption: true,
      })
      .option('allow-code-mode', {
        type: 'boolean',
        description: 'Allow remote code execution in Dynamic Workers (beta)',
        default: false,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'The hostname field',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
        default: undefined,
      })
      .option('secure-web-gateway', {
        type: 'boolean',
        description: 'Route outbound MCP traffic through Zero Trust Secure Web Gateway',
        default: false,
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
      }) as Argv<AIControlsMcpPortalsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AIControlsMcpPortalsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust access ai-controls-mcp-portals-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/access/ai-controls/mcp/portals/${argv.id ?? '<id>'}`,
          pathParams: { id: String(argv.id ?? '') },
          body: {
            allowCodeMode: argv.allowCodeMode,
            description: argv.description,
            hostname: argv.hostname,
            name: argv.name,
            secureWebGateway: argv.secureWebGateway,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/portals/${argv.id}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.allowCodeMode !== undefined) setNestedValue(bodyData, ['allow_code_mode'], argv.allowCodeMode);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.hostname !== undefined) setNestedValue(bodyData, ['hostname'], argv.hostname);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.secureWebGateway !== undefined) setNestedValue(bodyData, ['secure_web_gateway'], argv.secureWebGateway);
      const result = await client.put<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/portals/${argv.id}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
