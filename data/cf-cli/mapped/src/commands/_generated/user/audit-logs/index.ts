/**
 * audit-logs command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'audit-logs',
  describe: 'Review a chronological record of actions performed by or on behalf of your user',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
