/**
 * variants command group
 * @generated from apis/cache/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'variants',
  describe: 'Serve different cached versions of an image based on the Accept header (WebP, AVIF, etc.)',

  builder: (yargs) => {
    return yargs.command(delete_).command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
