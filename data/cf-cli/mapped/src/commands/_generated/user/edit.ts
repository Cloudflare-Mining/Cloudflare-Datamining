/**
 * edit command
 * @generated from apis/user/schema.ts
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

interface EditArgs {
  country?: string;
  'first-name'?: string;
  'last-name'?: string;
  telephone?: string;
  zipcode?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit',
  describe: 'Edit part of your user details.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .option('country', {
        type: 'string',
        description: 'The country in which the user lives.',
        default: undefined,
      })
      .option('first-name', {
        type: 'string',
        description: "User's first name",
        default: undefined,
      })
      .option('last-name', {
        type: 'string',
        description: "User's last name",
        default: undefined,
      })
      .option('telephone', {
        type: 'string',
        description: "User's telephone number",
        default: undefined,
      })
      .option('zipcode', {
        type: 'string',
        description: 'The zipcode or postal code where the user lives.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/user`,
          pathParams: {},
          body: {
            country: argv.country,
            firstName: argv.firstName,
            lastName: argv.lastName,
            telephone: argv.telephone,
            zipcode: argv.zipcode,
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

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/user`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.country !== undefined) setNestedValue(bodyData, ['country'], argv.country);
      if (argv.firstName !== undefined) setNestedValue(bodyData, ['first_name'], argv.firstName);
      if (argv.lastName !== undefined) setNestedValue(bodyData, ['last_name'], argv.lastName);
      if (argv.telephone !== undefined) setNestedValue(bodyData, ['telephone'], argv.telephone);
      if (argv.zipcode !== undefined) setNestedValue(bodyData, ['zipcode'], argv.zipcode);
      const result = await client.patch<unknown>(`/user`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
