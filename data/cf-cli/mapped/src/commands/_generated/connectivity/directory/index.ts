/**
 * directory command group
 * @generated from apis/connectivity/schema.ts
 */
import type { CommandModule } from 'yargs';
import servicescreate from './services-create.js';
import servicesdelete from './services-delete.js';
import servicesget from './services-get.js';
import serviceslist from './services-list.js';
import servicesupdate from './services-update.js';

const command: CommandModule = {
  command: 'directory',
  describe: 'Connectivity service entries that define available network endpoints and their properties',

  builder: (yargs) => {
    return yargs
      .command(servicescreate)
      .command(servicesdelete)
      .command(servicesget)
      .command(serviceslist)
      .command(servicesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
