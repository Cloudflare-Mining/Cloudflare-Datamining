/**
 * resource-types command group
 * @generated from apis/scim/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'resource-types',
  describe: 'Resource Types operations',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
