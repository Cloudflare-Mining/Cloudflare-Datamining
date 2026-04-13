/**
 * projects command group
 * @generated from apis/pages/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import deploymentscreate from './deployments-create.js';
import deploymentsdelete from './deployments-delete.js';
import deploymentsget from './deployments-get.js';
import deploymentshistorylogsget from './deployments-history-logs-get.js';
import deploymentslist from './deployments-list.js';
import deploymentsretry from './deployments-retry.js';
import deploymentsrollback from './deployments-rollback.js';
import domainscreate from './domains-create.js';
import domainsdelete from './domains-delete.js';
import domainsedit from './domains-edit.js';
import domainsget from './domains-get.js';
import domainslist from './domains-list.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import purgebuildcache from './purge-build-cache.js';

const command: CommandModule = {
  command: 'projects',
  describe: 'Pages projects, deployments, build logs, and custom domain bindings',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(deploymentscreate)
      .command(deploymentsdelete)
      .command(deploymentsget)
      .command(deploymentshistorylogsget)
      .command(deploymentslist)
      .command(deploymentsretry)
      .command(deploymentsrollback)
      .command(domainscreate)
      .command(domainsdelete)
      .command(domainsedit)
      .command(domainsget)
      .command(domainslist)
      .command(edit)
      .command(get)
      .command(list)
      .command(purgebuildcache)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
