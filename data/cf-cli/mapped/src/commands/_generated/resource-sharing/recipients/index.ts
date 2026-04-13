/**
 * recipients command group
 * @generated from apis/resource-sharing/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'recipients',
  describe: 'Organizations and accounts that have been granted access to shared resources',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
