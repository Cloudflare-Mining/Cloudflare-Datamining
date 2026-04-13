/**
 * create-v2 command
 * @generated from apis/custom-pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateV2Args {
  zoneIdentifier: string;
  description: string;
  name: string;
  url: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateV2Args> = {
  command: 'create-v2 <zoneIdentifier>',
  describe: 'Creates a new custom asset at the zone level.',

  builder: (yargs: Argv): Argv<CreateV2Args> => {
    return yargs
      .positional('zoneIdentifier', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'A short description of the custom asset.',
      })
      .option('name', {
        type: 'string',
        description:
          'The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).',
      })
      .option('url', {
        type: 'string',
        description: 'The URL where the asset content is fetched from.',
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
      }) as Argv<CreateV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.zoneIdentifier as string | undefined, 'zoneIdentifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf custom-pages assets create-v2',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneIdentifier ?? '<zoneIdentifier>'}/custom_pages/assets`,
          pathParams: { zoneIdentifier: String(argv.zoneIdentifier ?? '') },
          body: { description: argv.description, name: argv.name, url: argv.url },
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
        const result = await client.post<unknown>(`/zones/${argv.zoneIdentifier}/custom_pages/assets`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.post<unknown>(`/zones/${argv.zoneIdentifier}/custom_pages/assets`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
