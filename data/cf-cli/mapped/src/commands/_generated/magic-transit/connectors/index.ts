/**
 * connectors command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import eventsget from './events-get.js';
import eventslatestlist from './events-latest-list.js';
import eventslist from './events-list.js';
import get from './get.js';
import list from './list.js';
import snapshotsget from './snapshots-get.js';
import snapshotslatestlist from './snapshots-latest-list.js';
import snapshotslist from './snapshots-list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'connectors',
  describe: 'Magic WAN Connector appliances — provisioning, telemetry events, and configuration snapshots',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(eventsget)
      .command(eventslatestlist)
      .command(eventslist)
      .command(get)
      .command(list)
      .command(snapshotsget)
      .command(snapshotslatestlist)
      .command(snapshotslist)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
