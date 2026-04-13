/**
 * provider-configs command group
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'provider-configs',
  describe: 'Store API keys and endpoint settings for each upstream AI provider',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
