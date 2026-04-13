/**
 * loa command
 * @generated from apis/network-interconnects/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface LoaArgs {
  icon: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LoaArgs> = {
  command: 'loa <icon>',
  describe:
    'Downloads the Letter of Authorization (LOA) for a network interconnect, required for physical cross-connect provisioning.',

  builder: (yargs: Argv): Argv<LoaArgs> => {
    return yargs
      .positional('icon', {
        type: 'string',
        description: 'Interconnect name to retrieve information about',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<LoaArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LoaArgs>): Promise<void> => {
    try {
      validateResourceId(argv.icon as string | undefined, 'icon');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.networkInterconnects.interconnects.loa(argv.icon, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
