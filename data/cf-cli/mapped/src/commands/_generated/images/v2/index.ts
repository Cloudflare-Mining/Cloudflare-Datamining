/**
 * v2 command group
 * @generated from apis/images/schema.ts
 */
import type { CommandModule } from 'yargs';
import directuploadscreate from './direct-uploads-create.js';
import list from './list.js';

const command: CommandModule = {
  command: 'v2',
  describe: 'V2 image listing with cursor-based pagination and authenticated direct upload URLs',

  builder: (yargs) => {
    return yargs.command(directuploadscreate).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
