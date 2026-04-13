/**
 * load-balancing-analytics command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import eventslist from './events-list.js';

const command: CommandModule = {
  command: 'load-balancing-analytics',
  describe: 'Load Balancing Analytics operations',

  builder: (yargs) => {
    return yargs.command(eventslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
