/**
 * availabilities command group
 * @generated from apis/speed/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'availabilities',
  describe: 'Check which speed test regions and configurations are available for your zone',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
