/**
 * keys command group
 * @generated from apis/resource-tagging/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'keys',
  describe: 'Tag key definitions that establish the vocabulary for tagging resources',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
