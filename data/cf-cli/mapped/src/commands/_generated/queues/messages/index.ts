/**
 * messages command group
 * @generated from apis/queues/schema.ts
 */
import type { CommandModule } from 'yargs';
import ack from './ack.js';
import pull from './pull.js';

const command: CommandModule = {
  command: 'messages',
  describe: 'Push messages to a queue and pull or acknowledge them from consumers',

  builder: (yargs) => {
    return yargs.command(ack).command(pull).demandCommand(1);
  },

  handler: () => {},
};

export default command;
