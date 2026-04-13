/**
 * move-create command
 * @generated from apis/email-security/schema.ts
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

interface MoveCreateArgs {
  postfixId: string;
  destination: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MoveCreateArgs> = {
  command: 'move-create <postfixId>',
  describe: 'Moves a single email message to a different folder or changes its quarantine status.',

  builder: (yargs: Argv): Argv<MoveCreateArgs> => {
    return yargs
      .positional('postfixId', {
        type: 'string',
        description: 'The identifier of the message.',
        demandOption: true,
      })
      .option('destination', {
        type: 'string',
        description: 'The destination field',
        choices: ['Inbox', 'JunkEmail', 'DeletedItems', 'RecoverableItemsDeletions', 'RecoverableItemsPurges'] as const,
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
      })
      .choices('destination', [
        'Inbox',
        'JunkEmail',
        'DeletedItems',
        'RecoverableItemsDeletions',
        'RecoverableItemsPurges',
      ] as const) as Argv<MoveCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MoveCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.postfixId as string | undefined, 'postfixId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security investigate move-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/investigate/${argv.postfixId ?? '<postfixId>'}/move`,
          pathParams: { postfixId: String(argv.postfixId ?? '') },
          body: { destination: argv.destination },
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/email-security/investigate/${argv.postfixId}/move`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.destination !== undefined) setNestedValue(bodyData, ['destination'], argv.destination);
      const result = await client.post<unknown>(
        `/accounts/${accountId}/email-security/investigate/${argv.postfixId}/move`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
