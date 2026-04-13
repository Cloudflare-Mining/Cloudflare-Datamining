/**
 * rules command group
 * @generated from apis/rum/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkcreate from './bulk-create.js';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'rules',
  describe: 'Rules that control which pages and paths are tracked by Web Analytics',

  builder: (yargs) => {
    return yargs.command(bulkcreate).command(create).command(delete_).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
