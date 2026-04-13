/**
 * billing command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import historylist from './history-list.js';
import profileget from './profile-get.js';

const command: CommandModule = {
  command: 'billing',
  describe: 'View billing history and payment profile for your user (deprecated — prefer account-level billing)',

  builder: (yargs) => {
    return yargs.command(historylist).command(profileget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
