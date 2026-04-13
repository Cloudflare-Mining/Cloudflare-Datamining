/**
 * hostnames-extra command group
 * @generated from apis/origin-tls-client-auth/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'hostnames-extra',
  describe: 'Hostnames (additional) operations',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
