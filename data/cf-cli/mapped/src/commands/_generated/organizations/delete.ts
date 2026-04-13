/**
 * delete command
 * @generated from apis/organizations/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';

interface DeleteArgs {
  organizationId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DeleteArgs> = {
  command: 'delete <organizationId>',
  describe:
    'Delete an organization. The organization MUST be empty before deleting. It must not contain any sub-organizations, accounts, members or users. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)',

  builder: (yargs: Argv): Argv<DeleteArgs> => {
    return yargs
      .positional('organizationId', {
        type: 'string',
        description: 'The ID of the organization to delete.',
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
      }) as Argv<DeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.organizationId as string | undefined, 'organizationId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf organizations delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/organizations/${argv.organizationId ?? '<organizationId>'}`,
          pathParams: { organizationId: String(argv.organizationId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.organizations.delete(argv.organizationId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
