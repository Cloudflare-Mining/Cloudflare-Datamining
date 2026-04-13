/**
 * content command group
 * @generated from apis/snippets/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'content',
  describe: 'Raw JavaScript source code content of individual snippets',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
