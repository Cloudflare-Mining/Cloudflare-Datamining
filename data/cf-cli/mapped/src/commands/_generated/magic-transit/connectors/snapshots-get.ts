/**
 * snapshots-get command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface SnapshotsGetArgs {
  connectorId: string;
  snapshotT: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SnapshotsGetArgs> = {
  command: 'snapshots-get <connectorId> <snapshotT>',
  describe: 'Gets a specific telemetry snapshot from a Magic WAN Connector, showing point-in-time metrics.',

  builder: (yargs: Argv): Argv<SnapshotsGetArgs> => {
    return yargs
      .positional('connectorId', {
        type: 'string',
        description: 'Connector ID',
        demandOption: true,
      })
      .positional('snapshotT', {
        type: 'string',
        description: 'Snapshot t',
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
      }) as Argv<SnapshotsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SnapshotsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.connectorId as string | undefined, 'connectorId');
      validateResourceId(argv.snapshotT as string | undefined, 'snapshotT');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.connectors.snapshotsGet(accountId, argv.connectorId, argv.snapshotT);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
