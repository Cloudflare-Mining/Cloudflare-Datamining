/**
 * user-groups-extra command group
 * @generated from apis/iam/schema.ts
 */
import type { CommandModule } from 'yargs';
import membersget from './members-get.js';

const command: CommandModule = {
  command: 'user-groups-extra',
  describe: 'User Groups (additional) operations',

  builder: (yargs) => {
    return yargs.command(membersget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
