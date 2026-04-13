/**
 * roles command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'roles',
  describe: 'View the roles available for assigning to account members, each defining a set of permissions',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
