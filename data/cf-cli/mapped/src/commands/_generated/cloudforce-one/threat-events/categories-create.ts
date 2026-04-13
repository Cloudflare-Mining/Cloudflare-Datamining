/**
 * categories-create command
 * @generated from apis/cloudforce-one/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CategoriesCreateArgs {
  'kill-chain': number;
  'mitre-attack'?: string;
  'mitre-capec'?: string;
  name: string;
  shortname?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CategoriesCreateArgs> = {
  command: 'categories-create',
  describe: 'Creates a new threat event category in Cloudforce One for organizing and classifying threat events.',

  builder: (yargs: Argv): Argv<CategoriesCreateArgs> => {
    return yargs
      .option('kill-chain', {
        type: 'number',
        description: 'The killChain field',
      })
      .option('mitre-attack', {
        type: 'string',
        description: 'The mitreAttack field',
        default: undefined,
      })
      .option('mitre-capec', {
        type: 'string',
        description: 'The mitreCapec field',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('shortname', {
        type: 'string',
        description: 'The shortname field',
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
      }) as Argv<CategoriesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CategoriesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one threat-events categories-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/events/categories/create`,
          pathParams: {},
          body: {
            killChain: argv.killChain,
            mitreAttack: argv.mitreAttack,
            mitreCapec: argv.mitreCapec,
            name: argv.name,
            shortname: argv.shortname,
          },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/create`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.killChain !== undefined) setNestedValue(bodyData, ['killChain'], argv.killChain);
      if (argv.mitreAttack !== undefined) setNestedValue(bodyData, ['mitreAttack'], argv.mitreAttack);
      if (argv.mitreCapec !== undefined) setNestedValue(bodyData, ['mitreCapec'], argv.mitreCapec);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.shortname !== undefined) setNestedValue(bodyData, ['shortname'], argv.shortname);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/events/categories/create`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
