/**
 * categories command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import getbyid from './get-by-id.js';
import getcategories from './get-categories.js';

const command: CommandModule = {
  command: 'categories',
  describe: 'Categories operations',

  builder: (yargs) => {
    return yargs.command(getbyid).command(getcategories).demandCommand(1);
  },

  handler: () => {},
};

export default command;
