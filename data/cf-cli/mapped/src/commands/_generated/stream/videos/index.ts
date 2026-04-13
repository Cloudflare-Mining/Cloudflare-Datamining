/**
 * videos command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import storageusage from './storage-usage.js';

const command: CommandModule = {
  command: 'videos',
  describe: 'Aggregate video storage usage statistics for the account',

  builder: (yargs) => {
    return yargs.command(storageusage).demandCommand(1);
  },

  handler: () => {},
};

export default command;
