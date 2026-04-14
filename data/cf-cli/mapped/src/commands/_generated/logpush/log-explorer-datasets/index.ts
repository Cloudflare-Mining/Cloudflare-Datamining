/**
 * log-explorer-datasets command group
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import accountsavailablelist from './accounts-available-list.js';
import accountscreate from './accounts-create.js';
import accountsget from './accounts-get.js';
import accountslist from './accounts-list.js';
import accountsupdate from './accounts-update.js';
import zonesavailablelist from './zones-available-list.js';
import zonescreate from './zones-create.js';
import zonesget from './zones-get.js';
import zoneslist from './zones-list.js';
import zonesupdate from './zones-update.js';

const command: CommandModule = {
  command: 'log-explorer-datasets',
  describe: 'Log Explorer datasets for account-level log analysis and querying',

  builder: (yargs) => {
    return yargs
      .command(accountsavailablelist)
      .command(accountscreate)
      .command(accountsget)
      .command(accountslist)
      .command(accountsupdate)
      .command(zonesavailablelist)
      .command(zonescreate)
      .command(zonesget)
      .command(zoneslist)
      .command(zonesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
