/**
 * finetunes command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import assetscreate from './assets-create.js';
import create from './create.js';
import list from './list.js';
import publiclist from './public-list.js';

const command: CommandModule = {
  command: 'finetunes',
  describe: 'Create and manage fine-tuned model variants trained on your own data',

  builder: (yargs) => {
    return yargs.command(assetscreate).command(create).command(list).command(publiclist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
