/**
 * certificates command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import settingslist from './settings-list.js';
import settingsupdate from './settings-update.js';
import update from './update.js';

const command: CommandModule = {
  command: 'certificates',
  describe: 'Certificates operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(settingslist)
      .command(settingsupdate)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
