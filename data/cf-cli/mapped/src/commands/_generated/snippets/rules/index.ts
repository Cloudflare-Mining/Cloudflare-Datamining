/**
 * rules command group
 * @generated from apis/snippets/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Rules that determine which requests trigger specific snippets based on URL patterns',

  builder: (yargs) => {
    return yargs.command(delete_).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
