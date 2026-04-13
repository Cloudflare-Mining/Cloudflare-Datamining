/**
 * statuses command group
 * @generated from apis/waiting-rooms/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'statuses',
  describe: 'Real-time queue status showing active users, queued users, and estimated wait times',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
