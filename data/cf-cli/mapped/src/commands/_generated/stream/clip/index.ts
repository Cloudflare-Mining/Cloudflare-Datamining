/**
 * clip command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'clip',
  describe: 'Create a new video clip from an existing video by specifying start and end times',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
