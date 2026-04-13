/**
 * sinkholes command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'sinkholes',
  describe: 'DNS sinkhole addresses used to redirect malicious traffic for analysis',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
