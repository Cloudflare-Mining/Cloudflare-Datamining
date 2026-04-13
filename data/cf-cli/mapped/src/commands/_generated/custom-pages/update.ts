/**
 * update command
 * @generated from apis/custom-pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateArgs {
  identifier: string;
  zoneIdentifier: string;
  state: string;
  url: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <identifier> <zoneIdentifier>',
  describe: 'Updates the configuration of an existing custom page.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'Error Page Types',
        demandOption: true,
      })
      .positional('zoneIdentifier', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .option('state', {
        type: 'string',
        description: 'The custom page state.',
        choices: ['default', 'customized'] as const,
      })
      .option('url', {
        type: 'string',
        description: 'The URL associated with the custom page.',
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
      .choices('state', ['default', 'customized'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');
      validateResourceId(argv.zoneIdentifier as string | undefined, 'zoneIdentifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-pages update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneIdentifier ?? '<zoneIdentifier>'}/custom_pages/${argv.identifier ?? '<identifier>'}`,
          pathParams: { identifier: String(argv.identifier ?? ''), zoneIdentifier: String(argv.zoneIdentifier ?? '') },
          body: { state: argv.state, url: argv.url },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${argv.zoneIdentifier}/custom_pages/${argv.identifier}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.state !== undefined) setNestedValue(bodyData, ['state'], argv.state);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.put<unknown>(`/zones/${argv.zoneIdentifier}/custom_pages/${argv.identifier}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
