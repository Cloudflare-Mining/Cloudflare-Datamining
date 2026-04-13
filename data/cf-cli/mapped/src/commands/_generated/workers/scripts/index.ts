/**
 * scripts command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import assetsuploadcreate from './assets-upload-create.js';
import contentget from './content-get.js';
import contentupdate from './content-update.js';
import delete_ from './delete.js';
import deploymentscreate from './deployments-create.js';
import deploymentsdelete from './deployments-delete.js';
import deploymentsget from './deployments-get.js';
import deploymentslist from './deployments-list.js';
import get from './get.js';
import list from './list.js';
import schedulesget from './schedules-get.js';
import schedulesupdate from './schedules-update.js';
import scriptandversionsettingsedit from './script-and-version-settings-edit.js';
import scriptandversionsettingsget from './script-and-version-settings-get.js';
import search from './search.js';
import secretsdelete from './secrets-delete.js';
import secretsget from './secrets-get.js';
import secretslist from './secrets-list.js';
import secretsupdate from './secrets-update.js';
import settingsedit from './settings-edit.js';
import settingsget from './settings-get.js';
import subdomaincreate from './subdomain-create.js';
import subdomaindelete from './subdomain-delete.js';
import subdomainget from './subdomain-get.js';
import tailcreate from './tail-create.js';
import taildelete from './tail-delete.js';
import update from './update.js';
import versionscreate from './versions-create.js';
import versionsget from './versions-get.js';
import versionslist from './versions-list.js';

const command: CommandModule = {
  command: 'scripts',
  describe:
    'Upload, download, and configure Worker scripts including bindings, secrets, cron triggers, and deployments',

  builder: (yargs) => {
    return yargs
      .command(assetsuploadcreate)
      .command(contentget)
      .command(contentupdate)
      .command(delete_)
      .command(deploymentscreate)
      .command(deploymentsdelete)
      .command(deploymentsget)
      .command(deploymentslist)
      .command(get)
      .command(list)
      .command(schedulesget)
      .command(schedulesupdate)
      .command(scriptandversionsettingsedit)
      .command(scriptandversionsettingsget)
      .command(search)
      .command(secretsdelete)
      .command(secretsget)
      .command(secretslist)
      .command(secretsupdate)
      .command(settingsedit)
      .command(settingsget)
      .command(subdomaincreate)
      .command(subdomaindelete)
      .command(subdomainget)
      .command(tailcreate)
      .command(taildelete)
      .command(update)
      .command(versionscreate)
      .command(versionsget)
      .command(versionslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
