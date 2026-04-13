/**
 * snapshots-latest-list command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SnapshotsLatestListArgs {
  connectorId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SnapshotsLatestListArgs> = {
  command: 'snapshots-latest-list <connectorId>',
  describe: 'Retrieves the most recent telemetry snapshots from a Magic WAN Connector.',

  builder: (yargs: Argv): Argv<SnapshotsLatestListArgs> => {
    return yargs
      .positional('connectorId', {
        type: 'string',
        description: 'Connector ID',
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
      }) as Argv<SnapshotsLatestListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SnapshotsLatestListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectorId as string | undefined, 'connectorId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.connectors.snapshotsLatestList(accountId, argv.connectorId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
