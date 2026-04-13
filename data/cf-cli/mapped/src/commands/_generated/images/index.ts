/**
 * images command
 * @generated from apis/images/schema.ts
 */
import type { CommandModule } from 'yargs';
import v1 from './v1/index.js';
import v1extra from './v1-extra/index.js';
import v2 from './v2/index.js';

const command: CommandModule = {
  command: 'images',
  describe: 'Store, resize, and deliver optimized images globally — variants, signing keys, and direct uploads',

  builder: (yargs) => {
    return yargs.command(v1).command(v1extra).command(v2).demandCommand(1);
  },

  handler: () => {},
};

export default command;
