/**
 * connectivity command
 * @generated from apis/connectivity/schema.ts
 */
import type { CommandModule } from 'yargs';
import directory from './directory/index.js';

const command: CommandModule = {
  command: 'connectivity',
  describe: 'Service directory for network connectivity endpoints and their configurations',

  builder: (yargs) => {
    return yargs.command(directory).demandCommand(1);
  },

  handler: () => {},
};

export default command;
