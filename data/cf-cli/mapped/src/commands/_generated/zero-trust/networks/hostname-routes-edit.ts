/**
 * hostname-routes-edit command
 * @generated from apis/zero-trust/schema.ts
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

interface HostnameRoutesEditArgs {
  hostnameRouteId: string;
  comment?: string;
  hostname?: string;
  'tunnel-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, HostnameRoutesEditArgs> = {
  command: 'hostname-routes-edit <hostnameRouteId>',
  describe: 'Updates a hostname route.',

  builder: (yargs: Argv): Argv<HostnameRoutesEditArgs> => {
    return yargs
      .positional('hostnameRouteId', {
        type: 'string',
        description: 'The hostname route ID.',
        demandOption: true,
      })
      .option('comment', {
        type: 'string',
        description: 'An optional description of the hostname route.',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'The hostname of the route.',
        default: undefined,
      })
      .option('tunnel-id', {
        type: 'string',
        description: 'UUID of the tunnel.',
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
      }) as Argv<HostnameRoutesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HostnameRoutesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.hostnameRouteId as string | undefined, 'hostnameRouteId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks hostname-routes-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/routes/hostname/${argv.hostnameRouteId ?? '<hostnameRouteId>'}`,
          pathParams: { hostnameRouteId: String(argv.hostnameRouteId ?? '') },
          body: { comment: argv.comment, hostname: argv.hostname, tunnelId: argv.tunnelId },
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/zerotrust/routes/hostname/${argv.hostnameRouteId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.hostname !== undefined) setNestedValue(bodyData, ['hostname'], argv.hostname);
      if (argv.tunnelId !== undefined) setNestedValue(bodyData, ['tunnel_id'], argv.tunnelId);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/zerotrust/routes/hostname/${argv.hostnameRouteId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
