/**
 * tlds command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import getradartlds from './get-radar-tlds.js';
import gettlddetails from './get-tld-details.js';

const command: CommandModule = {
  command: 'tlds',
  describe: 'Tlds operations',

  builder: (yargs) => {
    return yargs.command(getradartlds).command(gettlddetails).demandCommand(1);
  },

  handler: () => {},
};

export default command;
