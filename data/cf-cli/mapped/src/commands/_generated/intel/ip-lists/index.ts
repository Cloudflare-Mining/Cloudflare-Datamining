/**
 * ip-lists command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'ip-lists',
  describe: 'Curated IP lists used for threat detection and policy enforcement',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
