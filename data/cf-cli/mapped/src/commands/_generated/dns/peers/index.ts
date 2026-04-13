/**
 * peers command group
 * @generated from apis/dns/schema.ts
 */
import type { CommandModule } from 'yargs';
import update from './update.js';

const command: CommandModule = {
  command: 'peers',
  describe: 'Peers operations',

  builder: (yargs) => {
    return yargs.command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
