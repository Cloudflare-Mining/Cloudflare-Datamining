/**
 * models command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';
import schemaget from './schema-get.js';

const command: CommandModule = {
  command: 'models',
  describe: 'Search the Workers AI model catalog and retrieve input/output schemas',

  builder: (yargs) => {
    return yargs.command(list).command(schemaget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
