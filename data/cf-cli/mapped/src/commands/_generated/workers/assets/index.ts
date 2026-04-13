/**
 * assets command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import uploadcreate from './upload-create.js';

const command: CommandModule = {
  command: 'assets',
  describe: 'Upload static assets that are served alongside a Worker',

  builder: (yargs) => {
    return yargs.command(uploadcreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
