/**
 * previews command group
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'previews',
  describe: 'Preview the result of a health check monitor configuration before applying it',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
