/**
 * connections command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'connections',
  describe: 'Connections operations',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
