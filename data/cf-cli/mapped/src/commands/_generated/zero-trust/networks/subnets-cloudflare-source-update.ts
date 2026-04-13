/**
 * subnets-cloudflare-source-update command
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

interface SubnetsCloudflareSourceUpdateArgs {
  addressFamily: string;
  comment?: string;
  name?: string;
  network?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SubnetsCloudflareSourceUpdateArgs> = {
  command: 'subnets-cloudflare-source-update <addressFamily>',
  describe: 'Updates the Cloudflare Source subnet of the given address family',

  builder: (yargs: Argv): Argv<SubnetsCloudflareSourceUpdateArgs> => {
    return yargs
      .positional('addressFamily', {
        type: 'string',
        description: 'IP address family, either \`v4\` (IPv4) or \`v6\` (IPv6)',
        demandOption: true,
      })
      .option('comment', {
        type: 'string',
        description: 'An optional description of the subnet.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'A user-friendly name for the subnet.',
        default: undefined,
      })
      .option('network', {
        type: 'string',
        description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.',
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
      }) as Argv<SubnetsCloudflareSourceUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SubnetsCloudflareSourceUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.addressFamily as string | undefined, 'addressFamily');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust networks subnets-cloudflare-source-update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/zerotrust/subnets/cloudflare_source/${argv.addressFamily ?? '<addressFamily>'}`,
          pathParams: { addressFamily: String(argv.addressFamily ?? '') },
          body: { comment: argv.comment, name: argv.name, network: argv.network },
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
          `/accounts/${accountId}/zerotrust/subnets/cloudflare_source/${argv.addressFamily}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comment !== undefined) setNestedValue(bodyData, ['comment'], argv.comment);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.network !== undefined) setNestedValue(bodyData, ['network'], argv.network);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/zerotrust/subnets/cloudflare_source/${argv.addressFamily}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
