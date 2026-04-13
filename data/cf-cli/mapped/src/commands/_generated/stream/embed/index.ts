/**
 * embed command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'embed',
  describe: 'Retrieve the HTML embed code snippet for a video',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
