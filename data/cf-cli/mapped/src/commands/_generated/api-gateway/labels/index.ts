/**
 * labels command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import managedget from './managed-get.js';
import managedresourcesoperationupdate from './managed-resources-operation-update.js';
import usercreate from './user-create.js';
import userdeleteuserlabel from './user-delete-user-label.js';
import userdeleteuserlabels from './user-delete-user-labels.js';
import useredit from './user-edit.js';
import userget from './user-get.js';
import userresourcesoperationupdate from './user-resources-operation-update.js';
import userupdate from './user-update.js';

const command: CommandModule = {
  command: 'labels',
  describe: 'Labels operations',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(managedget)
      .command(managedresourcesoperationupdate)
      .command(usercreate)
      .command(userdeleteuserlabel)
      .command(userdeleteuserlabels)
      .command(useredit)
      .command(userget)
      .command(userresourcesoperationupdate)
      .command(userupdate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
