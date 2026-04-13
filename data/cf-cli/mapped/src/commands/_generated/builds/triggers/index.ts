/**
 * triggers command group
 * @generated from apis/builds/schema.ts
 */
import type { CommandModule } from 'yargs';
import buildscreate from './builds-create.js';
import create from './create.js';
import delete_ from './delete.js';
import environmentvariablesdelete from './environment-variables-delete.js';
import environmentvariablesedit from './environment-variables-edit.js';
import environmentvariableslist from './environment-variables-list.js';
import purgebuildcachepurge from './purge-build-cache-purge.js';
import update from './update.js';

const command: CommandModule = {
  command: 'triggers',
  describe: 'Triggers operations',

  builder: (yargs) => {
    return yargs
      .command(buildscreate)
      .command(create)
      .command(delete_)
      .command(environmentvariablesdelete)
      .command(environmentvariablesedit)
      .command(environmentvariableslist)
      .command(purgebuildcachepurge)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
