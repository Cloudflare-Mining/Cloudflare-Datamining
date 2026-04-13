/**
 * update command
 * @generated from apis/registrar/schema.ts
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

interface UpdateArgs {
  domainName: string;
  'auto-renew'?: boolean;
  locked?: boolean;
  privacy?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <domainName>',
  describe: 'Update individual domain.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('domainName', {
        type: 'string',
        description: 'Domain name.',
        demandOption: true,
      })
      .option('auto-renew', {
        type: 'boolean',
        description: 'Auto-renew controls whether subscription is automatically renewed upon domain expiration.',
        default: false,
      })
      .option('locked', {
        type: 'boolean',
        description: 'Shows whether a registrar lock is in place for a domain.',
        default: false,
      })
      .option('privacy', {
        type: 'boolean',
        description: 'Privacy option controls redacting WHOIS information.',
        default: false,
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.domainName as string | undefined, 'domainName');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf registrar domains update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/registrar/domains/${argv.domainName ?? '<domainName>'}`,
          pathParams: { domainName: String(argv.domainName ?? '') },
          body: { autoRenew: argv.autoRenew, locked: argv.locked, privacy: argv.privacy },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/registrar/domains/${argv.domainName}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.autoRenew !== undefined) setNestedValue(bodyData, ['auto_renew'], argv.autoRenew);
      if (argv.locked !== undefined) setNestedValue(bodyData, ['locked'], argv.locked);
      if (argv.privacy !== undefined) setNestedValue(bodyData, ['privacy'], argv.privacy);
      const result = await client.put<unknown>(`/accounts/${accountId}/registrar/domains/${argv.domainName}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
