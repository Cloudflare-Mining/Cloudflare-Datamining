/**
 * edge command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';

const command: CommandModule = {
  command: 'edge',
  describe: 'Instant Logs — stream real-time log samples directly from the edge without storage',

  builder: (yargs) => {
    return yargs.command(create).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
