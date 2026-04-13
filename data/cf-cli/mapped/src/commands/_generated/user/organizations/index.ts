/**
 * organizations command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'organizations',
  describe: 'List organizations your user belongs to and leave those you no longer need access to',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
