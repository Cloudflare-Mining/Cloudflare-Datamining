/**
 * namespaces command group
 * @generated from apis/ai-search/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import instanceschatcompletions from './instances-chat-completions.js';
import instancescreate from './instances-create.js';
import instancesdelete from './instances-delete.js';
import instancesget from './instances-get.js';
import instancesitemschunkslist from './instances-items-chunks-list.js';
import instancesitemscontentget from './instances-items-content-get.js';
import instancesitemscreateorupdate from './instances-items-create-or-update.js';
import instancesitemsdelete from './instances-items-delete.js';
import instancesitemsget from './instances-items-get.js';
import instancesitemslist from './instances-items-list.js';
import instancesitemslogs from './instances-items-logs.js';
import instancesitemssync from './instances-items-sync.js';
import instancesitemsupload from './instances-items-upload.js';
import instancesjobscreate from './instances-jobs-create.js';
import instancesjobsedit from './instances-jobs-edit.js';
import instancesjobsget from './instances-jobs-get.js';
import instancesjobslist from './instances-jobs-list.js';
import instancesjobslogs from './instances-jobs-logs.js';
import instanceslist from './instances-list.js';
import instancessearch from './instances-search.js';
import instancesupdate from './instances-update.js';
import list from './list.js';
import moveinstance from './move-instance.js';
import multiinstancechatcompletions from './multi-instance-chat-completions.js';
import multiinstancesearch from './multi-instance-search.js';
import stats from './stats.js';
import update from './update.js';

const command: CommandModule = {
  command: 'namespaces',
  describe: 'Namespaces for organizing and managing AI Search instances, items, and jobs',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(instanceschatcompletions)
      .command(instancescreate)
      .command(instancesdelete)
      .command(instancesget)
      .command(instancesitemschunkslist)
      .command(instancesitemscontentget)
      .command(instancesitemscreateorupdate)
      .command(instancesitemsdelete)
      .command(instancesitemsget)
      .command(instancesitemslist)
      .command(instancesitemslogs)
      .command(instancesitemssync)
      .command(instancesitemsupload)
      .command(instancesjobscreate)
      .command(instancesjobsedit)
      .command(instancesjobsget)
      .command(instancesjobslist)
      .command(instancesjobslogs)
      .command(instanceslist)
      .command(instancessearch)
      .command(instancesupdate)
      .command(list)
      .command(moveinstance)
      .command(multiinstancechatcompletions)
      .command(multiinstancesearch)
      .command(stats)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
