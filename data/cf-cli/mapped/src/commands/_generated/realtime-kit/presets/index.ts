/**
 * presets command group
 * @generated from apis/realtime-kit/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import getpresetbyid from './get-preset-by-id.js';
import update from './update.js';

const command: CommandModule = {
  command: 'presets',
  describe: 'Reusable meeting configuration presets for resolution, layout, and recording defaults',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(getpresetbyid).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
