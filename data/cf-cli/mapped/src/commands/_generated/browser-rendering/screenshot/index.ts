/**
 * screenshot command group
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'screenshot',
  describe: 'Capture viewport or full-page screenshots as PNG or JPEG images',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
