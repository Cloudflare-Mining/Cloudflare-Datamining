/**
 * repos command group
 * @generated from apis/builds/schema.ts
 */
import type { CommandModule } from 'yargs';
import configautofillget from './config-autofill-get.js';
import connectionsdelete from './connections-delete.js';
import connectionsupdate from './connections-update.js';

const command: CommandModule = {
  command: 'repos',
  describe: 'Repos operations',

  builder: (yargs) => {
    return yargs.command(configautofillget).command(connectionsdelete).command(connectionsupdate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
