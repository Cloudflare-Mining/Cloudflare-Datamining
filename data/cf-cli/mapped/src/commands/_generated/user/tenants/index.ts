/**
 * tenants command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'tenants',
  describe: 'Tenants operations',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
