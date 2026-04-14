/**
 * workflows command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import instancesbatchcreate from './instances-batch-create.js';
import instancesbatchterminate from './instances-batch-terminate.js';
import instancesbatchterminatestatus from './instances-batch-terminate-status.js';
import instancescreate from './instances-create.js';
import instanceseventcreate from './instances-event-create.js';
import instancesget from './instances-get.js';
import instanceslist from './instances-list.js';
import instancesstatusedit from './instances-status-edit.js';
import list from './list.js';
import versionsdagget from './versions-dag-get.js';
import versionsget from './versions-get.js';
import versionsgraphget from './versions-graph-get.js';
import versionslist from './versions-list.js';

const command: CommandModule = {
  command: 'workflows',
  describe: 'Durable, multi-step workflows that run on Workers with automatic retries and state persistence',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(instancesbatchcreate)
      .command(instancesbatchterminate)
      .command(instancesbatchterminatestatus)
      .command(instancescreate)
      .command(instanceseventcreate)
      .command(instancesget)
      .command(instanceslist)
      .command(instancesstatusedit)
      .command(list)
      .command(versionsdagget)
      .command(versionsget)
      .command(versionsgraphget)
      .command(versionslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
