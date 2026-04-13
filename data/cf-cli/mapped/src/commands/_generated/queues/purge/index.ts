/**
 * purge command group
 * @generated from apis/queues/schema.ts
 */
import type { CommandModule } from 'yargs';
import start from './start.js';
import status from './status.js';

const command: CommandModule = {
  command: 'purge',
  describe: 'Remove all pending messages from a queue',

  builder: (yargs) => {
    return yargs.command(start).command(status).demandCommand(1);
  },

  handler: () => {},
};

export default command;
