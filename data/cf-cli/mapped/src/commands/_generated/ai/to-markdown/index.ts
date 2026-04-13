/**
 * to-markdown command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import supported from './supported.js';
import transform from './transform.js';

const command: CommandModule = {
  command: 'to-markdown',
  describe: 'Convert documents and files to clean Markdown using AI-powered extraction',

  builder: (yargs) => {
    return yargs.command(supported).command(transform).demandCommand(1);
  },

  handler: () => {},
};

export default command;
