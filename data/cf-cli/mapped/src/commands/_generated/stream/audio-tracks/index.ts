/**
 * audio-tracks command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import copy from './copy.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'audio-tracks',
  describe: 'Add, edit, or remove additional audio tracks on a video',

  builder: (yargs) => {
    return yargs.command(copy).command(delete_).command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
