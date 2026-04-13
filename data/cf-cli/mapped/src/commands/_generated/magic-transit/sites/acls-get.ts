/**
 * acls-get command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface AclsGetArgs {
  siteId: string;
  aclId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AclsGetArgs> = {
  command: 'acls-get <siteId> <aclId>',
  describe: 'Get a specific Site ACL.',

  builder: (yargs: Argv): Argv<AclsGetArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .positional('aclId', {
        type: 'string',
        description: 'Identifier',
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
      }) as Argv<AclsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AclsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');
      validateResourceId(argv.aclId as string | undefined, 'aclId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.sites.aclsGet(argv.siteId, accountId, argv.aclId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
