/**
 * requests command group
 * @generated from apis/cloudforce-one/schema.ts
 */
import type { CommandModule } from 'yargs';
import assetscreate from './assets-create.js';
import assetsdelete from './assets-delete.js';
import assetsget from './assets-get.js';
import assetsupdate from './assets-update.js';
import constants from './constants.js';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import messagecreate from './message-create.js';
import messagedelete from './message-delete.js';
import messageget from './message-get.js';
import messageupdate from './message-update.js';
import prioritycreate from './priority-create.js';
import prioritydelete from './priority-delete.js';
import priorityget from './priority-get.js';
import priorityquota from './priority-quota.js';
import priorityupdate from './priority-update.js';
import quota from './quota.js';
import types from './types.js';
import update from './update.js';

const command: CommandModule = {
  command: 'requests',
  describe: 'Threat investigation requests — submit, track, and receive analyst findings',

  builder: (yargs) => {
    return yargs
      .command(assetscreate)
      .command(assetsdelete)
      .command(assetsget)
      .command(assetsupdate)
      .command(constants)
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(messagecreate)
      .command(messagedelete)
      .command(messageget)
      .command(messageupdate)
      .command(prioritycreate)
      .command(prioritydelete)
      .command(priorityget)
      .command(priorityquota)
      .command(priorityupdate)
      .command(quota)
      .command(types)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
