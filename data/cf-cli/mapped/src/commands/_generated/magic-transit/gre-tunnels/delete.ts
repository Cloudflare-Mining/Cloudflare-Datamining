/**
 * delete command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface DeleteArgs {
  greTunnelId: string;
  'x-magic-new-hc-target'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <greTunnelId>',
  describe:
    'Disables and removes a specific static GRE tunnel. Use \`?validate_only=true\` as an optional query parameter to only run validation without persisting changes.',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('greTunnelId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('x-magic-new-hc-target', {
        type: 'string',
        description:
          'If true, the health check target in the response body will be presented using the new object format. Defaults to false.',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.greTunnelId as string | undefined, 'greTunnelId');

      const headers: Record<string, string> = {};
      if (argv.xMagicNewHcTarget !== undefined) headers['x-magic-new-hc-target'] = String(argv.xMagicNewHcTarget);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit gre-tunnels delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/gre_tunnels/${argv.greTunnelId ?? '<greTunnelId>'}`,
          pathParams: { greTunnelId: String(argv.greTunnelId ?? '') },
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
        const result = await client.delete<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${argv.greTunnelId}`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.delete<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${argv.greTunnelId}`, {
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
