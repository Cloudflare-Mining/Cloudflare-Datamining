/**
 * direct-upload command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'direct-upload',
  describe: 'Generate a tokenized URL that lets end-users upload video directly to Stream',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
