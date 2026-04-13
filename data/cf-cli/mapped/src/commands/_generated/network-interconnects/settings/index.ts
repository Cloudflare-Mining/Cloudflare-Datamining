/**
 * settings command group
 * @generated from apis/network-interconnects/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Account-level interconnect settings and default configurations',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
