/**
 * iam command
 * @generated from apis/iam/schema.ts
 */
import type { CommandModule } from 'yargs';
import permissiongroups from './permission-groups/index.js';
import resourcegroups from './resource-groups/index.js';
import sso from './sso/index.js';
import usergroups from './user-groups/index.js';
import usergroupsextra from './user-groups-extra/index.js';

const command: CommandModule = {
  command: 'iam',
  describe: 'Identity and access management — permission groups, resource groups, user groups, and SSO connectors',

  builder: (yargs) => {
    return yargs
      .command(permissiongroups)
      .command(resourcegroups)
      .command(sso)
      .command(usergroups)
      .command(usergroupsextra)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
