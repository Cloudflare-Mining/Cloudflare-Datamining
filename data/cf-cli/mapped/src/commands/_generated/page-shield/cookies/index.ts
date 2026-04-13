/**
 * cookies command group
 * @generated from apis/page-shield/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'cookies',
  describe: 'Cookies set by scripts on your pages with classification and same-site attribute tracking',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
