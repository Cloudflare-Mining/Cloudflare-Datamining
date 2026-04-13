/**
 * users command group
 * @generated from apis/scim/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'users',
  describe: 'Users operations',

  builder: (yargs) => {
    return yargs.command(create).command(edit).command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
