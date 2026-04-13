/**
 * sites command group
 * @generated from apis/magic-transit/schema.ts
 */
import type { CommandModule } from 'yargs';
import aclscreate from './acls-create.js';
import aclsdelete from './acls-delete.js';
import aclsedit from './acls-edit.js';
import aclsget from './acls-get.js';
import aclslist from './acls-list.js';
import aclsupdate from './acls-update.js';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import lanscreate from './lans-create.js';
import lansdelete from './lans-delete.js';
import lansedit from './lans-edit.js';
import lansget from './lans-get.js';
import lanslist from './lans-list.js';
import lansupdate from './lans-update.js';
import list from './list.js';
import update from './update.js';
import wanscreate from './wans-create.js';
import wansdelete from './wans-delete.js';
import wansedit from './wans-edit.js';
import wansget from './wans-get.js';
import wanslist from './wans-list.js';
import wansupdate from './wans-update.js';

const command: CommandModule = {
  command: 'sites',
  describe: 'Magic WAN branch sites with LAN/WAN interface configuration and connector assignments',

  builder: (yargs) => {
    return yargs
      .command(aclscreate)
      .command(aclsdelete)
      .command(aclsedit)
      .command(aclsget)
      .command(aclslist)
      .command(aclsupdate)
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(lanscreate)
      .command(lansdelete)
      .command(lansedit)
      .command(lansget)
      .command(lanslist)
      .command(lansupdate)
      .command(list)
      .command(update)
      .command(wanscreate)
      .command(wansdelete)
      .command(wansedit)
      .command(wansget)
      .command(wanslist)
      .command(wansupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
