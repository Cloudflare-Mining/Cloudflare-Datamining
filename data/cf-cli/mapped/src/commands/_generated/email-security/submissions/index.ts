/**
 * submissions command group
 * @generated from apis/email-security/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'submissions',
  describe: 'User and admin email submissions for classification review',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
