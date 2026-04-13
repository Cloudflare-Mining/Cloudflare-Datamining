/**
 * account command group
 * @generated from apis/builds/schema.ts
 */
import type { CommandModule } from 'yargs';
import limitsget from './limits-get.js';

const command: CommandModule = {
  command: 'account',
  describe: 'Account operations',

  builder: (yargs) => {
    return yargs.command(limitsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
