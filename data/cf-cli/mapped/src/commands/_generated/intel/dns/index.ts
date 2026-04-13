/**
 * dns command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'dns',
  describe: 'Passive DNS data showing historical DNS resolution records for domains',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
