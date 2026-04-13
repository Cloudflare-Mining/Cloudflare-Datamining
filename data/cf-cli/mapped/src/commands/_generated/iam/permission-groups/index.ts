/**
 * permission-groups command group
 * @generated from apis/iam/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'permission-groups',
  describe: 'View the permission groups that can be assigned to API tokens and policies',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
