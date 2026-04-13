/**
 * history command group
 * @generated from apis/alerting/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'history',
  describe: 'Browse previously sent alert notifications and their delivery status',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
