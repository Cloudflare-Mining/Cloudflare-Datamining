/**
 * tokens command group
 * @generated from apis/ai-search/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';
import read from './read.js';
import update from './update.js';

const command: CommandModule = {
  command: 'tokens',
  describe: 'Scoped authentication tokens that grant access to specific AI Search instances',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(list).command(read).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
