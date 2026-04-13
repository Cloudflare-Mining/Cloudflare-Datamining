/**
 * regions command group
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'regions',
  describe: 'Geographic regions used for regional pool steering and traffic policies',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
