/**
 * connections command group
 * @generated from apis/page-shield/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'connections',
  describe: 'Third-party connections made by scripts on your pages — track data exfiltration risks',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
