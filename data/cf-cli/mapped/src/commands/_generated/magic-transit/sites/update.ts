/**
 * update command
 * @generated from apis/magic-transit/schema.ts
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
  siteId: string;
  'connector-id'?: string;
  description?: string;
  'location-lat'?: string;
  'location-lon'?: string;
  name?: string;
  'secondary-connector-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <siteId>',
  describe: 'Update a specific Site.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('connector-id', {
        type: 'string',
        description: 'Magic Connector identifier tag.',
        default: undefined,
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
        default: undefined,
      })
      .option('location-lat', {
        type: 'string',
        description: 'Latitude',
        default: undefined,
      })
      .option('location-lon', {
        type: 'string',
        description: 'Longitude',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the site.',
        default: undefined,
      })
      .option('secondary-connector-id', {
        type: 'string',
        description: 'Magic Connector identifier tag. Used when high availability mode is on.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}`,
          pathParams: { siteId: String(argv.siteId ?? '') },
          body: {
            connectorId: argv.connectorId,
            description: argv.description,
            locationLat: argv.locationLat,
            locationLon: argv.locationLon,
            name: argv.name,
            secondaryConnectorId: argv.secondaryConnectorId,
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
        const result = await client.put<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.connectorId !== undefined) setNestedValue(bodyData, ['connector_id'], argv.connectorId);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.locationLat !== undefined) setNestedValue(bodyData, ['location', 'lat'], argv.locationLat);
      if (argv.locationLon !== undefined) setNestedValue(bodyData, ['location', 'lon'], argv.locationLon);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.secondaryConnectorId !== undefined)
        setNestedValue(bodyData, ['secondary_connector_id'], argv.secondaryConnectorId);
      const result = await client.put<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
