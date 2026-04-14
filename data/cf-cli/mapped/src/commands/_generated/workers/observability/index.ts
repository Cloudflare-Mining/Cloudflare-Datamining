/**
 * observability command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import destinationscreate from './destinations-create.js';
import destinationsdelete from './destinations-delete.js';
import destinationsedit from './destinations-edit.js';
import destinationslist from './destinations-list.js';
import queriescreate from './queries-create.js';
import queriesdelete from './queries-delete.js';
import queriesedit from './queries-edit.js';
import queriesget from './queries-get.js';
import querieslist from './queries-list.js';
import telemetrykeyslist from './telemetry-keys-list.js';
import telemetryquery from './telemetry-query.js';
import telemetryvalueslist from './telemetry-values-list.js';

const command: CommandModule = {
  command: 'observability',
  describe: 'Workers observability — destinations, queries, and telemetry for monitoring and debugging',

  builder: (yargs) => {
    return yargs
      .command(destinationscreate)
      .command(destinationsdelete)
      .command(destinationsedit)
      .command(destinationslist)
      .command(queriescreate)
      .command(queriesdelete)
      .command(queriesedit)
      .command(queriesget)
      .command(querieslist)
      .command(telemetrykeyslist)
      .command(telemetryquery)
      .command(telemetryvalueslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
