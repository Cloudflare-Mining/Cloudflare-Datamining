/**
 * apps command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import cacreate from './ca-create.js';
import cadelete from './ca-delete.js';
import caget from './ca-get.js';
import calist from './ca-list.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import policiescreate from './policies-create.js';
import policiesdelete from './policies-delete.js';
import policiesget from './policies-get.js';
import policieslist from './policies-list.js';
import policiesmakereusableupdate from './policies-make-reusable-update.js';
import policiesupdate from './policies-update.js';
import reviewstatuslist from './review-status-list.js';
import reviewstatusupdate from './review-status-update.js';
import revoketokenscreate from './revoke-tokens-create.js';
import settingsedit from './settings-edit.js';
import settingsupdate from './settings-update.js';
import update from './update.js';
import userpolicychecksget from './user-policy-checks-get.js';

const command: CommandModule = {
  command: 'apps',
  describe: 'Apps operations',

  builder: (yargs) => {
    return yargs
      .command(cacreate)
      .command(cadelete)
      .command(caget)
      .command(calist)
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(policiescreate)
      .command(policiesdelete)
      .command(policiesget)
      .command(policieslist)
      .command(policiesmakereusableupdate)
      .command(policiesupdate)
      .command(reviewstatuslist)
      .command(reviewstatusupdate)
      .command(revoketokenscreate)
      .command(settingsedit)
      .command(settingsupdate)
      .command(update)
      .command(userpolicychecksget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
