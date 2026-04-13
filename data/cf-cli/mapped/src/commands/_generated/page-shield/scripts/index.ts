/**
 * scripts command group
 * @generated from apis/page-shield/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'scripts',
  describe: 'JavaScript files detected on your pages with change tracking and malicious code detection',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
