/**
 * gateway command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import apptypeslist from './app-types-list.js';
import auditsshsettingsget from './audit-ssh-settings-get.js';
import auditsshsettingsrotateseed from './audit-ssh-settings-rotate-seed.js';
import auditsshsettingsupdate from './audit-ssh-settings-update.js';
import categorieslist from './categories-list.js';
import certificatesactivate from './certificates-activate.js';
import certificatescreate from './certificates-create.js';
import certificatesdeactivate from './certificates-deactivate.js';
import certificatesdelete from './certificates-delete.js';
import certificatesget from './certificates-get.js';
import certificateslist from './certificates-list.js';
import configurationscustomcertificateget from './configurations-custom-certificate-get.js';
import configurationsedit from './configurations-edit.js';
import configurationsget from './configurations-get.js';
import configurationsupdate from './configurations-update.js';
import create from './create.js';
import list from './list.js';
import listscreate from './lists-create.js';
import listsdelete from './lists-delete.js';
import listsedit from './lists-edit.js';
import listsget from './lists-get.js';
import listsitemslist from './lists-items-list.js';
import listslist from './lists-list.js';
import listsupdate from './lists-update.js';
import locationscreate from './locations-create.js';
import locationsdelete from './locations-delete.js';
import locationsget from './locations-get.js';
import locationslist from './locations-list.js';
import locationsupdate from './locations-update.js';
import loggingget from './logging-get.js';
import loggingupdate from './logging-update.js';
import pacfilescreate from './pacfiles-create.js';
import pacfilesdelete from './pacfiles-delete.js';
import pacfilesget from './pacfiles-get.js';
import pacfileslist from './pacfiles-list.js';
import pacfilesupdate from './pacfiles-update.js';
import proxyendpointscreate from './proxy-endpoints-create.js';
import proxyendpointsdelete from './proxy-endpoints-delete.js';
import proxyendpointsedit from './proxy-endpoints-edit.js';
import proxyendpointsget from './proxy-endpoints-get.js';
import proxyendpointslist from './proxy-endpoints-list.js';
import rulescreate from './rules-create.js';
import rulesdelete from './rules-delete.js';
import rulesget from './rules-get.js';
import ruleslist from './rules-list.js';
import ruleslisttenant from './rules-list-tenant.js';
import rulesresetexpiration from './rules-reset-expiration.js';
import rulesupdate from './rules-update.js';

const command: CommandModule = {
  command: 'gateway',
  describe: 'Secure Web Gateway — DNS, HTTP, and network filtering rules, proxy settings, certificates, and logging',

  builder: (yargs) => {
    return yargs
      .command(apptypeslist)
      .command(auditsshsettingsget)
      .command(auditsshsettingsrotateseed)
      .command(auditsshsettingsupdate)
      .command(categorieslist)
      .command(certificatesactivate)
      .command(certificatescreate)
      .command(certificatesdeactivate)
      .command(certificatesdelete)
      .command(certificatesget)
      .command(certificateslist)
      .command(configurationscustomcertificateget)
      .command(configurationsedit)
      .command(configurationsget)
      .command(configurationsupdate)
      .command(create)
      .command(list)
      .command(listscreate)
      .command(listsdelete)
      .command(listsedit)
      .command(listsget)
      .command(listsitemslist)
      .command(listslist)
      .command(listsupdate)
      .command(locationscreate)
      .command(locationsdelete)
      .command(locationsget)
      .command(locationslist)
      .command(locationsupdate)
      .command(loggingget)
      .command(loggingupdate)
      .command(pacfilescreate)
      .command(pacfilesdelete)
      .command(pacfilesget)
      .command(pacfileslist)
      .command(pacfilesupdate)
      .command(proxyendpointscreate)
      .command(proxyendpointsdelete)
      .command(proxyendpointsedit)
      .command(proxyendpointsget)
      .command(proxyendpointslist)
      .command(rulescreate)
      .command(rulesdelete)
      .command(rulesget)
      .command(ruleslist)
      .command(ruleslisttenant)
      .command(rulesresetexpiration)
      .command(rulesupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
