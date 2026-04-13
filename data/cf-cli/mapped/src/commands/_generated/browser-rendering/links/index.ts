/**
 * links command group
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'links',
  describe: 'Extract all links from a rendered web page',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
