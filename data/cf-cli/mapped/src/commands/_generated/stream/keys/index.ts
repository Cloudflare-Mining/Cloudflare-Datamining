/**
 * keys command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';

const command: CommandModule = {
  command: 'keys',
  describe: 'Signing keys used to generate short-lived signed URLs for private video playback',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
