/**
 * ips-update command
 * @generated from apis/addressing/schema.ts
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

interface IpsUpdateArgs {
  ipAddress: string;
  addressMapId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, IpsUpdateArgs> = {
  command: 'ips-update <ipAddress> <addressMapId>',
  describe: 'Add an IP from a prefix owned by the account to a particular address map.',

  builder: (yargs: Argv): Argv<IpsUpdateArgs> => {
    return yargs
      .positional('ipAddress', {
        type: 'string',
        description: 'An IPv4 or IPv6 address.',
        demandOption: true,
      })
      .positional('addressMapId', {
        type: 'string',
        description: 'Identifier of an Address Map.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<IpsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IpsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ipAddress as string | undefined, 'ipAddress');
      validateResourceId(argv.addressMapId as string | undefined, 'addressMapId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf addressing address-maps ips-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/addressing/address_maps/${argv.addressMapId ?? '<addressMapId>'}/ips/${argv.ipAddress ?? '<ipAddress>'}`,
          pathParams: { ipAddress: String(argv.ipAddress ?? ''), addressMapId: String(argv.addressMapId ?? '') },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/addressing/address_maps/${argv.addressMapId}/ips/${argv.ipAddress}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.addressing.addressmaps.ipsUpdate(argv.ipAddress, argv.addressMapId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
