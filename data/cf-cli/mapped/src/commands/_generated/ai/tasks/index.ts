/**
 * tasks command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'tasks',
  describe: 'Browse supported inference task types (text-generation, image-classification, etc.)',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
