/**
 * logos command group
 * @generated from apis/brand-protection/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'logos',
  describe: 'Brand logos uploaded for visual similarity matching against phishing sites',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
