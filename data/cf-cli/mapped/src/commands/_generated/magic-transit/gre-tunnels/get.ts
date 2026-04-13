/**
 * get command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  greTunnelId: string;
  'x-magic-new-hc-target'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <greTunnelId>',
  describe: 'Lists informtion for a specific GRE tunnel.',

  builder: (yargs: Argv): Argv<GetArgs> => {
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.greTunnelId as string | undefined, 'greTunnelId');

      const headers: Record<string, string> = {};
      if (argv.xMagicNewHcTarget !== undefined) headers['x-magic-new-hc-target'] = String(argv.xMagicNewHcTarget);
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.get<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${argv.greTunnelId}`, {
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
