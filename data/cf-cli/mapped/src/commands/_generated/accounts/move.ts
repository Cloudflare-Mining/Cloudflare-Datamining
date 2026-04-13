/**
 * move command
 * @generated from apis/accounts/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface MoveArgs {
  'account-ids': string;
  'destination-organization-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MoveArgs> = {
  command: 'move',
  describe: 'Batch move a collection of accounts to a specific organization. ⚠️ Not implemented.',

  builder: (yargs: Argv): Argv<MoveArgs> => {
    return yargs
      .option('account-ids', {
        type: 'string',
        description: 'Move these accounts to the destination organization.',
      })
      .option('destination-organization-id', {
        type: 'string',
        description: 'Move accounts to this organization ID.',
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
      }) as Argv<MoveArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MoveArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf accounts move',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/move`,
          pathParams: {},
          body: { accountIds: argv.accountIds, destinationOrganizationId: argv.destinationOrganizationId },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/move`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.accountIds !== undefined) setNestedValue(bodyData, ['account_ids'], argv.accountIds);
      if (argv.destinationOrganizationId !== undefined)
        setNestedValue(bodyData, ['destination_organization_id'], argv.destinationOrganizationId);
      const result = await client.post<unknown>(`/accounts/move`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
