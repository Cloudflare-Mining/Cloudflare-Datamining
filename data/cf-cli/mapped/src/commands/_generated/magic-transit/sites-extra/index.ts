/**
 * sites-extra command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import appconfigscreate from './app-configs-create.js';
import appconfigsdelete from './app-configs-delete.js';
import appconfigsedit from './app-configs-edit.js';
import appconfigslist from './app-configs-list.js';
import appconfigsupdate from './app-configs-update.js';
import netflowconfigcreate from './netflow-config-create.js';
import netflowconfigdelete from './netflow-config-delete.js';
import netflowconfigedit from './netflow-config-edit.js';
import netflowconfigget from './netflow-config-get.js';
import netflowconfigupdate from './netflow-config-update.js';

const command: CommandModule = {
  command: 'sites-extra',
  describe: 'Sites (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(appconfigscreate)
      .command(appconfigsdelete)
      .command(appconfigsedit)
      .command(appconfigslist)
      .command(appconfigsupdate)
      .command(netflowconfigcreate)
      .command(netflowconfigdelete)
      .command(netflowconfigedit)
      .command(netflowconfigget)
      .command(netflowconfigupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
